$(function(){
	$(".personal_list").mouseenter(function(){
//		alert("ok");
        $(".personal_list_dis").removeClass("personal_list_none");
        $(".personal_list_hr").removeClass("personal_list_hrLong");
        $(this).children(".personal_list_dis").addClass("personal_list_none");
        $(this).children(".personal_list_hr").addClass("personal_list_hrLong");
	}).mouseleave(function(){
		$(".personal_list_dis").removeClass("personal_list_none");
        $(".personal_list_hr").removeClass("personal_list_hrLong");
	});
	
	//获取缓存中的用户ID
	var storage = window.localStorage;
	var userID = storage.getItem("userID");
//	alert(userID);
	//图片路径
	var url = "http://localhost:8080/Itsoure/";
	$(".personal_right").ready(function(){
		$.ajax({
			type:"post",
			url:url+"WebUserAction",
			async:true,
			data:{userID:userID},
			error:function(data){
				alert("连接错误");
			},
			success:function(data){
//				alert("连接成功");
                console.log(data);
                //物流信息
                $(".aboutAddr_top").append("<img class='aboutAddr_top_img' src='"+url+data.userImages+"' />"
                  +"<div class='aboutAddr_top_userName'>"+data.name+"</div>"
                  +"<div class='aboutAddr_top_logistics'>配送地址:"+data.logistics+"</div>"
                  +"<div class='aboutAddr_top_shopList'>我的购物清单</div>"
                  +"<div class='aboutAddr_top_pay'>支付账户</div>"
                );
                
                //我的账户
                $(".myPer_photo").append("<div class='myPer_photoName'>当前头像：</div>"+"<img src='"+url+data.userImages+"' />");
                $(".myPer_information").append("<div class='myPer_row'>昵称："+"<div class='myPer_row_user'>"+data.name+"</div>"+"</div>"
                                                +"<div class='myPer_row'>真实姓名："+"<div class='myPer_row_user'>"+data.uName+"</div>"+"</div>"
                                                +"<div class='myPer_row'>密码："+"<div class='myPer_row_user'>"+data.password+"</div>"+"</div>"
                                                +"<div class='myPer_row'>性别："+"<div class='myPer_row_user'>"+data.sex+"</div>"+"</div>"
                );
                $(".myPer_moreInfor").append("<div class='myPer_row'>年龄："+"<div class='myPer_row_user'>"+data.age+"</div>"+"</div>"
                                                +"<div class='myPer_row'>生日："+"<div class='myPer_row_user'>"+data.birthday+"</div>"+"</div>"
                                                +"<div class='myPer_row'>个性签名：</div>"
                                                +"<div class='myPer_row' style='text-indent:30px'>"+data.signature+"</div>"
                );
                $(".myPer_about").append("<div class='myPer_bottomRow'>绑定电话："+"<div class='myPer_bottom_txt'>"+data.tel+"</div>"+"</div>"
                                          +"<div class='myPer_bottomRow'>绑定邮箱："+"<div class='myPer_bottom_txt'>"+data.email+"</div>"+"</div>"
                                          +"<div class='myPer_bottomRow'>身份认证："+"<div class='myPer_bottom_txt'>"+data.identity+"</div>"+"</div>"
                                          +"<div class='myPer_bottomRow'>保密问题："+"<div class='myPer_bottom_txt'>"+data.secrecy+"</div>"+"</div>"
                );
                $(".myPer_addr").append("<div class='myPer_bottomRow'>家乡："+"<div class='myPer_bottom_txt'>"+data.homeTown+"</div>"+"</div>"
                                          +"<div class='myPer_bottomRow'>现居住地："+"<div class='myPer_bottom_txt'>"+data.residence+"</div>"+"</div>"
                                          +"<div class='myPer_bottomRow'>送货地址："+"<div class='myPer_bottom_txt'>"+data.logistics+"</div>"+"</div>"
                );
                //点击修改信息
                $(".myPer_btn").click(function(){
                	
                });
                //账户设置
                $("#userName").attr("value",data.name);
                $("#uName").attr("value",data.uName);
                $("#userPassWord").attr("value",data.password);
                $("#tel").attr("value",data.tel);
                $("#eMail").attr("value",data.email);
                $("#sex").attr("value",data.sex);
                $("#age").attr("value",data.age);
                $("#birthday").attr("value",data.birthday);
                $("#hometown").attr("value",data.homeTown);
                $("#residence").attr("value",data.residence);
                $("#logistics").attr("value",data.logistics);
                $("#signature").attr("value",data.signature);
                $(".myPer_remove_btn").attr("id",userID);
			}
		});
	});
	
	$(".myPer_remove_btn").on('click',function(){
		var userID = $(this).attr("id");
		var userName = $("#userName").val();
		var uName = $("#uName").val();
		var userPassWord =$("#userPassWord").val();
		var tel =$("#tel").val();
		var eMail =$("#eMail").val();
		var sex =$("#sex").val();
		var age =$("#age").val();
		var birthday =$("#birthday").val();
		var hometown =$("#hometown").val();
		var residence =$("#residence").val();
		var logistics =$("#logistics").val();
		var signature =$("#signature").val();
		var userImages = "images/userImages.jpg";
		var identity ="已认证";
		var secrecy ="已认证";
		
		//将数据传输到后台servlet
		$.ajax({
			type:"post",
			url:"WebUserUpdateAction",
			async:true,
			timeout:1000,
			dataType:"json",
			data:{
				userID:$(this).attr("id"),
				userName:$("#userName").val(),
				uName:$("#uName").val(),
				userPassWord:$("#userPassWord").val(),
				tel:$("#tel").val(),
				eMail:$("#eMail").val(),
				sex:$("#sex").val(),
				age:$("#age").val(),
				birthday:$("#birthday").val(),
				hometown:$("#hometown").val(),
				residence:$("#residence").val(),
				logistics:$("#logistics").val(),
				signature:$("#signature").val(),
				userImages:userImages,
				identity:identity,
				secrecy:secrecy,
			},
			error:function(data){
				alert("连接错误");
			},
			success:function(data){
				alert("保存成功");
//				$(".look").html(data);
			}
		});
	});
	
	//选项卡动画
	$(".myPer_list").click(function(){
        //获取显示的索引值
		var show = $(this).index()-1;//此处获得的索引值为1
		//隐藏所有需要显示的对象
		$(".show").css("display","none").eq(show).css("display","block");
		//控制显示需要显示的对象
		$(".show").eq(show).css("display","block");
	});
	
	//修改信息按钮
	$(".myPer_btn").click(function(){
		$(".look").css("display","none");
		$(".remove").css("display","block");
	});
	//修改完成按钮
	$(".myPer_remove_btn").click(function(){
		$(".remove").css("display","none");
		$(".look").css("display","block");
	});
	
	//退出登录
	$(".quit").click(function(){
		//清除用户缓存
//		storage.removeItem("")
        storage.clear();
        window.location.href="login.html";
        
	});
});
