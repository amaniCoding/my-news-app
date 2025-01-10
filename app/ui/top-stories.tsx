'use client'
import Image from "next/image"
import Link from "next/link"
export default function TopStories() {
  return (
    <>
      <div className="md:col-span-5 col-span-12">
        <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Top Stories</p>
        <div>
          <Image
            src={`/cal.jpg`}
            width={0}
            height={0}
            sizes="100vh"
            alt="My news app developed by Amanuel Ferede"
            className="w-full"
          />
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>

          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Link>
        </div>
      </div>
      <div className="md:col-span-7 col-span-12">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Featured</p>
          <Image
            src={`/politics.jpg`}
            width={0}
            height={0}
            sizes="100vh"
            alt="My news app developed by Amanuel Ferede"
            className="w-full"
          />
          <p className="my-3 text-xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatu
          </p>
          <div className="grid grid-cols-12 gap-4 my-3">
            <div className="md:col-span-4 col-span-12">
              <Image
                src={`/sport.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
            </div>
            <div className="md:col-span-7 col-span-12">
              <p className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At perspiciatis fugit debitis nam?</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 my-3">
            <div className="md:col-span-4 col-span-12">
              <Image
                src={`/politics.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
            </div>
            <div className="md:col-span-7 col-span-12">
              <p className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At perspiciatis fugit debitis nam?</p>
            </div>
          </div>
      </div>


       <div className="md:col-span-5 col-span-12">
        <div>
          <Image
            src={`/tr.jpg`}
            width={0}
            height={0}
            sizes="100vh"
            alt="My news app developed by Amanuel Ferede"
            className="w-full"
          />
          <p className="my-3 font-bold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum labore possimus repudiandae enim maiores culpa quia? </p>

          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Link>
          <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-300 block p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Link>
        </div>
      </div>
      <div className="md:col-span-7 col-span-12">
          <Image
            src={`/el.jpg`}
            width={0}
            height={0}
            sizes="100vh"
            alt="My news app developed by Amanuel Ferede"
            className="w-full"
          />
          <p className="my-3 text-xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatu
          </p>
          <div className="grid grid-cols-12 gap-4 my-3">
            <div className="md:col-span-4 col-span-12">
              <Image
                src={`/el.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
            </div>
            <div className="md:col-span-7 col-span-12">
              <p className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At perspiciatis fugit debitis nam?</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 my-3">
            <div className="md:col-span-4 col-span-12">
              <Image
                src={`/tr.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
            </div>
            <div className="md:col-span-7 col-span-12">
              <p className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At perspiciatis fugit debitis nam?</p>
            </div>
          </div>
      </div>
    </>
  )
}