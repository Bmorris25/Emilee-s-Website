import React from 'react'

const Featured = () => {
  return (
    <>
        <div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">The Shampoo I use</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 text-white">We are deeply motivated to provide natural dog shampoo to our clients because we believe in promoting the health and well-being of pets while being environmentally responsible. By using high-quality, natural ingredients, we aim to offer a product that is gentle on dogs' skin, free of harsh chemicals, and safe for both pets and the planet. Our commitment to sustainability and pet care drives us to deliver a shampoo that owners can trust and dogs will love.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href="https://www.naturalgroomer.com/index.html" className="btn btn-primary" tabIndex="-1" role="button" >Learn more</a>
                </div>
                </div>
                <div className="overflow-hidden">
                <div className="container px-5">
                    <img src="public/shampoo.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured