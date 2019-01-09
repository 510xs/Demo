$(function(){
    //获取用户id
    var storage = window.localStorage;
    var userID = storage.getItem("userID");
//  alert(userid);
    
    //图片路径
    var url = "http://localhost:8080/Itsoure/";
    
    $(".cart_list").ready(function(){
    	$.ajax({
    		type:"post",
    		url:url+"WebCartShopListAction",
    		async:true,
    		dataType:"json",
    		data:{
    			userID:userID,
    		},
    		error:function(data){
    			alert("连接错误");
//  			console.log(data)
                alert("连接错误");
    		},
    		success:function(data){
    			console.log(data);
    			
    			//将数据转换为数组
    			var cart = eval(data);
//  			console.log(cart);
    			//遍历输出
    			for(var i=0;i<=cart.length-1;i++){
    				$(".cart_list").append("<div class='cartList_box fl'>"+
    				                        "<input class='cart_chk' type='checkbox' />"+
    				                        "<img class='cart_img' src='"+url+cart[i].comdityImages+"' />"+
    				                        "<div class='cart_name'>"+cart[i].comdityName+"</div>"+
    				                        "<div class='cart_shop'>"+"<div>颜色："+cart[i].cartColor+"</div>"+"<div>尺码："+cart[i].cartSize+"</div>"+"</div>"+
    				                        "<div class='comdityprice'>"+cart[i].comdityPrice+"</div>"+
    				                        "<div class='cart_num'>"+
    				                           "<div class='shop_liter'>-</div>"+
    				                           "<input class='shop_num' type='text' value='"+cart[i].cartNum+"' />"+
    				                           "<div class='shop_add'>+</div>"
    				                        +"</div>"+
    				                        "<div class='cart_price1' id='"+cart[i].cartPrice+"'>"+cart[i].cartPrice+"</div>"+
    				                        "<div class='cart_caozuo'>"+"<div>加入收藏</div>"+"<div class='shop_look' id='"+cart[i].comdityID+"'>查看详情</div>"+"<div class='shop_del' id='"+cart[i].comdityID+"'>删除订单</div>"+"</div>"
    				+"</div>");
    			}
    			
    			//列表样式
    			var num = $(".cart_list").children("div").length;
//  			alert(num);
    			var cartHei = $(".cart_list").children("div").height()+20;
//  			alert(cartHei);
    			$(".cart_list").css("height",num*cartHei+"px");
    			
    			
    			//商品操作
    			totalPrice();
    			//商品数量的加减
    			//增加
			    $(".shop_add").click(function () {
			        var numObj=$(this).prev();
			        var numVal=numObj.val();
			        var price = parseInt($(this).parent(".cart_num").siblings(".cart_price1").html());
			        var comdityprice = parseInt($(this).parent(".cart_num").siblings(".comdityprice").html());
			        numObj.val(++numVal);
			        $(this).prev().prev().prop("disabled",false);
			        price = price + comdityprice;
			        $(this).parent(".cart_num").siblings(".cart_price1").text(price);
			        totalPrice()
			    });
    			 //减少
			    $(".shop_liter").click(function () {
			        var numObj=$(this).next();
			        var numVal=numObj.val();
			        var price = parseInt($(this).parent(".cart_num").siblings(".cart_price1").html());
			        var comdityprice = parseInt($(this).parent(".cart_num").siblings(".comdityprice").html());
			        if (numVal>1){
			            numObj.val(--numVal);
			            price = price - comdityprice;
			            $(this).parent(".cart_num").siblings(".cart_price1").text(price);
			        }else{
			            $(this).prop("disabled",true)
			        }
			        totalPrice()
			    });
    			
    			//查看详情
    			$(".shop_look").click(function(){
    				var comdityID = $(this).attr("id");
    				alert(comdityID);
    			});
    			
			    //删除订单
			    $(".shop_del").click(function () {
			        if (confirm("确定删除吗")){
			            $(this).parent().parent().remove();
			            
			            var comdityID = $(this).attr("id");
			            $.ajax({
							type:"post",
							url:url+"WebCartDelAction",
							async:true,
							dataType:"json",
							data:{
								userID:userID,
								comdityID:comdityID,
							},
							error:function(data){
								alert("删除失败");
							},
							success:function(data){
								alert("删除成功");
								
							}
						});
			        }
			        totalPrice()
			    });
				
				//全选
				$(".cart_chk_all").click(function () {
			        var isCheck=$(this).prop("checked");
			        $(".cart_chk").prop("checked",isCheck);
			        $(".cart_chk_all").prop("checked",isCheck);
			        totalPrice();
			    });
			    //单选
			    $(".cart_chk").click(function () {
			        totalPrice()
			    });
			    //判断数字
			    $(".cart_list .shop_num").blur(function () {
			        var num=Math.abs(parseInt($(this).val()));
			        if (isNaN(num)){
			            $(this).parent().find(".errorMSG").show()
			        }else{
			            $(this).val(num);
			            $(this).parent().find(".errorMSG").hide()
			            totalPrice()
			        }
			
			    });
				
				//更新数据
				function totalPrice(){
					var totalNum=0,//商品数量
	                totalPrice=0,//合计价格
	                selectedNum=0;//合计数量
	                $(".cart_list").each(function(){
	                	//找数量
	                var isNum=parseInt($(this).find(".shop_num").val());
	                //复选框
	                var select=$(this).find(".cart_chk").prop("checked");
	                //小计
	                var sum=parseInt($(this).find(".cart_price1").html());
	                 if (select){
		                selectedNum+=isNum;//得出的数量累加
		                totalPrice+=sum;//得出的小计累加
		             }
		              totalNum++
	                });
	                
                    $(".cartPrice").text(totalPrice.toFixed(2))
                    $(".cartNum").text(selectedNum)
				}
				
    			//结算
    			$(".shopPay").click(function(){
    				window.location.href="back.html";
    			});
    		}
    	});
    });
    
});