import { useState, useEffect, FC, ReactChild } from 'react';
import { Carousel } from 'react-responsive-carousel';

type Props = {
  children: ReactChild[] | undefined;
};

const CarouselComponent: FC<Props> = ({ children }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={windowSize.innerWidth < 1000 ? 100 : 36}>
      {children}
    </Carousel>
  );
};
export default CarouselComponent;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
