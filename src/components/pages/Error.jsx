import React from 'react'
import Container from '../commonUi/Container'
import Images from '../commonUi/Images'
import error from '/src/assets/error.gif'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <Container className={"text-center"}>
        <div className="flex items-center justify-center">
          <Images imgSrc={error}/>
        </div>
        <Link to={"/"} className='text-white text-base font-bold bg-[#39AD31] rounded-lg hover:text-[#303030] hover:bg-[#39ad315c] transition-all duration-400 px-7.5 py-3'>Go To Home</Link>
      </Container>
    </div>
  )
}

export default Error