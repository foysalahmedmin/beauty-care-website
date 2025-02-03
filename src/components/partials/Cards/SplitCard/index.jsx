import { cn } from "@/lib/utils";

export const SplitCard = ({ className, item, ...props }) => {
  const { image, title, description, link } = item;
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-6 rounded-3xl bg-card p-8 md:flex-row-reverse md:gap-16 md:p-16 odd:md:flex-row",
        className,
      )}
      {...props}
    >
      {image && (
        <div className="-mt-16 aspect-[5/6] w-full overflow-hidden md:-mt-32 md:flex-1">
          <img
            className="relative size-full rounded-3xl object-cover object-center"
            src={image}
            alt=""
          />
        </div>
      )}
      <div className="space-y-6 md:flex-1">
        <div className="">{title && <h2>{title}</h2>}</div>
        {description && <div className="mt-4 text-lg">{description}</div>}
        <a
          href={link || "#"}
          className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary/90"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
