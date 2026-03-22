<?php /* Template Name: Layout - Products */ ?>
<?php

// =============================================================================
// VIEWS/ETHOS/TEMPLATE-LAYOUT-PRODUCTS.PHP
// -----------------------------------------------------------------------------
// Fullwidth page output for Ethos. Custom template made for CBM site build.
// Designed to call products posts and display in a grid.
// =============================================================================

get_header();

?>

  <div class="x-container max width main">
    <div class="offset cf">
      <div class="<?php x_main_content_class(); ?>" role="main">

        <?php while ( have_posts() ) : the_post(); ?>
          <?php x_get_view( 'ethos', 'content', 'page' ); ?>
          <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <a class="post-link" rel="<?php the_ID(); ?>" href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                </a>
            <?php endwhile; endif; ?>
            <div id="<?php $category = get_the_category(); echo $category[0]->comms_products; ?>">
                <?php the_post_thumbnail(); ?>
                <span class="title"><?php the_title(); ?></span>
                <span class="excerpt"><?php the_excerpt(); ?></span>
            </div>
        <?php endwhile; ?>

      </div>
    </div>
  </div>

<?php get_footer(); ?>
