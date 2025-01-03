import ProfileImage from "@/components/ProfileImage";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import Link from "next/link";
import { FaMessage } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="sm:mt-20 flex flex-col justify-center space-y-3 font-montserrat">
      <ProfileImage />
      <div>
        <div className="flex flex-col space-y-3 sm:space-y-1">
          <h1 className="text-5xl font-bold sm:text-xl text-animation">Hi, I'm Emiedonmokumo Dick-Boro</h1>
          <h3 className="text-2xl sm:text-sm text-gray-500">Full-Stack / Backend Developer </h3>
          <div className="lg:hidden">
            <SocialMedia />
          </div>
        </div>
      </div>
    </main>
  );
}
