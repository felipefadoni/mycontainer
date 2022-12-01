// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getNetworksService } from "src/pages/api/domain/networks/services";
import { NetworksServiceProps } from "../../domain/networks/services/get-networks";

type Data = {
  message: string;
  rows?: NetworksServiceProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const getAllNetWorks = await getNetworksService();
    res.status(200).json({
      message: "Get All Networks",
      rows: getAllNetWorks,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
