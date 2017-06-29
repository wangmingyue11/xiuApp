$.ajax({
	type:"POST",
	url:"http://datainfo.duapp.com/shopdata/getclass.php",
	dataType:"json",
	success:function(data){
		for(var i=0;i<data.length;i++){
			$li = $("<li></li>");
			$li.html("<a href='detail.html' class='sign' classID='"+data[i].classID+"'>"+data[i].className+"<img src='img/list/jiantou-right.jpg'/></a>");
			$(".container li a").on("click",function(){
				window.location.href="pagecode.html?classID="+$(this).attr("classID");
				console.log(21);
			});
			console.log($(this).attr("classID"));
//			console.log($li);
			$(".container").append($li);
		}
	}
});

