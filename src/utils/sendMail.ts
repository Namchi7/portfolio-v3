import { mailDataType } from "@/constants/types";

const sendMail = async (mailData: mailDataType) => {
  const res = await fetch("/api/send-mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mailData),
  });

  return await res.json();
};

export default sendMail;
