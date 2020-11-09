<?php /* Template Name: Layout - Products */ ?>
<?php

// =============================================================================
// /TEMPLATE-LAYOUT-PRODUCTS.PHP
// -----------------------------------------------------------------------------
// Fullwidth page output for Ethos. Custom template made for CBM site build.
// Designed to call products posts and display in a grid.
// =============================================================================

get_header();

?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"></script>
<script>
  var vm;

  function load_more() {
	  vm.addMore();
  }


  var ViewModel = function() {
	var self = this;

    this.data = [];
	this.tmpCounter = 0;
<?php
  $catquery = new WP_Query( array('category' => 'products', 'posts_per_page' => -1, 'orderby' => 'title', 'order' => 'asc') );

  while($catquery->have_posts()) {
	$catquery->the_post();
?>

	    this.tmp = {
		  index: this.tmpCounter++,
		  link: '<? echo get_permalink(); ?>',
		  thumbnail: '<? echo get_the_post_thumbnail(); ?>',
		  title: '<? echo get_the_title(); ?>',
		  content: '<? echo addslashes(str_replace(array("\n","\r"), "", get_the_content())); ?>'
		}
		this.data.push(this.tmp);

<?php
  }
?>

	  this.max = this.data.length;
	  this.counter = 0;

      this.records = ko.observableArray();

      this.addMore = function() {
		for (var j =0; j < 2; j++) {
		  var row = ko.observableArray();
		  for (var i = 0; i < 4; i++) {
		    if (self.counter < self.max) row.push(self.data[self.counter++]);
	  	  }
		  self.records.push(row);
        }
	  }
	  var lastPanel = -1;

	  this.openPanel = function(i) {
		  if (lastPanel == i) return;
		  var last = "#panel_" + lastPanel;

		  if (lastPanel >= 0) $(last).hide();
		  lastPanel = i;
		  var current = "#panel_" + i;

		  $(current).show();
		  console.log("last panel = " + last);
		  console.log("open panel = " + current);
	  }

  };




</script>

<div class="x-main full" role="main">
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="entry-content">

      <?php while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
        <?php x_link_pages(); ?>
      <?php endwhile; ?>

    </div>
  </article>
</div>
<div id="grid_content">
  <!-- ko foreach: records  -->
    <div class="x-tabs-list">
      <ul role="tablist">
        <!-- ko foreach: $data  -->
        <li role="presentation">
          <button data-bind="click: function() { vm.openPanel($parentContext.$index()*4 + $index()) }" role="tab">
            <span>
	          <a class="product-link"><img class="product-img" src="/wp-content/uploads/2018/09/300x400.png">
                <p class="product-title" data-bind="html: title"></p>
              </a>
            </span>
          </button>
        </li>
		<!-- /ko -->
      </ul>

    </div>

    <div class="x-tabs-panels">

      <!-- ko foreach: $data  -->
      <div role="tabpanel" style="display: none;" data-bind="attr: { id: 'panel_' + ($parentContext.$index()*4 + $index()) }">
        <div>
          <div class="product-detail">
            <div class="img-contain">
              <img src="/wp-content/uploads/2018/09/300x400.png" class="product-img">
            </div>
            <div class="detail-contain">
              <h1 class="product-title-large" data-bind="html: title"></h1>
              <h2 class="product-subtitle" data-bind="text: 'By manufacturer'"></h2>
              <div class="product-content-area">
                <p class="text-soft" data-bind="html: content"></p>
              </div>
              <a href="/contact" class="purchase-btn">Contact to Purchase</a>
            </div>
          </div>
        </div>
      </div>
	  <!-- /ko -->

    </div>

  <!-- /ko -->
</div>

<div><button class="load-btn" onclick="load_more()">Load More</button></div>


<script>
   $(document).ready(function(){
        $.ajaxSetup({cache:false});
        $(".post-link").click(function(){
            var post_link = $(this).attr("href");
            $("#single-post-container").html("content loading");
            $("#single-post-container").load(post_link);
        return false;
        });
        vm = new ViewModel();
        ko.applyBindings(vm);
        load_more();

    });
</script>
<?php get_footer(); ?>
