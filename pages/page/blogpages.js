import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent';
import BlogPost from '../components/blogpost';
import CategoriesBlog from '../components/categoriesblog';
import RecentPosts from '../components/recentposts';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';
import Link from 'next/link';

function blogpages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="On Blog" images={'img_group311.png'} />
            <div className="container-fluid container-fluid-check">
                <div className="row on-blog-default-size-margin">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-padding">
                        <div className="container-fluid">
                            <div className="row on-blog-row-check">
                                <BlogPost />
                            </div>
                            <ul className="pagination on-blog-pagination">
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-atag-check-div" href={'/page/seopages'}><a>1</a></Link></li>
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-atag-check-div" href={'/page/seopages'}><a>2</a></Link></li>
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-atag-check-div" href={'/page/seopages'}><a>3</a></Link></li>
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-atag-check-div" href={'/page/seopages'}><a>4</a></Link></li>
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-atag-check-div" href={'/page/seopages'}><a>5</a></Link></li>
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-border-div" href={'/page/seopages'}><a>....</a></Link></li>
                                <li className="page-item on-blog-margin-right-check-15px"><Link className="page-link on-blog-atag-check-div" href={'/page/seopages'}><a>9</a></Link></li>
                            </ul>
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

export default blogpages;