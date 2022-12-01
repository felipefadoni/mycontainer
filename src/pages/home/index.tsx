import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingModal } from "src/styles/app";
import { Table } from "./components";
import { RowsProps } from "./components/Table";

export default function Home() {
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [list, setList] = useState<RowsProps[]>([]);

  const loadData = () => {
    axios
      .get(`http://${window.location.host}/api/v1/networks/list-all`)
      .then((response) => {
        setList(response.data.rows);
      })
      .catch((error: any) => {
        const message = error.response.data.message || error.message;
        alert(message);
      });
  };

  useEffect(() => {
    loadData();
    setIsRefreshing(false);
  }, []);

  return (
    <div>
      <Table headers={["ID", "Name", "Created"]} rows={list} />

      {isRefreshing && <LoadingModal>Aguarde...</LoadingModal>}
    </div>
  );
}
