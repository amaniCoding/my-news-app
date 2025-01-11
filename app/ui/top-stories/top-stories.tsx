'use client'

import Link from "next/link"
import Image from "next/image"

export default function TopStories() {
  return (
    <>
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Top Stories</p>
      {
        Array.from(Array(2).keys()).map((_, i) => {
          return (

            <div className="mb-2" key={i}>

              <div>
                <Image
                  src={`/latest/${i + 6}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
                <Link href={`/`} className="my-3 font-bold text-xl hover:underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </Link>

                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Link>
              </div>
            </div>
          )
        })
      }
    </>
  )
}