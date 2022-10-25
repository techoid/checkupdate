function faqsaccordion() {
    return <>
        <div className="accordion" id="accordionExampleOne">
            <div className="accordion-item faq-us-accordion-margin-bottom">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button faq-us-components-link faq-us-accordion-background-color collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p className="faq-us-div-paraghic faq-us-font-family">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExampleOne">
                <div className="accordion-body faq-us-accordion-body faq-us-font-family">
                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item faq-us-accordion-margin-bottom">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button faq-us-components-link faq-us-accordion-background-color collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <p className="faq-us-div-paraghic faq-us-font-family">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleOne">
                    <div className="accordion-body faq-us-accordion-body faq-us-font-family">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item faq-us-accordion-margin-bottom">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button faq-us-components-link faq-us-accordion-background-color collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <p className="faq-us-div-paraghic faq-us-font-family">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExampleOne">
                    <div className="accordion-body faq-us-accordion-body faq-us-font-family">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item faq-us-accordion-margin-bottom">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button faq-us-components-link faq-us-accordion-background-color collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        <p className="faq-us-div-paraghic faq-us-font-family">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExampleOne">
                    <div className="accordion-body faq-us-accordion-body faq-us-font-family">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
      </>
  };
  
  export default faqsaccordion;