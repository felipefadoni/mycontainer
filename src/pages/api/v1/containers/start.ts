// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { startContainerService } from "src/pages/api/domain/containers/services";

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
    await startContainerService({ name });
    res.status(200).json({ message: `Container ${name} is running` });
  } catch (error) {
    const object = JSON.parse(String(error as unknown));
    res.status(500).json({ message: object.message });
  }
}
