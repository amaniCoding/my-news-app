'use client'

import DivOne from "./div-one"
import DivThree from "./div-three"
import DivTwo from "./div-two"


export default function TopStories2() {
  return (
    <section>
      <div className="max-w-[1290px] mx-auto">
        <div className="grid grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3 col-span-12">
            <DivOne/>
            
          </div>
          <div className="lg:col-span-6 col-span-12">
          <DivTwo/>
          </div>
          <div className="lg:col-span-3 col-span-12">
            <DivThree/>
          </div>
        </div>
      </div>
    </section>
  )
}