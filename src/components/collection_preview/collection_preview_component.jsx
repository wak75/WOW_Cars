import React from 'react';
import './collection-preview.styles.scss';  
// import HorizontalScroll from 'react-scroll-horizontal';
import CollectionItem from '../collection-item/collection-item.component';



const CollectionPreview = ({ title, items }) => {

  return(
  <div>
   <div>
        <h1 className='title'>{title.toUpperCase()}</h1>
    </div>   
    
    <div className='collection-preview'>       
      <div className='preview'>
        {/* {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}  this method is used to send data via destructing the props but now we are using its own component to handle it*/}
          {/* {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))} */}
        {items
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>      
    </div> 
        
  </div>
)}


//why the fuck its not working
// const CollectionPreview = ({ title, items }) => {
//   return (
//     <div className="collection-preview">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <div className="preview">
//         {/* {items.filter((item,index)=>index<4)
//                 .map((item)=>{
//                     return (
//                         <div key={item.id}> {item.name} {item.price}</div>
//                         )
//                 })}         */}


export default CollectionPreview;
