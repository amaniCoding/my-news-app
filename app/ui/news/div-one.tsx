'use client'

import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivOne() {
    return (
        <div className="">
            <h2 className="my-1 font-bold text-3xl px-3">Putin just called Trump’s bluff on Ukraine</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md hover:brightness-75"
                    />
            </Link>


            <Link href={`#`} className="font-bold lg:px-0 px-3 text-xl my-4 block hover:underline">
                The administration’s first real foray into wartime diplomacy with the Kremlin highlighted the Russian art of the ‘no’ deal
            </Link>

            <SubNews news={subnews} />

        </div>
    )
}


function SubNews(props: { news: News[] }) {
    return (
        props.news.map((news, i) => {
            return (
                <div className="my-4 pb-3 border-b-[1.9px] border-b-slate-300" key={i}>
                    <div className="grid grid-cols-12 lg:gap-4 gap-3 px-3">
                        <div className="col-span-6 group">
                            <Link href={`#`}>
                                <Image
                                    src={`${news.image}`}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    alt="My news app developed by Amanuel Ferede"
                                    className="w-full lg:rounded-md group-hover:brightness-75"
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