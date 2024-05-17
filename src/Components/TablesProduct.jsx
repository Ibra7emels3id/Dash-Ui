import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BorderAll } from '@mui/icons-material';
import { ContextProducts } from '../../Context';
import React, { useContext, useState } from 'react';

// Import Imges Styles


const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        // backgroundColor: '#d9dde0',
        backgroundColor: '#e2e8f0',
        // color: theme.palette.common.white,
        color: '#637381',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: 'white',
    },
}));


const TablesProduct = () => {

    const { Product, setProducts } = useContext(ContextProducts);


    return (
        <>
            <div className="tables mt-10 pb-10">
                <h2 className="text-Start text-2xl my-5 font-medium">Active Products</h2>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table ">
                        <TableHead >
                            <TableRow>
                                <StyledTableCell align="center" width='60px'>Id</StyledTableCell>
                                <StyledTableCell align="center">Imge</StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell align="center">Progress</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Product.slice(0, 7).map((it) => {
                                return (
                                    <>
                                        <TableRow>
                                            <StyledTableCell align='center'>#{it.id}</StyledTableCell>
                                            <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src={it.image} alt="" /></StyledTableCell>
                                            <StyledTableCell align="center">Project Name</StyledTableCell>
                                            <StyledTableCell align="center">	Hours</StyledTableCell>
                                            <StyledTableCell align="center">Priority</StyledTableCell>
                                            <StyledTableCell align="center">Members</StyledTableCell>
                                            <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                                        </TableRow>
                                    </>
                                )
                            })}
                            {/* <TableRow>
                                <StyledTableCell align='center'># 1</StyledTableCell>
                                <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src="https://dash-ui-admin-template.vercel.app/images/brand/dropbox-logo.svg" alt="" /></StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align='center'># 1</StyledTableCell>
                                <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src="https://dash-ui-admin-template.vercel.app/images/brand/slack-logo.svg" alt="" /></StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align='center'># 1</StyledTableCell>
                                <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src="https://dash-ui-admin-template.vercel.app/images/brand/github-logo.svg" alt="" /></StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align='center'># 1</StyledTableCell>
                                <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src="https://dash-ui-admin-template.vercel.app/images/brand/3dsmax-logo.svg" alt="" /></StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align='center'># 1</StyledTableCell>
                                <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src="https://dash-ui-admin-template.vercel.app/images/brand/slack-logo.svg" alt="" /></StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align='center'># 1</StyledTableCell>
                                <StyledTableCell color='#000' sx={{ display: 'flex', justifyContent: 'center' }}><img src="https://dash-ui-admin-template.vercel.app/images/brand/github-logo.svg" alt="" /></StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">	Hours</StyledTableCell>
                                <StyledTableCell align="center">Priority</StyledTableCell>
                                <StyledTableCell align="center">Members</StyledTableCell>
                                <StyledTableCell color='#000' align="center">Progress</StyledTableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default TablesProduct;
