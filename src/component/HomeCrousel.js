import React from 'react'

const HomeCrousel = () => {
  return (
    <header>
      <div className='header-content'>
        <div className='header-content_logo'>
          <div>
            {/* <img src='https://365psd.com/images/home/469/restaurant-logo-with-chef-35068.jpg' alt='' /> */}
            <span>
              <b>Taste</b>
            </span>
          </div>
          <p>
            <b>Restaurant & BBQ</b>
          </p>
        </div>

        <div className='content-main'>
          <h1>Delicious Thali for your cravings</h1>
          <p><b>We made fresh and healthy meals with different recipes</b></p>

        </div>
      </div>
      <img className='header-img' src="https://imgk.timesnownews.com/story/veg-thali.gif?tr=w-1200,h-900" alt='' />

    </header>
  )
}

export default HomeCrousel