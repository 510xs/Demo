$(function(){
	var url = "http://localhost:8080/Itsoure/";
	$.ajax({
		type:"post",
		url:url+"WebActivityAction",
		async:true,
		error:function(data){
			alert("连接错误");
		},
		success:function(data){
//			alert("连接成功");
			//将数据转换为数组
			var act = eval(data);
			for(var i=0;i<act.length;i++){
				if(i<1){
					var pro_new1 = $("<img src='"+url+act[i].activityImg+"'/>");
				    i=i++;
				    pro_new1.appendTo($(".pro_new1"));
				}
			}
		}
	});
	
	$(".pro_man").ready(function(){
      $.ajax({
      	type:"post",
      	url:url+"WebComdityAction",
      	async:true,
        error:function(data){
        	alert("你大爷的，又错了");
        },
        success:function(data){
//      	alert("连接成功");
            var comdity = eval(data);
            for(var i=1;i<comdity.length;i++){
            	if(i>4 && i<=14){
//          		alert("ok");
            		var special_content = $("<div>"+"<img class='spe_img' src='"+url+comdity[i].commodityImages+"'/>"+
                		"<img class='spe_xs_img' src='img/icon/index05_18.jpg'/>"+
                		"<div class='spe_txt_title'>"+comdity[i].commodityName+"</div>"+
                		"<div class='spe_txt_content'>"+comdity[i].intduction2+"</div>"+
                		"<div class='spe_price'>￥"+comdity[i].commodityPrice+
                		".00<div class='spe_price_buy' id='"+comdity[i].commodityID+"'>立即购买</div>"
                		+"</div>"+
                		"</div>");
	                	special_content.appendTo($(".pro_man"));
	                	special_content.addClass("special_content");
	                	i=i++;
            	} else if(i>14 && i<=24){
            		var special_content2 = $("<div>"+"<img class='spe_img' src='"+url+comdity[i].commodityImages+"'/>"+
                		"<img class='spe_xs_img' src='img/icon/index05_18.jpg'/>"+
                		"<div class='spe_txt_title'>"+comdity[i].commodityName+"</div>"+
                		"<div class='spe_txt_content'>"+comdity[i].intduction2+"</div>"+
                		"<div class='spe_price'>￥"+comdity[i].commodityPrice+
                		".00<div class='spe_price_buy' id='"+comdity[i].commodityID+"'>立即购买</div>"
                		+"</div>"+
                		"</div>");
	                	special_content2.appendTo($(".pro_men"));
	                	special_content2.addClass("special_content");
	                	i=i++;
            	}
            	
            }
            
             $(".spe_price_buy").click(function(){
//              	alert("ok");
                    var buy_val = $(this).attr('id');
                    window.location.href="detail.html?buy_val="+buy_val;
                });
        }
      });
	});
});
