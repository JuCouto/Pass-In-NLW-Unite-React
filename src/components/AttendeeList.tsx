import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import IconButton from "./IconButton";
import Table from "./Table/Table";
import { TableHeader } from "./Table/TableHeader";
import { TableCell } from "./Table/TableCell";
import { TableRow } from "./Table/TableRow";

//Api temporária
import { Attendees } from "../data/Attendees";

//Formatar datas
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br'
dayjs.extend(relativeTime)
dayjs.locale("pt-br");

const AttendeeList = () => {
  const [search, setSearch] = useState()
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(Attendees.length / 10);

  function goToNextPage() {
    setPage(page + 1);
  }
  function goToPreviousPage() {
    setPage(page - 1);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar Participante..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 64 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 48 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Attendees.slice((page - 1) * 10, page * 10,).map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10"
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4 " />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>

        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>Mostrando 10 de {Attendees.length} itens</TableCell>
            <TableCell
              className=" text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                {/* calculo para arrendondar o número de ´páginas pode ser adicionado aqui ou na variável
                aqui ficaria assim  Math.ceil(Attendees.length / 10)*/}
                <span>Página {page} de {totalPages} </span>
                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4 " />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4 " />
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                    <ChevronRight className="size-4 " />
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                    <ChevronsRight className="size-4 " />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
};
export default AttendeeList;
