window.onload=function(){

	//var screenWid=document.body.clientWidth; 	// 获取浏览器可是窗口的宽度

	var slider=document.getElementById('wraper-slider');
	var sliderWid=slider.children[0];
	// 获取图片的宽度
	var imgwid=sliderWid.offsetWidth;

	var sliderul=sliderWid.children[0];
	var sliderLiArr=sliderWid.children[0].children;
	var btnleft=sliderWid.children[1];
	var btnright=sliderWid.children[2];
	var h=sliderLiArr[0].style.height;
	var timer=null;
	var key=0;

	//slider.style.width=screenWid+'px';   //图片宽度等于屏幕宽度

	for(var i=0;i<sliderLiArr.length;i++)  //给每一个li元素图片宽度
	{
		sliderLiArr[i].style.width=imgwid+'px';
	}
	// 给ul 6倍的图片宽度
	sliderul.style.width=6*imgwid+'px';
	// 图片轮播
		//需求：图片过30ms向右滚动一次
		// 步骤：1.获取相应事件源
				// 2.将第一张li元素添加在最后一张li元素的后面
				var newli=sliderul.children[0].cloneNode(true);
				sliderul.appendChild(newli);

				// 3.设置图片向右滑动，设置一个自动播放函数，再添加进定时器
					var timer=setInterval(autoplay,3000);

					function autoplay(){
					key++;
					if(key>sliderLiArr.length-1)
					{
						sliderul.style.left=0;
						key=1;
					}
					fn(sliderul,-key*imgwid);
				}
				// 4.鼠标进入图片，图片停止滑动
				slider.onmouseenter=function(){
					clearInterval(timer);
				}
				slider.onmouseleave=function(){
					timer=setInterval(autoplay,3000);
				}
				// 5。按下向右按钮，图片向右滑动，直接调用自动播放函数
				btnright.onclick=function(){
					autoplay();
				}
				// 6.按下向右按钮，图片向右滑动
				btnleft.onclick=function(){
					key--;
					if(key<0)
					{
						sliderul.style.left=-(sliderLiArr.length-1)*imgwid;
						key=sliderLiArr.length-2;
					}
					fn(sliderul,-key*imgwid);
				}

				//简单动画封装
				function fn(ele,target){
					clearInterval(ele.timer);
					var speed=target>ele.offsetLeft? 30:-30;
					ele.timer=setInterval(function(){
						var val=target-ele.offsetLeft;
						ele.style.left=ele.offsetLeft+speed+'px';
						if(Math.abs(speed)>Math.abs(val))
						{
							ele.style.left=target+'px';
							clearInterval(ele.timer);
						}
					},10)
				}



	
}
