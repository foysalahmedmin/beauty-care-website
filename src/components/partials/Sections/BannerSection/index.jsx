const BannerSection = ({
  image = "/images/(home-page)/banner-image.jpg",
  title = "",
  description = "",
  imageClassName = "",
}) => {
  return (
    <section className="relative -mt-32">
      <div
        style={{
          backgroundImage: `url('${image}')`,
        }}
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${imageClassName}`}
      />
      <div className="relative z-10">
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
      </div>
    </section>
  );
};

export default BannerSection;
