import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Slider from 'react-slick';
import HomeSection from './HomeSection/HomeSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsSection from './ProjectSection/ProjectSection';
import SkillSection from './SkillSection/SkillSection';
import Footer from './Footer';

interface SimpleSliderProps {
  onSectionChange: (index: number) => void;
}

const SimpleSlider = forwardRef((props: SimpleSliderProps, ref) => {
  const { onSectionChange } = props;
  const sliderRef = useRef<Slider>(null);

  useImperativeHandle(ref, () => ({
    slickGoTo: (index: number) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(index);
      }
    },
  }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      onSectionChange(newIndex);
    },
    adaptiveHeight: false,
  };

  return (
    <>

    <Slider ref={sliderRef} {...settings}>
      <div>
        <HomeSection />
      </div>
      <div>
        <ProjectsSection/>
      </div>
      <div>
        <SkillSection />
      </div>
      <div>
        <ContactSection />
      </div>
    </Slider>

    </>
  );
});

SimpleSlider.displayName = 'SimpleSlider';

export default SimpleSlider;
