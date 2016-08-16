//用自执行函数转化为路径信息
imageDatas = (function genImageURL(imageDataArr){

	for(var i = 0,j = imageDataArr.length;i < j;i++){
		
			var singleImageData = imageDataArr[i];

			singleImageData.imageURL = require('../images/' + singleImageData.fileName);

			imageDataArr[i] = singleImageData;

	}
	return imageDataArr;
})(imageDatas);