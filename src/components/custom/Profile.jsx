import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("is_login");
    sessionStorage.removeItem("access_token");
    navigate("/auth/login");
  };
  return (
    <Button variant="outline" className="w-full" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Profile;
