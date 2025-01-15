'use client'
import Image from "next/image"
import Link from "next/link"
export default function HealthSmall() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Halth and wellness</p>
      <div>
        <Image
          src={`/health/wall.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <Link href={`/`} className="md:text-xl font-semibold text-lg md:font-bold hover:underline">Hic aperiam odio harum consequatur molestiae sit laborum ex.
        </Link>
      </div>
      {
        Array.from(Array(3).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 my-3 gap-4 border-b-[1.7px] border-b-gray-300 pb-4" key={i}>
              <div className="col-span-5">
                <Image
                  src={`/health/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                   className="w-full"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline">Saepe maiores sit, mollitia perferendis odio expedita necessitatibus.
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}