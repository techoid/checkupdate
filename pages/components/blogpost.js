import Link from 'next/link';

function blogpost() {
    return <>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div className="on-blog-width-border-radius-one">
                <br />
                <h1 className="on-blog-tabs">Food</h1>
            </div>
            <h1 className="on-blog-heading-font-style"><Link href={'/page/blogdetailspages'}><a className="on-blog-atag-font-weight">10 Foods that Speed Up Your Metabolism | VMeals</a></Link></h1>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div className="on-blog-width-border-radius-two">
                <br />
                <h1 className="on-blog-tabs">Nutrition</h1>
            </div>
            <h1 className="on-blog-heading-font-style"><Link href={'/page/blogdetailspages'}><a className="on-blog-atag-font-weight">How Much Protein Do You Need, Daily Protein Requirements</a></Link></h1>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div className="on-blog-width-border-radius-three">
                <br />
                <h1 className="on-blog-tabs">Vegetarian</h1>
            </div>
            <h1 className="on-blog-heading-font-style"><Link href={'/page/blogdetailspages'}><a className="on-blog-atag-font-weight">Is Vegetarian Diet a Better Option for Athletes | VMeals</a></Link></h1>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div className="on-blog-width-border-radius-four">
                <br />
                <h1 className="on-blog-tabs">Healthy Food</h1>
            </div>
            <h1 className="on-blog-heading-font-style"><Link href={'/page/blogdetailspages'}><a className="on-blog-atag-font-weight">Healthy Dinner for Weight Loss, Nutritious Low Calorie Options</a></Link></h1>
        </div>
    </>
};
  
export default blogpost;