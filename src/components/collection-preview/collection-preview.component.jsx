import React from 'react';
import { useHistory } from 'react-router-dom';

import { default as CollectionItem } from '../collection-item/collection-item.container';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, match }) => {
  const history = useHistory();

  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
};

export default CollectionPreview;
