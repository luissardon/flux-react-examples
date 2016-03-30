/*
 * Modules dependencies
 */

 import React from 'react';
 import Reflux from 'reflux';
 import ImageStore from '../stores/ImageStore';

 let ImageGridItem = React.createClass({
  render: function() {
    return <div className="image">
      <a href={this.props.image.link}>
        <img src={this.props.image.media.m} />
      </a>
    </div>
  }
});

 let ImageGrid = React.createClass({
   mixins : [Reflux.connect(ImageStore, 'imagestore')],

   render : function () {
     if(this.state.imagestore) {
       let i = 0;
       return <div>
         {
           this.state.imagestore.map((image) => {
             return <ImageGridItem key={i++} image={image} />
           })
         }
       </div>
     }

     return <p>No hay imagenes disponibles.</p>
   }
 });

 export default ImageGrid;
