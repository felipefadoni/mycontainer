import { exec } from "child_process";
import { isUndefined } from "lodash";
import { ContainersProps } from "../dto/containers";

interface Props {
  all?: boolean;
  network?: string;
}

export default async function getContainersRequest({
  all,
  network,
}: Props): Promise<ContainersProps[]> {
  return new Promise((resolve) => {
    const urlRequest = `curl --unix-socket /var/run/docker.sock -H "Content-Type: application/json" -X GET 'http://localhost/v1.41/containers/json`;

    let parameters = "";
    if (all) parameters += "?all=true";
    if (!isUndefined(network))
      parameters += `&filters=` + encodeURI(`{"network":["${network}"]}`);
    parameters += "'";

    const finalUrl = urlRequest + parameters;

    exec(finalUrl, function (error, stdout, _stderr) {
      const containers = JSON.parse(stdout);

      if (error !== null) {
        console.error("exec error: " + error);
      }

      resolve(containers);
    });
  });
}
