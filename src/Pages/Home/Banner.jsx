import Marquee from "react-fast-marquee";
const Banner = () => {
  return (
    <div className="carousel w-full  h-[700px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tZsgKVy/pexels-markus-spiske-168866.jpg"
          className="w-full rounded-b-xl"
        />
        <div className="text-center absolute flex items-center h-full rounded-b-xl  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-10 w-1/2 pl-12  ">
            <h2 className="text-6xl font-bold ">
              Unbeatable Prices! Discover our wide range of toys
            </h2>
            <Marquee>
              <span className="title-text tracking-wider">
                {" "}
                where playtime never ends with our wide selection of fun and
                interactive toys for all ages❤️{" "}
              </span>
            </Marquee>
            <div className="text-center">
              <button className="btn btn-success btn-outline mr-5">
                Discover All Toy's
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className=" cursor-pointer font-bold text-lg ml-5 text-primary"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="cursor-pointer font-bold text-lg mr-5 text-primary"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/WsqgZ0j/pexels-cottonbro-studio-3661389.jpg"
          className="w-full rounded-b-xl"
        />
        <div className="text-center absolute flex items-center h-full rounded-b-xl  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-10 w-1/2 pl-12  ">
            <h2 className="text-6xl font-bold">
              Affordable prices for endless playtime enjoyment
            </h2>
            <Marquee>
              <span className="title-text tracking-wider">
                {" "}
                where playtime never ends with our wide selection of fun and
                interactive toys for all ages❤️{" "}
              </span>
            </Marquee>
            <div className="text-center">
              <button className="btn btn-success btn-outline mr-5">
                Discover All Toy's
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className=" cursor-pointer font-bold text-lg ml-5 text-primary"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="cursor-pointer font-bold text-lg mr-5 text-primary"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/C0QxXNz/pexels-pixabay-255514.jpg"
          className="w-full rounded-b-xl"
        />
        <div className="text-center absolute flex items-center h-full rounded-b-xl  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-10 w-1/2 pl-12  ">
            <h2 className="text-6xl font-bold">Where playtime never ends</h2>
            <Marquee>
              <span className="title-text tracking-wider">
                {" "}
                where playtime never ends with our wide selection of fun and
                interactive toys for all ages❤️{" "}
              </span>
            </Marquee>
            <div className="text-center">
              <button className="btn btn-success btn-outline mr-5">
                Discover All Toy's
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className=" cursor-pointer font-bold text-lg ml-5 text-primary"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="cursor-pointer font-bold text-lg mr-5 text-primary"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/HphgsmS/pexels-kha-ruxury-860538.jpg"
          className="w-full rounded-b-xl"
        />
        <div className="text-center absolute flex items-center h-full rounded-b-xl  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <div className="text-white space-y-10 w-1/2 pl-12  ">
            <h2 className="text-6xl font-bold">
              Where playtime dreams come true
            </h2>
            <Marquee>
              <span className="title-text tracking-wider">
                {" "}
                where playtime never ends with our wide selection of fun and
                interactive toys for all ages❤️{" "}
              </span>
            </Marquee>
            <div className="text-center">
              <button className="btn btn-success btn-outline mr-5">
                Discover All Toy's
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className=" cursor-pointer font-bold text-lg ml-5 text-primary"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="cursor-pointer font-bold text-lg mr-5 text-primary"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
