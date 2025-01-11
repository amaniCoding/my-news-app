'use client'
import Image from "next/image"
import Link from "next/link"
export default function SportSmall() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Sports</p>
      <div>
        <Image
          src={`/sport/wall.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <Link href={`/`} className="text-xl font-bold hover:underline">Quas corporis earum, sapiente ipsum necessitatibus nisi assumenda porro culpa eum, quia atque minus ullam cum reiciendis adipisci veritatis, omnis similique dolorem?
        </Link>
      </div>
      {
        Array.from(Array(3).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 my-3 gap-4 border-b-[1.7px] border-b-gray-300 pb-4" key={i}>
              <div className="col-span-5">
                <Image
                  src={`/sport/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline"> Nesciunt quos eveniet expedita hic in esse, reprehenderit dolor, accusantium maxime corrupti deserunt eligendi voluptas adipisci facilis velit officiis cupiditate quis. Quas.
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}