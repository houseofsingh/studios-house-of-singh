import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <div
        className="fade-in-first"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section title">
          <div className="container---main">
            <div className="content-long">
              <h1 className="title-large long-text">
                Reach out to discuss your project requirements
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div
        className="fade-in-second"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section last-section">
          <div className="container---main">
            <div className="contact-grid">
              <div
                id="w-node-_8346bd5e-b676-fe07-8b49-cd51bac75aa6-f576d2f5"
                className="contact-details-image"
              >
                <div className="contact-pair">
                  <div className="conact-pair-item">
                    <div>General enquiries</div>
                    <Link
                      data-wf--arrow-hover-link--variant="base"
                      href="#"
                      className="arrow-hover-link w-inline-block"
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
                  <div className="conact-pair-item">
                    <div>Work enquiries</div>
                    <Link
                      data-wf--arrow-hover-link--variant="base"
                      href="#"
                      className="arrow-hover-link w-inline-block"
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
                </div>
                <div className="contact-pair">
                  <div className="conact-pair-item">
                    <div>Address</div>
                    <div>
                      350 High St
                      <br />
                      Hawthorn, Victoria 3144
                      <br />
                      Australia
                    </div>
                  </div>
                  <div className="conact-pair-item">
                    <div>Social</div>
                    <Link
                      data-wf--arrow-hover-link--variant="base"
                      href="/"
                      className="arrow-hover-link w-inline-block"
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
                        @andersenweb
                      </div>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp"
                  alt=""
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                  srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp 1920w"
                  className="rounded-edges"
                />
              </div>
              <div className="form-block w-form">
                <form
                  id="email-form-2"
                  name="email-form-2"
                  data-name="Email Form 2"
                  method="get"
                  className="form"
                  data-wf-page-id="6792de683641bd5af576d2f5"
                  data-wf-element-id="b4dabb0a-a029-2dc3-1952-6a7fade0d344"
                  aria-label="Email Form 2"
                >
                  <input
                    className="form-input w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="Name"
                    type="text"
                    id="name"
                    // required=""
                  />
                  <input
                    className="form-input w-input"
                    maxLength={256}
                    name="email-3"
                    data-name="Email 3"
                    placeholder="Email"
                    type="email"
                    id="email-3"
                    // required=""
                  />
                  <input
                    className="form-input w-input"
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder="Phone (optional)"
                    type="tel"
                    id="Phone"
                  />
                  <input
                    className="form-input w-input"
                    maxLength={256}
                    name="Company"
                    data-name="Company"
                    placeholder="Company (optional)"
                    type="tel"
                    id="Company"
                  />
                  <textarea
                    placeholder="Message"
                    maxLength={5000}
                    id="Message"
                    name="Message"
                    data-name="Message"
                    className="form-input text-area w-input"
                    defaultValue={""}
                  />
                  <label className="w-checkbox checkbox-field">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                    <input
                      type="checkbox"
                      id="checkbox-2"
                      name="checkbox-2"
                      data-name="Checkbox 2"
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      className="checkbox-label w-form-label"
                      // htmlFor="checkbox-2"
                    >
                      I have read and agree to the{" "}
                      <Link
                        href="/utilities/privacy-policy"
                        className="underline"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button form-button w-button"
                    defaultValue="Send"
                  />
                </form>
                <div
                  className="w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Email Form 2 success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Email Form 2 failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
