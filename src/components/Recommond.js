require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import common from 'common.js';

//获取图片json
var imageDatas = require('../data/recomDatas.json');

var RecomImageFigure = React.createClass({
	render:function(){
		return (
			<li>
        <h1>
          <span class="span1">{this.props.data.title}</span>
          <a href={this.props.data.URL}><span class="span2">更多···</span></a>
          <div class="clearfix"></div>
        </h1>
        <a href={this.props.data.URL}><img src={this.props.data.imageURL} /></a>
      </li>
		);
	}
});



module.exports = Wrap;

