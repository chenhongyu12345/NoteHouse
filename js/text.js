window.onload = function () {
    ;

    var dropright = document.getElementById("dropright")
    var droprightLi = dropright.getElementsByTagName("li")
    for (var i = 0; i < droprightLi.length; i++) {
        droprightLi[i].onmouseover = function () {
            this.classList.add("show")
        }
        droprightLi[i].onmouseout = function () {
            this.classList.remove("show")
        }
    }
    // 轮播区域的js代码
    var carousel = document.getElementById("carousel");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var image = document.getElementById("image");
    var numList = document.getElementById("number").getElementsByTagName("li")
    var links = document.getElementById("links")
    //  初始化准备
    var add = 1;
    var arr = ['http://www.baidu.com', 'http://www.jd.com', 'http://www.taobao.com', 'http://www.suning.com', 'http://www.bilibili.com']
    links.href = arr[0];
    image.src = "./images/add01.jpg"
    numList[0].style.background = "#fff"
    //  鼠标移入显示
    carousel.onmouseover = function () {
        left.style.display = "block";
        right.style.display = "block";
        clearInterval(lun);
    }
    carousel.onmouseout = function () {
        left.style.display = "none";
        right.style.display = "none";
        carouselLb();
    }
    //轮播切换图片
    function carouselLb() {
        lun = setInterval(function () {
            add = add + 1;
            if (add > 5) {
                add = 1;
            }
            image.src = "./images/add0" + add + ".jpg";
            var x = add - 1;
            links.href = arr[add - 1]
            for (var i = 0; i < numList.length; i++) {
                numList[i].style.background = "#3e3e3e";
                if (x == i) {
                    numList[i].style.background = "#fff";
                }
            }
        }, 3000);
    }
    carouselLb();
    //点击左右箭头切换图片
    left.onclick = function () {
        add = add - 1;
        if (add < 1) {
            add = 5;
        }
        image.src = "./images/add0" + add + ".jpg"
        links.href = arr[add - 1]
        var x = add - 1;
        for (var i = 0; i < numList.length; i++) {
            numList[i].style.background = "#3e3e3e";
            if (x == i) {
                numList[i].style.background = "#fff";
            }
        }
    }
    right.onclick = function () {
        add = add + 1;
        if (add > 5) {
            add = 1;
        }
        image.src = "./images/add0" + add + ".jpg"
        links.href = arr[add - 1]
        var x = add - 1;
        for (var i = 0; i < numList.length; i++) {
            numList[i].style.background = "#3e3e3e";
            if (x == i) {
                numList[i].style.background = "#fff";
            }
        }
    }
    //鼠标滑过li的时候切换图片
    for (var i = 0; i < numList.length; i++) {
        numList[i].onmouseover = function () {
            add = this.innerHTML;
            // console.log(add)
            image.src = "./images/add0" + add + ".jpg"
            links.href = arr[add - 1]
            var x = add - 1;
            for (var i = 0; i < numList.length; i++) {
                numList[i].style.background = "#3e3e3e";
                if (x == i) {
                    numList[i].style.background = "#fff";
                }
            }
        }
    }
}

