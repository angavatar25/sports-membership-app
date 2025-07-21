import { MapPin, MoveRight } from "lucide-react";
import classNames from "classnames";

import Typography from "../Typography";
import { EnumTypography } from "../../enum/EnumTypography";
import type { EventCardProps } from "../../interface/classInterface";

const ClassCard = (props: EventCardProps) => {
  const { data } = props;

  const { level, date, eventName, location, joinedCount, isWithImage, imageUrl } = data;

  const isTextWhite = isWithImage ? true : false;

  return (
    <div
      onClick={props.onClick}
      className={classNames({
        "rounded-4xl p-6 w-full text-gray-900 relative overflow-hidden": true,
        "bg-green-primary": !isWithImage,
        'bg-cover bg-center bg-black': isWithImage,
      })}
      style={isWithImage ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      {isWithImage && (
        <div className="absolute inset-0 bg-black/30 z-0 rounded-2xl" />
      )}

      <div className="z-10 relative">
        <div className="flex justify-between items-center mb-16">
          <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
            {level}
          </span>
          <span className="bg-white text-red-500 text-xs px-3 py-1 rounded-full">
            {date}
          </span>
        </div>

        <img
          className="absolute right-0 bottom-0"
          src="src/assets/images/tennis-bg.svg" alt=""
        />

        {/* Avatar group + text */}
        <div className="flex items-center gap-2">
          {/* Example Avatars */}
          <div className="flex -space-x-2">
            <img
              className="w-6 h-6 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="avatar1"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="avatar2"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="avatar3"
            />
          </div>
          <span className={classNames({
            "text-sm": true,
            "text-white": isWithImage,
            "text-blue-darkmode": !isWithImage,
          })}>{joinedCount} joined</span>
        </div>

        {/* Event Name and Location */}
        <div className="flex justify-between my-4">
          <Typography
            isTextWhite={isTextWhite}
            variant={EnumTypography.h3}
            className="max-w-[200px]"
          >
            {eventName}
          </Typography>
          <MoveRight className="my-auto" size={14} />
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-white" size={12} />
          <Typography isTextWhite={isTextWhite} variant={EnumTypography.caption}>
            {location}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;