import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection_component';
import CollectionsOverview from '../../components/collections_overview/collections_overview_component';
import Footer from '../../components/footer_component/footer_component';
//import React,{Component} from "react" //components arre no longer needed and the state object is handled by the redux
//import CARS_DATA from "./CARS_DATA"  //no need anymore as we have shifted it to redux
//import CollectionPreview from "../../components/preview_collection/collection_preview_component"
// import { selectCollections } from "../../redux/shop_redux/shop_selector"
// import { createStructuredSelector } from "reselect"
// import { connect } from "react-redux"

const AllCarsPage = ({ match }) => (
  
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    <div>
      <Footer/>
    </div>
  </div>
  
  
);


// {/* <div className="All-cars-page">      

// <Route path={`${match.path}`} exact component={CollectionOverview} />  
// <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>    
                 
// </div> */}


//Changes 1
//We dont need the state objects as we have now let the redux handle this issue

// class Allcars extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             carscollection: CARS_DATA
//         }
//     }

//     render(){
//         const {carscollection} = this.state
//         return (

//         <div className="All-cars-page">
//             {carscollection?.map(({ id, ...carProps }) => (
//           <CollectionPreview key={id} {...carProps} />
//         ))}   
            
//         </div>
//         )
//     }
// }
// 

//Changes 2 
// this time we have furher reduced the code by simply letting the route to handle individual category
// const Allcars = ({collections})=>{
//   return (

//               <div className="All-cars-page">
//                   {collections?.map(({ id, ...carProps }) => (
//                 <CollectionPreview key={id} {...carProps} />
//               ))}   
                  
//               </div>
//               ) 
// }

// const mapToProps = createStructuredSelector({
//   collections: selectCollections

// })


// export default connect(mapToProps)(Allcars)

export default AllCarsPage;
