import React from "react";
import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://128.199.27.165:8081/ticket/list")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.data,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetching data from api in react </h1>{" "}
        <TableContainer component={Paper}>
          <div className="test">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Ticket No</StyledTableCell>
                  <StyledTableCell align="right">Title</StyledTableCell>
                  <StyledTableCell align="right">Message</StyledTableCell>
                  <StyledTableCell align="right">Priority</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell align="center">
                      {item.ticket_no}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.message}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.priority === 2 ? "Higher" : "Lower"}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
      </div>
    );
  }
}

export default App;
