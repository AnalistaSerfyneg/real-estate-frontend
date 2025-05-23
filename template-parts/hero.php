<?php
/**
 * Template part for displaying the hero section
 */
?>

<section class="hero-section" style="background-image: url('<?php echo esc_url(get_theme_mod('hero_background', get_template_directory_uri() . '/assets/images/hero-bg.jpg')); ?>');">
    <div class="container">
        <div class="hero-content">
            <h1><?php echo esc_html(get_theme_mod('hero_title', __('Find Your Dream Property', 'luxeestate'))); ?></h1>
            <p><?php echo esc_html(get_theme_mod('hero_subtitle', __('Discover luxury properties in prime locations', 'luxeestate'))); ?></p>
            
            <div class="property-search-form">
                <form action="<?php echo esc_url(home_url('/')); ?>" method="get" class="search-form">
                    <div class="search-fields">
                        <div class="form-group">
                            <input type="text" name="location" placeholder="<?php esc_attr_e('Location', 'luxeestate'); ?>" class="form-control">
                        </div>
                        
                        <div class="form-group">
                            <select name="property_type" class="form-control">
                                <option value=""><?php _e('Property Type', 'luxeestate'); ?></option>
                                <?php
                                $property_types = get_terms(array(
                                    'taxonomy' => 'property_type',
                                    'hide_empty' => false,
                                ));
                                
                                foreach ($property_types as $type) :
                                    echo '<option value="' . esc_attr($type->slug) . '">' . esc_html($type->name) . '</option>';
                                endforeach;
                                ?>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <select name="price_range" class="form-control">
                                <option value=""><?php _e('Price Range', 'luxeestate'); ?></option>
                                <option value="0-500000"><?php _e('Under $500,000', 'luxeestate'); ?></option>
                                <option value="500000-1000000"><?php _e('$500,000 - $1,000,000', 'luxeestate'); ?></option>
                                <option value="1000000-2000000"><?php _e('$1,000,000 - $2,000,000', 'luxeestate'); ?></option>
                                <option value="2000000+"><?php _e('$2,000,000+', 'luxeestate'); ?></option>
                            </select>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">
                            <?php _e('Search Properties', 'luxeestate'); ?>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>