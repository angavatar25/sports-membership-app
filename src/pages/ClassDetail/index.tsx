import EventBanner from "../../components/Banner/EventBanner";
import ClassCard from "../../components/Cards/ClassCard";
import ClassDetailCard from "../../components/Cards/ClassDetailCard";
import Typography from "../../components/Typography";
import { EnumTypography } from "../../enum/EnumTypography";

const cardData = {
  eventName: "Flow Padel X Padel Guard | 2h2c Tuesday - Beginner & Upper | Winner",
  joinedCount: 10,
  location: "Jakarta, Indonesia",
  avatarUrls: [
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/men/20.jpg",
    "https://randomuser.me/api/portraits/women/30.jpg",
  ],
  isWithImage: false,
}

const ClassDetail = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-32 mb-20">
        <EventBanner
          data={cardData}
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
          <div className="leading-relaxed space-y-4">
            <p>
              <span className="font-semibold">Doubles Game Beginner - Intermediate</span><br />
              Have to mostly be able to serve and rally
            </p>

            <p>
              <span className="font-semibold">Venue:</span> Ultra Dome Tennis and Padel<br />
              <span className="font-semibold">Court:</span> VIP Tennis 1 and 2<br />
              New balls (Dunlop AO) and ballboys provided.
            </p>

            <p>
              Request to join and chat us to confirm your spot.<br />
              H-1 not allowed to cancel but you can replace your spot with someone else.
            </p>

            <p>
              Follow <span className="font-semibold">@ultradome</span> on Instagram ✨<br />
              Let’s have fun and see you on court 🎾
            </p>
          </div>
          <ClassDetailCard/>
        </div>
      </div>
      <div className="mb-20">
        <Typography
          className="mb-10"
          variant={EnumTypography.h2}
        >
          Class Recommendations
        </Typography>
        <div className="grid grid-cols-4">
        <ClassCard
          onClick={() => console.log('/class-detail/1')}
          data={{
            level: "Intermediate",
            date: "30 July 2025",
            eventName: "Urban Tennis Bash",
            location: "Bandung, Indonesia",
            joinedCount: 17,
            isWithImage: false,
          }}
        />
        </div>
      </div>
    </div>
  )
}

export default ClassDetail;