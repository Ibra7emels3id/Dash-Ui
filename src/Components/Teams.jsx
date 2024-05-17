import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ContextProducts } from '../../Context';
import { useContext } from 'react'
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#4338ca',
        padding: '15px',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,

    },
    // hide last border
    '&:last-child td, &:last-child th': {                           
        border: 0,
    },
}));


const Teams = () => {

    const { Team } = useContext(ContextProducts)

    // console.log(Team);
    
    return (
        <>
            <div className="table col-span-3">
                <TableContainer sx={{ borderRadius: '10px' }} component={Paper}>
                    <h4 className='p-5 font-medium text-2xl'>Teams</h4>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell width='40%' align="start">Name</StyledTableCell>
                                <StyledTableCell width='15%' align="right">Role</StyledTableCell>
                                <StyledTableCell align="right">Last Activity</StyledTableCell>
                                <StyledTableCell align="right">Edit</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Team.slice(0, 5).map((it) => (
                                <StyledTableRow  key={it.id}>
                                    <StyledTableCell sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img className=' w-14 rounded-full mr-5' src={it.image} alt="" />
                                        <div className="text ">
                                            <h5>{it.name}</h5>
                                            <Link className=' text-indigo-700' to={`mailto:${it.email}`}>{it.email}</Link>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">Role</StyledTableCell>
                                    <StyledTableCell align="right">Last Activity</StyledTableCell>
                                    <StyledTableCell align='right'>
                                        <DragIndicatorIcon sx={{cursor:'pointer'}}/>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default Teams;
