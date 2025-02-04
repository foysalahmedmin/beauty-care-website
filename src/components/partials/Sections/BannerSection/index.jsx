const BannerSection = ({
  image = "/images/(home-page)/banner-image.jpg",
  title = "",
  description = "",
}) => {
  return (
    <section
      style={{
        backgroundImage: `url('${image}')`,
      }}
      className="relative -z-10 -mt-28 bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/25">
        <div className="dark container relative flex min-h-screen flex-col items-center justify-center py-60 text-center text-title">
          <div className="max-w-[44rem] space-y-6">
            <div className="space-y-4">
              {title && (
                <h1 className="text-4xl uppercase md:text-5xl">{title}</h1>
              )}
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
