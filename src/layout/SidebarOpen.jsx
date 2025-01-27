import Footer from "./Footer.jsx";
import ProfileList from "../contents/ProfileList.jsx";
import { IoIosArrowBack } from "react-icons/io";

export default function SidebarOpen({ isOpen, toggleSidebar }) {
  return (
    <aside
      style={{ maxHeight: "calc(100vh - 50px)" }}
      className={`flex flex-col left-0 py-2 px-4 top-[50px] max-w-[250px] sticky overflow-x-hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex space-x-5 bg-black z-50">
        <button
          title="Shrink"
          onClick={toggleSidebar}
          className="flex text-3xl"
        >
          <IoIosArrowBack />
        </button>
        <p className="text-xl ">Profiles</p>
      </div>
      <div className="flex flex-col pb-4 items-center overflow-x-hidden overflow-y-auto">
        <ProfileList isOpen={isOpen} />
        <button>Show more</button>
        <Footer />
      </div>
    </aside>
  );
}
