import { NextApiRequest, NextApiResponse } from "next";
import mailer from "utils/mailer";
import captchaValidator, {
  CaptchaValidationParams,
} from "utils/captchaValidator";
import remoteIp from "utils/remoteIp";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<string | undefined>
) => {
  if (req.method === "POST") {
    const {
      name,
      phone,
      email,
      description,
      token,
    }: ContactFormReqParams = req.body;
    try {
      const response = await captchaValidator({
        token,
        remoteIp: remoteIp(req),
      });

      if (!response.ok) {
        return res.status(400).end();
      }

      const captchaValidationResult = await response.json();

      if (!captchaValidationResult.success) {
        return res.status(400).end();
      }

      await mailer({
        to: String(process.env.EMAIL_RECIPIENTS),
        from: email,
        subject: name,
        text: `
          ${description}
          ${phone}, ${name}
        `,
      });
      return res.status(201).end();
    } catch (err) {
      const response = res.status(err.statusCode ?? 500);
      return process.env.NODE_ENV === "development"
        ? response.send(err.message)
        : response.end();
    }
  }
  res.status(400).end();
};

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  description: string;
}

export type ContactFormReqParams = ContactForm & CaptchaValidationParams;
