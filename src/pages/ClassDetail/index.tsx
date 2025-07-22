import { useEffect } from "react";

import EventBanner from "../../components/Banner/EventBanner";
import ClassCard from "../../components/Cards/ClassCard";
import ClassDetailCard from "../../components/Cards/ClassDetailCard";
import Typography from "../../components/Typography";
import { EnumTypography } from "../../enum/EnumTypography";
import useHandleClass from "../../hooks/useHandleClass";
import { useParams } from "react-router";
import useNavigation from "../../hooks/useNavigate";
import { MoneyFormat } from "../../helper/MoneyFormat";

const ClassDetail = () => {
  const { id: eventId } = useParams();

  const { redirectToPage } = useNavigation();

  const { classlist, classDetail, getClassList, getClassDetail } = useHandleClass();

  const {
    eventName,
    joinedCount,
    location,
    desc,
    price,
    address,
    level,
    time,
  } = classDetail;

  const BannerData = {
    eventName,
    joinedCount,
    location,
    avatarUrls: [
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/men/20.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
    ],
  };

  const cardData = {
    price: MoneyFormat(price),
    address,
    level,
    time,
  };

  useEffect(() => {
    if (classlist.length === 0) {
      getClassList();
    }

    if (eventId) {
      getClassDetail(eventId);
    }
  }, [])
  return (
    <div className="container mx-auto">
      <div className="pt-32 mb-20">
        <EventBanner
          data={BannerData}
        />
      </div>
      <div className="my-10">
        <Typography
          className="mb-10"
          variant={EnumTypography.h2}
        >
          About
        </Typography>
        <div className="flex justify-between">
          <div
            className="leading-relaxed space-y-4 max-w-[500px]"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          <ClassDetailCard
            data={cardData}
          />
        </div>
      </div>
      <div className="mb-20">
        <Typography
          className="mb-10"
          variant={EnumTypography.h2}
        >
          Class Recommendations
        </Typography>
        <div className="grid grid-cols-4 gap-4">
          {classlist.length > 0 && classlist.map((data) => (
            <ClassCard
              onClick={() => redirectToPage(`/class-detail/${data.id}`)}
              key={`class-${data.eventName}`}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClassDetail;