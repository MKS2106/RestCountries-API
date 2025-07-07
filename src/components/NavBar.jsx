import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <ul className="flex gap-4 font-bold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink> 
        </li>
        {/* <li><Link to="/county-detail">Country</Link></li> */}
      </ul>
      <input
        type="text"
        className="border rounded mr-3"
        placeholder="Search for Country"
      />
      <button type="submit" className="border rounded">
        Search
      </button>
    </>
  );
}
export default NavBar;
