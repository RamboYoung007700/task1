	//全局变量chongfu，用来设置函数重复执行。
	var chongfu=""; 
	
	//鼠标进入，背景色变橙，边框消失，字体变白
	function over(e){
		e.bgColor="orange";
		e.childNodes[0].childNodes[0].attributes[0].value="white";
		e.parentNode.parentNode.parentNode.attributes[2].nodeValue="border: none";
	}
	//鼠标移出，背景变白，字体橙色，边框出现
	function out(e){
		e.bgColor="white";
		e.childNodes[0].childNodes[0].attributes[0].value="orange";
		e.parentNode.parentNode.parentNode.attributes[2].nodeValue="border: solid thin orange";
	}
	//随机选择三个格子，随机颜色。每次进入这个函数时，九宫格先初始化为橙色
	function cc(){	
		for(i=1;i<10;i++){
			var t1=document.getElementById(i);
			t1.bgColor="orange";
		}
		
		var temp=new Array(3);
		temp[0]=1;
		temp[1]=1;
		while(temp[0]==temp[1]||temp[1]==temp[2]||temp[2]==temp[0]){
			temp[0]=Math.round(Math.random() *8)+1;
			temp[1]=Math.round(Math.random() *8)+1;
			temp[2]=Math.round(Math.random() *8)+1;
		}
		
		for(i=0;i<3;i++){
			var t1=document.getElementById(temp[i]);
			var r=Math.round(Math.random() *254);
			var g=Math.round(Math.random() *254);
			var b=Math.round(Math.random() *254);
			var color="rgb("+r+","+g+","+b+")";
			t1.bgColor=color;	
		}
	}
	// 启动cc函数，每秒执行一次。
	function start(){
		clearInterval(chongfu);
		chongfu=setInterval("cc()",1000);
	}
	// 结束cc函数，九宫格恢复橙色
	function end(){
		clearInterval(chongfu);
		for(i=1;i<10;i++){
			var t1=document.getElementById(i);
			t1.bgColor="orange";
		}
	}