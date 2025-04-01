'use client'

import Link from "next/link"
import Image from "next/image"
export default function UsPolitics() {
    return (
        <div>
            <h2 className="font-bold text-xl lg:mx-0 mx-3 my-3 border-l-4 border-l-black uppercase pl-3">us politics</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/politics/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline lg:px-0 px-3">The most chilling part of White House claim of boundless executive power</Link>


            <div className="lg:block hidden">

                {
                    us_politics_news.map((el, i) => {
                        return (
                            <Link key={i} href={`#`} className="block my-2 hover:underline">{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="lg:hidden block">

                {
                    us_politics_news.map((el, i) => {
                        return (
                            <div key={i} className="grid grid-cols-12 gap-3 my-3 px-3">
                                <div className="col-span-6">
                                    <Image
                                        src={`${el.image}`}
                                        width={0}
                                        height={0}
                                        sizes="100vh"
                                        alt="My news app developed by Amanuel Ferede"
                                        className="w-full lg:rounded-md group-hover:brightness-75"
                                    />
                                </div>
                                <div className="col-span-6">
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

const us_politics_news = [

    {
        article: 'Analysis What is a constitutional crisis and are we in one now?',
        image: '/news/cat/politics/sub2.jpg'
    },

    {
        article: 'How controversial deportation flights and a judge’s race to stop them unfolded, minute by minute',
        image: '/news/cat/politics/sub3.jpg'
    }


]