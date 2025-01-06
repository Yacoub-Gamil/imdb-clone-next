import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className=" hover:text-amber-500">
      <Icon className=" text-2xl sm:hidden" />
      <h1 className=" uppercase hidden sm:inline text-sm">{title}</h1>
    </Link>
  );
}

export default MenuItem;
