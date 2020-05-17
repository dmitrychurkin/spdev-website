import { URLSearchParams } from "url";
import fetch from "node-fetch";

export default ({ token, remoteIp }: CaptchaValidationParams) => {
  const params = new URLSearchParams();
  params.append("secret", String(process.env.RECAPTCHA_V2_SECRET));
  params.append("response", token);
  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }
  return fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: params,
  });
};

export interface CaptchaValidationParams {
  readonly token: string;
  readonly remoteIp?: string;
}
