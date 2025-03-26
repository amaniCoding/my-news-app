'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivTwo() {
    return (
        <div className="">

            <Image
                src={`/news/top2/sub2.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                alt="My news app developed by Amanuel Ferede"
                className="w-full lg:rounded-md hover:brightness-75"
            />

            <Link href={`#`} className="px-3 font-bold text-xl my-4 block hover:underline">South_agency/E+/Getty Images
                ‘Exercise snacks’ — even a few minutes a day — can boost your health
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
                                    className="w-full hover:brightness-75 lg:rounded-md"
                                />
                            </Link>

                        </div>
                        <div className="col-span-6 lg:col-span-8">
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
        image: '/top2/sub3.jpg',
        article: 'Huge deer in a London park among photo award’s winning images'
    },
    {
        image: '/top2/sub4.jpg',
        article: "Two men found guilty in golden toilet heist"
    },

]