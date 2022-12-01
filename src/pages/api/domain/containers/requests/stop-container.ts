import { exec } from "child_process";

interface Props {
  name: string;
}

export default async function stopContainerRequest({
  name,
}: Props): Promise<void> {
  return new Promise((resolve) => {
    let urlRequest = `curl --unix-socket /var/run/docker.sock -X POST http://localhost/v1.41/containers/${name}/stop`;

    console.log("STOP:", urlRequest);

    exec(urlRequest, function (error) {
      if (error !== null) {
        console.error("exec error: " + error);
      }

      resolve();
    });
  });
}
