/*
 * Modules dependencies
 */

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';
import ImageGridItem from './ImageGridItem.jsx';

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
