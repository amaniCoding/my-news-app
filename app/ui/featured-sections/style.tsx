'use client'

import Link from "next/link"
import Image from "next/image"
export default function Style() {
    return (
        <div>
            <h2 className="font-bold text-xl my-3 border-l-4 lg:mx-0 mx-3 border-l-black uppercase pl-3">style</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/style/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline lg:px-0 px-3">Why Nefertiti still inspires, 3,300 years after she reigned</Link>


            <div className="lg:block hidden">

                {
                    style_news.map((el, i) => {
                        return (
                            <Link key={i} href={`#`} className="block my-2 hover:underline">{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="lg:hidden block">

                {
                    style_news.map((el, i) => {
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

const style_news = [

    {
        article: 'Dress Codes: Why did men stop wearing heels?',
        image: '/news/cat/style/sub2.jpg'
    },

    {
        article: 'Satan shoes, microscopic bags and big red boots: How MSCHF conquered the art world',
        image: '/news/cat/style/sub3.jpg'
    }


]