import React from "react";
type Props = {
  title?: string;
};
const Header: React.FC<Props> = ({
  title
  }) => {
  return (
    <nav className="navbar navbar-light bg-light px-5">
      <h3>{title ?? 'Employee Management'}</h3>
    </nav>
  );
}

export default Header;
