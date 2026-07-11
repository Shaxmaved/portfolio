import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Ved Sharma
      </div>

      <div className="nav-links">

        <a href="#about">About</a>

        <a href="#projects">Projects</a>

        <a href="#skills">Skills</a>

        <a href="#contact">Contact</a>

      </div>

    </nav>
  );
}

export default Navbar;