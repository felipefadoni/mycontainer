import { startContainerRequest } from "../requests";

type Props = {
  name: string;
};

export default async function startContainerService({
  name,
}: Props): Promise<void> {
  await startContainerRequest({ name });
}
