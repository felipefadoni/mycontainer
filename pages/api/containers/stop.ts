// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stopContainerService } from "../domain/containers/services";

type QueryProps = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { name } = req.query as QueryProps;

  try {
    await stopContainerService({ name });

    res.status(200).json({ message: `Container ${name} stopped` });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error` });
  }
}
