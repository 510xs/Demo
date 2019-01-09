$(function(){
	//图片路径
	var url = "http://localhost:8080/Itsoure/";
	$(".newPro_box .newPro_innContent").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebComdityAction",
			async:true,
			error:function(data){
				alert("连接错误");
			},
			success:function(data){
//				alert("连接成功");
                //将数据转换为数组
                var comdity = eval(data);
                //左侧图片
                $(".newPro_box_left").append("<img src='"+url+comdity[0].commodityImages+"' />");
                //右侧图片
                for(var i=0;i<=comdity.length-1;i++){
                	if(i>4 && i<=7){
                		$(".newPro_show_list1").append("<div class='sale_shop'>"+"<img src='"+url+comdity[i].commodityImages+"' />"+
                         "<div class='sale_shopName'>"+comdity[i].commodityName+"</div>"+
                         "<div class='sale_shopEdit'>"+comdity[i].intduction2+"</div>"+
                         "<div class='sale_shopPrice'>"+
                            "<div class='sale_shopAs'>￥1000<div>"+"<div class='sale_shopUs'>￥"+comdity[i].commodityPrice+"</div>"    
                         +"</div>"+
                         "<div class='sale_pay_box'>"+"<div class='sale_pay' id='"+comdity[i].commodityID+"'>购买</div>"+"</div>"
                        +"</div>");
                	} else if(i>7 && i<=10){
                		$(".newPro_show_list2").append("<div class='sale_shop'>"+"<img src='"+url+comdity[i].commodityImages+"' />"+
                         "<div class='sale_shopName'>"+comdity[i].commodityName+"</div>"+
                         "<div class='sale_shopEdit'>"+comdity[i].intduction2+"</div>"+
                         "<div class='sale_shopPrice'>"+
                            "<div class='sale_shopAs'>￥1000<div>"+"<div class='sale_shopUs'>￥"+comdity[i].commodityPrice+"</div>"    
                         +"</div>"+
                         "<div class='sale_pay_box'>"+"<div class='sale_pay' id='"+comdity[i].commodityID+"'>购买</div>"+"</div>"
                        +"</div>");
                	} else if(i>10 && i<=13){
                		$(".newPro_show_list3").append("<div class='sale_shop'>"+"<img src='"+url+comdity[i].commodityImages+"' />"+
                         "<div class='sale_shopName'>"+comdity[i].commodityName+"</div>"+
                         "<div class='sale_shopEdit'>"+comdity[i].intduction2+"</div>"+
                         "<div class='sale_shopPrice'>"+
                            "<div class='sale_shopAs'>￥1000<div>"+"<div class='sale_shopUs'>￥"+comdity[i].commodityPrice+"</div>"    
                         +"</div>"+
                         "<div class='sale_pay_box'>"+"<div class='sale_pay' id='"+comdity[i].commodityID+"'>购买</div>"+"</div>"
                        +"</div>");
                	} else if(i>13 && i<=16){
                		$(".newPro_show_list4").append("<div class='sale_shop'>"+"<img src='"+url+comdity[i].commodityImages+"' />"+
                         "<div class='sale_shopName'>"+comdity[i].commodityName+"</div>"+
                         "<div class='sale_shopEdit'>"+comdity[i].intduction2+"</div>"+
                         "<div class='sale_shopPrice'>"+
                            "<div class='sale_shopAs'>￥1000<div>"+"<div class='sale_shopUs'>￥"+comdity[i].commodityPrice+"</div>"    
                         +"</div>"+
                         "<div class='sale_pay_box'>"+"<div class='sale_pay' id='"+comdity[i].commodityID+"'>购买</div>"+"</div>"
                        +"</div>");
                	}
                }
                
                //跳转到商品详情页面
                $(".sale_pay").click(function(){
//              	alert("ok");
                    var buy_val = $(this).attr('id');
                    window.location.href="detail.html?buy_val="+buy_val;
                });
                
                //创新改变未来
                for(var i=0;i<comdity.length;i++){
                	if(i>4 && i<=14){
                		$(".newPro_innContent").append("<div class='newPro_imgBox'>"+"<img src='"+url+comdity[i].commodityImages+"' />"+"</div>");
                	}
                }
			}
		});
	});
	
	//潮流 古风 百搭 正装鼠标移入事件
	$(".newPro_box_btn").click(function(){
		//清除css样式
		$(".newPro_box_btn").removeClass("newPro_box_bgColor");
		//给点击的按钮添加css样式
		$(this).addClass("newPro_box_bgColor");
		//获取显示的索引值
		var show = $(this).index();
		alert(show);
		//隐藏所有需要显示的对象
		$(".show").css("display","none").eq(show).css("display","block");
		//控制显示需要显示的对象
		$(".show").eq(show).css("display","block");
	});
	
	//新品活动
	$(".newPro_activity").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebActivityAction",
			async:true,
			error:function(data){
				alert("连接错误");
			},
			success:function(data){
				//将数据转换为数组
				var act = eval(data);
				$(".newPro_activity").append("<img src='"+url+act[0].activityImg+"' />");
			}
		});
	});
	
})