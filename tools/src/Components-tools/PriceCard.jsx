import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/dist/collapse"

function PriceCard() {
  return (
    <>
    <div className="container">
        <header>
            <div className="d-flex justify-content-between py-3 custom-border align-items-center">
                <a href="#" className='navbar-brand fs-4'>EayShop</a>
                <nav>
                    <strong><a href="" className='text-decoration-none me-3 text-success'>Pricing</a></strong>
                    <strong><a href=""  className='text-decoration-none  text-success'>Contact</a></strong>

                </nav>
            </div>

            <div className='text-center w-75 mx-auto my-4'>
                <h1>Pricing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad, dolores unde hic dignissimos in deserunt nemo! Aut ipsa aperiam asperiores a amet ex, sed quisquam vitae, accusantium excepturi quas.</p>
            </div>
        </header>

        <div className="row row-cols-1 row-cols-md-3">
            <div className="col">
                <div className="card text-center">
                    <div className="card-header">
                        <h4 className='fw-normal'>Free</h4>
                    </div>

                    <div className="card-body">
                        <h1 className='card-title'>$0 <small className='text-muted fw-light'>/mo</small></h1>
                        <ul className='list-unstyled py-3'>
                            <li>10 users included</li>
                            <li>10 users included</li>
                            <li>10 users included</li>
                            <li>10 users included</li>

                        </ul>
                        <button className='btn btn-success btn-lg w-100 btn-outline-sucess'>Sign up</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-header">
                        <h4 className='fw-normal'>Free</h4>
                    </div>

                    <div className="card-body">
                        <h1 className='card-title'>$0 <small className='text-muted fw-light'>/mo</small></h1>
                        <ul className='list-unstyled py-3'>
                            <li>10 users included</li>
                            <li>10 users included</li>
                            <li>10 users included</li>
                            <li>10 users included</li>

                        </ul>
                        <button className='btn btn-success btn-lg w-100 btn-outline-sucess'>Sign up</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-header">
                        <h4 className='fw-normal'>Free</h4>
                    </div>

                    <div className="card-body">
                        <h1 className='card-title'>$0 <small className='text-muted fw-light'>/mo</small></h1>
                        <ul className='list-unstyled py-3'>
                            <li>10 users included</li>
                            <li>10 users included</li>
                            <li>10 users included</li>
                            <li>10 users included</li>

                        </ul>
                        <button className='btn btn-success btn-lg w-100 btn-outline-sucess'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PriceCard