// ** MUI Imports
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import React, { useEffect } from 'react'
import Icon from '@/@core/components/icon'
import axios from 'axios'
import { styled } from 'styled-components'

interface Column {
  id: 'stt' | 'name' | 'category' | 'locate' | 'status'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'stt', label: '#', minWidth: 170 },
  { id: 'name', label: 'Tên', minWidth: 100 },
  {
    id: 'category',
    label: 'Loại',
    minWidth: 170,
    align: 'right'
    // format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'locate',
    label: 'Vị trí',
    minWidth: 170,
    align: 'right'
    // format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'status',
    label: 'Trạng thái',
    minWidth: 170,
    align: 'right'
    // format: (value: number) => value.toFixed(2)
  }
]

interface Data {
  stt: number
  name: string
  category: string
  locate: string
  status: string
}

// function onStart() {
//   for (let i = 0; i < 15; i++) {
//     rows.push(createData(i, 'Name ' + i, 'Di dong ' + i, 'So ' + i + ', Hai Ba Trung', 'Hoat dong'))
//   }
// }
function createData(stt: number, name: string, category: string, locate: string, status: string): Data {
  return { stt, name, category, locate, status }
}

const rows: any[] = []

const PathSplit = styled.div`
  :first-letter {
    text-transform: uppercase;
  }
`

const Scanner = () => {
  // for (let i = 0; i < 15; i++) {
  //   rows.push(createData(i, 'Name ' + i, 'Di dong ' + i, 'So ' + i + ', Hai Ba Trung', 'Hoat dong'))
  // }
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  useEffect(() => {
    onStart()
  })
  async function onStart() {
    try {
      await axios.get('http://localhost:3030/api/machine').then(res => {
        let stt: number = 1
        res.data.map((item: any) => {
          rows.push(createData(stt++, item.name, item.type, item.warehouseId, item.state))
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={
              <div>
                <Icon icon='tabler:smart-home' fontSize={30} />
                <PathSplit>{window.location.pathname.split('/').map((item: any) => {})}</PathSplit>
              </div>
            }
          ></CardHeader>

          <CardContent>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map(column => (
                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                      return (
                        <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                          {columns.map(column => {
                            const value = row[column.id]
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Scanner
