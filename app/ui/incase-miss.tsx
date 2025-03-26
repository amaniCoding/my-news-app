'use client'
import Image from "next/image"
import Link from "next/link"
export default function InCaseMiss() {
  return (
    <section className="bg-black">
      <div className="max-w-[1290px] mx-auto">
        <div>
          <p className="font-bold text-2xl text-white p-3">Incase You Miss It</p>
          <div className="md:grid hidden grid-cols-12 gap-6">

            <div className="md:col-span-6 col-span-12">
              <div>
                <Image
                  src={`/tr.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
                <p className="my-3 font-bold text-xl text-white p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block md:w-3/4 w-full px-2 pb-4 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block md:w-3/4 w-full px-2 pb-4 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block md:w-3/4 w-full px-2 pb-4 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block md:w-3/4 w-full px-2 pb-4 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block md:w-3/4 w-full px-2 pb-4 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </Link>
                <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block md:w-3/4 w-full px-2 pb-4 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </Link>


              </div>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 lg:gap-4 gap-2">
            {
              Array.from(Array(6).keys()).map((_, i) => {
                return (
                  <div className="" key={i}>
                    <div>
                      <Image
                        src={`/news/cat/tube/${i + 1}.jpg`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        alt="My news app developed by Amanuel Ferede"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link href={`/`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block lg:w-3/4 w-full px-2 pb-4 text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}