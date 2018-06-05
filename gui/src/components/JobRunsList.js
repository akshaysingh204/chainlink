import React from 'react'
import Card from '@material-ui/core/Card'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const JobRunsList = ({runs}) => (
  <Card>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant='body1' color='textSecondary'>ID</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1' color='textSecondary'>Status</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1' color='textSecondary'>Created</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1' color='textSecondary'>Result</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {runs.map(r => (
          <TableRow key={r.id}>
            <TableCell component='th' scope='row'>
              <Typography variant='body1'>{r.id}</Typography>
            </TableCell>
            <TableCell component='th' scope='row'>
              <Typography variant='body1'>{r.status}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>{r.createdAt}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>{r.result}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
)

export default JobRunsList
