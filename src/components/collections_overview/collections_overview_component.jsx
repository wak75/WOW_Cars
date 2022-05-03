import React from 'react';
import './collections_overview_styles.scss';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection_preview/collection_preview_component';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';




const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapToProps)(CollectionsOverview);
