window.onload = function () {
//动画函数
    function animate(ele, target) {
        clearInterval(ele.timer);
        var speed = target > ele.offsetLeft ? 10 : -10;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + 'px';
            if (Math.abs(speed) > Math.abs(val)) {
                ele.style.left = target + 'px';
                clearInterval(ele.timer);
            }
        }, 10)
    }

    // 获取时间源及相关函数
    var all = document.getElementById("box");
    var screen = all.firstElementChild || all.firstChild;
    var imgWidth = screen.offsetWidth;
    var ul = screen.firstElementChild || screen.firstChild;
    var ol = screen.children[1];
    var div = screen.lastElementChild || screen.lastChild;
    var spanArr = div.children;
    //复制第一张图片所在的li,添加到ul最后面
    var newli = ul.children[0].cloneNode(true);
    ul.appendChild(newli);
    //给ol中添加li,ul的个数减一个，并且高亮显示第一个
    for (i = 0; i < ul.children.length - 1; i++) {
        var olnewli = document.createElement("li");
        olnewli.innerHTML = i + 1;
        ol.appendChild(olnewli);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "on";
    //鼠标放在ol的li上切换图片
    for (var i = 0; i < olLiArr.length; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for (j = 0; j < olLiArr.length; j++) {
                olLiArr[j].className = " ";
            }
            animate(ul, -this.index * imgWidth);
            this.className = "on"
            key = this.index;
            square = this.index;
        }
    }
    //添加定时器，需要定义两个值，一个记录图片，一个记录小圆点
    var timer = setInterval(autoplay, 3000);
    var key = 0;
    square = 0;
    function autoplay() {
        key++;
        if (key > olLiArr.length) {
            ul.style.left = 0;
            key = 1;
        }
        animate(ul, -key * imgWidth);
        square++;
        if (square > olLiArr.length - 1) {
            square = 0;
        }
        for (var i = 0; i < olLiArr.length; i++) {
            olLiArr[i].className = " ";
        }
        olLiArr[square].className = "on";
    }

    //左右切换图片，鼠标放上去显示按钮，清除定时器，移开隐藏按钮，恢复定时器
    all.onmouseover = function () {
        clearInterval(timer);
        div.style.display = "block";
    }
    all.onmouseleave = function () {
        timer = setInterval(autoplay, 3000);
        div.style.display = "none";
    }
    spanArr[0].onclick = function () {
        key--;
        if (key < 0) {
            ul.style.left = -imgWidth * (olLiArr.length) + 'px';
            key = olLiArr.length - 1;
        }
        animate(ul, -key * imgWidth);
        square--;
        if (square < 0) {
            square = olLiArr.length - 1;
        }
        for (var i = 0; i < olLiArr.length; i++) {
            olLiArr[i].className = " ";
        }
        olLiArr[square].className = "on";
    }
    spanArr[1].onclick = function () {
        autoplay();
    }
}