import { exec } from "child_process";

interface Props {
  name: string;
}

export default async function startContainerRequest({
  name,
}: Props): Promise<void> {
  return new Promise((resolve, reject) => {
    let urlRequest = `curl --unix-socket /var/run/docker.sock -X POST http://localhost/v1.41/containers/${name}/start`;

    console.log("START:", urlRequest);

    exec(urlRequest, function (error, stdout) {
      if (stdout) {
        reject(stdout);
      }

      resolve();
    });
  });
}
