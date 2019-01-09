$(function(){
    var searchUrl =window.location.href;
    var searchData =searchUrl.split("=");        //截取 url中的“=”,获得“=”后面的参数
    var  search =decodeURI(searchData[1]);   //decodeURI解码
    
    //图片路径
    var url ="http://localhost:8080/Itsoure/";
    $("#serch").attr("value",search);
    $("serch_list").ready(function(){
    	$.ajax({
    		type:"post",
    		url:url+"WebSerchAction",
    		dataType:"json",
    		data:{
				serch:search,
			},
    		async:true,
    		error:function(data){
    			alert("连接成功");
    		},
    		success:function(data){
    			console.log(data);
               jQuery.each(data,function(i,item){
               	    
                    $(".serch_list").append(
                    	"<div class='shop_list'>"+"<img class='spe_img' src='"+url+item.commodityImages+"'/>"+
                		"<img class='spe_xs_img' src='img/icon/index05_18.jpg'/>"+
                		"<div class='spe_txt_title'>"+item.commodityName+"</div>"+
                		"<div class='spe_txt_content'>"+item.intduction2+"</div>"+
                		"<div class='spe_price'>￥"+item.commodityPrice+
                		".00<div class='spe_price_buy' id='"+item.commodityID+"'>立即购买</div>"
                		+"</div>"+
                		"</div>"
                    );
			    });
			    $(".shop_list").css({
			    	"width":"232px",
			    	"height":"340px",
			    	"float":"left",
			    	"margin-left":"13px",
			    	"margin-top":"20px",
			    	"border":"1px solid #666666"
			    });
			    
			    var shopNum = data.length;
			    var le = $(".serch_list").children(".shop_list").height()+10;
//			    alert(hei);
                if(shopNum>5 && shopNum <=10){
                    $(".serch_list").css("height",((shopNum/5)*le)+"px");	
                } else if(shopNum <= 5){
                	$(".serch_list").css("height",le+80+"px")
                } else if(shopNum >10){
                	$(".serch_list").css("height",((shopNum/5)*le)+le+"px");
                }
			    
			    //点击购买事件
			    $(".spe_price_buy").click(function(){
//              	alert("ok");
                    var buy_val = $(this).attr('id');
                    window.location.href="detail.html?buy_val="+buy_val;
                });
    		}
    	});
    });
    
});