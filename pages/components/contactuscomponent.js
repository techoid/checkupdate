import Link from 'next/link';

function contactuscomponent() {
    return <>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-us-btn-components-display-width">
            <h1 className="contact-us-heading">Need Assistance?</h1>
            <div className="contact-us-space-div">
                <h1 className="contact-us-paraghic" ><i className="fa-solid fa-location-dot contact-us-icon"></i> R05, Oxford Tower, Business Bay, Dubai, U.A.E</h1>
                <h1 className="contact-us-paraghic" ><i className="fa-solid fa-mobile-screen-button contact-us-icon"></i> +971 56 292 2081</h1>
                <h1 className="contact-us-paraghic" ><i className="fa-solid fa-envelope contact-us-icon-two"></i> info@vmeals.ae</h1>
                <h1 className="contact-us-paraghic" ><i className="fa-sharp fa-solid fa-clock contact-us-icon-two"></i> Sunday - Friday | 10:00am - 10:00pm</h1>
            </div>
            <div className="contact-us-space-div">
                <h1 className="contact-us-text">Connect with us!</h1>
                <Link style={{marginRight: '20px'}} href={'/page/seopages'}><a className="btn btn-primary contact-us-btn-components contact-us-btn-components-color"><i className="fa-brands fa-whatsapp contact-us-button-icon"></i> WhatsApp</a></Link>
                <Link href={'/page/seopages'}><a className="btn btn-primary contact-us-btn-components contact-us-btn-components-color"><i className="fa-brands fa-rocketchat contact-us-button-icon"></i> Live Chat</a></Link>
            </div>
        </div>
    </>
};
  
export default contactuscomponent;