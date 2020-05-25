import Mailgun from "mailgun-js";

const defaultConfig: Mailgun.ConstructorParams = {
  apiKey: String(process.env.MAILGUN_API_KEY),
  domain: String(process.env.MAILGUN_DOMAIN),
};

export default (
  sendData: Mailgun.messages.SendData,
  config?: Mailgun.ConstructorParams
) =>
  new Mailgun(
    config instanceof Object ? { ...defaultConfig, ...config } : defaultConfig
  )
    .messages()
    .send(sendData);
