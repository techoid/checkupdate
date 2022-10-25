function homecomponent() {
    return <>
        <div className="row home-row-one home-default-settings">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 home-col-width-one ">
                <div className="home-components">
                    <h1 className="home-components-heading">BUILT FOR YOU</h1>
                    <h1 className="home-components-heading-two">Why do customers choose us?</h1>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 home-col-width-two">
                <div className="home-components-two">
                    <center>
                        <img className="image-components" src="/assets/images/img_image1.png" alt="No-Image" />
                        <h1 className="home-components-heading-cart">Free Nutritionist Consultation</h1>
                    </center>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 home-col-width-two">
                <div className="home-components-two">
                    <center>
                        <img className="image-components" src="/assets/images/img_image3.png" alt="No-Image" />
                        <h1 className="home-components-heading-cart">Allergies & Intolerances</h1>
                    </center>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 home-col-width-two">
                <div className="home-components-two">
                    <center>
                        <img className="image-components" src="/assets/images/img_image2.png" alt="No-Image" />
                        <h1 className="home-components-heading-cart">Macro-Specific & Custom Menus</h1>
                    </center>
                </div>
            </div>
        </div>
      </>
  };
  
  export default homecomponent;