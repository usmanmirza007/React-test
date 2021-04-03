import React, { useState } from 'react'
import { FaGithub, FaCircleNotch, FaApple, FaCamera, FaFileVideo, FaSearchDollar } from 'react-icons/fa'

const Services = () => {
  const [state] = useState({
    title: 'SERVICES',
    title1: 'My Services',
    text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
  })
  const [services] = useState([
    {
      id: 1,
      title: 'Web development',
      icon: 'FaGithub',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
    {
      id: 2,
      title: 'Photography',
      icon: 'FaCircleNotch',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
    {
      id: 3,
      title: 'App development',
      icon: 'FaApple',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
    {
      id: 4,
      title: 'Photography',
      icon: 'FaCamera',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
    {
      id: 5,
      title: 'Video Editing',
      icon: 'FaFileVideo',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
    {
      id: 6,
      title: 'SEO Expert',
      icon: 'FaSearchDollar',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
  ])
  return (
    <div className='services'>
      <div className='container'>
        <div className='servicesHeader'>
          <h3 className='heading'>{state.title}</h3>
          <div className='comman'>
            <h1 className='mainHeading'>{state.title1}</h1>
            <p className='mainContent'>{state.text}</p>
            <div className='commanBorder'></div>
          </div>
          <div className='row'>
            {services.map((item) => (
              <div className='col_4'>
                <div className='servicesBox'>
                  {<FaGithub className='commanIcons' />}
                  <div className='servicesBoxHeader'>{item.title}</div>
                  <div className='servicesBoxPara'>{item.text}</div>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services