import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviousArrowContainer = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{ ...style, color: '#333333', left: '10px', zIndex: 1, marginTop: '-4rem', height: '30px', width: '30px'}}
      onClick={onClick}
    />
  );
};

const NextArrowContainer = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style, color: '#333333', right: '10px', zIndex: 1, marginTop: '-4rem', height: '30px', width: '30px' }}
      onClick={onClick}
    />
  );
};

export { PreviousArrowContainer, NextArrowContainer };
