// const baseSize = 192; //设计稿宽度%10 比如 1920 

// // 设置rem 函数
// function setRem() {
//     //计算出 比例来 当前分辨率的宽%设计稿宽度
//     const scale = window.screen.width / 8000;
//     // 给根元素设置font-size
//     document.documentElement.style.fontSize =
//         baseSize * Math.min(scale, 2) + "px";
// }
// //生产模式下开启适配功能 否则不开启

//     setRem();
//     window.onresize = function () {
//       setRem();
//     };
