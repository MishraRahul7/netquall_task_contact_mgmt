import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul className="flex">
            <li className="mr-6">
                <NavLink to="/">Contact</NavLink>
            </li>
            <li className="mr-6">
                <NavLink to="/charts-and-maps">Charts and Maps</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar