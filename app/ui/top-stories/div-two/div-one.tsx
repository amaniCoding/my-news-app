'use client'
import Link from "next/link"
import Image from "next/image"
import { News } from "@/app/types/types"
export default function DivOne() {
    return (
        <div className="">
            <Link href={`#`}>
                <Image
                    src={`/news/top2/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full rounded-md"
                />
            </Link>

            <Link href={`#`} className="font-bold text-xl my-2 hover:underline">The world has just experienced its hottest decade
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

                        <div className="col-span-12">
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
        article: 'Peruvian fisherman rescued after 95 days at sea survived on diet of cockroaches, fish and turtle blood'
    },
    {
        image: '/top/sub3.jpg',
        article: "Canada and Australia will develop new military radar system in the Arctic"
    },
    {
        image: '/top/sub4.jpg',
        article: 'Man allegedly bit another passenger and assaulted others on plane landing at LAX'
    },
    {
        image: '/top/sub4.jpg',
        article: 'Republican congressman asked at town hall about cutting scientific research after wife had cancer 2:58'
    },
    {
        image: '/top/sub4.jpg',
        article: 'Clashes erupt in western India as Hindu groups demand demolition of Mughal ruler’s tomb'
    },
]