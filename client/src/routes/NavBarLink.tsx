import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ to, children }: { to: string; children: ReactNode }) => {
    return (
        <Link className="nav-link" to={to} style={{color:"black", textDecoration:"none"}}>
            {children}
        </Link>
    );
}



export default NavBarLink;