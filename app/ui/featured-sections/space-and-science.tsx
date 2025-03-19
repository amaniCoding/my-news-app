'use client'

import Link from "next/link"
import Image from "next/image"
export default function SpaceAndScience() {
    return (
        <div>
            <h2 className="font-bold text-xl my-3 border-l-4 border-l-black uppercase pl-3">spae and sceince</h2>
            <Link href={`#`}>
                <Image
                    src={`/news/cat/space/sub1.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    alt="My news app developed by Amanuel Ferede"
                    className="w-full rounded-md group-hover:brightness-75"
                />
            </Link>
            <Link href={`#`} className="font-bold block text-lg hover:underline">A doctor was deployed to an Arctic research station during the Cold War. Decades later, he learned its secret purpose</Link>

            <div className="md:block hidden">

                {
                    Space_and_science.map((el, i) => {
                        return (
                            <Link href={`#`} className="block my-2 hover:underline" key={i}>{el.article}</Link>
                        )
                    })
                }
            </div>

            <div className="md:hidden block">

                {
                    Space_and_science.map((el, i) => {
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

const Space_and_science = [

    {
        article: 'History-making Blue Ghost lunar lander sends one last message from the moon',
        image: '/news/cat/space/sub2.jpg'
    },

    {
        article: 'Mysterious radio pulses from the Milky Way ‘are unlike anything we knew before’',
        image: '/news/cat/space/sub3.jpg'
    },
    {
        article: "Trees in famous artworks contain 'hidden math' also found in nature, scientists say",
        image: '/news/cat/space/sub4.jpg'
    },


]