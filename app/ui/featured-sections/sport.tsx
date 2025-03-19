'use client'

import Link from "next/link"
import Image from "next/image"
export default function Sport() {
    return (
        <div>
            <h2 className="font-bold text-xl my-3 border-l-4 border-l-black uppercase pl-3">sport</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/sport/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline">Katherine Legge never set out to be a role model, but now she says she has a point to prove in NASCAR</Link>


            <div className="md:block hidden">

                {
                    sport_news.map((el, i) => {
                        return (
                            <Link href={`#`} key={i} className="block my-2 hover:underline">{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="md:hidden block">

                {
                    sport_news.map((el, i) => {
                        return (
                            <div className="grid grid-cols-12 gap-4 my-3" key={i}>
                                <div className="col-span-5">
                                    <Image
                                        src={`${el.image}`}
                                        width={0}
                                        height={0}
                                        sizes="100vh"
                                        alt="My news app developed by Amanuel Ferede"
                                        className="w-full rounded-md group-hover:brightness-75"
                                    />
                                </div>
                                <div className="col-span-7">
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

const sport_news = [

    {
        article: 'Magnus Carlsen rules out classical World Chess Championship return, shifting focus to new era',
        image: '/news/cat/sport/sub2.jpg'
    },

    {
        article: 'Tennis players’ association formed by Novak Djokovic taking legal action against the sport’s governing bodies',
        image: '/news/cat/sport/sub3.jpg'
    }


]