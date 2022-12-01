import { ReactNode } from "react";
import { PageTitleContainer } from "./styles";

type Props = {
  children: ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <PageTitleContainer>
      <h1>{children}</h1>
    </PageTitleContainer>
  );
}
