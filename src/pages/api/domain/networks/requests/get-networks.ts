import { exec } from "child_process";

export interface NetworksProps {
  Name: string;
  Id: string;
  Created: string;
}

export default async function getNetworksRequest(): Promise<NetworksProps[]> {
  return new Promise((resolve) => {
    let urlRequest = `curl --unix-socket /var/run/docker.sock -H "Content-Type: application/json" -X GET http://localhost/v1.41/networks`;

    exec(urlRequest, function (error, stdout, _stderr) {
      const containers = JSON.parse(stdout);

      if (error !== null) {
        console.error("exec error: " + error);
      }

      resolve(containers);
    });
  });
}
