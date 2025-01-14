'use client'
import Image from "next/image"
export default function LatestNews() {
  return (
    <div>
      {
        Array.from(Array(14).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 gap-3 mb-4 pb-3 border-b-[1.6px] border-b-gray-300" key={i}>
              <div className="col-span-6">
                <Image
                  src={`/latest/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-3">
                  <p className="mb-3 hover:underline cursor-pointer">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <p className="mt-2 text-gray-600 font-semibold">2:41 PM 1/14/2025</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}