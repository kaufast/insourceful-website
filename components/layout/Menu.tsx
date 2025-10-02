import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li className="dropdown">
          <Link href="/">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Success Stories</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
