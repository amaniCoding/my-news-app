'use client'

import TopStories1 from "./top-stories/div-one/home"
import TopStories2 from "./top-stories/div-two/home"

export default function TopStories() {
    return (
        <section className="lg:my-10 my-5">
            <div className="max-w-[1290px] mx-auto">
                <h2 className="text-center"><span className="font-bold text-xl my-3 border-l-4 border-l-black uppercase pl-3 text-center">more top stories</span></h2>
                <TopStories1 />
                <TopStories2 />
            </div>
        </section>
    )
}