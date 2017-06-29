/**
 * Created by lanou3g on 17/6/10.
 */
//解析传过来的参数
GetQueryString=function (name) {
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]);return null;
};

$.ajax({
    type:"POST",
    url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    data:{goodsID:GetQueryString("goodsID")},
    dataType:"jsonp",
    success:function (data) {
        for(var i = 0;i<data.length;i++){
            $num = data[i].discount == 0 ? data[i].price : parseInt(data[i].price / (data[i].discount / 10));
            $div = $("<div></div>");
            $div.html('<div class="de_container" goodID='+data[i].goodsID+'><img src="'+data[i].goodsListImg+'"><div class="de_info"><p>'+data[i].goodsName+'</p><div><span>'+data[i].price+'</span><span>'+$num+'</span></div><p>尺寸：160</p><p>数量：'+data[i].number+'</p></div></div>');
            $(".header").after($div);
        }
    }
})