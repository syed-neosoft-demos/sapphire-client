import {
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  useEffect(() => {
    const url = window.location.href;
    if (url.includes("/dashboard")) setActive("dashboard");
    else if (url.includes("/setting")) setActive("setting");
    else if (url.includes("/pricing")) setActive("pricing");
    else if (url.includes("/help")) setActive("help");
    else if (url.includes("/product")) setActive("product");
  }, [window.location.href]);

  const handleNavigate = async (url) => {
    navigate(`/panel/${url}`);
  };
  return (
    <ul>
      <li
        className={`side-menu ${active === "dashboard" && "bg-violet-100"}`}
        onClick={() => handleNavigate("dashboard")}
      >
        <HomeIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Dashboard</p>
      </li>
      <li
        className={`side-menu ${active === "setting" && "bg-violet-100"}`}
        onClick={() => handleNavigate("setting")}
      >
        <Cog6ToothIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Settings</p>
      </li>
      <li
        className={`side-menu ${active === "product" && "bg-violet-100"}`}
        onClick={() => handleNavigate("product")}
      >
        <QuestionMarkCircleIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Products</p>
      </li>
      <li
        className={`side-menu ${active === "help" && "bg-violet-100"}`}
        onClick={() => handleNavigate("help")}
      >
        <ChatBubbleLeftRightIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Help</p>
      </li>
      <li
        className={`side-menu ${active === "pricing" && "bg-violet-100"}`}
        onClick={() => handleNavigate("pricing")}
      >
        <CurrencyDollarIcon className="h-8 w-8 pr-2 text-gray-600" />
        <p className="secondary-radiant">Pricing</p>
      </li>
    </ul>
  );
};

export default Menu;
