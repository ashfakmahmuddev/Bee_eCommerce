import React from 'react'
import Container from '../commonUi/Container'
import Images from '../commonUi/Images'
import subBannerOne from "/src/assets/subBannerOne.png"
import subBannerTwo from "/src/assets/subBannerTwo.png"

const SubBanner = () => {
  return (
    <div className='py-25'>
        <Container>
            <div className="grid lg:grid-cols-2 gap-7.5">
                <Images imgSrc={subBannerOne} className={"w-full"}/>
                <Images imgSrc={subBannerTwo} className={"w-full"}/>
            </div>
        </Container>
    </div>
  )
}

export default SubBanner