import Link from "next/link";
import { TableNetworks } from "./styles";

export type RowsProps = {
  key: string;
  id: string;
  name: string;
  created?: string;
};

type Props = {
  headers: string[];
  rows: RowsProps[];
};

export default function Table({ headers, rows }: Props) {
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
          <tr key={row.key}>
            <td>
              <p>{row.id}</p>
            </td>
            <td>
              <Link href={`/containers?network=${row.id}`}>{row.name}</Link>
            </td>
            <td>{row.created}</td>
          </tr>
        ))}
      </tbody>
    </TableNetworks>
  );
}
