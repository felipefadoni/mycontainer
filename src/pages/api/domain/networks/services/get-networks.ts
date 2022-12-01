import { orderBy } from "lodash";
import { getNetworksRequest } from "../requests";

export interface NetworksServiceProps {
  key: string;
  id: string;
  name: string;
  created: string;
}

export default async function getNetworksService(): Promise<
  NetworksServiceProps[]
> {
  const networks = await getNetworksRequest();

  const networksMap: NetworksServiceProps[] = networks.map((net) => ({
    id: net.Id,
    key: net.Id,
    name: net.Name,
    created: net.Created,
  }));

  const orderNetwork = orderBy(networksMap, ["name"], "asc");

  return orderNetwork;
}
