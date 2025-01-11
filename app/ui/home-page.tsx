'use client'
import Image from "next/image"
import LatestNews from "./latest-news"
import Link from "next/link"
import { FeaturedSections } from "./featured-sections"
import InCaseMiss from "./incase-miss"
import FeaturedAndTopStories from "./featured-top-stories"
import LatestMiniNews from "./latest-mini/latest-mini"
export default function HomePage() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto md:p-1 p-3">
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-9 col-span-12">
            <div className="grid grid-cols-12 gap-5">
              <div className="md:col-span-7 col-span-12">
                <p className="text-2xl font-bold my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <Image
                  src={`/cal.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
                <p className="my-3 text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

                <ul className="list-disc my-3 md:pl-6">
                  <li className="my-2 hover:underline">
                    <Link href={`/#`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Link>
                  </li>
                  <li className="my-2 hover:underline">
                    <Link href={`/#`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Link>
                  </li>
                  <li className="my-2 hover:underline">
                    <Link href={`/#`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Link>
                  </li>
                </ul>
                <LatestMiniNews/>
              </div>
              <div className="md:col-span-5 col-span-12">
                <div className="pb-2 my-3 border-b-[1.7px] border-b-gray-400">
                  <Image
                    src={`/tr.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full"
                  />
                  <p className="my-3 text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error ..</p>

                  <ul className="list-disc md:pl-6">
                    <li className="mb-1">
                      <Link href={`/#`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit itaque at aliquam quia accusantium. Enim quidem sequi
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src={`/politics.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full"
                  />
                  <p className="my-3 text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error ..</p>

                  <ul className="list-disc">
                    <li className="my-1">
                      <Link href={`/#`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit itaque at aliquam quia accusantium. Enim quidem sequi
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <FeaturedAndTopStories />

            </div>
          </div>
          <div className="md:col-span-3 col-span-12">
            <p className="text-lg my-3">Catch up on today’s global news</p>
            <div className="">
              <Image
                src={`/el.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
              <p className="font-bold text-xl my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <LatestNews />
          </div>
        </div>
        <FeaturedSections />
        <InCaseMiss />
      </div>
    </section>
  )
}