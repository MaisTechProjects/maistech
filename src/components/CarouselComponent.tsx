import React from 'react'

const CarouselComponent = () => {
  return (
    <article className='carousel-item'>
        <img src="/images/studio-mobile.png" height={500} width={500} alt="Studio21" className='img mobile'/>
        <h1 className='title'>Studio 21</h1>
        <p className='description'>Studio de tatuagem</p>
        <img src="/images/studio-pc.png" height={1000} width={1000} alt="Studio21" className='img pc'/>
    </article>
  )
}

export default CarouselComponent