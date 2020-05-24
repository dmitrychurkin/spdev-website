import { NextApiRequest } from "next";

export default (req: NextApiRequest) => {
  const ipAddr = req.headers["x-forwarded-for"];
  console.log(`req.headers["x-forwarded-for"] ipAddr => `, ipAddr);
  if (typeof ipAddr === "string") {
    return ipAddr.split(",").slice(-1)[0];
  }
  return req.connection.remoteAddress;
};
