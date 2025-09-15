import "@/app/anderson/anderson.css";

import About from "@/app/anderson/about-1";
// import AboutAlternate from "@/app/anderson/about-3";
import Blog from "@/app/anderson/blog-2";
import BlogDetail from "@/app/anderson/blog-article";
import Careers from "@/app/anderson/careers";
import Career from "@/app/anderson/career-single";
import CaseStudies from "@/app/anderson/case-studies";
import CaseStudy from "@/app/anderson/case-study";
import Contact from "@/app/anderson/contact-2";
// import ContactAlternate from "@/app/anderson/contact-3";
import FAQ from "@/app/anderson/FAQ";
import Home from "@/app/anderson/home";
import Services from "@/app/anderson/services";
import Service from "@/app/anderson/services-messaging";
import Team from "@/app/anderson/team";
import TeamMember from "@/app/anderson/team-member";
import Work from "@/app/anderson/work-1";
import WorkAlternative from "@/app/anderson/work-2";
import WorkDetail from "@/app/anderson/work-single";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "lucide-react";

const pages = [
  { Home, page: Home, isDone: true },
  { About, page: About, isDone: true },
  // { AboutAlternate, page: AboutAlternate },
  { Contact, page: Contact, isDone: true },
  // { ContactAlternate, page: ContactAlternate },
  { FAQ, page: FAQ, isDone: true },
  { Careers, page: Careers, isDone: true },
  { Career, page: Career, isDone: true },
  { Blog, page: Blog, isDone: true },
  { BlogDetail, page: BlogDetail, isDone: true },
  { CaseStudies, page: CaseStudies },
  { CaseStudy, page: CaseStudy },
  { Services, page: Services },
  { Service, page: Service },
  { Team, page: Team },
  { TeamMember, page: TeamMember },
  { Work, page: Work },
  { WorkAlternative, page: WorkAlternative },
  { WorkDetail, page: WorkDetail },
].map((page) => {
  const name = Object.keys(page)
    .filter((key) => !["page", "isDone"].includes(key))
    .join("");
  return {
    name,
    page: page.page,
    isDone: page.isDone,
  };
});

export default function Page() {
  return (
    <div className="grid gap-24">
      <Tabs
        defaultValue={pages[0].name}
        className="grid grid-cols-[auto_1fr] relative"
      >
        <TabsList className="grid mx-3 my-20 sticky top-20 h-max">
          {pages.map(({ name, isDone }, index) => (
            <TabsTrigger key={name} value={name} className="justify-start">
              {name} {isDone && <CheckIcon />}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map(({ name, page: Component }, index) => (
          <TabsContent key={name} value={name} className="border-l">
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
