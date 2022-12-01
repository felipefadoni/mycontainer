import Link from "next/link";
import { useRouter } from "next/router";
import LogoMyContainer from "../../assets/images/logo.svg";
import { MenuContainer, NavContainer } from "./styles";

export default function Menu() {
  const router = useRouter();

  return (
    <MenuContainer>
      <div>
        <div className="logo">
          <LogoMyContainer />
          <span>myContainer</span>
        </div>
        <NavContainer>
          <ul>
            <li className={router.pathname === "/home" ? "active" : ""}>
              <Link href="/" passHref legacyBehavior>
                Networks
              </Link>
            </li>
            <li className={router.pathname === "/containers" ? "active" : ""}>
              <Link href="/containers">Containers</Link>
            </li>
          </ul>
        </NavContainer>
      </div>
    </MenuContainer>
  );
}
