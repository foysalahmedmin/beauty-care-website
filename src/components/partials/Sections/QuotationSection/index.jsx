import { ArrowLink } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/utils";

const QuotationSection = ({
  quotation,
  author,
  authorTitle,
  image,
  links,
  className,
  ...props
}) => {
  return (
    <section className={cn("my-16 md:my-24", className)} {...props}>
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
          <div>
            <img src={image} alt={author} />
          </div>
          <blockquote className="w-full space-y-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="60"
              className="text-tertiary"
              viewBox="0 0 74 60"
              fill="none"
            >
              <path
                opacity="1"
                d="M0 60V37.4733C0 26.7972 2.53084 18.363 7.59253 12.1708C12.7255 5.97865 20.1755 1.92171 29.9424 0V11.1032C22.6707 13.3808 17.7872 17.2954 15.292 22.847C14.0088 25.7651 13.4741 28.79 13.6879 31.9217H30.4771V60H0ZM72.9653 11.1032C65.7649 13.3096 60.9171 17.2954 58.4219 23.0605C56.996 26.121 56.4257 29.0747 56.7109 31.9217H73.5V60H43.0229V37.4733C43.0229 26.6548 45.6251 18.1851 50.8293 12.0641C56.1049 5.94306 63.4836 1.92171 72.9653 0V11.1032Z"
                fill="currentColor"
              ></path>
            </svg>
            {quotation && (
              <p className="font-roboto-slab text-2xl text-tertiary">
                {quotation}
              </p>
            )}
            {author && (
              <div>
                <strong className="block text-2xl text-tertiary">
                  {author}
                </strong>
                {authorTitle && (
                  <span className="text-2xl text-tertiary">{authorTitle}</span>
                )}
              </div>
            )}
            {links?.length && (
              <ul>
                {links?.map((item, index) => (
                  <li key={index}>
                    <ArrowLink to={item?.link}>{item?.label}</ArrowLink>
                  </li>
                ))}
              </ul>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default QuotationSection;
