require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片json
var imageDatas = require('../data/imagesData.json');

//用自执行函数转化为路径信息
function genImageURL(imageDataArr){

	for(var i = 0,j = imageDataArr.length;i < j;i++){

      var singleImageData = imageDataArr[i];

      singleImageData.imageURL = require('../images/' + singleImageData.fileName);

      imageDataArr[i] = singleImageData;
	}
	return imageDataArr;

}

imageDatas = genImageURL(imageDatas);





var ImageFigure = React.createClass({
	render:function(){
		return (
			<li>
				<a href={this.props.data.URL}>
        		<span><img src={this.props.data.imageURL}/></span>
        		<p className="clearfix">{this.props.data.title}</p>
        	</a>
			</li>
		);
	}
});

var Wrap = React.createClass ({
  render:function() {

  	var imgFigures = [];

  	imageDatas.forEach(function(value,index){

  		imgFigures.push(<ImageFigure key={index} data={value} />);

  	});
    return (
    <div>
      	<div className="classIcon clearfix" >
      		<ul>
      			{imgFigures}
      		</ul>
      	</div>
      	<div className="list" >
      		 
      	</div>
    </div>
    );
  }
});

module.exports = Wrap;

