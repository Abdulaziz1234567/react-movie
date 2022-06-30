import logo from "../layout/logo.png";
export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="#" className="brand-logo">
          <img src={logo} alt="not found" className="logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://instagram.com/abdusattorovv__">About me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
