'use client'
import Image from "next/image"
import Link from "next/link"
export default function PoliticsSamll() {
  return (
    <div className="md:hidden block">
      <p className="font-bold text-lg my-3 border-l-4 border-l-black px-3">Politics</p>
      <div>
        <Image
          src={`/politics/wall.jpg`}
          width={0}
          height={0}
          sizes="100vh"
          alt="My news app developed by Amanuel Ferede"
          className="w-full"
        />
        <Link href={`/`} className="text-xl font-bold hover:underline">Eveniet perferendis consequuntur provident vero dolore, unde earum quia, omnis, quam voluptatem ab quos iure. Amet corrupti illo ullam tenetur mollitia dolor.
        </Link>
      </div>
      {
        Array.from(Array(3).keys()).map((_, i) => {
          return (
            <div className="grid grid-cols-12 my-3 gap-4 border-b-[1.7px] border-b-gray-300 pb-4" key={i}>
              <div className="col-span-5">
                <Image
                  src={`/politics/${i+1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
              </div>
              <div className="col-span-7">
                <Link href={`/`} className="hover:underline"> Deserunt consequuntur ipsa illo corrupti, soluta earum laudantium necessitatibus pariatur nisi assumenda? Iure reprehenderit praesentium pariatur id cumque fugit modi accusamus a.
                </Link>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}