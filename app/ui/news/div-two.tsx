'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivTwo() {
    return (
        <div className="">

            <SubNews news={subnews} />

        </div>
    )
}


function SubNews(props: { news: News[] }) {
    return (
        props.news.map((news, i) => {
            return (
                <div className="my-2" key={i}>
                    <div className="grid grid-cols-12 lg:gap-4 gap-3">
                        <div className="col-span-12 lg:px-0 px-3">
                            <Link href={`#`} className=" block hover:underline font-bold">{news.article}</Link>
                        </div>
                        <div className="col-span-12 group">
                            <Link href={`#`}>
                                <Image
                                    src={`${news.image}`}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    alt="My news app developed by Amanuel Ferede"
                                    className="w-full group-hover:brightness-75 lg:rounded-md"
                                />
                            </Link>

                        </div>

                    </div>
                </div>
            )
        })
    )
}


const subnews = [
    {
        image: '/news/sub1.jpg',
        article: 'Analysis In Ukraine and Gaza, Trump finds out that ending wars is tougher than it looks'
    },
    {
        image: '/news/sub2.jpg',
        article: "'Clearly Zelensky's right': Journalist on Russia's 'wanted list' reacts to Putin-Trump call 2:01"
    },
    {
        image: '/news/sub3.jpg',
        article: 'After call with Trump, Putin agrees to pause attacks on Ukraine’s energy and infrastructure targets'
    },

]