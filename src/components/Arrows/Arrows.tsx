import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviousArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{ ...style, color: '#ff9900', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style, color: '#ff9900', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export { PreviousArrow, NextArrow };
