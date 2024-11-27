import Menu from "@/components/custom/Menu";
import Footer from "../custom/Footer";

// eslint-disable-next-line react/prop-types
const PanelLayout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      <div className="h-16 border-b border-gray-200 flex justify-between items-center">
        <div className="pl-4">
          <h3 className="font-extrabold text-2xl primary-radiant">ABC Cafe</h3>
        </div>
        <div className="pr-4">Menu</div>
      </div>
      <div className="flex items-start">
        <div className="border-r h-screen border-gray-200 w-56 p-2 sticky top-0 hidden sm:block">
          <Menu />
        </div>
        <div className="w-full px-10 mt-10">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PanelLayout;
