import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ListAllServiceProps } from "./api/domain/containers/dto/containers";

export default function Home() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [list, setList] = useState<ListAllServiceProps[]>([]);

  const loadData = async () => {
    axios
      .get(`http://localhost:3002/api/containers/list-all`)
      .then((response) => {
        setList(response.data.containers);
      })
      .catch((error: any) => {
        const message = error.response.data.message || error.message;
        alert(message);
      });
  };

  const startContainer = async (name: string) => {
    setIsRefreshing(true);
    try {
      const replaceName = name.replace("/", "");
      await axios.post(
        `http://localhost:3002/api/containers/start?name=${replaceName}`
      );
    } catch (error: any) {
      const message = error.response.data.message || error.message;
      alert(message);
    }
  };

  const stopContainer = async (name: string) => {
    setIsRefreshing(true);
    try {
      const replaceName = name.replace("/", "");
      await axios.post(
        `http://localhost:3002/api/containers/stop?name=${replaceName}`
      );
    } catch (error: any) {
      const message = error.response.data.message || error.message;
      alert(message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      loadData();
      setIsRefreshing(false);
    }, 2000);
  }, [isRefreshing]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>State</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((container) => (
            <tr key={container.id}>
              <td>{container.name}</td>
              <td>{container.state}</td>
              <td>{container.image}</td>
              <td>
                {container.state === "running" && (
                  <button
                    onClick={() => stopContainer(container.name)}
                    className={styles["button-stop"]}
                  >
                    Stop
                  </button>
                )}
                {container.state === "exited" && (
                  <button
                    onClick={() => startContainer(container.name)}
                    className={styles["button-start"]}
                  >
                    Start
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isRefreshing && <div className={styles.loading}>ATUALIZADO</div>}
    </div>
  );
}
