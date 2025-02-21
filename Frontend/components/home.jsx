import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="cover container px-4 py-5">
            <div className="row flex-md-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-5">
                <img src="photos/Emilee-cover.jpg" className="d-block mx-lg-auto img-fluid" id = "cover" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Emilee Irwin | Pet-Stylist</h1>
                <p className="lead">Pampering Pets, Perfecting Style!</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  
                </div>
              </div>
            </div>
          </div>



          <div className="services container px-4 py-5" id="featured-3">
            
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img className = "featured-img" src="photos/Washes.jpg" height= "300em" />
                </div>

                <h3 className="fs-2 text-body-emphasis">Washes</h3>
                <p>Keep your pet clean, shiny, and smelling great with our gentle, refreshing washes—because every pet deserves a splash of love!</p>

              </div>
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img className = "featured-img" src="photos/cuts.jpg" height= "300em" />
                </div>
                <h3 className="fs-2 text-body-emphasis">Cuts</h3>
                <p>Give your furry friend a fresh, stylish look with expert grooming that keeps them happy, healthy, and oh-so-adorable!</p>
              </div>
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img className = "featured-img" src="photos/Styling.jpg" height= "300em" />
                </div>
                <h3 className="fs-2 text-body-emphasis">Styling</h3>
                <p>Transform your pet's look with personalized hair styling that’s as unique and fabulous as they are!</p>

              </div>
            </div>
          </div>

          <div className="slides container">
            <div className="swiper">
              <div className="swiper-wrapper">
                
                <div className="swiper-slide"><img src="photos/Slider1.jpg"/></div>
                <div className="swiper-slide"><img src="photos/Slider2.jpg"/></div>
                <div className="swiper-slide"><img src="photos/Slider3.jpg"/></div>
                <div className="swiper-slide"><img src="photos/Slider4.jpg"/></div>
                <div className="swiper-slide"><img src="photos/Slider5.jpg"/></div>
              </div>
              
              <div className="swiper-pagination"></div>
            
              
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            
            </div>
          </div>
    </div>
  )
}

export default Home