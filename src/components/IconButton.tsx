import React from "react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

// desestruturação, tira a propriedade transparent de props e deixa o restante, isso é Rest Operator.
const IconButton = ({ transparent, ...props }: IconButtonProps) => {
  return (
    <button
      //o ...props pega todos os parâmetros menos o transparent.
      {...props}
      className={
        transparent
          ? "bg-black/20 border border-white/10 rounded-md p-1.5"
          : "bg-white/10 border border-white/10 rounded-md p-1.5"
      }
    //   className={twMerge(
    // "border border-white/10 rounded-md p-1.5",
    // transparent ? "bg-black/20" : "bg-white/10",
    // props.disabled ? "opacity-50" : null
    //   )}
    />
  );
};

export default IconButton;
