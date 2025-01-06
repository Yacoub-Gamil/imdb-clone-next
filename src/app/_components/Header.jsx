import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
function Header() {
  return (
    <div className=" flex justify-between max-w-6xl mx-auto p-6">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className=" flex gap-4 items-center ">
        <DarkModeSwitch />
        <Link href={"/"} className=" flex gap-1 items-center">
          <span className=" text-2xl bg-amber-500 font-bold py-1 px-2 rounded-lg ">
            IMDB
          </span>
          <span className=" text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
