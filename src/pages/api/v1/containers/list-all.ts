// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListAllServiceProps } from "src/pages/api/domain/containers/dto/containers";
import { listAllService } from "src/pages/api/domain/containers/services";

type Data = {
  message: string;
  containers: ListAllServiceProps[];
};

type QueryParams = {
  network?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { network } = req.query as QueryParams;
  const getAll = await listAllService({ network });
  res.status(200).json({
    message: "Get All Containers",
    containers: getAll,
  });
}
