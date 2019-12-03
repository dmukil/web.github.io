/**
 * Footer layout for the Weather Dress App
 * Created on April 7, 2019
 *
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import * as React from 'react';
/**
 * Footer layout (presentational) component
 */
export default () => (
  <footer className="footer padding-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <aside className="footer-widget">
            <div className="footer-title">
              <h3>Copyright</h3>
            </div>
            <p>
              This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative
                Commons Attribution 4.0 International License</a>.
            </p>
            <p>
            &copy; { (new Date()).getFullYear() } <a href="https://unieuk.org/">Unicum</a>
            </p>
          </aside>
        </div>
        <div className="col-md-4">
          <aside className="footer-widget">
            <div className="footer-title">
              <h3>Publishing</h3>
            </div>
            <p>
              This site is powered by <a href="https://www.jacobs-university.de/"> Jacobs University Bremen </a>
              and hosted on C-LAB-SQL Server from Computational lab for analysis, modeling, and visualization (CLAMV) Lab.
            </p>
          </aside>
        </div>
        <div className="col-md-4">
          <aside className="footer-social">
            <div className="footer-title">
              <h3>Follow us</h3>
            </div>
            <p>Connect with us on Facebook, Instagram, Twitter, and Linked-In.</p>
            <div className="flex-w flex-c-m">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="rf-sn-size flex-c-m how-social rf-sn-trans rf-sn-margin">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="rf-sn-size flex-c-m how-social rf-sn-trans rf-sn-margin">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="rf-sn-size flex-c-m how-social rf-sn-trans rf-sn-margin">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="rf-sn-size flex-c-m how-social rf-sn-trans rf-sn-margin">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </footer>
);
