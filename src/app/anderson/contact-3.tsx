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
              <h1 className="title-large">
                Let’s turn your vision into a reality that inspires and
                connects.
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
        <section className="section last-section below-title">
          <div className="container---main">
            <div className="form-block w-form">
              <form
                id="wf-form-Planner-Form"
                name="wf-form-Planner-Form"
                data-name="Planner Form"
                method="get"
                className="planner-form"
                data-wf-page-id="67a3fe9dde791b47c4392c6b"
                data-wf-element-id="668d96d2-9dd1-db5a-8f20-f557e8d4adcd"
                aria-label="Planner Form"
              >
                <div className="form-section">
                  <div className="form-section-text">
                    <div className="large-text">Overview</div>
                    <div className="large-text muted-text">
                      Every transformative project starts with clear objectives
                      and context. Help us understand your vision and what
                      success looks like for your organization.
                    </div>
                  </div>
                  <div className="form-inputs">
                    <div className="input-group">
                      <label htmlFor="Project-Name" className="input-label">
                        Project Name <span className="required-field">*</span>
                      </label>
                      <input
                        className="form-input w-input"
                        maxLength={256}
                        name="Project-Name"
                        data-name="Project Name"
                        placeholder=""
                        type="text"
                        id="Project-Name"
                        // required=""
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="Objective" className="input-label">
                        Main Objective <span className="required-field">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="Objective"
                          name="Objective"
                          data-name="Objective"
                          // required=""
                          className="form-input w-select"
                        >
                          <option value="">Choose an option</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                        <div className="select-arrow">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a425c6afee6ba0ecb562e1_interface-icon-chevron-down.svg"
                            alt="Chevron icon pointing down"
                            className="select-arrow-icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="Project-Name-2" className="input-label">
                        Project Context{" "}
                        <span className="required-field">*</span>
                      </label>
                      <textarea
                        placeholder="Tell us a little about your project and what prompted this initiative"
                        maxLength={5000}
                        id="Context"
                        name="Context"
                        data-name="Context"
                        className="form-input text-area w-input"
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="field" className="input-label">
                        Target launch date{" "}
                        <span className="required-field">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="Date"
                          name="Date"
                          data-name="Date"
                          // required=""
                          className="form-input w-select"
                        >
                          <option value="">Choose Date</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                        <div className="select-arrow">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a425c6afee6ba0ecb562e1_interface-icon-chevron-down.svg"
                            alt="Chevron icon pointing down"
                            className="select-arrow-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-text">
                    <div className="large-text">Scope &amp; Requirements</div>
                    <div className="large-text muted-text">
                      Understanding your specific needs and constraints helps us
                      shape the right approach. Share the key parameters that
                      will influence the project's direction.
                    </div>
                  </div>
                  <div className="form-inputs">
                    <div className="input-group">
                      <label htmlFor="Objective-2" className="input-label">
                        Project Scale <span className="required-field">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="Scale"
                          name="Scale"
                          data-name="Scale"
                          // required=""
                          className="form-input w-select"
                        >
                          <option value="">Choose an option</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                        <div className="select-arrow">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a425c6afee6ba0ecb562e1_interface-icon-chevron-down.svg"
                            alt="Chevron icon pointing down"
                            className="select-arrow-icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="Deliverables" className="input-label">
                        Key deliverables{" "}
                        <span className="required-field">*</span>
                      </label>
                      <textarea
                        placeholder="Tell us a little about your project and what prompted this initiative"
                        maxLength={5000}
                        id="Deliverables"
                        name="Deliverables"
                        data-name="Deliverables"
                        className="form-input text-area w-input"
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="Deliverables-2" className="input-label">
                        Target Platforms{" "}
                        <span className="required-field">*</span>
                      </label>
                      <div className="form-checkbox-grid">
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            data-name="Checkbox"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            className="checkbox-label body-size w-form-label"
                            // htmlFor="checkbox"
                          >
                            Web
                          </span>
                        </label>
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-4"
                            name="checkbox-4"
                            data-name="Checkbox 4"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            className="checkbox-label body-size w-form-label"
                            // htmlFor="checkbox-4"
                          >
                            Mobile
                          </span>
                        </label>
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-3"
                            name="checkbox-3"
                            data-name="Checkbox 3"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            className="checkbox-label body-size w-form-label"
                            // htmlFor="checkbox-3"
                          >
                            Desktop
                          </span>
                        </label>
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-2"
                            name="checkbox-2"
                            data-name="Checkbox 2"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            className="checkbox-label body-size w-form-label"
                            // htmlFor="checkbox-2"
                          >
                            Other
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-text">
                    <div className="large-text">Budget &amp; Resources</div>
                    <div className="large-text muted-text">
                      Transparent discussion about resources helps us recommend
                      the most effective approach. Let us know your investment
                      parameters and team availability.
                    </div>
                  </div>
                  <div className="form-inputs">
                    <div className="input-group">
                      <label htmlFor="Objective-2" className="input-label">
                        Budget range
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="Budget-Range"
                          name="Budget-Range"
                          data-name="Budget Range"
                          // required=""
                          className="form-input w-select"
                        >
                          <option value="">Choose an option</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                        <div className="select-arrow">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a425c6afee6ba0ecb562e1_interface-icon-chevron-down.svg"
                            alt="Chevron icon pointing down"
                            className="select-arrow-icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="Objective-2" className="input-label">
                        Decision timeline
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="Timeline"
                          name="Timeline"
                          data-name="Timeline"
                          // required=""
                          className="form-input w-select"
                        >
                          <option value="">Choose an option</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                        <div className="select-arrow">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a425c6afee6ba0ecb562e1_interface-icon-chevron-down.svg"
                            alt="Chevron icon pointing down"
                            className="select-arrow-icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="Context-2" className="input-label">
                        Internal resources
                      </label>
                      <textarea
                        placeholder="What team members will be responsible for this project?"
                        maxLength={5000}
                        id="Internal-resources"
                        name="Internal-resources"
                        data-name="Internal resources"
                        className="form-input text-area w-input"
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="Stakeholders" className="input-label">
                        Stakeholders
                      </label>
                      <textarea
                        placeholder="Who are the key decision makers for this project?"
                        maxLength={5000}
                        id="Stakeholders"
                        name="Stakeholders"
                        data-name="Stakeholders"
                        className="form-input text-area w-input"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-text">
                    <div className="large-text">Complete Submission</div>
                    <div className="large-text muted-text">
                      Please review your information and agree to our
                      consultation terms.
                    </div>
                  </div>
                  <div className="form-inputs">
                    <div className="input-group">
                      <label htmlFor="Additional" className="input-label">
                        Additional notes
                      </label>
                      <textarea
                        placeholder="Any other important details you would like to share?"
                        maxLength={5000}
                        id="Additional"
                        name="Additional"
                        data-name="Additional"
                        className="form-input text-area w-input"
                        defaultValue={""}
                      />
                    </div>
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox align-top" />
                      <input
                        type="checkbox"
                        name="Agree-1"
                        id="Agree-1"
                        data-name="Agree 1"
                        // required=""
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      />
                      <span
                        className="checkbox-label long-text w-form-label"
                        // htmlFor="Agree-1"
                      >
                        I understand that submitted information will be handled
                        in accordance with Andersen's privacy policy. While we
                        aim to respond within 48 hours, complex requests may
                        require additional time.
                      </span>
                    </label>
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox align-top" />
                      <input
                        type="checkbox"
                        name="Agree-2"
                        id="Agree-2"
                        data-name="Agree 2"
                        // required=""
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      />
                      <span
                        className="checkbox-label long-text w-form-label"
                        // htmlFor="Agree-2"
                      >
                        I'd like to receive occasional insights about design,
                        technology, and innovation from Andersen. You can
                        unsubscribe at any time.
                      </span>
                    </label>
                    <Link href="#" className="button large w-button">
                      Submit Planner
                    </Link>
                    <div className="small-text muted-text">
                      All fields marked with * are required
                    </div>
                  </div>
                </div>
              </form>
              <div
                className="form-success w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="Planner Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="form-error w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="Planner Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
