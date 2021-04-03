import React, {useState} from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaPlay } from 'react-icons/fa'
import man from './../images/man-01.png'

const Banner = () => {
  const [state] = useState({
    title: 'I am usman',
    text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    image: man
  })
  return <header className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col_6'>
          <div className='headerContent'>
            <div className='headerSection'>
              <ul className='headerUl'>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaInstagram /></li>
                <li><FaPinterest /></li>
                <li><FaFacebook /></li>
              </ul>
              <h1>{state.title}</h1>
              <p>{state.text}</p>
              <div className='headerButton'>
                <a href="" className='btn btn-outline'>My Portfolio</a>&nbsp;&nbsp;&nbsp;
                <a href="" className='btn btn-smart'><FaPlay className='play'/></a>
              </div>
            </div>
          </div>
        </div>
        <div className='col_6'>
          <div className='bannerImg'>
            <img src={state.image} />
          </div>
        </div>
      </div>
    </div>
  </header>
}

export default Banner
