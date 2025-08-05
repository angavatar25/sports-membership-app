import classNames from "classnames";
import { MapPin } from "lucide-react";

import { EnumTypography } from "@/enum/EnumTypography";
import Typography from "@/components/Typography";

type BaseProps = {
  eventName: string;
  joinedCount: string;
  location: string;
  avatarUrls: string[];
};

type WithImage = {
  onClick?: any;
  data: BaseProps & {
    isWithImage: true;
    imageUrl: string;
  };
};

type WithoutImage = {
  onClick?: any;
  data: BaseProps & {
    isWithImage: false;
    imageUrl?: string;
  };
};

export type BannerProps = WithImage | WithoutImage;

const EventBanner = (props: BannerProps) => {
  const { data } = props;
  return (
    <div className="relative bg-[#ff5b5b] rounded-4xl p-6 md:p-8 w-full text-white overflow-hidden flex flex-col gap-6">
      {/* Overlay logo (fake graphic element) */}

      {/* Title */}
      <Typography
        isTextWhite={true}
        variant={EnumTypography.h2}
        className="max-w-[800px]"
      >
        {data.eventName}
      </Typography>

      {/* Joined avatars */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {/* Example Avatars */}
          <div className="flex -space-x-2">
            {data.avatarUrls.slice(0, 3).map((url, idx) => (
              <img
                key={idx}
                className="w-8 h-8 rounded-full"
                src={url}
                alt={`user-${idx}`}
              />
            ))}
          </div>
          <span className={classNames({
            "text-sm": true,
            "text-white": !data.isWithImage,
            "text-blue-darkmode": data.isWithImage,
          })}>{data.joinedCount} already joined</span>
        </div>
        <div className="flex text-sm my-auto gap-2">
          <MapPin size={12} className="my-auto" />
          {data.location}
        </div>
      </div>
    </div>
  )
}
export default EventBanner