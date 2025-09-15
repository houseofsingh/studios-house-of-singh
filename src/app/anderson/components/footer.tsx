import Link from "next/link";

export default function Footer() {
  return null;
  return (
    <section className="footer">
      <div className="container---main">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-subscribe">
              <div>Join our newsletter</div>
              <div className="form-block footer-form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="footer-subscribe-form"
                  data-wf-page-id="67a418221152b2b5d7a767ca"
                  data-wf-element-id="16378d89-22dc-66cd-cad2-1deeccbb2ab2"
                  aria-label="Email Form"
                >
                  <input
                    className="footer-subscribe-input w-input"
                    maxLength={256}
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Email"
                    type="email"
                    id="email-2"
                    //   required=""
                  />
                  <div className="footer-subscribe-button-wrapper">
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="footer-subscribe-button w-button"
                      defaultValue="Submit"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6790339e0b57a757126051cb_interface-icon-arrow-right-white.svg"
                      alt="Arrow pointing right icon"
                      className="footer-button-icon"
                    />
                  </div>
                </form>
                <div
                  className="form-success w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Email Form success"
                >
                  <div>Thanks for subscribing!</div>
                </div>
                <div
                  className="form-error w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Email Form failure"
                >
                  <div>There was an error submitting the form.</div>
                </div>
              </div>
              <div className="small-text muted-text">
                We never share your information
              </div>
            </div>
            <div className="footer-menus-grid">
              <div className="footer-contact-button">
                <div className="footer-contact-group">
                  <div className="footer-contact-item">
                    <div>General enquiries</div>
                    <Link
                      data-wf--arrow-hover-link--variant="white"
                      href="#"
                      className="arrow-hover-link w-variant-20ae16cd-e32b-9598-6279-b8d1d7fabfd3 w-inline-block"
                    >
                      <div
                        className="arrow-hover-icon-wrapper"
                        style={{ width: 0, opacity: 0 }}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="arrow-hover-icon"
                        />
                      </div>
                      <div
                        className="arrow-link-text"
                        style={{ opacity: "0.5" }}
                      >
                        hello@website.com
                      </div>
                    </Link>
                  </div>
                  <div className="footer-contact-item">
                    <div>New business</div>
                    <Link
                      data-wf--arrow-hover-link--variant="white"
                      href="#"
                      className="arrow-hover-link w-variant-20ae16cd-e32b-9598-6279-b8d1d7fabfd3 w-inline-block"
                    >
                      <div
                        className="arrow-hover-icon-wrapper"
                        style={{ width: 0, opacity: 0 }}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="arrow-hover-icon"
                        />
                      </div>
                      <div
                        className="arrow-link-text"
                        style={{ opacity: "0.5" }}
                      >
                        work@website.com
                      </div>
                    </Link>
                  </div>
                  <div className="footer-contact-item">
                    <div>Address</div>
                    <div className="white-body-text">
                      350 High St
                      <br />
                      Hawthorn, Victoria 3144
                      <br />
                      Australia
                    </div>
                  </div>
                </div>
                <Link
                  data-wf--button--variant="white"
                  href="/"
                  className="button w-variant-81d49abd-d037-3e85-fc56-0b1a90a282ef w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">See all 40 pages</div>
                    <div className="button-text">See all 40 pages</div>
                  </div>
                </Link>
              </div>
              <div className="footer-links">
                <div>Quick links</div>
                <Link href="/home/home-1" className="white-link">
                  Home 1
                </Link>
                <Link
                  href="/company/about-1"
                  aria-current="page"
                  className="white-link w--current"
                >
                  About 1
                </Link>
                <Link href="/work/work-1" className="white-link">
                  Work 1
                </Link>
                <Link href="/company/pricing" className="white-link">
                  Pricing
                </Link>
                <Link href="/company/careers" className="white-link">
                  Careers
                </Link>
                <Link href="/company/blog-1" className="white-link">
                  Blog 1
                </Link>
                <Link href="/contact" className="white-link">
                  Contact 1
                </Link>
                <Link href="/" className="white-link">
                  See all pages
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <Link href="/" className="w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679036ea9728c7ad648ae600_Logo-white.svg"
                alt="Company Logo"
                className="footer-large-logo"
              />
            </Link>
            <div className="footer-copyright-links">
              <div className="small-text muted-text">
                © Copyright 2025{" "}
                <Link
                  href="https://link.medium-rare-templates-shop.workers.dev/?t=https%3A%2F%2Fmediumrare.shop%2F%3Futm_source%3Dwebflow.io%26utm_medium%3Dtemplate-demo%26utm_campaign%3DAndersen%2520Webflow%2520Demo%26utm_content%3DFooter%2520Copyright%2520Shop%2520Link&a=andersen&p=inner"
                  // as="document"
                  target="_blank"
                  className="white-link inside-muted"
                >
                  Medium Rare
                </Link>
                <link
                  rel="prefetch"
                  href="https://link.medium-rare-templates-shop.workers.dev/?t=https%3A%2F%2Fmediumrare.shop%2F%3Futm_source%3Dwebflow.io%26utm_medium%3Dtemplate-demo%26utm_campaign%3DAndersen%2520Webflow%2520Demo%26utm_content%3DFooter%2520Copyright%2520Shop%2520Link&a=andersen&p=inner"
                />
                .{" "}
                <Link
                  href="https://mediumrare.shop/platform/webflow-templates?utm_source=webflow.io&utm_medium=template-demo&utm_campaign=Andersen%20Webflow%20Demo&utm_content=Footer%20Webflow%20See%20more%20Templates"
                  target="_blank"
                  className="white-link inside-muted"
                >
                  Browse more Webflow Templates
                </Link>
                <link
                  rel="prefetch"
                  href="https://mediumrare.shop/platform/webflow-templates?utm_source=webflow.io&utm_medium=template-demo&utm_campaign=Andersen%20Webflow%20Demo&utm_content=Footer%20Webflow%20See%20more%20Templates"
                />
              </div>
              <div className="footer-supplemental-links">
                <Link
                  href="/template/licenses"
                  className="small-text muted-white-link"
                >
                  Licenses
                </Link>
                <Link
                  href="/template/style-guide"
                  className="small-text muted-white-link"
                >
                  Style Guide
                </Link>
              </div>
            </div>
            <div className="horizontal-line white" />
            <div className="small-text muted-text">
              This text is a legal disclaimer designed for the footer of a
              website. Begin with a statement acknowledging the company's
              registration status. This should include a placeholder for a
              generic location and a fictitious registration number, for
              example, "Registered in [Location], USA (No. XX-123456)". The text
              should mention the company's authorization under a relevant
              state-level oversight department, citing a specific act and
              including a placeholder for the license number. Mention the
              company's authorization under a specific state department, citing
              a relevant act. Include a placeholder for a license number, like
              "Authorized by the [State Department of Business Oversight] under
              the [State Money Transmission Act] (License No. YZ-987654)."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
