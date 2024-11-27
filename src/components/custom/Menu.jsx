import { HomeIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("/dashboard")) setActive("home");
    else if (url.includes("/claim")) setActive("claim");
  }, [window.location.href]);

  const handleNavigate = async (url) => {
    navigate(`/panel/${url}`);
  };
  return (
    <ul>
      <li
        className={`side-menu ${active === "home" && "bg-violet-100"}`}
        onClick={() => handleNavigate("home")}
      >
        <HomeIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Dashboard</p>
      </li>
      <li
        className={`side-menu ${active === "claim" && "bg-violet-100"}`}
        onClick={() => handleNavigate("claim")}
      >
        <DocumentCheckIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Claim</p>
      </li>
    </ul>
  );
};

export default Menu;
