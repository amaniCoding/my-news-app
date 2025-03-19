'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function Latest() {
    return (
        <div className="">
            <Link href={`#`} className="font-bold text-xl my-2 hover:underline">Her divorce nearly broke her. Then this grandmother began traveling the world solo
            </Link>
            <Link href={`#`}>
                <Image
                    src={`/news/latest/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full hover:brightness-75 rounded-md"
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
                <div key={i} className="my-4 pb-3 border-b-[1.9px] border-b-slate-300">

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-5 group">
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
                        <div className="col-span-7">
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
        image: '/latest/sub2.jpg',
        article: 'Ryan Reynolds requests to be dropped from Justin Baldoni’s lawsuit against wife Blake Lively'
    },
    {
        image: '/latest/sub3.jpg',
        article: "Why everyone is talking about ‘Adolescence’ on Netflix that’s every parent’s nightmare"
    },
    {
        image: '/latest/sub4.jpg',
        article: 'See the moment astronauts step out of capsule after return to Earth 1:56'
    },
    {
        image: '/latest/sub5.jpg',
        article: 'Gwyneth Paltrow has ‘a lot’ of on-screen sex with Timothée Chalamet in their new film'
    },

]