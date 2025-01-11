'use client'
import Image from "next/image"
import Link from "next/link"

export default function GlobalBusinessLarge() {
  return (
    <div className="md:block hidden">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Global Business</p>
      <Image
        src={`/space.jpg`}
        width={0}
        height={0}
        sizes="100vh"
        alt="My news app developed by Amanuel Ferede"
        className="w-full"
      />
      <div>
        <p className="my-3 font-bold text-xl">Nesciunt quas obcaecati, commodi minus id iste pariatur numquam laboriosam inventore saepe. </p>
        {
          Array.from(Array(3).keys()).map((_, i) => {
            return (
              <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2 hover:underline" key={i}> Laborum sequi aliquam eligendi id fuga excepturi odit sit.
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}