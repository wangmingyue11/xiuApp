//解析传进来的url的参数
GetQueryString = function (name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
};
$.ajax({
	type:"POST",
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:"jsonp",
	data:{classID:GetQueryString("classID")},
	success:function(data){
		for(var i=0;i<data.length;i++){
			$ul=$("<ul></ul>");
			$ul.html('<li goodsID="'+data[i].goodsID+'"><img src="'+data[i].goodsListImg+'"><p>'+data[i].goodsName+'</p><p>'+data[i].price+'</p></li>');
			$(".content").append($ul);
		}
	}
});

