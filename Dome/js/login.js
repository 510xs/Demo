$(function(){
//	alert("ok");
   
   //servlet路径
   var url = "http://localhost:8080/Itsoure/";

   
   $(".login").on('click',function(){
// 	   alert("ok");
     var user ={
     	userName:$("#userName").val(),
     	userPassWord:$("#userPassWord").val()
     };
     if($("#userName").val() == "" || $("#userName") == null || $("#userName") == "请输入密码"){
     	$("#userName").focus();
     	alert("不能为空");
     } else if($("#userPassWord").val() =="" || $("#userPassWord") == null || $("#userPassWord").val() == "请输入密码"){
     	$("#userPassWord").focus();
     	alert("密码错误");
     }
     else if($("#verification").val() == "" || $("#verification").val() == null || $("#verification").val() == "请输入验证码"){
     	$("#verification_box").focus();
     	alert("验证码不能为空");
     }
     
     else{
     	
//   	$.postJSON()
     	
     	$.ajax({
     		type:"post",
     		url:url+"WebLoginAction",
     		dataType:"json",
//   		xhrFields: {
//						withCredentials: true
//			},
     		data:{
     			userName:$("#userName").val(),
     			userPassWord:$("#userPassWord").val(),
     			verification:$("#verification").val()
     		},
     		error:function(data){
     			alert("登录失败");
     		},
     		success:function(data){
     			alert("ok");
                 var userID = data.userID;
                 var userName = data.name;
                 var userPwd = data.password;
                 
                 if(!window.localStorage){
                 	alert("浏览器不支持localstorage");
                 } else{
                 	var storage=window.localStorage;
                 	//写入用户id
                 	storage.setItem("userID",userID);
                 	//写入用户名
                 	storage.setItem("userName",userName);
                 	window.location.href="index.html";
                 }
                 
//               alert(userID+"----"+userName+"-----"+userPwd);
     		}
     	});
     }
     
     getData();
     
     function getData(res) {
     	console.log("res");
     }
     
                
   });
   
});
