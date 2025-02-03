import { cn } from "@/lib/utils";

export const TeamCard = ({ className, item, ...props }) => {
  const { image, name, title, description } = item;
  return (
    <div
      className={cn("flex w-full flex-col rounded-3xl bg-card", className)}
      {...props}
    >
      {image && (
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="relative size-full rounded-3xl object-cover object-center"
            src={image}
            alt=""
          />
        </div>
      )}
      <div className="space-y-6 px-4 py-6">
        <div>
          {title && (
            <strong className="block font-normal uppercase text-foreground">
              {title}
            </strong>
          )}
          {name && <p className="uppercase">{name}</p>}
        </div>
        {description && <div className="">{description}</div>}
      </div>
    </div>
  );
};
