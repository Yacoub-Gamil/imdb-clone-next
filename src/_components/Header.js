import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
function Header() {
  return (
    <div className=" flex justify-between max-w-6xl mx-auto p-6">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className=" flex gap-4 items-center ">
        <Link
          href={"/"}
          className=" text-2xl bg-amber-500 font-bold py-1 px-2 rounded-lg "
        >
          IMDB
        </Link>
        <span className=" text-xl hidden sm:inline">Clone</span>
      </div>
    </div>
  );
}

export default Header;
