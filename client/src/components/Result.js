import React from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";



const styles = (theme) => ({
    root: {
      margin: theme.spacing(3),
      overflowX: "auto",
      padding: "0 30px",
    },
    table: {
      minWidth: 1080,
    },
    alpha: {
      fontSize: "large",
    },
    progress: {
      margin: theme.spacing(2),
    },
  });
const Batting = ({classes}) => {
  
  return (
    <>
      <h1>배팅결과</h1>
      <h2>총액: 21000</h2>

      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <img src="https://placeimg.com/128/128/4"></img>
              </TableCell>
              <TableCell>
                <img src="https://placeimg.com/128/128/5"></img>
              </TableCell>
              <TableCell>
                <img src="https://placeimg.com/128/128/6"></img>
              </TableCell>
              <TableCell>
                <img src="https://placeimg.com/128/128/7"></img>
              </TableCell>
              <TableCell>
                <img src="https://placeimg.com/128/128/8"></img>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>아이폰/박범진</TableCell>
              <TableCell>벽돌/범진박</TableCell>
              <TableCell>군번줄/박커톤</TableCell>
              <TableCell>크런치/박준규</TableCell>
              <TableCell>비닐봉지/힙커톤</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3000</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>4000</TableCell>
              <TableCell>11000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default withStyles(styles)(Batting);