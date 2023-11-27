import Slider from './Slider';

import slide1 from "../assets/gun.png"

const Images = () => {
  const images = [slide1];

  return (
    <div className="pt-12">
      <Slider images={images} />
    </div>
  );
};

export default Images;
