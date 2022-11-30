import { stopContainerRequest } from "../requests";

type Props = {
  name: string;
};

export default async function stopContainerService({ name }: Props) {
  await stopContainerRequest({ name });
}
