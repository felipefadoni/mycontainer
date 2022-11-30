import { ListAllServiceProps } from "../dto/containers";
import { getContainersRequest } from "../requests";

export default async function listAllService(): Promise<ListAllServiceProps[]> {
  const request = await getContainersRequest({ all: true });

  const mapReturn: ListAllServiceProps[] = request.map((container) => ({
    id: container.Id,
    name: container.Names[0],
    state: container.State,
    image: container.Image,
  }));

  return mapReturn;
}
