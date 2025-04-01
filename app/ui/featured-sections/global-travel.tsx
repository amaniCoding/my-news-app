'use client'

import Link from "next/link"
import Image from "next/image"
export default function GlobalTravel() {
    return (
        <div>
            <h2 className="font-bold text-xl lg:mx-0 mx-3 my-3 border-l-4 border-l-black uppercase pl-3">global travel</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/travel/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline lg:px-0 px-3">A librarian ran off with a yacht captain in the summer of 1968. It was the start of an incredible love story</Link>


            <div className="lg:block hidden">

                {
                    global_travel_news.map((el, i) => {
                        return (
                            <Link href={`#`} className="block my-2 hover:underline" key={i}>{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="lg:hidden block">

                {
                    global_travel_news.map((el, i) => {
                        return (
                            <div className="grid grid-cols-12 gap-3 my-3 px-2" key={i}>
                                <div className="col-span-6">
                                    <Image
                                        src={`${el.image}`}
                                        width={0}
                                        height={0}
                                        sizes="100vh"
                                        alt="My news app developed by Amanuel Ferede"
                                        className="w-full lg:rounded-md group-hover:brightness-75"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <p>{el.article}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const global_travel_news = [

    {
        article: '‘Valencia has helped us heal’: This woman left the US for Spain with her teenage son after a heartbreaking family tragedy',
        image: '/news/cat/space/sub2.jpg'
    },

    {
        article: 'The world’s greatest places of 2025, according to TIME',
        image: '/news/cat/space/sub3.jpg'
    },
    {
        article: "They recreated a favorite photo from 35 years ago. Here's how it turned out",
        image: '/news/cat/space/sub4.jpg'
    },


]