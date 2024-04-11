import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> { }

export function TableCell(props: TableCellProps) {
  return (
    <td
      //nesse caso preciso manter o ...props antes do classname, se eu manter depois ele sobreescreve o classname, como ele esta antes
      //o classname entra por ultimo e fica como "mais importante".
      {...props}
      // tw merge passo as classes que meu componente sempre vai ter e  props.className(asclasses que estão vindo do meu componente em anttenddeList)
      // ou outras classes.
      className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}
    />
  );
}
