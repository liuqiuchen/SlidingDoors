window.onload = function () {
	//容器对象
	var box = document.getElementById('container');

	//获得图片NodeList对象集合
	var imgs = box.getElementsByTagName('img');

	//单张图片的宽度
	var imgWidth = imgs[0].offsetWidth;

	//设置掩藏门体露出的宽度
	var exposeWidth = 160;

	//设置容器总宽度
	var boxWidth = imgWidth + (imgs.length - 1)*exposeWidth;
	box.style.width = boxWidth + 'px';

	//设置每道门的初始位置
	function setImgPos() {
		for(var i = 0;i < imgs.length;i++){
			if(i > 0){
				imgs[i].style.left = imgWidth + exposeWidth*(i - 1) + 'px';
			}
		}
	}
	setImgPos();

	//计算每道门打开应该移动的距离
	var translateDoor = imgWidth - exposeWidth;

	//为每道门绑定事件：
	for(var j = 0;j < imgs.length;j++){
		//使用立即调用函数表达式，为了获取不同的j值
		(function (j) {
			imgs[j].addEventListener('click', function () {
				//先将每道门复位
				setImgPos();

				if(j > 0){
					//每张被点击的图片前面的几张（直到第一张）都要同时移动
					for(var k = j;k > 0;k--) {
						imgs[k].style.left = imgs[k].offsetLeft - translateDoor + 'px';
					}
				}

			}, false);
		})(j);
	}
};














