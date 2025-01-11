'use client'
import Image from "next/image"
import Link from "next/link"

export default function PoliticsLarge() {
  return (
    <div className="md:block hidden">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Politics</p>
      <Image
        src={`/politics/wall.jpg`}
        width={0}
        height={0}
        sizes="100vh"
        alt="My news app developed by Amanuel Ferede"
        className="w-full"
      />
      <div>
        <p className="my-3 font-bold text-xl">Totam voluptas, obcaecati repudiandae in dignissimos ad itaque aspernatur asperiores aliquid consequatur laborum. </p>
        {
          Array.from(Array(3).keys()).map((_, i) => {
            return (
              <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2 hover:underline" key={i}>
                Sint harum quisquam dolore, libero incidunt debitis nesciunt placeat atque.
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}