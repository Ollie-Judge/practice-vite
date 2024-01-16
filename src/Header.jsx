import "./style/header.css";

function Header() {
  return (
    <>
      <div id="headerContainer">
        <div id="titleContainer">
          <h1>
            <a href="#">This is a Header</a>
          </h1>
        </div>

        <div id="navContainer">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
