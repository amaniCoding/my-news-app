'use client'
import Link from "next/link"
import { FaBars } from "react-icons/fa"
import { FaRegCirclePlay } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { LuHeadphones } from "react-icons/lu"
import { MdKeyboardArrowDown } from "react-icons/md"

export default function NavBar() {

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl p-3 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 md:hidden">
            <FaBars className="w-5 h-5" color="white" />
            <span className="text-white">MyNews Company</span>

          </div>
          <div className="items-center space-x-3 md:flex hidden">
            <FaBars className="w-5 h-5" color="white" />
            <Link href={`/`} className="text-white hover:bg-red-700 hover:text-white p-2">MyNews Company</Link>
            <Link href={`/#`} className="text-white hover:bg-red-700 hover:text-white p-2">World</Link>
            <Link href={`/#`} className="text-white hover:bg-red-700 hover:text-white p-2">Politics</Link>
            <Link href={`/#`} className="text-white hover:bg-red-700 hover:text-white p-2">Business</Link>
            <Link href={`/#`} className="text-white hover:bg-red-700 hover:text-white p-2">Health</Link>
            <Link href={`/#`} className="text-white hover:bg-red-700 hover:text-white p-2">Entertainment</Link>
            <Link href={`/#`} className="text-white hover:bg-red-700 hover:text-white p-2">Style</Link>
            <div className="inline-block group">
              <div className="flex items-center">
                <span className="text-white">More</span>
                <MdKeyboardArrowDown className="w-7 h-7" color="white" />

              </div>

              <div className={`w-40 absolute z-10 shadow-md  hidden group-hover:block bg-white`}>
                <Link href={`/#`} className="text-black block hover:bg-gray-200 p-2 ">Travel</Link>
                <Link href={`/#`} className="text-black block hover:bg-gray-200 p-2 ">Sports</Link>
                <Link href={`/#`} className="text-black block hover:bg-gray-200 p-2 ">Science</Link>
                <Link href={`/#`} className="text-black block hover:bg-gray-200 p-2 ">Climate</Link>
                <Link href={`/#`} className="text-black block hover:bg-gray-200 p-2 ">Weather</Link>
              </div>
            </div>
          </div>
          <div className="md:flex hidden items-center space-x-3">
            <Link href={`/#`} className="flex items-center space-x-1 hover:bg-red-700 hover:text-white p-2">
              <FaRegCirclePlay className="w-5 h-5" color="white" />
              <span className="text-white">Watch</span>
            </Link>
            <Link href={`/#`} className="flex items-center space-x-1 hover:bg-red-700 hover:text-white p-2">
              <LuHeadphones className="w-5 h-5" color="white" />
              <span className="text-white">Listen</span>
            </Link>

            <Link href={`/#`} className="flex items-center space-x-1 hover:bg-red-700 hover:text-white p-2">
              <span className="text-white">Live Tv</span>
            </Link>
            <div className="flex items-center space-x-3">
              <IoSearch className="w-5 h-5" color="white" />
            </div>
            <div className="flex items-center space-x-3">
              <Link href={`/#`}>
                <button className="border-[1.5px] border-gray-200 rounded-lg py-1 px-2 text-white">Sign In</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}