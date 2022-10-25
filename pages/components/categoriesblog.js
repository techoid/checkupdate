import Link from 'next/link';

function categoriesblog() {
    return <>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 widthneg51">
            <h1 className="on-blog-Categories">Categories</h1>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Beverages
                    <span className="badge rounded-pill on-blog-ul-span">(14)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Diets
                    <span className="badge rounded-pill on-blog-ul-span">(5)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Female Fitness
                    <span className="badge rounded-pill on-blog-ul-span">(9)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Fitness
                    <span className="badge rounded-pill on-blog-ul-span">(2)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Food
                    <span className="badge rounded-pill on-blog-ul-span">(4)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Healthy Food
                    <span className="badge rounded-pill on-blog-ul-span">(9)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Healthy Routine
                    <span className="badge rounded-pill on-blog-ul-span">(20)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Meal Plan
                    <span className="badge rounded-pill on-blog-ul-span">(12)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Nutrition
                    <span className="badge rounded-pill on-blog-ul-span">(34)</span></a></Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center on-blog-ul-list-group">
                    <Link href={'/page/seopages'}><a className="on-blog-atag-check-text-decoration"><i className="fa-solid fa-chevron-right on-blog-icon-font-size"></i> Nutritionist
                    <span className="badge rounded-pill on-blog-ul-span">(56)</span></a></Link>
                </li>
            </ul>
        </div>
    </>
};

export default categoriesblog;