import React from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Link } from 'react-router-dom';


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
      <h1>아이폰</h1>
      <h2>현 총액: 15000 / 20000</h2>
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
          {/* <TableBody>
            {this.state.customers ? this.state.customers.map((c) => { return (<GachaList key={c.id} id={c.id} image={c.image} name={c.name} price={c.price} gender={c.gender} job={c.job} />)
            }) : 
            <TableRow>
            </TableRow>
            
            }
        </TableBody> */}

          <TableBody>
            <TableRow>
              <TableCell>아이폰</TableCell>
              <TableCell>벽돌</TableCell>
              <TableCell>군번줄</TableCell>
              <TableCell>크런치</TableCell>
              <TableCell>비닐봉지</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <h3>배팅현황</h3>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>설명</TableCell>
              <TableCell>현 최고가</TableCell>
              <TableCell>배팅하기</TableCell>
              <TableCell>배팅한사람</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.alpha}>A</TableCell>
              <TableCell>가치있는 고철덩어리</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>
                <TextField label="가격" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField label="이름" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" size="small">
                <Link to="/result">
                  배팅!
                </Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.alpha}>B</TableCell>
              <TableCell>동그라미가 있는 네모</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>
                <TextField label="가격" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField label="이름" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" size="small">
                <Link to="/result">
                  배팅!
                </Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.alpha}>C</TableCell>
              <TableCell>던지면 부서지는거</TableCell>
              <TableCell>3000</TableCell>
              <TableCell>
                <TextField label="가격" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField label="이름" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" size="small">
                <Link to="/result">
                  배팅!
                </Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.alpha}>D</TableCell>
              <TableCell>손만한 크기</TableCell>
              <TableCell>4000</TableCell>
              <TableCell>
                <TextField label="가격" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField label="이름" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" size="small">
                <Link to="/result">
                  배팅!
                </Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.alpha}>E</TableCell>
              <TableCell>바람불면 날라가는거</TableCell>
              <TableCell>5000</TableCell>
              <TableCell>
                <TextField label="가격" variant="outlined" />
              </TableCell>
              <TableCell>
                <TextField label="이름" variant="outlined" />
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" size="small">
                <Link to="/result">
                  배팅!
                </Link>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default withStyles(styles)(Batting);