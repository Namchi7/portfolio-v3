"use client";

import React, { useEffect, useRef, useState } from "react";

import RoutePageLayout from "@/components/RoutePageLayout";
import Button from "@/components/Button";

import { mailDataType } from "@/constants/types";
import sendMail from "@/utils/sendMail";

import send from "@/assets/svg/send.svg";

const Contact: React.FC = () => {
  const [showMailResponse, setShowMailResponse] = useState<boolean>(false);
  const [mailSent, setMailSent] = useState<boolean>(false);
  const [mailResponseText, setMailResponseText] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const msg = formData.get("message") as string;

    const mailData: mailDataType = {
      name: fullname,
      email: email,
      msg: msg,
    };

    setDisabled(true);

    const response: { status: "success" | "failed"; message: string } =
      await sendMail(mailData);

    if (response.status === "success") {
      setMailSent(true);
      setMailResponseText("Mail sent successfully.");
      setShowMailResponse(true);

      // Clear form fields
      if (formRef.current) {
        formRef.current.reset();
      }
    }
    if (response.status === "failed") {
      setMailSent(false);
      setMailResponseText(
        "An error occurred while sending your mail. Please try again later."
      );
      setShowMailResponse(true);
    }

    setDisabled(false);
  };

  useEffect(() => {
    if (showMailResponse) {
      const timeout = setTimeout(() => {
        setShowMailResponse(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showMailResponse]);

  return (
    <RoutePageLayout title="Contact">
      <h3 className="text-2xl text-white-2 font-semibold mt-30p">Contact</h3>

      <form ref={formRef} onSubmit={formSubmit} className="w-full mt-30p">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-30p gap-y-4 sm:gap-y-30p">
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            required
            className="text-white-2 text-15p border border-jet outline-none rounded-14p px-20p py-15p"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="text-white-2 text-15p border border-jet outline-none rounded-14p px-20p py-15p"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          rows={10}
          required
          className="w-full text-white-2 text-15p border border-jet outline-none rounded-14p resize-none px-20p py-15p mt-4 sm:mt-30p"
        ></textarea>

        <p
          className={`${showMailResponse ? "block" : "hidden"} ${
            mailSent ? "text-green-500" : "text-red-400"
          } text-sm font-medium px-20p mt-4 sm:mt-30p`}
        >
          {mailResponseText}
        </p>

        <Button disabled={disabled} icon={send} title="Send Message" />
      </form>
    </RoutePageLayout>
  );
};

export default Contact;
