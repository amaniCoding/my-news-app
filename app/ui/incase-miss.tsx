'use client'
import Image from "next/image"
import Link from "next/link"
export default function InCaseMiss() {
  return (
    <section className="bg-black">
      <div className="max-w-[1290px] mx-auto">
        <div>
          <p className="font-bold text-2xl text-white my-3 lg:px-0 px-3">Incase You Miss It</p>
          <div className="md:grid hidden grid-cols-12 gap-6">

            <div className="md:col-span-6 col-span-12">
              <div>
                <Image
                  src={`/news/latest/sub1.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="My news app developed by Amanuel Ferede"
                  className="w-full"
                />
                <p className="my-3 font-bold text-xl text-white">'Exercise snacking' several times a day can boost your health and fitness, according to new study. </p>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div>

                {
                  subnews.map((el, i) => {
                    return (
                      <div className="" key={i}>
                        
                        <Link href={`#`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block lg:w-3/4 w-full px-2 pb-4 text-white">
                          {el.article}
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 lg:gap-4 gap-2">
            {
              subnews.map((el, i) => {
                return (
                  <div className="" key={i}>
                    <div>
                      <Image
                        src={el.image}
                        width={0}
                        height={0}
                        sizes="100vh"
                        alt="My news app developed by Amanuel Ferede"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link href={`#`} className="my-3 border-b-[1.7px] border-b-gray-500 hover:underline block lg:w-3/4 w-full px-2 pb-4 text-white">
                      {el.article}
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


const subnews = [
  {
    image: '/news/latest/sub2.jpg',
    article: 'Ryan Reynolds requests to be dropped from Justin Baldoni’s lawsuit against wife Blake Lively'
  },
  {
    image: '/news/latest/sub3.jpg',
    article: "Why everyone is talking about ‘Adolescence’ on Netflix that’s every parent’s nightmare"
  },
  {
    image: '/news/latest/sub4.jpg',
    article: 'See the moment astronauts step out of capsule after return to Earth 1:56'
  },
  {
    image: '/news/latest/sub5.jpg',
    article: 'Gwyneth Paltrow has ‘a lot’ of on-screen sex with Timothée Chalamet in their new film'
  },

 

]