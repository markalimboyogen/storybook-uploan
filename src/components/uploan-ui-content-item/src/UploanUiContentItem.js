// core
import React from 'react';

// styles
import { ContentItem } from '../assets/css/UploanUiContentItem.css';
import ElementContainer from 'uploan-styles';

// components
import UploanUiButton from 'uploan-ui-button';

// media
import NoImage from '../assets/images/uploan-no-image-01.png';

/**
 * Component for content item.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.buttonLabel - Button label for the content item.
 * @param {string} props.content - Content text for the content item.
 * @param {boolean} props.image - URL of image to be used for the content item.
 * @param {string} props.title - Title of content item.
 */
const UploanUiContentItem = ({
  buttonLabel,
  content,
  image,
  title,
}) => (
  <ElementContainer>
    <ContentItem image={image}>
      <div className="content-item__image">
        <img src={image || NoImage} alt={title || ''} />
      </div>
      <div className="content-item__details">
        <h2>{title}</h2>
        <p>{content}</p>
        <UploanUiButton label={buttonLabel} />
      </div>
    </ContentItem>
  </ElementContainer>
);

export default UploanUiContentItem;
