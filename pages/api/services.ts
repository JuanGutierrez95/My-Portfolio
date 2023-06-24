// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { services } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(services);
  res.status(200).json({ services });
}
