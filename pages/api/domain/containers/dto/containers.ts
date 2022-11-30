export interface ContainersProps {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Ports: Array<{
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
  }>;
  Labels: {
    [key: string]: string;
  };
  State: string;
  Status: string;
  HostConfig: {
    NetworkMode: string;
  };
}

export interface ListAllServiceProps {
  id: string;
  name: string;
  state: string;
  image: string;
}
