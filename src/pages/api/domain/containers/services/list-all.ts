import { orderBy } from "lodash";

import { ListAllServiceProps } from "../dto/containers";
import { getContainersRequest } from "../requests";

type Props = {
  network?: string;
};

export default async function listAllService({
  network,
}: Props): Promise<ListAllServiceProps[]> {
  const request = await getContainersRequest({ all: true, network });

  const containersMap: ListAllServiceProps[] = request.map((container) => ({
    id: container.Id,
    name: container.Names[0].replace("/", ""),
    state: container.State,
    image: container.Image,
    network: container.HostConfig.NetworkMode,
  }));

  const orderContainer = orderBy(containersMap, ["network"], "asc");

  return orderContainer;
}
