import { BadgeCheck, Pencil } from "lucide-react";
import { EnumButton } from "../../enum/EnumButton";
import Button from "../Button";
import type { TUserData } from "../../interface/userInterface";

interface TProfileData {
  data: TUserData
}

const ProfileBanner = (props: TProfileData) => {
  const { data } = props;
  const { profileImage, name, level, privatesCount, tournamentsCount } = data;

  return (
    <div className="bg-red-primary text-white px-6 pt-32 pb-10 shadow-inner">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Profile Image */}
          <img
            src={profileImage}
            alt={name}
            className="w-20 h-20 shadow-md rounded-full object-cover"
          />

          {/* Name & Stats */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-2 mb-1">
              <h2 className="text-xl font-semibold">{name}</h2>
              <span className="bg-white w-fit capitalize text-black text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                <BadgeCheck size={14} className="text-gray-600" />
                {level}
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-1 border-l-[1px] pl-10 border-l-white-primary">
              <div className="text-center">
                <p className="text-xl font-semibold">{privatesCount ?? "-"}</p>
                <p className="text-sm text-white/80">Privates</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">{tournamentsCount ?? "-"}</p>
                <p className="text-sm text-white/80">Tournaments</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          text="Edit Profile"
          isWithIcon={true}
          type={EnumButton.SECONDARY}
          icon={<Pencil size={14} />}
        />
      </div>
    </div>
  )
}

export default ProfileBanner