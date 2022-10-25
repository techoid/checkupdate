import Link from 'next/link';

function recentposts() {
    return <>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 on-blog-margin-top-div-check-last-div widthneg51">
            <h1 className="on-blog-Categories">Recent posts</h1>
            <div className="on-blog-image-check-flex-display">
                <div className="on-blog-image-margin-left-flex-display">
                    <img className="on-blog-image-width-check-flex-display" src="/assets/images/img_group300.png" alt="No-Image" />
                </div>
                <div className="on-blog-image-justify-content-flex-display">
                    <h1 className="on-blog-tabs on-blog-image-justify-content-margin-left">Food</h1>
                    <h1 className="on-blog-heading-font-style on-blog-image-justify-content-text-align"><Link href={'/page/seopages'}><a className="on-blog-atag-font-weight">10 Foods that Speed Up Your Metabolism | VMeals</a></Link></h1>
                </div>
            </div>
            <div className="on-blog-image-check-flex-display">
                <div className="on-blog-image-margin-left-flex-display">
                    <img className="on-blog-image-width-check-flex-display" src="/assets/images/img_group301.png" alt="No-Image" />
                </div>
                <div className="on-blog-image-justify-content-flex-display">
                    <h1 className="on-blog-tabs on-blog-image-justify-content-margin-left">Nutrition</h1>
                    <h1 className="on-blog-heading-font-style on-blog-image-justify-content-text-align"><Link href={'/page/seopages'}><a className="on-blog-atag-font-weight">How Much Protein Do You Need, Daily Protein Requirements</a></Link></h1>
                </div>
            </div>
            <div className="on-blog-image-check-flex-display">
                <div className="on-blog-image-margin-left-flex-display">
                    <img className="on-blog-image-width-check-flex-display" src="/assets/images/img_group302.png" alt="No-Image" />
                </div>
                <div className="on-blog-image-justify-content-flex-display">
                    <h1 className="on-blog-tabs on-blog-image-justify-content-margin-left">Vegetarian</h1>
                    <h1 className="on-blog-heading-font-style on-blog-image-justify-content-text-align"><Link href={'/page/seopages'}><a className="on-blog-atag-font-weight">Is Vegetarian Diet a Better Option for Athletes | VMeals</a></Link></h1>
                </div>
            </div>
            <div className="on-blog-image-check-flex-display">
                <div className="on-blog-image-margin-left-flex-display">
                    <img className="on-blog-image-width-check-flex-display" src="/assets/images/img_group303.png" alt="No-Image" />
                </div>
                <div className="on-blog-image-justify-content-flex-display">
                    <h1 className="on-blog-tabs on-blog-image-justify-content-margin-left">Healthy Food</h1>
                    <h1 className="on-blog-heading-font-style on-blog-image-justify-content-text-align"><Link href={'/page/seopages'}><a className="on-blog-atag-font-weight">Healthy Dinner for Weight Loss, Nutritious Low Calorie Options</a></Link></h1>
                </div>
            </div>
        </div>
    </>
};

export default recentposts;