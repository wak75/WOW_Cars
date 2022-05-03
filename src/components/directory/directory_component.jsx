import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import MenuItem from '../menu_item_component/menu_item_component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';


// const Directory =({sections}) =>{   
//   return(
//     <div className='directory-menu'>
//           {sections?.map(({id, ...sectionProps})=>{
//               return (<MenuItem key={id} {...sectionProps}/>)
//           })}

//       </div>
//   )
// }

// const maptoProps= createStructuredSelector({
//   section:selectDirectorySections
// })


// export default connect(maptoProps)(Directory)



// constructor(){
//     super()

//     this.state={
//         section: [
//             {
//               title: 'Micro',
//               imageUrl: 'https://images.pexels.com/photos/7290407/pexels-photo-7290407.jpeg?cs=srgb&dl=pexels-mike-7290407.jpg&fm=jpg',
//               id: 1,
//               linkUrl:"micro"
//             },
//             {
//               title: 'Sedan',
//               imageUrl: 'https://images.unsplash.com/photo-1614218018881-61a0a8019771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80',
//               id: 2,
//               linkUrl:""
//             },
//             {
//               title: 'SUV',
//               imageUrl: 'https://images.unsplash.com/photo-1621695644555-5fe0f2f87939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//               id: 3,
//               linkUrl:""
//             },
//             {
//               title: 'Sportz',
//               imageUrl: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80',
//               size: 'large',
//               id: 4,
//               linkUrl:""
//             },
//             {
//               title: 'Luxury',
//               imageUrl: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
//               size: 'large',
//               id: 5,
//               linkUrl:""
//             }
//           ]
//     }
// }

// we now longer need it as we are using redux to handel the state for us


const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...allotherSectionProps }) => (
      <MenuItem key={id} {...allotherSectionProps} />
    ))}
  </div>
);

const mapToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapToProps)(Directory);

