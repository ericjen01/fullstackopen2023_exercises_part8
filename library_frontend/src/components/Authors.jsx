import { useQuery } from "@apollo/client"
import { TableCell, TableContainer, TableHead, Table, TableBody, TableRow, Paper } from "@mui/material"
import { ALL_AUTHORS } from "../queries"

const Authors = () => {
  
  const header = ['Author', 'Year of Birth', 'Number of Published', 'Author ID']
  const { data:{allAuthors}} = useQuery(ALL_AUTHORS)
  
  return (
    <>
      <TableContainer  component={Paper} style={{ overflowX: "initial" }}>
        <Table stickyHeader>

          <TableHead position='sticky'>
            {header.map(h=>(
                <TableCell key={h}>{h}</TableCell>
              ))
            }
          </TableHead>

          <TableBody>
            {allAuthors.map(a => (
              <TableRow key={a.id}>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.born}</TableCell>
                <TableCell>{a.bookCount}</TableCell>
                <TableCell>{a.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  )
}

export default Authors