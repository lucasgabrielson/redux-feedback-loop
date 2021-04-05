import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Admin.css'

const useStyles = makeStyles({
    table: {
    },
  });

const Admin = () => {
    const classes = useStyles();

    const [ adminFeedback, setAdminFeedback ] = useState( [] );

    // run GET route on page load
    useEffect( () => { getFeedback() }, [] );

  const getFeedback = () => {
    console.log( 'in getFeedback' );
    axios.get( '/api/feedback').then( response => {
      console.log( 'back from GET /api/feedback with:', response.data);
      setAdminFeedback(response.data);
    }).catch( err => {
      console.log( err );
      alert( 'error fetching data from /api/feedback' );
    })
  }

    return (
        <div>
             <TableContainer component={Paper} className = { 'table' }>
                 <Table className={ classes.table } aria-label="simple table">
                     <TableHead>
                     <TableRow>
                         <TableCell>Feeling</TableCell>
                         <TableCell align="right">Understanding</TableCell>
                         <TableCell align="right">Support</TableCell>
                         <TableCell align="right">Comments</TableCell>
                         <TableCell align="right">Delete</TableCell>
                         <TableCell align="right">Flag</TableCell>
                     </TableRow>
                     </TableHead>
                     <TableBody>
                         {adminFeedback.map( row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">{row.feeling}</TableCell>
                                <TableCell align="right">{row.understanding}</TableCell>
                                <TableCell align="right">{row.support}</TableCell>
                                <TableCell align="right">{row.comments}</TableCell>
                                <TableCell align="right">{'Delete'}</TableCell>
                                <TableCell align="right">{row.flagged}</TableCell>
                            </TableRow>
                         ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Admin