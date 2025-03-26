'use client'

import Link from "next/link"
import Image from "next/image"
export default function GlobalBusiness() {
    return (
        <div>
            <h2 className="font-bold text-xl my-3 border-l-4 mx-3 border-l-black uppercase pl-3">global business</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/business/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline px-3">Hong Kong property tycoon Lee Shau Kee dies at 97</Link>


            <div className="lg:block hidden">

                {
                    global_business_news.map((el, i) => {
                        return (
                            <Link href={`#`} className="block my-2 hover:underline" key={i}>{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="lg:hidden block">

                {
                    global_business_news.map((el, i) => {
                        return (
                            <div className="grid grid-cols-12 gap-3 my-3 px-2" key={i}>
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

const global_business_news = [

    {
        article: 'China unveils plan to boost consumption as Trump tariffs bite',
        image: '/news/cat/business/sub2.jpg'
    },

    {
        article: 'Trump is blaming Biden for a weakening economy. Is that fair?',
        image: '/news/cat/business/sub3.jpg'
    }


]