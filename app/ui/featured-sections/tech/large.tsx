'use client'
import Image from "next/image"
import Link from "next/link"

export default function TechLarge() {
  return (
    <div className="md:block hidden">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Space and Science</p>
      <Image
        src={`/tech.jpg`}
        width={0}
        height={0}
        sizes="100vh"
        alt="My news app developed by Amanuel Ferede"
        className="w-full"
      />
      <div>
        <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>
        {
          Array.from(Array(3).keys()).map((_, i) => {
            return (
              <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2 hover:underline" key={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis adipisci soluta
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}