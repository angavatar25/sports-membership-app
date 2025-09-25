import { useUser } from "@supabase/auth-helpers-react";
import { Navigate } from "react-router";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();

  if (user) {
    return <Navigate to="/class-list" replace />;
  }

  return children;
}

export default PublicRoute