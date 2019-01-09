$(function(){
	
	function getUrlParam(name) {
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
       var r = window.location.search.substr(1).match(reg);  //匹配目标参数
       if (r != null) return unescape(r[2]); return null; //返回参数值
   };
   //获取url中的id值
   var test = getUrlParam("buy_val");
// alert(test);
	var url = "http://localhost:8080/Itsoure/";
	$.ajax({
		type:"post",
		url:url+"WebCDetialAction",
		async:true,
		data:{id:test},
		error:function(data){
			alert("mmp");
		},
		success:function(data){
//			alert("ok");
           if(data != null){
//         	alert(data.commodityImages);
            //左侧div 显示图片
           	$(".edit_buy_left").append("<div class='show_Imgbox'>"+"<img class='edit_buy_img' src='"+url+data.commodityImages+"' />"+"</div>"+
           	"<div class='show_Imglist'>"
           	   +"<img class='edit_img_list01' src='"+url+data.comdityEditImg01+"' />"
           	   +"<img class='edit_img_list01' src='"+url+data.comdityEditImg03+"' />"+
           	   "</div>"
           	);
           	$(".show_Imglist").append("<img class='edit_img_list01' src='"+url+data.comdityEditImg03+"' />");
           	$(".show_Imglist").append("<img class='edit_img_list01' src='"+url+data.comdityEditImg04+"' />");
           	$(".edit_buy_left").append("<div class='edit_count'>收藏数（）</div>")
           	
           	var shop_color = $("<div class='shop_color'><div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>"+"<div></div>")
           	//右侧div 显示商品信息
           	$(".edit_buy_right").append("<div class='edit_shopName'>"+data.commodityName+"</div>"+
           	      "<div class='edit_prime'>"+"<div class='shop_primeName'>原价:</div>"+"<div class='shop_primeCont'>￥1000</div>"+"</div>"+
           	      "<div class='edit_spe'>"+"<div class='shop_primeName'>特价:</div>"+"<div class='shop_spe'>￥"+data.commodityPrice+".00</div>"+"</div>"+
           	      "<div class='edit_discount'>"+"<div class='shop_primeName'>优惠:</div>"+"<div class='shop_count'></div>"+"</div>"+
           	      "<div class='edit_address'>"+"<div class='shop_primeName'>配送至:</div>"+"<div class='shop_address'>四川省遂宁市船山区四川职业技术学院</div>"+"</div>"+
           	      "<div class='edit_parameter'>"+"<div class='shop_hr'></div>"+"商品参数</div>"+
           	      "<div class='edit_size'>"+"<div class='shop_primeName'>尺码:</div>"+"<div class='shop_size' style='margin-left:200px'>M</div>"+"<div class='shop_size'>L</div>"+"<div class='shop_size'>XL</div>"+"<div class='shop_size' style='width:50px'>2XL</div>"+"<div class='shop_size' style='width:50px'>3XL</div>"+"</div>"+
           	      "<div class='edit_color' style='height:120px;'>"+"<div class='shop_primeName'>颜色:</div>"+
           	           "<div class='shop_cloth_box'>"+ "<div class='shop_cloth_color'>红</div>"+
           	                                           "<div class='shop_cloth_color'>白</div>"+
           	                                           "<div class='shop_cloth_color'>黑</div>"+
           	                                           "<div class='shop_cloth_color'>蓝</div>"+
           	                                           "<div class='shop_cloth_color'>靛</div>"+
           	                                           "<div class='shop_cloth_color'>紫</div>"+
           	                                           "<div class='shop_cloth_color'>黄</div>"+
           	                                           "<div class='shop_cloth_color'>浅蓝</div>"+
           	                                           "<div class='shop_cloth_color'>灰</div>"+
           	                                           "<div class='shop_cloth_color'>橙</div>"+
           	                                           "<div class='shop_cloth_color'>藏青</div>"+
           	                                           "<div class='shop_cloth_color'>米白</div>"+
           	                                           "<div class='shop_cloth_color'>粉红</div>"+
           	                                           "<div class='shop_cloth_color'>咖啡</div>"+
           	                                           "<div class='shop_cloth_color''>暗绿</div>"+
           	           "</div>"
           	      +"</div>"+
           	      "<div class='edit_num'>"+"<div class='shop_primeName'>数量:</div>"+"<div class='shop_num_left'>-</div>"+"<input class='shop_input' type='text' value='1'>"+"<div class='shop_num_right'>+</div>"+"</div>"+
           	      "<div class='edit_gobuy'>"+"<div class='shop_buy'>点击购买</div>"+"<div class='shop_addCar'>加入购物车</div>"+"</div>"+
           	      "<div class='edit_promise'>"+"<div class='shop_primeName'>承诺:</div>"+"<div class='shop_promis'>七天无理由退换商品</div>"+"</div>"+
           	      "<div class='edit_pay'>"+"<div class='shop_primeName'>支付:</div>"+"<div class='shop_pay1'>支付宝</div>"+"<div class='shop_pay2'>银联</div>"+"<div class='shop_pay3'>信用卡</div>"+"</div>"
           	);
           }
           
           //获取商品的尺码
           var shop_size;
           $(".shop_size").click(function(){
           	$(".shop_size").removeClass("shop_size_border");
           	$(this).addClass("shop_size_border");
//         	var s = $(this).index();
            shop_size = $(this).text();
           });
           
           //商品颜色盒子选中事件
           var shopColor;
           $(".shop_cloth_color").click(function(){
//         	alert("ok");
           	$(".shop_cloth_color").removeClass("shop_borderColor");
           	$(this).addClass("shop_borderColor");
            shopColor = $(this).text();
           });
           
           //数量的加减事件
           var shopNum = $(".shop_input").val();
           var Price = data.commodityPrice;
           Price = parseInt(Price);
//         alert(shopNum);
           $(".shop_num_left").click(function(){
           	   shopNum = parseInt(shopNum)-1;
           	   Price = Price - parseInt(data.commodityPrice);
           	   if(shopNum >=1 && Price >= Price){
           	   	$(".shop_input").attr("value",shopNum);
           	   	$(".shop_spe").html("￥"+Price);
           	   } else{
           	   	alert("数量不能为0哟！！！");
           	   }
           });
           $(".shop_num_right").click(function(){
               shopNum = parseInt(shopNum)+1;
               Price = Price + parseInt(data.commodityPrice);
           	   $(".shop_input").attr("value",shopNum);
           	   $(".shop_spe").html("￥"+Price);
           });           
           //点击购买
           $(".shop_buy").click(function(){
           	//判断数据是否为空
           	 if(shop_size == null && shopColor == null){
           	 	alert("mmp");
           	 } else{
           	 	var shopDetail,detail;
           	 	shopDetail = new Array(data.commodityName,shop_size,shopColor,shopNum,Price);
           	 	
           	 	detail = shopDetail.join("-");
           	 	
           	 	//购买成功
           	 	window.location.href="back.html?"+detail;
           	 }
           	 
           });
           
           //加入购物车
           var comdityName = data.commodityName;
           var comdityImages = data.commodityImages;
           var comdityID = data.commodityID;
           var comdityPrice = data.commodityPrice;
           var stroage = window.localStorage;
           var userID = stroage.getItem("userID");
//         alert(comdityName+","+comdityImages+","+comdityID);
           $(".shop_addCar").click(function(){
           	  $.ajax({
           	  	type:"post",
           	  	url:url+"WebCartAction",
           	  	async:true,
           	  	dataType:"json",
           	  	data:{
           	  		cartNum:shopNum,
           	  		cartColor:shopColor,
           	  		cartSize:shop_size,
           	  		cartPrice:Price,
           	  		userID:userID,
           	  		comdityID:comdityID,
           	  		comdityName:comdityName,
           	  		comdityImages:comdityImages,
           	  		comdityPrice:comdityPrice,
           	  	},
           	  	error:function(data){
           	  		alert("连接错误");
           	  	},
           	  	success:function(data){
//         	  		alert("连接成功");
                    //判断数据是否为空
		           	 if(shop_size == null && shopColor == null){
		           	 	alert("添加失败");
		           	 } else{
		           	 	var shopDetail,detail;
		           	 	alert("添加成功");
		           	 }
           	  	}
           	  });
           });
           
//         详情头部盒子点击事件
           $(".title_btn").click(function(){
           	 $(".title_btn").removeClass("shop_title_txt");
           	 $(this).addClass("shop_title_txt");
           });
           
//         详情图片
           $(".edit_shopImg").append("<img src='"+url+data.comdityEditImg05+"' />"+"<img src='"+url+data.comdityEditImg06+"' />"+"<img src='"+url+data.comdityEditImg07+"' />");
           
		}
	});
});