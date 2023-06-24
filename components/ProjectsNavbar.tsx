import { Category } from "@/types";
import React, { FC } from "react";

export const NavItem: FC<{
  value: Category | "All";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-blue";
  if (active === value) className += " text-blue";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FC<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="px-3 py-2 flex-wrap space-x-3 overflow-x-auto list-none flex">
      <NavItem value="All" {...props} />
      <NavItem value="Javascript" {...props} />
      <NavItem value="Typescript" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Next.Js" {...props} />
      <NavItem value="Tailwind CSS" {...props} />
      <NavItem value="CSS3" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
