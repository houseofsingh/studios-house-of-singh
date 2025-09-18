"use client";

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
import Link from "next/link";
import { CAREER_QUERYResult } from "../../../../sanity.types";

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

export function ApplyNowForm({ career }: { career: CAREER_QUERYResult }) {
  const mock = {
    title: "Apply now",
  };

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
    console.log({
      careerId: career?._id,
      ...values,
    });
    // integrate with API in NextJS

    form.reset(defaultValues);
  }

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
                          <FormLabel className="sr-only">
                            Website (optional)
                          </FormLabel>
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
                          <FormLabel className="sr-only">
                            Introduce yourself
                          </FormLabel>
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
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
