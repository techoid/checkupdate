function detailscomponent({ title,images }) {
    const styling = {
        backgroundImage: `url('/assets/images/${images}')`,
    }
    return <>
        <div className="container-fluid container-fluid-check">
            <div className="row">
                <div style={styling} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 top-container">
                    <h1 className="top-heading">{ title }</h1>
                    <h1 className="top-sub-heading"><span className="house-icon"><i className="fa-solid fa-house"></i></span>&nbsp;<span className="angle-arrows-icon"><i className="fa-solid fa-angle-right"></i></span>&nbsp;&nbsp;<span className="sub-heading">{ title }</span></h1>
                </div>
            </div>
        </div>
    </>
};

export default detailscomponent;