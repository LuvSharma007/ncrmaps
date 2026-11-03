import FAQSectionMaps from '@/components/FAQSectionMaps'
import Footer from '@/components/Footer'
import MapsPageSection from '@/components/MapsPageSection'
import PopularSectorMapsSection from '@/components/PopularSectorMapsSection'
import React from 'react'

const page = () => {
  return (
    <>
        <MapsPageSection/>
        <PopularSectorMapsSection/>
        <FAQSectionMaps/>
        <Footer/>
    </>
  )
}

export default page