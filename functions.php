<?php
if (!defined('ABSPATH')) exit;

// Theme Setup
function luxeestate_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'luxeestate'),
        'footer' => __('Footer Menu', 'luxeestate'),
    ));
    
    // Custom Image Sizes
    add_image_size('property-thumbnail', 800, 600, true);
}
add_action('after_setup_theme', 'luxeestate_setup');

// Enqueue Scripts and Styles
function luxeestate_scripts() {
    // Styles
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
    wp_enqueue_style('luxeestate-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Scripts
    wp_enqueue_script('luxeestate-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
    wp_enqueue_script('luxeestate-scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0', true);
    
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'luxeestate_scripts');

// Custom Post Types
function luxeestate_register_post_types() {
    // Properties
    register_post_type('property', array(
        'labels' => array(
            'name' => __('Properties', 'luxeestate'),
            'singular_name' => __('Property', 'luxeestate'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-building',
        'rewrite' => array('slug' => 'properties'),
    ));
    
  
add_action('init', 'luxeestate_register_post_types');

// Custom Taxonomies
function luxeestate_register_taxonomies() {
    // Property Type
    register_taxonomy('property_type', 'property', array(
        'labels' => array(
            'name' => __('Property Types', 'luxeestate'),
            'singular_name' => __('Property Type', 'luxeestate'),
        ),
        'hierarchical' => true,
        'rewrite' => array('slug' => 'property-type'),
    ));
    
    // Property Features
    register_taxonomy('property_feature', 'property', array(
        'labels' => array(
            'name' => __('Features', 'luxeestate'),
            'singular_name' => __('Feature', 'luxeestate'),
        ),
        'hierarchical' => false,
        'rewrite' => array('slug' => 'feature'),
    ));
    
    // Property Location
    register_taxonomy('property_location', 'property', array(
        'labels' => array(
            'name' => __('Locations', 'luxeestate'),
            'singular_name' => __('Location', 'luxeestate'),
        ),
        'hierarchical' => true,
        'rewrite' => array('slug' => 'location'),
    ));
}
add_action('init', 'luxeestate_register_taxonomies');

// Custom Meta Boxes
function luxeestate_add_meta_boxes() {
    // Property Details
    add_meta_box(
        'property_details',
        __('Property Details', 'luxeestate'),
        'luxeestate_property_details_callback',
        'property',
        'normal',
        'high'
    );
    
    // Agent Details
    add_meta_box(
        'agent_details',
        __('Agent Details', 'luxeestate'),
        'luxeestate_agent_details_callback',
        'agent',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'luxeestate_add_meta_boxes');

// Property Details Callback
function luxeestate_property_details_callback($post) {
    wp_nonce_field('luxeestate_property_details', 'property_details_nonce');
    
    $price = get_post_meta($post->ID, '_property_price', true);
    $bedrooms = get_post_meta($post->ID, '_property_bedrooms', true);
    $bathrooms = get_post_meta($post->ID, '_property_bathrooms', true);
    $area = get_post_meta($post->ID, '_property_area', true);
    $address = get_post_meta($post->ID, '_property_address', true);
    
    ?>
    <div class="property-meta-fields">
        <p>
            <label for="property_price"><?php _e('Price', 'luxeestate'); ?></label>
            <input type="number" id="property_price" name="property_price" value="<?php echo esc_attr($price); ?>">
        </p>
        <p>
            <label for="property_bedrooms"><?php _e('Bedrooms', 'luxeestate'); ?></label>
            <input type="number" id="property_bedrooms" name="property_bedrooms" value="<?php echo esc_attr($bedrooms); ?>">
        </p>
        <p>
            <label for="property_bathrooms"><?php _e('Bathrooms', 'luxeestate'); ?></label>
            <input type="number" id="property_bathrooms" name="property_bathrooms" value="<?php echo esc_attr($bathrooms); ?>">
        </p>
        <p>
            <label for="property_area"><?php _e('Area (sq ft)', 'luxeestate'); ?></label>
            <input type="number" id="property_area" name="property_area" value="<?php echo esc_attr($area); ?>">
        </p>
        <p>
            <label for="property_address"><?php _e('Address', 'luxeestate'); ?></label>
            <input type="text" id="property_address" name="property_address" value="<?php echo esc_attr($address); ?>" class="widefat">
        </p>
    </div>
    <?php
}

// Save Property Details
function luxeestate_save_property_details($post_id) {
    if (!isset($_POST['property_details_nonce']) || !wp_verify_nonce($_POST['property_details_nonce'], 'luxeestate_property_details')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    $fields = array(
        'property_price',
        'property_bedrooms',
        'property_bathrooms',
        'property_area',
        'property_address'
    );
    
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post_property', 'luxeestate_save_property_details');

// Widget Areas
function luxeestate_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'luxeestate'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in your sidebar.', 'luxeestate'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer 1', 'luxeestate'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in footer column 1.', 'luxeestate'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer 2', 'luxeestate'),
        'id' => 'footer-2',
        'description' => __('Add widgets here to appear in footer column 2.', 'luxeestate'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer 3', 'luxeestate'),
        'id' => 'footer-3',
        'description' => __('Add widgets here to appear in footer column 3.', 'luxeestate'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'luxeestate_widgets_init');