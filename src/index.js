import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Wrap from './components/Wrap';
import Recommond from './components/Recommond';






var App = React.createClass ({
  render:function() {

  	var recomImageFigures = [],
  		imgFigures = [];

  	imageDatas.forEach(function(value){

		imgFigures.push(<ImageFigure data={value} />);
  		recomImageFigures.push(<RecomImageFigure data={value} />);

  	});

    return (
    <div>
      	<div className="classIcon" >
      		<ul>
      			{imgFigures}
      		</ul>
      	</div>
      	<div className="default" >
      		  {recomImageFigures}
      	</div>
    </div>
    );
  }
});


// Render the main component into the dom
ReactDOM.render(<Wrap />, document.getElementById('app'));
