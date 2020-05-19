// core
import React from 'react';

// styles
import { ContentList } from '../assets/css/UploanUiContentList.css';
import ElementContainer from 'uploan-styles';

// components
import UploanUiContentItem from 'uploan-ui-content-item';

/**
 * Component for spinner render.
 * 
 * @component
 * @param {Object} props
 * @param {Object[]} props.data - Contains the the list of content items
 * details.
 */
const UploanUiContentList = ({
  data = [],
}) => (
  <ElementContainer>
    <ContentList>
      {data.map(({ content, id, image, title }) => 
        <UploanUiContentItem
          buttonLabel="Read more"
          content={content}
          image={image}
          key={id}
          title={title}
        >
        </UploanUiContentItem>
      )}
    </ContentList>
  </ElementContainer>
);

export default UploanUiContentList;
