"use client";

import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: "Reach out to discuss your project requirements",
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
          <div className="content-long">
            <h1 className="title-large long-text">{mock.title}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTwo() {
  const mock = {
    info: [
      [
        {
          type: "link",
          title: "General enquiries",
          link: "hello@website.com",
        },
        {
          type: "link",
          title: "Work enquiries",
          link: "work@website.com",
        },
      ],
      [
        {
          type: "text",
          title: "Address",
          text: ["350 High St", "Hawthorn, Victoria 3144", "Australia"],
        },
        {
          type: "link",
          title: "Social",
          link: "@andersenweb",
        },
      ],
    ],
    banner:
      "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp",
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
      <section className="section last-section">
        <div className="container---main">
          <div className="contact-grid">
            <div
              id="w-node-_8346bd5e-b676-fe07-8b49-cd51bac75aa6-f576d2f5"
              className="contact-details-image"
            >
              {mock.info.map((items, index) => (
                <div key={index} className="contact-pair">
                  {items.map((item, index) => (
                    <div key={index} className="conact-pair-item">
                      <div>{item.title}</div>
                      {item.type === "link" && (
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
                            {item.link}
                          </div>
                        </Link>
                      )}
                      {item.type === "text" && (
                        <div>
                          {(item.text || []).map((row, index) => (
                            <React.Fragment key={index}>
                              {index !== 0 && <br />} {row}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <img
                src={mock.banner}
                alt=""
                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                // srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp 1920w"
                className="rounded-edges"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

const formSchema = z.object({
  name: z
    .string()
    .min(1, { error: "Invalid name" })
    .max(256, { error: "Invalid Input" }),
  email: z.email(),
  phone: z.string().max(256, { error: "Invalid Input" }).optional(),
  company: z.string().max(256, { error: "Invalid Input" }).optional(),
  message: z.string().min(1, { error: "Invalid message" }),
  hasAgreed: z.boolean().optional(),
});

function ContactForm() {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
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
                <FormLabel className="sr-only">Phone (optional)</FormLabel>
                <FormControl>
                  <input
                    type="tel"
                    className="form-input w-input"
                    placeholder="Phone (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Company (optional)</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    className="form-input w-input"
                    placeholder="Company (optional)"
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
                <FormLabel className="sr-only">Message</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Message"
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
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </Form>
    </div>
  );
}
