'use client'

import Link from "next/link"
import Image from "next/image"
export default function HealthAndWellness() {
    return (
        <div>
            <h2 className="font-bold text-xl my-3 border-l-4 border-l-black uppercase pl-3">health and wellness</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/health/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline">'Exercise snacking' several times a day can boost your health and fitness, according to new study</Link>

            <div className="md:block hidden">

                {
                    health_and_wellnewss_news.map((el, i) => {
                        return (
                            <Link href={`#`} className="block my-2 hover:underline" key={i}>{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="md:hidden block">

                {
                    health_and_wellnewss_news.map((el, i) => {
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

const health_and_wellnewss_news = [

    {
        article: 'Forget ‘sparking joy.’ Try this for easier decluttering',
        image: '/news/cat/health/sub2.jpg'
    },

    {
        article: 'Gender-affirming hormone therapy is linked to lower depression in transgender adults, study shows',
        image: '/news/cat/health/sub3.jpg'
    },
    {
        article: "Medical myths are surfacing again. 5 tips to inoculate yourself against them",
        image: '/news/cat/health/sub4.jpg'
    },


]