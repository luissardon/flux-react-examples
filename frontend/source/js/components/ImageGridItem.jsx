/*
 * Modules dependencies
 */

import React from 'react';

let ImageGridItem = React.createClass({
 render: function() {
   return <div className="image">
     <a href={this.props.image.link}>
       <img src={this.props.image.media.m} />
     </a>
   </div>
 }
});

export default ImageGridItem;
