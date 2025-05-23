<?php
/**
 * Template part for displaying property content
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('property-card'); ?>>
    <?php if (has_post_thumbnail()) : ?>
        <div class="property-thumbnail">
            <?php the_post_thumbnail('property-thumbnail'); ?>
            <?php if (get_post_meta(get_the_ID(), '_property_price', true)) : ?>
                <div class="property-price">
                    <?php echo esc_html(luxeestate_format_price(get_post_meta(get_the_ID(), '_property_price', true))); ?>
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>

    <div class="property-details">
        <header class="property-header">
            <?php the_title('<h2 class="property-title"><a href="' . esc_url(get_permalink()) . '">', '</a></h2>'); ?>
            
            <?php if (get_post_meta(get_the_ID(), '_property_address', true)) : ?>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <?php echo esc_html(get_post_meta(get_the_ID(), '_property_address', true)); ?>
                </div>
            <?php endif; ?>
        </header>

        <div class="property-features">
            <?php if (get_post_meta(get_the_ID(), '_property_bedrooms', true)) : ?>
                <div class="feature">
                    <i class="fas fa-bed"></i>
                    <span><?php echo esc_html(get_post_meta(get_the_ID(), '_property_bedrooms', true)); ?> <?php _e('Beds', 'luxeestate'); ?></span>
                </div>
            <?php endif; ?>

            <?php if (get_post_meta(get_the_ID(), '_property_bathrooms', true)) : ?>
                <div class="feature">
                    <i class="fas fa-bath"></i>
                    <span><?php echo esc_html(get_post_meta(get_the_ID(), '_property_bathrooms', true)); ?> <?php _e('Baths', 'luxeestate'); ?></span>
                </div>
            <?php endif; ?>

            <?php if (get_post_meta(get_the_ID(), '_property_area', true)) : ?>
                <div class="feature">
                    <i class="fas fa-ruler-combined"></i>
                    <span><?php echo esc_html(get_post_meta(get_the_ID(), '_property_area', true)); ?> <?php _e('sq ft', 'luxeestate'); ?></span>
                </div>
            <?php endif; ?>
        </div>

        <div class="property-excerpt">
            <?php the_excerpt(); ?>
        </div>

        <footer class="property-footer">
            <a href="<?php the_permalink(); ?>" class="btn btn-primary"><?php _e('View Details', 'luxeestate'); ?></a>
        </footer>
    </div>
</article>