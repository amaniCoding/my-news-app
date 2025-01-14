'use client'
import Image from "next/image"
import Link from "next/link"
export default function GlobalBusinessSmall() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Global Business</p>
      <div>
        <Image
          src={`/space.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
       <Link href={`/`} className="md:text-xl font-semibold text-lg md:font-bold hover:underline">Ex error eaque id minima explicabo quod suscipit repudiandae quas est obcaecati modi asperiores omnis voluptatem quam neque, accusamus a, quia quo!
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
                   className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline">Earum tempore sapiente quisquam ad quod vitae placeat iure laborum. Iure reiciendis voluptate alias illo consequatur aut ipsa eum? Molestiae, magnam odit!
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}