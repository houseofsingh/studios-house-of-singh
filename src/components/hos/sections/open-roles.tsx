import Link from "next/link";
import { CAREERS_QUERYResult } from "../../../../sanity.types";

export default function OpenRoles({ list }: { list: CAREERS_QUERYResult }) {
  return (
    <section id="open-roles" className="section">
      <div className="container---main">
        <div className="vertical-section">
          <div className="section-title">
            <div className="title-large">Open roles</div>
            <div className="subheading content-short">
              Join our growing global team of
              <br />
              change-makers.
            </div>
          </div>
          <div className="careers-collection w-dyn-list">
            <div role="list" className="w-dyn-items">
              {!!list.length ? (
                list.map((career) => (
                  <div key={career._id} role="listitem" className="w-dyn-item">
                    <Link
                      href={`/careers/${career._id}`}
                      className="career-link w-inline-block"
                    >
                      <div id="w-node-e292ff74-228b-aded-57c4-828a25cfadc0-5170c48f">
                        {career.position}
                      </div>
                      <div className="career-location">{career.location}</div>
                      <div className="career-basis">{career.basis}</div>
                      <img
                        src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                        alt="Arrow pointing right icon"
                        className="career-link-icon"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </Link>
                  </div>
                ))
              ) : (
                <div role="listitem" className="w-dyn-item">
                  <div className="muted-text">Currently no role is open.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
