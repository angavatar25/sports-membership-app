import { useSession, useUser } from "@supabase/auth-helpers-react"

const supabaseSession = () => {
  const user = useUser();
  const session = useSession();

  return {
    user,
    session,
  }
};

export default supabaseSession;