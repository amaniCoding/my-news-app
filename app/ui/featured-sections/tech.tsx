'use client'

import Link from "next/link"
import Image from "next/image"
export default function Tech() {
    return (
        <div>
            <h2 className="font-bold text-xl my-3 border-l-4 border-l-black uppercase pl-3 mx-3">tech</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/tech/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full lg:rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline px-3">Missing but not forgotten: How Ukrainians are searching for those missing in war using AI and an army of families</Link>

            <div className="lg:block hidden">

                {
                    tech_news.map((el, i) => {
                        return (
                            <Link key={i} href={`#`} className="block my-2 hover:underline">{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="lg:hidden block">

                {
                    tech_news.map((el, i) => {
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

const tech_news = [

    {
        article: 'They helped start Twitter. They didn’t realize what it would become',
        image: '/news/cat/tech/sub2.jpg'
    },

    {
        article: 'Iran is using drones and apps to catch women who aren’t wearing hijabs, says UN report',
        image: '/news/cat/tech/sub3.jpg'
    },
   


]