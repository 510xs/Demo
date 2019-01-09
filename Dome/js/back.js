$(function(){
	var detailchUrl =window.location.href;
    var detailData =detailchUrl.split("?");        //截取 url中的“?”,获得“=”后面的参数
    var shopdetail =decodeURI(detailData[1]);   //decodeURI解码
    var detail = shopdetail.split("-");
    
    //获取参数
    var a = detail[0];//商品名称
    var b = detail[1];//商品尺码
    var c = detail[2];//商品颜色
    var d = detail[3];//商品数量
    var e = detail[4];//实付金额
//  console.log(a+b+c+d+e);
    $(".shop_edit_right").html(a+"，尺码："+b+"，颜色："+c+"，数量："+d);
    $(".moneny").html("￥"+e+".00");
    
    //15秒后自动跳转到首页
    var time = 30;
    setInterval(refer,1000);
    function refer(){
    	if(time == 0){
    		window.location.href="index.html";
    	}
    	$(".time").html(time+"s");
    	time --;
    };
    //不能自动跳转后的点击事件
    $(".lok").click(function(){
    	window.location.href="index.html";
    });
});