import React from "react"
import { Link } from "gatsby"
import "./nav.scss"

function isActive({ isCurrent }) {
    return isCurrent ? { className: "active" } : null
}

const Nav = ({ open }) => {
    return (
        <nav className={`${open ? "open" : "closed"}`}>
            <ul>
                <li>
                    <Link to="/about" getProps={isActive}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" getProps={isActive}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
