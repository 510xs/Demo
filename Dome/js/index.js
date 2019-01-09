$(function(){
	//图片连接路径
	var img_url = "http://localhost:8080/Itsoure/";
//	var storage = window.localStorage; 
//	alert(storage.getItem("userID"));
     
     var url = "http://localhost:8080/Itsoure/";
    //轮播图
    $(".slider_box").ready(function(){
    	$.ajax({
    		type:"post",
    		url:url+"WebActivityAction",
    		async:true,
    		error:function(data){
    			alert("连接错误");
    		},
    		success:function(data){
    			//将获取的数组转换为数组
    			var act = eval(data);
    			for(var i=0;i<act.length;i++){
    				if(i>0 && i<=5){
    					$(".slider").append("<div class='slider_img_box'>"+"<img class='slider_img' src='"+img_url+act[i].activityImg+"' />"
    					                    +"<div class='slider_img_txt'>"+act[i].activityDuce1+"</div>"
    					                    +"<div class='slider_txt_box'>"+act[i].activityDuce2+"</div>"
    					+"</div>");
    				}
    			}
    			
    			var n=0;
    			var inter;
    			
    			//调用定时器
    			inter = setInterval(moveStart,3000);
    			
    			//获取轮播区域
		    	var obj = $(".slider");
		    	//轮播区域的宽 高
		    	var wid = obj.parent().width();
		        var hei = obj.parent().height();
		        //求取轮播对象的个数
		        var num = obj.children(".slider_img_box").length;
		        
		        //轮播区域的样式
		        obj.css({
		        	"width":(wid*num)+"px",
		        	"height":hei+"px",
		        	"z-index":"98",
		        	"position":"absolute",
		        	"top":"0",
		        	"left":"0"
		        });
		        //轮播区域下图片盒子的样式
		        obj.children(".slider_img_box").each(function(n,ele){
//		        	alert(n);
		        	$(ele).css({
			        	"width":wid+"px",
			        	"height":hei+"px",
			        	"position":"absolute",
				      	"top":"0px",
				      	"z-index":"98",
				      	"left":(n*wid)+"px"
			        });
		        })
		        
		        
		        //轮播左右两个点击按钮
		        var btnLeft = $("<div></div>");
		        var btnRight = $("<div><div>");
		        btnLeft.append("<img src='img/icon/btnNext_white.png' />");
		        btnRight.append("<img src='img/icon/btnNext_white.png' />");
		        //按钮样式
		        btnLeft.css({
		        	"width":"100px",
		        	"height":"100px",
		        	"background-color":"#204056",
		        	"position":"absolute",
		        	"top":"50%",
		        	"left":"-45px",
		        	"z-index":"90",
		        	"border-radius":"50%",
		        	"margin-top":"-50px"
		        });
		        btnLeft.children("img").css({
		        	"width":"40px",
		        	"height":"40px",
		        	"position":"absolute",
		        	"top":"30px",
		        	"left":"5px",
		        	"transform":"rotate(-180deg)"
		        });
		        btnRight.css({
		        	"width":"100px",
		        	"height":"100px",
		        	"background-color":"#204056",
		        	"position":"absolute",
		        	"top":"50%",
		        	"right":"-45px",
		        	"z-index":"90",
		        	"border-radius":"50%",
		        	"margin-top":"-50px"
		        });
		         btnRight.children("img").css({
		        	"width":"40px",
		        	"height":"40px",
		        	"position":"absolute",
		        	"top":"30px",
		        	"right":"5px"
		        });
		        btnLeft.appendTo(".slider_map");
		        btnRight.appendTo(".slider_map");
                //鼠标点击事件
                btnLeft.click(function(){
                	moveStart();
                });
                btnRight.click(function(){
                	moveRight();
                });
                //按钮鼠标移上事件
                //左侧按钮
                btnLeft.mouseenter(function(){
                	clearInterval(inter);
                }).mouseleave(function(){
                	inter = setInterval(moveStart,3000);
                });
                //右侧按钮
                btnRight.mouseenter(function(){
                	clearInterval(inter);
                }).mouseleave(function(){
                	inter = setInterval(moveStart,3000);
                });
		        
		        
		        function moveRight(){
		        	//大于等于num 重置所有状态
				   	  if(n<=0){
				   	  	n=num-1;
				   	  	obj.css("left",-(num-1)*wid+"px");
				   	  }
				   	   n--;
				   	   move();
		        }
		        //开始轮播对象
		        function moveStart(){
		        	if(n>num-2){
		        		n=0;
		        		obj.css("left","0px");
		        	}
		        	n++;
		        		
		        	move();
		        }
		        
		        //停止动画
			    obj.parent().mouseenter(function(){
			   	   clearInterval(inter);
			    }).mouseleave(function(){
			       inter = setInterval(moveStart,2000);
			    })
		        
		        //自动轮播
		        function move(){
		        	obj.animate({
		        		"left":-(n*wid)+"px"
		        	},500);
		        }
		        //连接成功结束
    		}
    	});
    	
    })
    
	//活动
	$(".new_img_box").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebActivityAction",
			async:false,
			error:function(data){
				alert("链接错误");
			},
			success:function(data){
				//将数据转换为数组
				var act = eval(data);
				
//				alert("ok");
				for(var i=1;i<=act.length;i++){
	            	if(i<4){
	            		var new_act_box = $("<div class='new_act_box'>"+"<img src='"+img_url+act[i].activityImg+"'/>"+"</div>");
//	            		alert(los+act.activityImg);
	            		
	            		i=i++;
	            		new_act_box.appendTo($(".new_img_box"));
	            	} 
	            }
				//获取data文字数据
						var txt1 =act[0].activityDuce1;
						var txt2 = act[0].activityDuce2;
						var txt3 = act[0].activityDuce3;
						
						var activity = $("<img class='activity' src='"+img_url+act[0].activityImg+"'/>");
//						alert(activity);
						var act_txt01 = $("<div class='act_txt01'>"+txt1+"</div>");
			            var act_txt02 = $("<div class='act_txt02'>"+txt2+"</div>");
			            var act_txt03 = $("<div class='act_txt03'>"+txt3+"</div>");
			            
			             activity.appendTo($(".new_img"));
                         act_txt01.appendTo($(".act_box_bg"));
                         act_txt02.appendTo($(".act_box_bg"));
                         act_txt03.appendTo($(".act_box_bg"));
			}
		});
		
	});
	
	
	$(".act_href").click(function(){
		window.location.href="test.html";
	});
	$(".box_tide").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebComdityAction",
			async:false,
			error:function(data){
//				alert("连接错误");
			},
			success:function(data){
//				alert("连接成功");
                //图片路径
                var img_url ="http://localhost:8080/Itsoure/";
                var comdity = eval(data);
                var tide_img1 = $("<img src='"+img_url+comdity[0].commodityImages+"'/>");
                var tide_img2 = $("<img src='"+img_url+comdity[1].commodityImages+"'/>");
                
                tide_img1.appendTo($(".tide_top_left"));
                tide_img2.appendTo($(".tide_top_right"));
                
                for(var i=2;i<comdity.length;i++){
                	if(i<5){
                		var tide_bottom_box = $("<div>"+"<img src='"+img_url+comdity[i].commodityImages+"'/>"+"</div>");
                	tide_bottom_box.appendTo($(".tide_bottom"));
//              	tide_bottom_box.addClass("tide_bottom_box");
//              	var tide_bottom_img = $("<img src='"+img_url+comdity[i].commodityImages+"'/>");
                	i=i++;
                	tide_bottom_box.addClass("tide_bottom_img");
//              	tide_bottom_img.appendTo(tide_bottom_box);
                	}
                	else if(i>=5 && i<15){
                		var special_content = $("<div>"+"<img class='spe_img' src='"+img_url+comdity[i].commodityImages+"'/>"+
                		"<img class='spe_xs_img' src='img/icon/index05_18.jpg'/>"+
                		"<div class='spe_txt_title'>"+comdity[i].commodityName+"</div>"+
                		"<div class='spe_txt_content'>"+comdity[i].intduction2+"</div>"+
                		"<div class='spe_price'>￥"+comdity[i].commodityPrice+
                		".00<div class='spe_price_buy' id='"+comdity[i].commodityID+"'>立即购买</div>"
                		+"</div>"+
                		"</div>");
	                	special_content.appendTo($(".special"));
	                	i=i++;
	                	special_content.addClass("special_content");
                	}
                	else{
//              		alert("数据错误");
                	}
                };
                $(".spe_price_buy").click(function(){
//              	alert("ok");
                    var buy_val = $(this).attr('id');
                    window.location.href="detail.html?buy_val="+buy_val;
                });
			}
		});
	});
	
});