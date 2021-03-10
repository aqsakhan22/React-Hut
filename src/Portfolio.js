
import React from 'react'
import img1 from './img/portfolio/img12.jpg'
import img2 from './img/portfolio/img2.jpg'
import img7 from './img/portfolio/img7.jpg'
import img12 from './img/portfolio/img5.jpg'



import img9 from './img/portfolio/img9.jpg'
import img10 from './img/portfolio/img10.jpg'
export default class Portfolio extends React.Component{
    render(){
        return(
            <div>
                   
{/* <!-- Portfolio Grid --> */}

<section className="bg-light page-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Hut View</h2>
          <h3 className="section-subheading text-muted">check our Hut view images .</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i> 
              </div>
            </div>
            {/* <!--image--> */}
            <img  className="w-100 p-3"  style={{ backgroundImage:`url(${img1})`, height: 190
       }}    alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>HUT-1</h4>
            <p className="text-muted">CHECK</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img2})` ,height: 190}} className="w-100 p-3"  alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>HUT-2</h4>
            <p className="text-muted">CHECK</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img7})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-3</h4>
            <p className="text-muted">CHECK</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img9})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-4</h4>
            <p className="text-muted">CHECK</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img10})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-5</h4>
            <p className="text-muted">CHECK</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style={{ backgroundImage:`url(${img12})`,height: 190 }} className="w-100 p-3"  alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>HUT-6</h4>
            <p className="text-muted">CHECK</p>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}
