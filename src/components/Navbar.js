import React from 'react';
import logo from '../assets/img/logo-white.svg';
import Svg from './Svg';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-dark" data-overlay data-sticky="top">
      <div className="container">
        <a className="navbar-brand fade-page" href="#">
          <Svg src={logo} />
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="py-2 py-lg-0">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false"
                   aria-haspopup="true">Blog</a>
                <div className="dropdown-menu row">
                  <div className="col-auto" data-dropdown-content>
                    <div className="dropdown-grid-menu">
                      <div className="dropdown">
                        <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid"
                           aria-expanded="false" aria-haspopup="true">
                          <span>Blog Layouts</span>
                        </a>
                        <div className="dropdown-menu row">
                          <div className="col-auto" data-dropdown-content>
                            <div className="dropdown-grid-menu"><a href="blog-cards.html"
                                                                   className="dropdown-item fade-page">Blog
                              Cards</a><a href="blog-masonry.html" className="dropdown-item fade-page">Blog
                              Masonry</a><a href="blog-sidebar.html" className="dropdown-item fade-page">Blog
                              Sidebar</a>
                              <a
                                href="blog-magazine.html" className="dropdown-item fade-page">Blog Magazine</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid"
                           aria-expanded="false" aria-haspopup="true">
                          <span>Article Layouts</span>
                        </a>
                        <div className="dropdown-menu row">
                          <div className="col-auto" data-dropdown-content>
                            <div className="dropdown-grid-menu"><a href="blog-article.html"
                                                                   className="dropdown-item fade-page">Article
                              Basic</a><a href="blog-article-video.html" className="dropdown-item fade-page">Article
                              Video</a><a href="blog-article-image-header.html" className="dropdown-item fade-page">Article
                              Image Header</a>
                              <a
                                href="blog-article-image-header-parallax.html" className="dropdown-item fade-page">Article
                                Image Parallax</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false"
                   aria-haspopup="true">Support</a>
                <div className="dropdown-menu row">
                  <div className="col-auto px-0" data-dropdown-content>
                    <div className="bg-white rounded border shadow-lg o-hidden">
                      <div className="p-3">
                        <h6 className="mb-0">Product Support</h6>
                      </div>
                      <div className="list-group list-group-flush">
                        <a href="documentation/index.html" target="_blank"
                           className="list-group-item list-group-item-action d-flex align-items-center p-3">
                          <div className="text-body ml-3">
                            <span>Documentation</span>
                            <div className="text-small text-muted">Get all the information you need</div>
                          </div>
                        </a>
                        <a
                          href="https://themes.zendesk.com/hc/en-us/articles/360000006291-How-do-I-get-help-with-the-theme-I-purchased-"
                          target="_blank"
                          className="list-group-item list-group-item-action d-flex align-items-center p-3">
                          <div className="text-body ml-3">
                            <span>Looking for answers?</span>
                            <div className="text-small text-muted">Get support</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-white ml-lg-3">Play Now</a>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
