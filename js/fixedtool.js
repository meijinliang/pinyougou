$(function(){
	//1.显示隐藏电梯导航
	var toolTop = $('.recom').offset().top;
	var flag = true;
	function toggleTool(){
		if ($(document).scrollTop() >= toolTop) {
			$('.fixedtool').fadeIn();
		} else{
			$('.fixedtool').fadeOut();
		}
	}
	toggleTool()
	$(window).scroll(function(){
		toggleTool();
		 if (flag) {
		 	$('.floor').children().each(function(i,ele){
		 				 if ($(document).scrollTop() >= $(ele).offset().top) {
		 				 	$('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
		 				 }
		 	})
		 }
	})
	//2.点击电梯导航页面可以滚动到相应内容区域
	$('.fixedtool').on('click','li',function(){
		flag = false;
		//当我们每次点击小li就要计算出页面要去往的位置
		var current = $('.floor').children().eq($(this).index()).offset().top
		$('html,body').stop().animate({
			scrollTop : current
		},function(){
			flag = true;
		})
		$(this).addClass('current').siblings().removeClass()
	})
})