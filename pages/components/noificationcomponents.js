function noificationcomponents() {
    return <>
        <div className="row section-row section-row-botton section-button-row-flex">
            <div className="section-button-components-flex">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-width-3">
                    <img className="section-row-col-image" src="/assets/images/img_tabletpromock.png" alt="No-Image"/>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 col-width-8">
                    <h1 className="section-row-col-heading">Get your free <span className="color-section">weight loss</span> guide today!</h1>
                    <form action="" method="POST" encType="multipart/form-data">
                        <input className="heading-input" type="text" name="email" id="email" placeholder="Please enter your email address..." />
                        <input className="btn btn-primary section-button-components-title-row-col" type="button" name="button-submit" value="Subscribe" id="button-submit" />
                    </form>
                </div>
            </div>
        </div>
      </>
  };
  
  export default noificationcomponents;