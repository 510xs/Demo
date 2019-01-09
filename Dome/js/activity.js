$(function(){
	//图片连接路径
	var url = "http://localhost:8080/Itsoure/";
	$(".act_new").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebActivityAction",
			async:true,
			error:function(data){
				alert("mmp");
			},
			success:function(data){
				//将获取的数据转换为数组
				var act = eval(data);

                var activity = $("<img class='activity' src='"+url+act[1].activityImg+"'/>");
                activity.appendTo(".act_new");
                $(".act_new_content").append("<div class='act_new_content_title'>"+act[1].activityDuce1+"</div>");
                $(".act_new_content").append("<div class='act_new_content_txt'>"+act[1].activityDuce2+"</div>");
                $(".act_new_content").append("<div class='act_new_more'>了解更多</div>");
                //特价活动
                $(".spc_box_top").append("<img class='activity' src='"+url+act[0].activityImg+"'/>");
                $(".spc_box_bottom").append("<img class='activity' src='"+url+act[0].activityImg+"'/>");
                $(".spc_box_right").append("<img class='activity' src='"+url+act[0].activityImg+"'/>");
			}
		});
	})
	//特价促销
	$(".sale_content").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebComdityAction",
			async:true,
			error:function(data){
			},
			success:function(data){
//				alert("连接成功");
                //将数据转换成数组
                var comdity = eval(data);
                for(var i=0;i<=comdity.length;i++){
                	if(i>4 && i<10){
//              		alert("ok");
                        $(".sale_content").append("<div class='sale_shop'>"+"<img src='"+url+comdity[i].commodityImages+"' />"+
                         "<div class='sale_shopName'>"+comdity[i].commodityName+"</div>"+
                         "<div class='sale_shopEdit'>"+comdity[i].intduction2+"</div>"+
                         "<div class='sale_shopPrice'>"+
                            "<div class='sale_shopAs'>￥1000<div>"+"<div class='sale_shopUs'>￥"+comdity[i].commodityPrice+"</div>"    
                         +"</div>"+
                         "<div class='sale_pay_box'>"+"<div class='sale_pay' id='"+comdity[i].commodityID+"'>购买</div>"+"</div>"
                        +"</div>");
                	}
                }
                $(".sale_pay").click(function(){
//              	alert("ok");
                    var buy_val = $(this).attr('id');
                    if(buy_val != null){
                    	window.location.href="detail.html?buy_val="+buy_val;
                    }else{
                    	alert("网页错误");
                    }
                });
			}
		});
	});
});