"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoSendSharp } from "react-icons/io5";
import type { ContactFormInput } from "@/types/contactForm";
import { contactFormAction } from "@/actions/contact";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
    reset,
  } = useForm<ContactFormInput>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<ContactFormInput> = async (formData) => {
    try {
      const data = await contactFormAction(formData);
      if (data.status) {
        setIsSuccess(true);
        reset();
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="mx-auto px-4 max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-ibmPlexSans font-semibold text-4xl sm:text-5xl text-center tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-muted-foreground text-lg text-center">
          Have a question or project idea? I’ll get back to you soon.
        </p>
      </div>

      {/* Form Card */}
      <Card className="bg-background">
        {isSuccess ? (
          <CardContent className="flex flex-col justify-center items-center opacity-100 py-14 text-center scale-100">
            <div className="flex justify-center items-center bg-emerald-500/10 mb-4 rounded-full w-16 h-16 text-emerald-500">
              <FaCheck className="text-2xl" />
            </div>

            <h2 className="font-medium text-foreground text-xl tracking-tight transition-colors duration-500">
              Message Sent Successfully
            </h2>

            <p className="mt-2 max-w-xs text-muted-foreground text-sm leading-relaxed">
              Thanks for reaching out. I’ll get back to you as soon as possible.
            </p>
          </CardContent>
        ) : (
          <CardContent className="">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Phone */}
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className={`mb-2 font-medium text-sm ${errors?.name && "text-red-400"}`}
                  >
                    Name*
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={`mt-1 px-4 py-2.5 dark:bg-zinc-900 bg-zinc-50 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2 w-full text-sm transition ${
                      errors?.name ? "focus:ring-red-400 border-red-400" : "focus:ring-ring"
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters." },
                    })}
                  />
                  {errors.name && (
                    <p role="alert" className="text-[13px] text-red-400 tracking-tight">
                      {errors?.name?.message || "Name must be at least 2 characters."}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className={`mb-2 font-medium text-sm ${errors?.phone && "text-red-400"}`}
                  >
                    Phone*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 XXX XXX XXXX"
                    className={`mt-1 px-4 py-2.5 dark:bg-zinc-900 bg-zinc-50 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2  w-full text-sm transition ${
                      errors?.phone ? "focus:ring-red-400 border-red-400" : "focus:ring-ring"
                    }`}
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: {
                        value: 10,
                        message: "Phone number must be at least 10 characters.",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p role="alert" className="text-[13px] text-red-400 tracking-tight">
                      {errors?.phone?.message || "Phone number must be at least 10 characters."}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className={`mb-2 font-medium text-sm ${errors?.email && "text-red-400"}`}
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`mt-1 px-4 py-2.5 border dark:bg-zinc-900 bg-zinc-50 border-border focus:border-transparent rounded-lg outline-none focus:ring-2 w-full text-sm transition ${
                    errors?.email ? "focus:ring-red-400 border-red-400" : "focus:ring-ring"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="text-[13px] text-red-400 tracking-tight">
                    {errors.email.message || "Please enter a valid email address."}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className={`mb-2 font-medium text-sm ${errors?.message && "text-red-400"}`}
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Briefly describe your idea or question..."
                  className={`mt-1 px-4 dark:bg-zinc-900 bg-zinc-50 py-3 border border-border focus:border-transparent rounded-lg outline-none focus:ring-2  w-full text-sm transition resize-none ${
                    errors?.message ? "focus:ring-red-400 border-red-400" : "focus:ring-ring"
                  }`}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters." },
                  })}
                />
                {errors.message && (
                  <p role="alert" className="text-[13px] text-red-400 tracking-tight">
                    {errors?.message?.message || "Message must be at least 10 characters."}
                  </p>
                )}
              </div>

              {/* Submit */}

              <Button
                disabled={isSubmitting}
                type="submit"
                className="inline-flex items-center gap-2 hover:opacity-90 px-8 py-2.5 font-medium text-background text-sm transition cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="text-sm tracking-tight">Sending</span>
                    <Spinner className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span className="text-sm tracking-tight">Send Message</span>
                    <IoSendSharp className="opacity-90 text-base" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
