$(function(){
	//图片连接路径
	var url = "http://localhost:8080/Itsoure/";
	
    $("per_new").ready(function(){
//  	alert("ok");
        $.ajax({
        	type:"post",
        	url:url+"WebActivityAction",
        	async:true,
        	error:function(data){
        		alert("连接失败");
        	},
        	success:function(data){
        		//将获取的数据转换为数组
        		var act = eval(data);
        		$(".per_new_txt_top").append("<div class='per_new_txt_title'>"+act[1].activityDuce1+"</div>"+"<div class='per_new_txt_content'>"+act[1].activityDuce2+"</dvi>");
        		$(".per_new_txt_bottom").append("<div class='per_new_txt_title'>"+act[1].activityDuce1+"</div>"+"<div class='per_new_txt_content'>"+act[1].activityDuce2+"</dvi>");
        		$(".per_new_right").append("<img src='"+url+act[1].activityImg+"' />"+"<div class='per_new_right_hr1'></div>"+"<div class='per_new_right_hr2'></div>"+"<div class='per_new_right_hr3'></div>"+"<div class='per_new_right_hr4'></div>")
        		
        		
        		for(var i=1;i<=act.length;i++){
	            	if(i<4){
	            		var new_act_box = $("<div class='new_act_box'>"+"<img src='"+url+act[i].activityImg+"'/>"+"</div>");
//	            		alert(los+act.activityImg);
	            		
	            		i=i++;
	            		new_act_box.appendTo($(".per_set"));
	            	} 
	            }
        	}
        });
    });
	
	
	//获取移动对象
    var obj = $(".img_per_box");
	$(".per_img_box").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebComdityAction",
			async:true,
			error:function(data){
			   alert("连接错误");
		    },
		    success:function(data){
//		    	alert("连接成功");
                var comdity = eval(data);
                
                
                //输出图片
                for(var i=0;i<=comdity.length-1;i++){
                	if(i>4){
                		obj.append("<img class='per_img' src='"+url+comdity[i].commodityImages+"' />");
                	}
                }
                //获取移动对象的宽 高
			    var wid = obj.children().width()+20;
			    //获取图片的个数
			    var num = obj.children("img").length;
			    //移动区域的样式
			    obj.css({
			    	"width":(wid*num)+"px",
			    	"height":"180px",
			    	"position":"absolute",
			    	"left":"0px",
			    	"top":"0px"
			    });
			    
			     var n =0;
			     //上一张点击事件
	              $(".per_btn_left").click(function(){
	              	n--;
	              	if(n<=num-3){
	              		$(".img_per_box").animate({
		                	"left":-(n*wid)+"px"
		                },500);
	              	}
	              	if(n<0){
	              		move();
	              	}
	              });
	              //下一张点击事件
	              $(".per_btn_right").click(function(){
		              	move();
	              });
	              
	              
	              function move(){
	              	    n++;
	                    if(n<=num-3){
	                    	$(".img_per_box").animate({
		                		"left":-(n*wid)+"px"
		                	},500);
	                    } else if(n>(num-6)){
	                        alert("您好，所有的商品已浏览");                    	
	                    }
	              }
	              
	           //底部三张图片
	            
		    }
		}); 
	});
	            
});