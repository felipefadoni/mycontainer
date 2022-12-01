/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageTitle from "src/components/PageTitle";
import { LoadingModal } from "src/styles/app";
import { Table } from "./components";
import { RowsProps } from "./components/Table";

export default function Containers() {
  const router = useRouter();

  const [isRefreshing, setIsRefreshing] = useState(true);
  const [list, setList] = useState<RowsProps[]>([]);

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      let url = `http://${window.location.host}/api/v1/containers/list-all`;

      if (router.query.network) url += `?network=${router.query.network}`;

      const response = await axios.get(url);
      setList(response.data.containers);
    } catch (err: any) {
      const message = err.response.data.message || err.message;
      alert(message);
    }
  };

  const startContainer = async (name: string) => {
    setIsRefreshing(true);
    try {
      await axios.post(
        `http://${window.location.host}/api/v1/containers/start?name=${name}`
      );
      await loadData();
      setIsRefreshing(false);
    } catch (err: any) {
      const message = err.response.data.message || err.message;
      alert(message);
      setIsRefreshing(false);
    }
  };

  const stopContainer = async (name: string) => {
    setIsRefreshing(true);
    try {
      await axios.post(
        `http://${window.location.host}/api/v1/containers/stop?name=${name}`
      );
      await loadData();
      setIsRefreshing(false);
    } catch (err: any) {
      const message = err.response.data.message || err.message;
      alert(message);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
    setIsRefreshing(false);
  }, [router]);

  return (
    <div>
      <PageTitle>Containers</PageTitle>

      <Table
        headers={["Name", "State", "Network", "Actions"]}
        rows={list}
        startContainer={startContainer}
        stopContainer={stopContainer}
      />

      {isRefreshing && <LoadingModal>Aguarde...</LoadingModal>}
    </div>
  );
}
