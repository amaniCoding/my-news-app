'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivTwo() {
    return (
        <div className="">
            <Link href={`#`} className="lg:px-0 mb-2 px-3 font-bold text-xl block hover:underline">After poisonous PR, ‘Snow White’ has ‘heigh-ho’pes for a fairy tale ending at the box office
            </Link>

            <Link href={`#`}>
                <Image
                    src={`/news/top/sub8.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md hover:brightness-75"
                />
            </Link>



            <SubNews news={subnews} />

        </div>
    )
}


function SubNews(props: { news: News[] }) {
    return (
        props.news.map((news, i) => {
            return (
                <div className="lg:mt-3 mt-2" key={i}>
                    <div className="grid grid-cols-12 lg:gap-4 gap-3 lg:px-0 px-3">
                        <div className="col-span-6">

                            <Link href={`#`}>

                                <Image
                                    src={`/news${news.image}`}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    alt="My news app developed by Amanuel Ferede"
                                    className="w-full hover:brightness-75 lg:rounded-md"
                                />

                            </Link>

                        </div>
                        <div className="col-span-6">
                            <Link href={`#`} className="hover:underline">{news.article}</Link>
                        </div>
                    </div>
                </div>
            )
        })
    )
}


const subnews = [
    {
        image: '/top/sub9.jpg',
        article: 'Stanley Tucci discovered his thyroid ‘was non-functioning’ while filming in Italy last year'
    },
    {
        image: '/top/sub10.jpg',
        article: "Watch: Cars at Tesla dealership lit on fire after a string of Tesla vandalism incidents 0:50"
    },
    {
        image: '/top/sub11.jpg',
        article: 'Director arrested on charges of swindling Netflix out of $11M for a show that never aired'
    },
]