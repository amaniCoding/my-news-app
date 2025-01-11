'use client'
import Image from "next/image"
import Link from "next/link"
export default function SpaceSmall() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Space and Science</p>
      <div>
        <Image
          src={`/space/wall.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <Link href={`/`} className="text-xl font-bold hover:underline"> Repellendus itaque eveniet aut perspiciatis soluta deserunt optio sit nihil laboriosam fugit fuga assumenda excepturi maxime qui culpa, necessitatibus numquam earum. Odit.
        </Link>
      </div>
      {
        Array.from(Array(3).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 my-3 gap-4 border-b-[1.7px] border-b-gray-300 pb-4" key={i}>
              <div className="col-span-5">
                <Image
                  src={`/space/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline">Aspernatur libero explicabo rerum quas amet tenetur porro harum aperiam voluptatem, impedit, magni quia inventore iste aliquam dolore omnis qui, asperiores odio?
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}