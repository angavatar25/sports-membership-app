import { EnumTable } from "../enum/EnumTable"
import { supabase } from "../supabase-client"

import { useUserStore } from "../store/useUserStore"

const user_id = "dc01b75f-796c-483e-88fa-44d655e6cc8c";

const userUser = () => {
  const userData = useUserStore((state) => state.userData);
  const userBookedSession = useUserStore((state) => state.bookedSession);

  const setUserData = useUserStore((state) => state.setUserData);
  const setUserBookedSession = useUserStore((state) => state.setUserBookedSession);

  const getUserProfile = async () => {
    const { data } = await supabase
      .from("user_data_with_booking_count")
      .select('*')
      .eq('user_id', user_id)
      .single();

    if (data) {
      const serialised = {
        ...data,
        privatesCount: data.privatescount,
      }

      delete serialised.privatescount;

      setUserData(serialised);
    }
  };

  const getUserBookedSession = async (session: string) => {
    const TableData: any = {
      private: EnumTable.PrivateBookedSession
    };

    const { data } = await supabase
      .from("user_booked_private")
      .select("*")
      .eq("user_id", user_id)
    
    if (Array.isArray(data) && data.length > 0) {
      setUserBookedSession(data);
    }
  }

  return {
    userData,
    userBookedSession,
    getUserProfile,
    getUserBookedSession,
  }
}

export default userUser