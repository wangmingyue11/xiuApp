var mySwiper = new Swiper('.swiper-container', {
	autoplay: 1000, //可选选项，自动滑动
	pagination: '.swiper-pagination',
	paginationType: 'fraction',
})
$.ajax({
	type: "POST",
	url: " http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType: "jsonp",
	success: function(data) {
		for (var i = 0; i < data.length; i++) {
			$li = $("<li></li>");

			//console.log($ul);
			//$ul.className(".context");
			$img = data[i].goodsListImg;
			//console.log($img);
			$num = data[i].discount == 0 ? data[i].price : parseInt(data[i].price / (data[i].discount / 10));
			console.log(data[i].discount);
			$li.html("<img src=" + $img + "><div class='right'><a href='#'>" + data[i].goodsName + "</a><div class='price'><div><p>" + data[i].price + "</p><span>" + $num + "</span></div><div><p>" + data[i].discount + "折</p><a href='#'><img src=" + 'img/index/bg_car.png' + " ></a></div></div></div>");
//			$ul.attr("class", "context");
			$(".context").append($li);
		}
	}
});

