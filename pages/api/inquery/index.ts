import { NextApiRequest, NextApiResponse } from "next";
import Mailgun from "mailgun-js";
import mailer from "utils/mailer";
import captchaValidator, {
  CaptchaValidationParams,
} from "utils/captchaValidator";
import remoteIp from "utils/remoteIp";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Mailgun.messages.SendResponse | string>
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
        return res.status(400).send(await response.text());
      }

      const captchaValidationResult = await response.json();

      if (!captchaValidationResult.success) {
        return res.status(400).json(captchaValidationResult);
      }

      const result = await mailer({
        to: String(process.env.EMAIL_RECIPIENTS),
        from: email,
        subject: name,
        text: `
          ${description}
          ${phone}, ${name}
        `,
      });
      res.send(result);
    } catch (err) {
      res.status(err.statusCode ?? 400).send(err.message);
    }
    return;
  }
  res.status(400);
};

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  description: string;
}

export type ContactFormReqParams = ContactForm & CaptchaValidationParams;
