'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivOne() {
    return (
        <div className="">
            <Link href={`#`} className="lg:px-0 px-3 font-bold text-xl block hover:underline">Germany’s Merz wins vote to massively expand borrowing and super-charge military spending
            </Link>

            <Link href={`#`}>
                <Image
                    src={`/news/top/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full"
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
                    <div className="grid grid-cols-12 gap-3 lg:px-0 px-3">
                        <div className="col-span-6">
                            <Link href={`#`}>
                                <Image
                                    src={`/news${news.image}`}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    alt="My news app developed by Amanuel Ferede"
                                    className="w-full lg:rounded-md hover:brightness-75"
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
        image: '/top/sub2.jpg',
        article: 'Hungary’s new anti-LGBTQ+ law bans Pride events and sparks protests'
    },
    {
        image: '/top/sub3.jpg',
        article: "This futuristic house could allow humans to explore a mysterious habitat 2:36"
    },
    {
        image: '/top/sub4.jpg',
        article: 'FBI investigating Tesla vehicles shot and set on fire at facility in Las Vegas'
    },
]