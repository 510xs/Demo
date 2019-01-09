$(function(){
	
	//获取用户缓存
	var stroage = window.localStorage;
	var userName = stroage.getItem("userName");
	var logintext = "亲，您还没有登录哟,请"+"<a href='login.html'>登录</a>";
    
//  页面显示用户
	if(!userName){
		$(".title_box_user").html(logintext);
	} else{
		$(".title_box_user").html("欢迎您：尊敬的"+userName+"用户!!!");
//		alert(userName);
	}
	
    
	$(".nav_li").on('mouseenter',function(){
		$(".nav_li").removeClass("nav_color");
		$(this).addClass("nav_color");
	});
	
	//商品搜索
	$(".serch_btn").on('click',function(){
		var serch = $("#serch").val();
		
		if(serch != "" && serch != null){
			var searchText= jQuery.trim(serch);
            var searchUrl =encodeURI("serchList.html?serch="+serch);   //使用encodeURI编码
            window.location.href =searchUrl;
//			window.location.href="serchList.html?serch="+serch;
		} else{
			alert("mmp,你输人的是啥？？");
		}
	});
	
	$(".shopcart").click(function(){
		window.location.href="shopCart.html";
	});
});