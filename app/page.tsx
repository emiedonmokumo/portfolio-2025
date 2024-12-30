import ProfileImage from "@/components/ProfileImage";
import Image from "next/image";
import Link from "next/link";
import { FaMessage } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col justify-center space-y-3 px-5 font-montserrat">
      <ProfileImage />
      <div>
        <div className="flex flex-col space-y-3 sm:space-y-1">
          <h1 className="text-5xl font-bold sm:text-xl">Hi, I'm Emiedonmokumo Dick-Boro</h1>
          <h3 className="text-2xl sm:text-sm">Full-Stack / Backend Developer </h3>
        </div>
      </div>
    </main>
  );
}
