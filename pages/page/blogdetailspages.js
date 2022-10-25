import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent';
import BlogDetails from '../components/blogdetails';
import CategoriesBlog from '../components/categoriesblog';
import RecentPosts from '../components/recentposts';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';

function blogdetailspages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="Blog Details" images={'img_group300.png'} />
            <div className="container-fluid container-fluid-check">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="container-fluid on-blog-details-container-fluid-padding">
                            <div className="row">
                                <BlogDetails /> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-padding">
                        <div className="container-fluid">
                            <div className="row on-blog-row-check">
                                <CategoriesBlog />
                                <RecentPosts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default blogdetailspages;