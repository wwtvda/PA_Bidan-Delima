import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id: 'namaD' | 'namaB' | 'role' | 'email' | 'password';
  label: string;
  minWidth?: number;
  align?: 'rihtg';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'namaD', label: 'Nama Depan', minWidth: 100 },
  { id: 'namaB', label: 'Nama Belakang', minWidth: 100 },
  {
    id: 'role',
    label: 'role',
    minWidth: 60,
  },
  {
    id: 'email',
    label: 'email',
    minWidth: 170,
  },
  {
    id: 'password',
    label: 'password',
    minWidth: 170,
  },
];

interface Data {
  namaD: string;
  namaB: string;
  role: string;
  email: string;
  password: string;
}

function createData(namaD: string, namaB: string, role: string, email: string, password: string): Data {
  return { namaD, namaB, role, email, password };
}

const rows = [
  createData('Caroline', 'Hapsari', 'admin', 'c.hapsari@mail.com', 'carol123hap'),
  createData('Daniel', 'Jones', 'admin', 'danielj@mail.com', 'invok3rpizza'),
  createData('Gracia', 'Hosokawa', 'user', 'graciatok@mail.com', 'manggesswara'),
  createData('Minamoto', 'Musashi', 'user', 'c.hapsari@mail.com', 'sukitoru13'),
  createData('Rima', 'suenaga', 'user', 'ririmaga@mail.com', 'nagaterbang35'),
  createData('Randal', 'Scott', 'bidan', 'randall@mail.com', 'n28vy94qrv'),
  createData('Vida', 'Sephora', 'bidan', 'sephorane@mail.com', 'vqtwnp31'),
  createData('Inka', 'McDonald', 'user', 'weloveit@mail.com', '15v328n09'),
  createData('Rama', 'Septian', 'user', 'ramseptian99@mail.com', 'v23r8nas9'),
  createData('Rico', 'Salisbury', 'user', 'salisbury@mail.com', 'oewirgj23')

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 770,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.namaB}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
