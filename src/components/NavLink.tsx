import React from "react";
import { ComponentProps } from "react";

//passando o "a" (referente á tag a do html) indico que o navlink pode receber todas as propriedades que o "ancora" possui.
interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    //...props-> é um sprad operation, ele vai pegar todas as propriedades enviadas para dentro do componente NavLink
    //e adicionar como atibutos na tag a. dessa forma não preciso passar um a um para ele, ex: title, href...
    <a {...props} className="font-medium text-sm text-zinc-300">
      {props.children}
    </a>
  );
};

export default NavLink;
