import React from 'react'
import Container from '../commonUi/Container'
import { Link } from 'react-router-dom'
import Images from '../commonUi/Images'
import subBannerOne from "/src/assets/subBannerOne.png"
import subBannerTwo from "/src/assets/subBannerTwo.png"

const BannerBottom = () => {
  return (
    <div className='py-25'>
        <Container>
            <div className="grid lg:grid-cols-2 gap-7.5">
                <Link to={""}><Images imgSrc={subBannerOne} className={"w-full"}/></Link>
                <Link to={""}><Images imgSrc={subBannerTwo} className={"w-full"}/></Link>
            </div>
        </Container>
    </div>
  )
}

export default BannerBottom