'use client'
import Featured from "./featured/fetured"
import TopStories from "./top-stories/top-stories"
export default function FeaturedAndTopStories() {
  return (
    <>
      <div className="md:col-span-5 col-span-12">
        <TopStories />
      </div>

      <div className="md:col-span-7 col-span-12" >
        <Featured />
      </div>

    </>
  )
}