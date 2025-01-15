'use client'
import Image from "next/image"
import Link from "next/link"
export default function Featured() {
  return (

    <>
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Featured</p>
      {
        Array.from(Array(2).keys()).map((_, i) => {
          return (
            <div className="mb-2" key={i}>

              <Image
                src={`/latest/${i+3}.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
              <p className="my-3 text-xl font-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatu
              </p>


              {
                Array.from(Array(2).keys()).map((_, i) => {
                  return (
                    <div className="grid grid-cols-12 gap-4 my-3 border-b-[1.7px] pb-3 border-b-gray-300" key={i}>
                      <div className="col-span-4">
                        <Image
                          src={`/latest/${i + 1}.jpg`}
                          width={0}
                          height={0}
                          sizes="100vh"
                          alt="My news app developed by Amanuel Ferede"
                          className="w-full"
                        />
                      </div>
                      <div className="col-span-7">
                        <Link href={`/#`} className="md:font-bold md:text-xl text-lg hover:underline">Lorem ipsum dolor sit amet consectetur.</Link>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          )
        })
      }
    </>

  )
}