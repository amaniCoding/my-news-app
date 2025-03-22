'use client'

import TopStories1 from "./top-stories/div-one/home"
import TopStories2 from "./top-stories/div-two/home"

export default function TopStories() {
    return (
        <section>
            <div className="max-w-[1290px] mx-auto mt-5 md:p-0 p-4">
                <h2 className="text-center"><span className="font-bold text-xl my-3 border-l-4 border-l-black uppercase pl-3 text-center">more top stories</span></h2>
                <TopStories1 />
                <TopStories2 />
            </div>
        </section>
    )
}