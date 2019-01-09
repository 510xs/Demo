$(function(){
	$(".next").click(function(){
//		alert("ok");
		$(".reg_user").css("left","-1500px");
		$(".reg_user2").css("left","0px");
		$(".dis1").css("display","block");
	});
//	$(".reg_user2").click(function(){
//		alert("ok");
//		
//	});
	
	//注册
	var url = "http://localhost:8080/Itsoure/";
	$("#register").click(function(){
		var userName = $(".userName").val();
		var passWord = $(".passWord").val();
		var rpassWord = $(".rpassWord").val();
		var eMail = $(".eMail").val();
		var tel = $(".tel").val();
		var uName = $(".uName").val();
		var sex = $(".sex").val();
		var age = $(".age").val();
		var birthday = $(".birthday").val();
		var logistics = $(".logistics").val();
		var signature = $(".signature").val();
		if(userName == null || userName == ""){
			alert(userName);
		} else if(passWord == null || passWord == ""){
			alert("密码不能为空");
		} else if(rpassWord != passWord){
			alert("两次密码不相等");
		} else if(eMail == null || eMail == ""){
			alert("邮箱不能为空");
		} else if(tel == null || tel == ""){
			alert("电话不能为空");
			tel.focus();
		} else if(uName == null || uName == ""){
			alert("真实姓名不能为空");
			uName.focus();
		} else if(sex == null || sex == ""){
			alert("性别不能为空");
			sex.focus();
		} else if(age == null || age == ""){
			alert("年龄不能为空");
		} else if(birthday == null || birthday == ""){
			alert("生日不能为空");
		} else if(logistics == null || logistics == ""){
			alert("配送地址不能为空");
		} else if(signature == null || signature == ""){
			alert("个性签名不能为空");
		} else{
			$.ajax({
				type:"post",
				url:url+"WebRegisterAction",
				async:true,
				dataType:"json",
				data:{
					userName:userName,
					passWord:passWord,
					eMail:eMail,
					tel:tel,
					uName:uName,
					sex:sex,
					age:age,
					birthday:birthday,
					logistics:logistics,
					signature:signature,
				},
				error:function(data){
					alert("注册失败");
				},
				success:function(data){
					alert("注册成功");
					
					$(".reg_user2").css("left","-1500px");
					$(".dis2").css("display","block");
					$(".dis_img1").css("display","none");
					$(".dis_img2").css("display","block");
					$(".reg_yes").css("left","0px")
				}
			});
		}
	});
})
