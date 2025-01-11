'use client'

import GlobalBusinessLarge from "./featured-sections/global-business/large"
import GlobalBusinessSmall from "./featured-sections/global-business/small"
import HealthLarge from "./featured-sections/health-and-wellness/large"
import HealthSmall from "./featured-sections/health-and-wellness/small"
import PoliticsLarge from "./featured-sections/politics/large"
import PoliticsSamll from "./featured-sections/politics/small"
import SpaceLarge from "./featured-sections/space/large"
import SpaceSmall from "./featured-sections/space/small"
import SportLarge from "./featured-sections/sports/large"
import SportSmall from "./featured-sections/sports/small"
import StyleLarge from "./featured-sections/style/large"
import StyleSmall from "./featured-sections/style/small"
import TechLarge from "./featured-sections/tech/large"
import TechSmall from "./featured-sections/tech/small"
import TravelLarge from "./featured-sections/travel/large"
import TravelSmall from "./featured-sections/travel/small"
export function FeaturedSections() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      <GlobalBusinessLarge/>
      <GlobalBusinessSmall/>

      <HealthLarge/>
      <HealthSmall/>

      <PoliticsLarge/>
      <PoliticsSamll/>

      <SpaceLarge/>
      <SpaceSmall/>

      <SportLarge/>
      <SportSmall/>

      <StyleLarge/>
      <StyleSmall/>

      <TechLarge/>
      <TechSmall/>

      <TravelLarge/>
      <TravelSmall/>
    </div>
  )
}