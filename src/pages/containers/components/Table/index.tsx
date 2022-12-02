import { TableNetworks } from "./styles";

export type RowsProps = {
  id: string;
  name: string;
  state: string;
  image: string;
  network: string;
};

type Props = {
  headers: string[];
  rows: RowsProps[];
  stopContainer: (name: string) => void;
  startContainer: (name: string) => void;
};

export default function Table({
  headers,
  rows,
  stopContainer,
  startContainer,
}: Props) {
  return (
    <TableNetworks>
      <thead>
        <tr>
          {headers.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.state}</td>
            <td>
              <p>{row.network}</p>
            </td>
            <td>
              {["restarting", "running"].includes(row.state) && (
                <button
                  onClick={() => stopContainer(row.name)}
                  className="btn-stop"
                >
                  Stop
                </button>
              )}
              {["created"].includes(row.state) && (
                <button
                  onClick={() => stopContainer(row.name)}
                  className="btn-stop"
                >
                  Delete
                </button>
              )}
              {row.state === "exited" && (
                <button
                  onClick={() => startContainer(row.name)}
                  className="btn-start"
                >
                  Start
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </TableNetworks>
  );
}
