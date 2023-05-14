export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">Site Name</a>
    <ul>
      <li>
        <a href="/players">Top Players</a>
      </li>
      <li>
        <a href="/gm">Titled Players</a>
      </li>
    </ul>
  </nav>
}