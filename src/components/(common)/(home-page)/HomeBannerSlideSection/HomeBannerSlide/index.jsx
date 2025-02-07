import { Button } from "@/components/ui/Button";
import { Dot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeBannerSlide = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${data?.image})`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/25">
        <div className="dark container relative flex min-h-screen flex-col items-center justify-center py-60 text-center text-title">
          <div className="max-w-[44rem] space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl">
                {data?.head_1} <br /> {data?.head_2}
              </h1>
              <p>
                {data?.short_description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button className="primary cursor-pointer" variant="default">
                {data?.button_1}
              </Button>
              <Button
                className="hover:bg-primary/75 hover:text-primary-foreground cursor-pointer"
                variant="default"
                onClick={() => navigate(data?.button_2_link)}
              >
                {data?.button_2}
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex w-full flex-wrap items-center justify-around gap-4">
            {data?.tags?.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-2 px-6 py-2 text-sm font-medium uppercase text-title"
              >
                <div className="inline-block rounded-full border border-current">
                  <Dot className="size-4" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlide;
