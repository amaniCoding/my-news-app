'use client'
import Image from "next/image"
import Link from "next/link"
export default function TechSmall() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Tech</p>
      <div>
        <Image
          src={`/tech.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
           className="w-full h-full object-cover"
        />
        <Link href={`/`} className="md:text-xl font-semibold text-lg md:font-bold hover:underline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis architecto.
        </Link>
      </div>
      {
        Array.from(Array(3).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 my-3 gap-4 border-b-[1.7px] border-b-gray-300 pb-4" key={i}>
              <div className="col-span-5">
                <Image
                  src={`/tech/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline"> Aspernatur nulla, dignissimos quis expedita molestias quasi fugiat dolorum.
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}