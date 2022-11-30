import { exec } from "child_process";
import { ContainersProps } from "../dto/containers";

interface Props {
  all?: boolean;
}

export default async function getContainersRequest({
  all,
}: Props): Promise<ContainersProps[]> {
  return new Promise((resolve) => {
    let urlRequest = `curl --unix-socket /var/run/docker.sock -H "Content-Type: application/json" -X GET http://localhost/v1.41/containers/json`;

    if (all) urlRequest += "?all=true";

    exec(urlRequest, function (error, stdout, _stderr) {
      const containers = JSON.parse(stdout);

      if (error !== null) {
        console.error("exec error: " + error);
      }

      resolve(containers);
    });
  });
}
