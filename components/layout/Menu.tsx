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
        <li className="dropdown">
          <Link href="/about">About</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/rigo-melchor">Our Team</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/services">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
