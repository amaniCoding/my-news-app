'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivTwo() {
    return (
        <div className="">
            <Link href={`#`}>
                <Image
                    src={`/news/top/sub5.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full rounded-md hover:brightness-75"
                />
            </Link>


            <Link href={`#`} className="font-bold text-xl px-3 my-4 block hover:underline">Unexpected nature of an extended stay in orbit led to high interest in NASA astronauts’ mission
            </Link>
            <SubNews news={subnews} />

        </div>
    )
}


function SubNews(props: { news: News[] }) {
    return (
        props.news.map((news, i) => {
            return (
                <div className="lg:mb-3 mb-2" key={i}>
                    <div className="grid grid-cols-12 gap-3 px-3">
                        <div className="col-span-6 lg:col-span-4">
                            <Link href={`#`}>
                                <Image
                                    src={`/news${news.image}`}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    alt="My news app developed by Amanuel Ferede"
                                    className="w-full rounded-md hover:brightness-75"
                                />
                            </Link>

                        </div>
                        <div className="col-span-6 lg:col-span-8">
                            <Link href={`#`} className="hover:underline lg:px-0 px-3">{news.article}</Link>
                        </div>
                    </div>
                </div>
            )
        })
    )
}


const subnews = [
    {
        image: '/top/sub6.jpg',
        article: 'Satellites powered by solid metal could one day use space junk for fuel'
    },
    {
        image: '/top/sub7.jpg',
        article: "Blobfish overcomes notoriety as ‘world’s ugliest animal’ to win fish of the year"
    },

]