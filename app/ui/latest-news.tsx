'use client'
import Image from "next/image"
export default function LatestNews() {
  return (
    <div>
      {
        Array.from(Array(14).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12" key={i}>
              <div className="md:col-span-6 col-span-12 p-2">
                <Image
                  src={`/latest/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-6 col-span-12">
                <div className="mb-3">
                  <p className="mb-3 hover:underline cursor-pointer">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}