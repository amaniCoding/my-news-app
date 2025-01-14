'use client'
import Image from "next/image"
export default function LatestMiniNews() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">

      {
        Array.from(Array(6).keys()).map((_, i) => {
          return (
            <div key={i}>
              <Image
                src={`/latest/${i+1}.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full"
              />
              <div className="hover:underline cursor-pointer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}