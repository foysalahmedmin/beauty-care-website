import Marquee from "react-fast-marquee";

const CredentialsSection = () => {
  const brands = [
    "/images/brands/1.jpg",
    "/images/brands/2.jpg",
    "/images/brands/3.jpg",
    "/images/brands/4.jpg",
    "/images/brands/5.jpg",
    "/images/brands/6.jpg",
    "/images/brands/7.jpg",
    "/images/brands/8.jpg",
  ];
  return (
    <section className="my-16 md:my-24">
      <div className="container space-y-6">
        <p className="uppercase">Credentials you can trust</p>
        <div>
          <Marquee>
            <div className="container flex items-center px-0">
              {brands?.map((item, index) => (
                <div className="basis-1/6" key={index}>
                  <div className="aspect-square w-full">
                    <img className="opacity-70 grayscale" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
