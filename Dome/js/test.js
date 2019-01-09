$(function(){
	
	setInterval(move,2000);
	
    function move(){
    	$(".len").animate({
    		"left":"-180px"
    	},500);
    }
	
	
	
	
	
	
//	$.ajax({
//		type:"post",
//		url:"http://192.168.123.215:8080/Itsoure/WebComdityAction",
//		async:true,
//		error:function(data){
//			alert("链接失败");
//		},
//		success:function(data){
////			console.log(data);
//var com_ = "http://192.168.123.215:8080/Itsoure/";
//          //获取data的长度
//          var list = eval(data);
//          //打印list的其中一个数据
//          console.log(list[1].commodityImages);
//          var imghd = $("<img src='"+com_+list[1].commodityImages+"' />");
//          var li = $("<div>"+list[0].commodityID+"</div>");
//              imghd.addClass("img_all");
//              imghd.appendTo($(".len"));
//              li.appendTo(".len");
//          
////			jQuery.each(data,function(i,item){
//////          console.log(len);
//////				$(".os").append('<tr>'+
//////				'<td>'+item.commodityID+'</td>'+'<td>'+item.commodityName+'</td>'+'<td>'+item.commodityPrice+'</td>'+'<td>'+'<img src="'+com_+item.commodityImages+'" />'+'</td>'+'<td>'+item.number+'</td>'+'<td>'+item.commodityTime+'</td>');
//////				$(".os").append('<div class="img_all">'+'<img src="'+com_+item.commodityImages+'" />'+'</div>');
////              
////			    
////			});
//		}
//	});
});
