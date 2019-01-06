define(['jquery'],function($){
	$.ajax("/html/header.html")
		.done(function(data){//header里的各种事件
			console.log(data)
			$('.footer').html(data)

		})

	$('.header').load("/html/header.html")
})