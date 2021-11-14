import React, { useState, useEffect } from "react";
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
class App extends React.Component {

    // state = {
    //     gachas: "",
    //     completed: 0,
    //   };
    
    //   componentDidMount() {
    //     this.timer = setInterval(this.progress, 20);
    //     this.callApi()
    //       .then((res) => this.setState({ gachas: res }))
    //       .catch((err) => console.log(err));
    //   }
    
    //   callApi = async () => {
    //     const response = await fetch("/api/package");
    //     const body = await response.json();
    //     console.log('1');
    //     console.log(body);
    //     return body;
    //   };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       error: null,
    //       isLoaded: false,
    //       items: []
    //     };
    //   }
    
    //   componentDidMount() {
    //     fetch("/api/pakage")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.items
    //           });
    //         },
    //         // 주의: 컴포넌트에 있는 실제 버그로 인해 발생한 예외를
    //         // 놓치지 않고 처리하기 위해서는
    //         // catch() 블록보다는 여기서 에러를 다뤄주는 게 중요합니다.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }

render() {
// const Batting = ({classes}) => {
    const { classes } = this.props;

    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
  return (
    <>
      <Paper className={classes.root}>
      <h1>아이폰</h1>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <img src="images/iphone.jpg"></img>
              </TableCell>
              <TableCell>
                <img src="images/brick.jpg"></img>
              </TableCell>
              <TableCell>
                <img src="images/nametag.jpg"></img>
              </TableCell>
              <TableCell>
                <img src="images/crunch.jpg"></img>
              </TableCell>
              <TableCell>
                <img src="images/bontu.jpg"></img>
              </TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {this.state.gachas ? this.state.gachas.map((c) => { return (<GachaList key={c.id} id={c.id} image={c.image} name={c.name} price={c.price} gender={c.gender} job={c.job} />)
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
 

      <Paper className={classes.root}>
      <h3>배팅현황</h3>
      <h4>현 총액: 15000원 / 20000원</h4>
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
    // }
};
}
export default withStyles(styles)(App);