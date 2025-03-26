'use client'
import DivOne from "./news/div-one"
import DivTwo from "./news/div-two"
import Latest from "./latest/latest"
export default function HomePage() {
  return (
    <section className="lg:my-10 my-5">
      <div className="max-w-[1290px] mx-auto">
        <div className="grid grid-cols-12 lg:gap-5 gap-3">
          <div className="lg:col-span-5 col-span-12">
            <DivOne/>
            
          </div>
          <div className="lg:col-span-4 col-span-12">
          <DivTwo/>
          </div>
          <div className="lg:col-span-3 col-span-12">
            <Latest/>
          </div>
        </div>
      </div>
    </section>
  )
}