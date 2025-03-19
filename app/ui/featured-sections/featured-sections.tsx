'use client'


import GlobalBusiness from "./global-business"
import GlobalTravel from "./global-travel"
import HealthAndWellness from "./health-and-wellness"
import SpaceAndScience from "./space-and-science"
import Sport from "./sport"
import Style from "./style"
import Tech from "./tech"
import UsPolitics from "./us-politics"

export function FeaturedSections() {
  return (
    <section>
      <div className="max-w-[1290px] mx-auto md:p-0 p-4 my-10">
        <h2 className="text-3xl font-bold my-3">Featured Sections</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <SpaceAndScience/>
          <GlobalTravel/>
          <GlobalBusiness/>
          <Style/>
          <Sport/>
          <UsPolitics/>
          <HealthAndWellness/>
          <Tech/>
        </div>
      </div>
    </section>
  )
}