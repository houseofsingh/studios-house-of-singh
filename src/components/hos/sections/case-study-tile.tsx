import { CaseStudy } from "@/lib/data/case-studies";
import Link from "next/link";

export default function CaseStudyTile({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case-study-item">
      <Link
        href={`/case-studies/${caseStudy.id}`}
        className="hover-image-link w-inline-block"
      >
        <img
          src={caseStudy.cover.src}
          loading="lazy"
          className="hover-image case-study-image"
          alt=""
        />
        <div className="case-study-badge">
          <img src={caseStudy.badge.src} loading="lazy" alt="" />
        </div>
      </Link>
      <div className="case-study-item-contents">
        <div>Case Study</div>
        <div className="title-small">{caseStudy.title}</div>
        <div className="metric">
          <div className="title-huge">{caseStudy.metrics.stat}</div>
          <div className="metric-explainer muted-text">
            {caseStudy.metrics.description}
          </div>
        </div>
      </div>
    </div>
  );
}
