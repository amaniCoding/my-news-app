'use client'
import Image from "next/image"
import Link from "next/link"
export default function StyleSmall() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Style</p>
      <div>
        <Image
          src={`/style/wall.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <Link href={`/`} className="text-xl font-bold hover:underline">Expedita, sit at. Quidem illum unde voluptatum asperiores officia aut hic, corporis dolorum quod, ratione odit nisi necessitatibus reiciendis aliquid, saepe tempore.
        </Link>
      </div>
      {
        Array.from(Array(3).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 my-3 gap-4 border-b-[1.7px] border-b-gray-300 pb-4" key={i}>
              <div className="col-span-5">
                <Image
                  src={`/style/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline">Unde a ducimus consequuntur quisquam? Adipisci pariatur, eligendi autem praesentium id, perferendis voluptates possimus amet iusto at dolore, sequi numquam facilis fugiat.
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}