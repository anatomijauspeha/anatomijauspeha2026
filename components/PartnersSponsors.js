"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnersSponsors() {

  const images = [
    "/sponsors_logos/slikaj_i_cirkaj.png",
    "/sponsors_logos/the_padel2.png",
    "/sponsors_logos/swisslion.png",
    "/sponsors_logos/protein_bomb.png",
    "/sponsors_logos/rajsic_fizio.png",
    "/sponsors_logos/sweets1.png",
    "/sponsors_logos/coca_cola.png",
    "/sponsors_logos/dione.png",
    "/sponsors_logos/media_craft.png",
    "/sponsors_logos/kampster1.png",
    "/sponsors_logos/yolo_rent.png",
    "/sponsors_logos/waterdrop.png",
    "/sponsors_logos/rakija_bikicki.png",
    "/sponsors_logos/foxy.png",
    "/sponsors_logos/floristicki.png",
    "/sponsors_logos/rafting_tara.png",
    "/sponsors_logos/red_bull.png",
    "/sponsors_logos/pekara_misic.png",
    "/sponsors_logos/coffee_talk.png",
    "/sponsors_logos/vitorog.png",
    "/sponsors_logos/elektromontaza.png",
    "/sponsors_logos/almost_original.png",
    "/sponsors_logos/more_srece.png",
    "/sponsors_logos/360photobooth.png",
    "/sponsors_logos/grid.png", 
    "/sponsors_logos/artis_jet.png", 
    "/sponsors_logos/ntp1.png", 
    "/sponsors_logos/ld_detailing.png",
    "/sponsors_logos/univerzal1.png", 
    "/sponsors_logos/cineplexx.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section className="w-full h-auto flex flex-col gap-12 md:gap-20 bg-black pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 relative z-0 -mt-16">
      <h1 className="w-full text-center text-[#51b957] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
        PRIJATELJI KONFERENCIJE
      </h1>
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-5xl rounded-3xl">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="bg-white w-full h-[200px] sm:h-[300px] lg:h-[400px] object-contain p-2 lg:p-4"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}


