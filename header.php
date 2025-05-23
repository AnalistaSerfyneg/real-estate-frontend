<?php
/**
 * The header for our theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) :
                        the_custom_logo();
                    else :
                    ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                    <?php endif; ?>
                </div>

                <nav id="site-navigation" class="main-navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id' => 'primary-menu',
                        'container' => false,
                    ));
                    ?>
                    <div class="nav-buttons">
                        <a href="<?php echo esc_url(home_url('/submit-property')); ?>" class="btn btn-primary">
                            <?php _e('Submit Property', 'luxeestate'); ?>
                        </a>
                    </div>
                </nav>

                <button class="mobile-menu-toggle">
                    <span class="screen-reader-text"><?php _e('Menu', 'luxeestate'); ?></span>
                    <span class="menu-icon"></span>
                </button>
            </div>
        </div>
    </header>

    <div id="content" class="site-content"><?php
    if (is_front_page()) :
        get_template_part('template-parts/hero');
    endif;
    ?>