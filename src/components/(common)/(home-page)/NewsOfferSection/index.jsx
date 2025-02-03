const NewsOfferCard = ({ item }) => {
  const { title, tags, image } = item;
  return (
    <div>
      <div className="aspect-[6/4] w-full overflow-hidden border">
        <img
          className="size-full object-cover object-center"
          src={image}
          alt=""
        />
      </div>
      <div className="space-y-2 py-4">
        <div className="flex flex-wrap items-center gap-1">
          {tags?.map((tag, index) => (
            <div
              key={index}
              className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground"
            >
              {tag}
            </div>
          ))}
        </div>
        <h4>{title}</h4>
        <hr />
        <span className="block cursor-pointer">Read More</span>
      </div>
    </div>
  );
};

const NewsOfferSection = () => {
  const data = [
    {
      title: "Liposuction: What It Is, Surgery, Recovery & Results",
      tags: ["Treatments & Procedures"],
      image: "/images/(home-page)/details.jpg",
    },
    {
      title: "Sculpting Beauty: The Art of Face and Body Contouring",
      tags: ["Inspiration"],
      image: "/images/(home-page)/details.jpg",
    },
    {
      title: "Best Skin Treatments for Tight and Glowing Skin",
      tags: ["News"],
      image: "/images/(home-page)/details.jpg",
    },
  ];
  return (
    <section className="my-16 md:my-24">
      <div className="container space-y-8">
        <div>
          <h2 className="text-center text-4xl uppercase">
            Latest News & Offers
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.map((item, index) => (
            <NewsOfferCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsOfferSection;
