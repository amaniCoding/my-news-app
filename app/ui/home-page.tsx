'use client'
import DivOne from "./news/div-one"
import DivTwo from "./news/div-two"
import Latest from "./latest/latest"
export default function HomePage() {
  return (
    <section>
      <div className="max-w-[1290px] mx-auto mt-5 md:p-0 p-4">
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-5 col-span-12">
            <DivOne/>
            
          </div>
          <div className="md:col-span-4 col-span-12">
          <DivTwo/>
          </div>
          <div className="md:col-span-3 col-span-12">
            <Latest/>
          </div>
        </div>
      </div>
    </section>
  )
}