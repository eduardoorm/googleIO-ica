import React from "react";

const ItemCarousel = ({txtComment,name,rol,color,image}) => {

  return (
    <div className="swiper-slide">
      <div className="containerSwiperItem" style={{backgroundColor:color}}>

        <div style={{backgroundImage:`url(${image})`}} className="imgSpeakerSwiperItem"></div>
        <div className="containerComentSpeakerItem">
          <span className="txtComentSpeakerItem">
          {txtComment} 
          </span>
          <br />
          <span className="nameSpeakerSwiper">{name}</span>
          <br />
          <span className="rolSpeakerSwiper">{rol}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
