import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Karl Gustav",
    text: "Diese USA-Rundreise war zweifellos eines der unvergesslichsten Abenteuer meines Lebens. Sie ermöglichte es mir, die Vielfalt und Schönheit dieses faszinierenden Landes aus erster Hand zu erleben und Erinnerungen zu schaffen, die ein Leben lang halten werden.",
    img: "https://cdn.pixabay.com/photo/2017/10/08/14/45/usa-2830080_1280.jpg",
  },
  {
    id: 1,
    name: "Helene & Heinz",
    text: "Als älteres Ehepaar haben wir uns auf eine unvergessliche Rundreise durch das faszinierende Land Indien begeben. Von den geschäftigen Straßen Delhis bis zu den ruhigen Backwaters Keralas erkundeten wir die Schönheit, Vielfalt und Spiritualität dieses faszinierenden Landes.",
    img: "https://cdn.pixabay.com/photo/2018/02/25/21/34/temple-3181803_1280.jpg",
  },
  {
    id: 1,
    name: "Carol & Peter",
    text: "Thailand ist so ein beeindruckendes und vielseitiges Land – es hat mich sprichwörtlich in seinen Bann gezogen! Das Land hat noch so viele weitere Höhepunkte, die es zu entdecken gilt, und ich hoffe, dass ich euer Interesse wecken konnte. Wenn ihr nun selbst Lust bekommen habt, an unserer liebevoll gestalteten Tour teilzunehmen, solltet ihr nicht länger zögern.",
    img: "https://cdn.pixabay.com/photo/2016/11/02/16/02/natural-1792047_1280.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              
            </p>
            <h1 className="text-3xl font-bold text-orange-500 shadow-md">Erfahrungsberichte</h1>
            <p className="mt-4 text-xs text-orange-500 shadow-md">
              {" "}
             Auf verschiedenen Reisen rund um die Welt berichten Berge & Meer-Gäste live im Internet von ihren Erlebnissen. Authentischer kann der Einblick in fremde Kulturen nicht sein.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative hover:scale-105">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;