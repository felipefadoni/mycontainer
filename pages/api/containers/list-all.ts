// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListAllServiceProps } from "../domain/containers/dto/containers";
import { listAllService } from "../domain/containers/services";

type Data = {
  message: string;
  containers: ListAllServiceProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const getAll = await listAllService();
  res.status(200).json({
    message: "Get All Containers",
    containers: getAll,
  });
}
