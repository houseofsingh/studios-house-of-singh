"use client";

import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import OpenRoles from "@/components/hos/sections/open-roles";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    prevPage: {
      href: "",
      title: "",
    },
    title: "",
    tags: ["Remote", "Full-time"],
  };
  return (
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
          <div className="title-with-tags">
            <div className="services-title-wrapper">
              <Link
                data-w-id="f1197e9e-15bd-4464-b0e8-de1079947e9a"
                href={mock.prevPage.href}
                className="back-link w-inline-block"
                style={{ opacity: "0.5" }}
              >
                <div
                  className="back-link-icon-wrapper"
                  style={{ width: 0, opacity: 0 }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67984dfd648608c08c098ab3_interface-icon-arrow-left-dark.svg"
                    alt="Arrow pointing left icon"
                    className="back-link-icon"
                  />
                </div>
                <div className="title-large">{mock.prevPage.title}</div>
              </Link>
              <h1 className="title-large">Strategy Director</h1>
            </div>
            <div className="tags">
              {mock.tags.map((tag, index) => (
                <div key={index} className="tag">
                  <div key={index}>{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function SectionTwo() {
  const mock = {
    subheading: `We’re looking for a creative and strategic thinker to lead our content strategy. If you’re passionate about crafting compelling narratives, building content systems that scale, and driving engagement through thoughtful storytelling, this role is for you.`,
    article: `##### Define Our Content Vision

As Content Strategy Lead, you’ll set the direction for how we communicate with our audience. You’ll refine our brand voice, develop content frameworks, and ensure consistency across platforms. Your expertise in content architecture, SEO, and user engagement will shape our strategy and drive measurable results.

With a deep understanding of our audience, you’ll craft content that informs, inspires, and converts. From editorial planning to performance analysis, you’ll take a data-driven approach to ensure our content resonates.

##### Build and Optimize Content Workflows

We believe great content isn’t just about words—it’s about systems. You’ll design and implement workflows that streamline content production, ensuring efficiency without sacrificing quality.

Collaboration is key. You’ll work closely with design, marketing, and product teams to align content with business goals and user needs. Your ability to organize, prioritize, and execute will be critical in delivering high-impact content.

- Develop and refine our content strategy, ensuring alignment with brand and business objectives
- Lead content planning, execution, and optimization across multiple channels
- Establish content guidelines, frameworks, and editorial processes
- Use analytics to measure content performance and drive continuous improvement
- Collaborate with stakeholders across teams to ensure cohesive messaging

Your work will help establish our brand as a trusted authority, engaging our audience with valuable, well-structured content.

Success in this role means understanding what works and what doesn’t. You’ll continuously analyze engagement metrics, refine our strategy, and experiment with new content formats.

By staying ahead of industry trends and audience behavior, you’ll ensure our content remains relevant and impactful. Your ability to blend creativity with data-driven decision-making will be essential in shaping our content future.

##### What You Bring:

1.  Proven experience in content strategy, editorial planning, or digital storytelling
2.  Strong understanding of SEO, UX writing, and content architecture
3.  Ability to develop frameworks for scalable content creation
4.  Excellent writing, editing, and communication skills
5.  Experience working with cross-functional teams in a fast-paced environment

Your leadership will empower our team to create content that not only tells a story but also drives action. If you’re ready to shape the future of our brand’s voice, we’d love to hear from you.

‍`,
  };
  return (
    <div
      className="fade-in-second"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <section className="section">
        <div className="container---main">
          <div className="content-medium">
            <div className="article-wrapper">
              <div className="subheading long-text">{mock.subheading}</div>
              <div className="article w-richtext [&>ul]:list-disc [&>ol]:list-decimal">
                <Markdown remarkPlugins={[[remarkGfm]]}>
                  {mock.article}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function SectionThree() {
  const mock = {
    title: "Apply now",
  };
  return (
    <div
      className="fade-in-on-scroll"
      style={{
        opacity: 0,
        transform:
          "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <section className="section">
        <div className="container---main">
          <div className="content-medium">
            <div className="career-apply">
              <div className="title-small">{mock.title}</div>
              <ApplyForRoleForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionFour() {
  const mock = {
    title: "Open roles",
    description: "Join our growing global team of change-makers.",
    items: [
      {
        href: "/careers/motion-design-specialist",
        title: "Motion Design Specialist",
        location: "Barcelona",
        basis: "Full-time",
      },
      {
        href: "/careers/senior-product-designer",
        title: "Senior Product Designer",
        location: "London",
        basis: "Full-time",
      },
      {
        href: "/careers/brand-design-lead",
        title: "Brand Design Lead",
        location: "Amsterdam or Remote",
        basis: "Full-time",
      },
      {
        href: "/careers/design-technologist",
        title: "Design Technologist",
        location: "Copenhagen",
        basis: "Full-time",
      },
      {
        href: "/careers/content-strategy-lead",
        title: "Content Strategy Lead",
        location: "Remote",
        basis: "Full-time",
      },
    ],
  };

  return (
    <div
      className="fade-in-on-scroll"
      style={{
        opacity: 0,
        transform:
          "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <OpenRoles {...mock} />
    </div>
  );
}

const formSchema = z.object({
  name: z
    .string()
    .min(1, { error: "Invalid name" })
    .max(256, { error: "Invalid Input" }),
  email: z.email(),
  phone: z.string().max(256, { error: "Invalid Input" }),
  website: z.string().max(256, { error: "Invalid Input" }).optional(),
  message: z.string().min(1, { error: "Invalid message" }),
  hasAgreed: z.boolean().optional(),
});

function ApplyForRoleForm() {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    hasAgreed: false,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // integrate with API in NextJS

    form.reset(defaultValues);
  }

  return (
    <div className="form-block w-form">
      <Form {...form}>
        <form
          id="email-form-2"
          name="email-form-2"
          data-name="Email Form 2"
          method="get"
          className="form"
          data-wf-page-id="6792de683641bd5af576d2f5"
          data-wf-element-id="b4dabb0a-a029-2dc3-1952-6a7fade0d344"
          aria-label="Email Form 2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-input w-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-input w-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Phone</FormLabel>
                <FormControl>
                  <input
                    type="tel"
                    className="form-input w-input"
                    placeholder="Phone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Website (optional)</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    className="form-input w-input"
                    placeholder="Website (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Introduce yourself</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Introduce yourself"
                    className="form-input text-area w-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="hasAgreed"
            render={({ field }) => {
              const { value, onChange, ...restFields } = field;
              return (
                <FormItem className="flex flex-row items-center gap-2">
                  {/* <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /> */}
                  <FormControl>
                    <Checkbox
                      className="w-checkbox-input w-checkbox-input--inputType-custom checkbox text-white"
                      checked={value}
                      onCheckedChange={onChange}
                      {...restFields}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    <span className="checkbox-label w-form-label">
                      I have read and agree to the{" "}
                      <Link
                        href="/utilities/privacy-policy"
                        className="underline"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </FormLabel>
                </FormItem>
              );
            }}
          />
          <input
            type="submit"
            data-wait="Please wait..."
            className="button form-button w-button"
            defaultValue="Apply"
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
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </Form>
    </div>
  );
}
