import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { LiaPlusSolid } from "react-icons/lia";
import ProfileImage from "../components/ProfileImage";

import Searchbar from "../components/Searchbar";

export default function Header() {
  return (
    <header className="flex px-2 h-[50px] md:px-6 sticky top-0 space-x-2 items-center justify-between bg-black z-50">
      <button title="Home" className="flex items-center">
        <img src={Logo} className="h-[45px]" />
      </button>
      <div className="flex-1 max-w-[500px]">
        <Searchbar />
      </div>
      <div className="flex space-x-2 items-center">
        <div className="text-4xl">
          <LiaPlusSolid />
        </div>
        <div className="flex items-center justify-center h-[44px] w-[44px] rounded-full border-2 border-slate-700 ">
          <p className="font-semibold text-lg">
           S
          </p>
        </div>
      </div>
    </header>
  );
}
