

const Footer = () => {
  return (
    <div>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-3 border-top">
              <p className="col-md-4 mb-0 text-body-secondary">© {new Date().getFullYear()} Emilee Irwin | The Desert Vet Grooming Salon | 470 State St, Hurricane, UT 84737 | 📞(435) 635-7000</p>
          
              <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
              </a>
          
              <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="/featured" className="nav-link px-2 text-body-secondary">Featured Products</a></li>
                <li className="nav-item"><a href="/services" className="nav-link px-2 text-body-secondary">Services and Pricing</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
              </ul>
            </footer>
          </div>
    </div>
  )
}

export default Footer