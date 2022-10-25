import Link from 'next/link';

function productcomponent() {
    return <>
        <div className="row home-row home-row-background-color home-default-settings">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 home-row-section-one home-row-section-width">
                <div className="home-image-section-one"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 home-row-section-width">
                <div className="home-flex-section-one">
                    <h1 className="home-heading-section-one">OUR GENIUSES</h1>
                    <h1 className="home-heading-section-two">A team of nutrition experts at your fingertips!</h1>
                    <p className="home-paragrahic-section-one">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Link href={'/page/seopages'}><a className="btn btn-primary home-btn-components home-btn-components-color">Book Appointment</a></Link>
                </div>
            </div>
        </div>
      </>
  };
  
  export default productcomponent;