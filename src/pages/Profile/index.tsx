import { useEffect } from "react";
import ProfileBanner from "../../components/Banner/ProfileBanner";
import NavigationTab from "../../components/Tabs/NavigationTab";
import Typography from "../../components/Typography";
import { EnumTypography } from "../../enum/EnumTypography";
import useHandleClass from "../../hooks/useHandleClass";
import useUser from "../../hooks/useUser";
import ClassCard from "../../components/Cards/ClassCard";
import useNavigation from "../../hooks/useNavigate";

const Profile = () => {
  const {
    handleActiveProfileTab,
    activeProfileTab
  } = useHandleClass();

  const {
    userData,
    userBookedSession,
    getUserProfile,
    getUserBookedSession,
  } = useUser();

  const { redirectToPage } = useNavigation();
  

  useEffect(() => {
    getUserProfile();
    getUserBookedSession(activeProfileTab);
  }, [])

  return (
    <div>
      <ProfileBanner
        data={userData}
      />
      <div className="container mx-auto">
        <div className="mt-10">
          <NavigationTab
            handleActiveTab={handleActiveProfileTab}
            currentTab={activeProfileTab}
          />
          <div className="bg-white p-10 rounded-3xl">
            <Typography className="capitalize mb-10" variant={EnumTypography.h2}>
              {activeProfileTab}
            </Typography>
            <div className="grid grid-cols-4 gap-4">
              {userBookedSession.length > 0 && userBookedSession.map((data) => (
                <>
                  <ClassCard
                    onClick={() => redirectToPage(`/class-detail/${data.private_id}`)}
                    key={`class-${data.eventName}`}
                    data={data}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;