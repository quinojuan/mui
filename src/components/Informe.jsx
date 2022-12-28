import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function Informe() {
  const data = [
    {
      name: "Juan Carlos",
      pub: 5,
      vid: 10,
      hs: 30,
      rev: 7,
      est: 2,
    },
    {
      name: "Febe",
      pub: 3,
      vid: 15,
      hs: 45,
      rev: 2,
      est: 4,
    },
    {
      name: "Janet",
      pub: 4,
      vid: 3,
      hs: 30,
      rev: 7,
      est: 2,
    },
    {
      name: "María",
      pub: 6,
      vid: 15,
      hs: 70,
      rev: 17,
      est: 3,
    },
  ];
  return (
    <div>
      <p>
        <strong>Nombre y apellido:</strong> ?{" "}
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "lightGrey" }}>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Pub</TableCell>
              <TableCell align="center">Vid</TableCell>
              <TableCell align="center">Hs</TableCell>
              <TableCell align="center">R</TableCell>
              <TableCell align="center">E</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((pub) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{pub.name}</TableCell>
                <TableCell align="center">{pub.pub}</TableCell>
                <TableCell align="center">{pub.vid}</TableCell>
                <TableCell align="center">{pub.hs}</TableCell>
                <TableCell align="center">{pub.rev}</TableCell>
                <TableCell align="center">{pub.est}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
