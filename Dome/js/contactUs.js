//window.onload=function(){
//	var name = document.getElementById("contName");
//	var sub = document.getElementById("cont_sub");
//	
//	sub.onclick=function(){
//		if(name.value == '' || name.value == '请问尊姓大名'){
//				alert("ok");
//			}
//	}
//}

$(function(){
	var url = "http://localhost:8080/Itsoure/";
	$(".cont_sub").click(function(){
		var contName = $("#contName").val();
	    var contTel = $("#contTel").val();
	    var contEmail = $("#contEmail").val();
	    var contContent = $("#contTxt").val();
	    
	   if(contName ==null || contName =="" || contName == "请问尊姓大名"){
	   	    alert("姓名错误");
	   	    $("#contName").focus();
	   } else if(contTel == null || contTel =="" || contTel == "请输入您的电话号码"){
	   	    alert("电话错误");
	   	    $("#contTel").focus();
	   } else if(contEmail == null || contEmail =="" || contEmail == "请输入您的E-mail"){
	   	    alert("email错误");
	   	    $("#contEmail").focus();
	   } else if(contEmail == null || contEmail == "" || contEmail == "内容不超过150字"){
	   	    alert("email错误");
	   	    $("#contEmail").focus();
	   }else if(contContent ==null || contContent == "" || contContent == "留下您的建议:"){
	   	    alert("格式错误");
	   	    $("#contTxt").focus();
	   }else{
	   	   $.ajax({
	   	   	type:"post",
	   	   	url:url+"WebPlaintAction",
	   	   	dataType:"json",
	   	   	data:{
	   	   		contName:$("#contName").val(),
	   	   		contTel:$("#contTel").val(),
	   	   		contEmail:$("#contEmail").val(),
	   	   		contContent:$("#contTxt").val(),
	   	   	},
	   	   	async:false,
	   	   	error:function(data){
	   	   		alert("提交失败");
	   	   		console.log(data);
	   	   	},
	   	   	success:function(data){
	   	   		alert("提交成功");
	   	   	}
	   	   });
	   }
	});
	
	//物理定位
//	  const getPosition = (
//	  timeout = 10000,
//	  maximumAge = 60000, 
//	  enableHighAcuracy = false) => new Promise((resolve, reject) => {
//	  if (!navigator && !navigator.geolocation)  {
//	    return reject(new Error('geolocation api not supported'))
//	  } 
//	  const success = (loc) => {
//	      const location = {
//	        latitude: loc.coords.latitude,  // 纬度
//	        longitude: loc.coords.longitude,  // 经度
//	        accuracy: loc.coords.accuracy // 精确度
//	      }
//	      resolve(location)
//	  }
//	  const error = () => reject('出错了')
//	  navigator.geolocation.getCurrentPosition(success, error, {
//	    enableHighAcuracy,  // 指示浏览器获取高精度的位置，默认为false
//	    timeout,  // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
//	    maximumAge // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
//	  })
//	})
//	// 使用示例
//	getPosition()
//	.then(pos => pos)
//	.catch(err => console.log(err))
    
    //浏览器是否支持物理定位
    

});
