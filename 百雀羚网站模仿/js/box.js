$(function(){
	var show_childBrand=(".child-brd");
	var childBrand=$("#child-brand");
	var show_search=$(".search");
	var search=$("#search");
	$(show_childBrand).mouseenter(function(){
		childBrand.slideDown(500);
	});
	$(childBrand).mouseleave(function(){
		childBrand.slideUp(500);
	});
	$(show_search).mouseenter(function(){
		search.slideDown(500);
	});
	$(search).mouseleave(function(){
		search.slideUp(500);
	});
});