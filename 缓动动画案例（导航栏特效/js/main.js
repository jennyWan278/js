window.onload=function(){
	//缓动动画函数
	function animate(ele,target){
	  	clearInterval(ele.timer);
	  	ele.timer=setInterval(function(){
	      var speed=(target-ele.offsetLeft)/10;
	      speed=speed>0? Math.ceil(speed):Math.floor(speed);
	      ele.style.left=ele.offsetLeft+speed+'px';
	      if(Math.abs(target-ele.offsetLeft)<Math.abs(speed))
	      {
	        ele.style.left=target+'px';
	        clearInterval(ele.timer);
	      }
	    },10)
 	}

	// 获取事件源及相关函数
	var liArr=document.getElementsByTagName("li");
	var liWidth=liArr[0].offsetWidth;
	var span=document.getElementsByTagName("span")[0];
	var count=0;
	// for循环绑定事件
	for(var i=0;i<liArr.length;i++)
	{
		liArr[i].index=i;
		liArr[i].onmouseover=function(){
			animate(span,this.index*liWidth);
		}
		liArr[i].onmouseout=function(){
			animate(span,count*liWidth);
		}
		liArr[i].onclick=function(){
			count=this.index;
			animate(span,count*liWidth);
		}
	}
	console.log(liWidth);
	console.log(span);
}