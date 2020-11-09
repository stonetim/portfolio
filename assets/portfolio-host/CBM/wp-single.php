<?php

// =============================================================================
// VIEWS/ETHOS/WP-SINGLE.PHP
// -----------------------------------------------------------------------------
// Single post output for Ethos.
// =============================================================================

$fullwidth = get_post_meta( get_the_ID(), '_x_post_layout', true );

get_header();

?>

<div class="product-holder">
    <div class="offset cf">
        <div class="<?php x_main_content_class(); ?>" role="main">
<?php
    $post = get_post($_POST['id']);
?>
        </div>
        <div id="single-post post-<?php the_ID(); ?>">
            <?php while (have_posts()) : the_post(); ?>
                <div class="post-content">
                    <a target="_blank" href="<?php the_field('company_site');?>"><div class="feat-img"><?php the_post_thumbnail( 'medium' );?></div></a>
                    <br />
                    <div class="post-copy"><?php the_content();?></div>
                </div>
                <div class="post-sidebar">
                    <div class="post-side-title"><?php the_title();?></div>
                        <?php if( get_field('company_site') ): ?>
                            <h3 class="post-side-sub">Company Site</h3>
                                <p class="post-resources">
                                    <a target="_blank" href="<?php the_field('company_site'); ?>"><?php the_title();?></a>
                                </p>
                        <?php endif; ?>
                        <?php if( get_field('pdfs') and ('links') or ('links') ): ?>
	                       <h3 class="post-side-sub">Product Information</h3>
                                <p class="post-resources">
                                    <?php the_field('pdfs'); ?><br />
                                    <?php the_field('links'); ?>
                                </p>
                        <?php endif; ?>
                        <!--<?php if( get_field('links') ): ?>
	                       <h3 class="post-side-sub">Resources</h3>
                                <p class="post-resources">
                                    <?php the_field('links'); ?>
                                </p>
                        <?php endif; ?>-->
                        <?php if( get_field('videos') ): ?>
	                       <h3 class="post-side-sub">Videos</h3>
                                <p class="post-resources">
                                    <?php the_field('videos'); ?>
                                </p>
                        <?php endif; ?>
                        <?php if( get_field('apps') ): ?>
	                       <h3 class="post-side-sub">Apps</h3>
                                <p class="post-resources">
                                    <?php the_field('apps'); ?>
                                </p>
                        <?php endif; ?>
                        <div class="quote-link">
                            <a href="/quote" class="load-btn">Contact Inside Sales</a>
                        </div>
                </div>
            <?php endwhile;?>
        </div>
    </div>
</div>
<?php get_footer(); ?>
