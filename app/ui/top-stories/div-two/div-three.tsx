'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivTwo() {
    return (
        <div className="">
            <Link href={`#`} className="font-bold text-xl my-3 block hover:underline">After poisonous PR, ‘Snow White’ has ‘heigh-ho’pes for a fairy tale ending at the box office
            </Link>

            <Link href={`#`} className="group">
            <Image
                src={`/news/top/sub8.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full group-hover:brightness-75 rounded-md"
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
                <div className="my-2" key={i}>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 group">

                            <Link href={`#`}>
                                <Image
                                    src={`/news${news.image}`}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    alt="My news app developed by Amanuel Ferede"
                                    className="w-full group-hover:brightness-75 rounded-md"
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
        image: '/top2/sub5.jpg',
        article: "Google makes its biggest-ever acquisition"
    },
    {
        image: '/top2/sub6.jpg',
        article: "Fear in Antarctic base as researcher accused of assault"
    },
    {
        image: '/top2/sub7.jpg',
        article: 'Driver narrowly escapes lightning strike on highway 0:30'
    },
    {
        image: '/top2/sub8.jpg',
        article: "US designates South Korea a ‘sensitive’ country over mishandling of lab data"
    },
]