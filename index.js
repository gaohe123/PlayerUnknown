var index = 0;  //刚开始滑动次数为0
var count = document.querySelectorAll('.wrapper section').length;  //总共可滑动的次数
var wrapper = document.querySelector('.wrapper');   //包裹section的大盒子
var firstPlus = document.querySelector('#firstPlus');  //第一个加号，#(id)是唯一的，所以用#就不用加层级关系了
var real = document.querySelector('.wrapper .real');    //写实体验
var realBG = document.querySelector('.wrapper .real-bg');   //第二页的背景

var bigWorld = document.querySelector('.wrapper .big-world');   //第三页的大世界
var secondPlus = document.querySelector('#secondPlus'); //第二页的加号
var bigBG = document.querySelector('.wrapper .big-world-bg');   //大世界的背景

var weather = document.querySelector('.weather-options .weather');
var terrain = document.querySelector('.weather-options .terrain');
var terrainBox = document.querySelector('.terrain-box');    //地形盒子
var weatherBox = document.querySelector('.weather-box');    //天气盒子

var thirdPlus = document.querySelector('#thirdPlus'); //第四页的加号
var drive = document.querySelector('.drive');   //组队开车文字盒子
var driveBox = document.querySelector('.drive-box');    //开车盒子

var vehicles = document.querySelectorAll('.vehicle img');   //获取所有的图片
var vehiclesOptions = document.querySelectorAll('.drive-box .footer div');  //获取所有的选项

// 遍历所有的选项
vehiclesOptions.forEach(function (item, index) {
    item.onclick = function () {
        // 遍历所有的选项
        vehiclesOptions.forEach((citem, cindex) => {
            // 将不是当前下标的选项去掉选中状态
            // 将是当前下标的选项加上选中状态
            if (cindex === index) {
                citem.classList.add('on');
            } else {
                citem.classList.remove('on');
            }
        });

        // 遍历所有的交通工具
        vehicles.forEach((citem, cindex) => {
            // citem是每一个交通工具
            // cindex 是每一个交通工具的下标
            if (cindex === index) {
                // 如果当前点击的下标和交通工具的下标一致，就加上显示状态
                citem.classList.add('show');
            } else {
                // 如果下标不一致就去掉显示状态
                citem.classList.remove('show');
            }
        });
    }
});

// 布尔类型，只有 true false
var scrolling = false;  //是否滚动中

thirdPlus.onclick = function () {
    drive.classList.add('move');
    driveBox.classList.add('show');
}

// 天气点击的时候
weather.onclick = function () {
    weather.classList.add('on');
    terrain.classList.remove('on');
    weatherBox.classList.add('on');
    terrainBox.classList.remove('on');
}

terrain.onclick = function () {
    terrain.classList.add('on');
    weather.classList.remove('on');
    terrainBox.classList.add('on');
    weatherBox.classList.remove('on');
}

window.onmousewheel = function (e) {
    if (scrolling) {
        return;
    }
    if (e.deltaY > 0) {
        // 向下滚动
        if (index == count - 1) {
            return;
        }
        index = index + 1;
    }
    else {
        // 向上滚动
        if (index == 0) {
            return;
        }
        index = index - 1;
    }
    wrapper.style.marginTop = -index * innerHeight + 'px';
    scrolling = true;
    setTimeout(() => {
        scrolling = false;
    }, 900);
}

// 第一个加号的单击事件
firstPlus.onclick = function () {
    real.classList.add('move-left');
    realBG.classList.add('fade-in');
}

// 第二个加号的单击事件
secondPlus.onclick = function () {
    bigWorld.classList.add('big-world-move');
    bigBG.classList.add('big-world-show');
}