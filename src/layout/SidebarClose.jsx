import { IoIosArrowForward } from "react-icons/io";
import { SiLinktree } from "react-icons/si";
import ProfilesList from "../contents/ProfileList";

export default function SidebarClose({ isOpen, toggleSidebar }) {
  return (
    <aside
      style={{ maxHeight: "calc(100vh - 50px)" }}
      className={`flex flex-col w-full items-center top-[50px] left-0 py-2 px-4 max-w-[65px] sticky overflow-x-hidden ${
        isOpen ? "hidden" : "block"
      }`}
    >
      <button title="Expand" onClick={toggleSidebar} className="text-3xl">
        <IoIosArrowForward />
      </button>

      <ProfilesList isOpen={isOpen} />
    </aside>
  );
}
