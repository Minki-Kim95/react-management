import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { Link } from 'react-router-dom';


class GachaList extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell><img src={this.props.image} alt="profile" /></TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.price}</TableCell>
        <TableCell><Link to="/batting">배팅참여</Link></TableCell>
      </TableRow>
      
    );
  }
}

export default GachaList;
