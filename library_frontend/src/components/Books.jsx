import { useQuery } from "@apollo/client"
import { Table, TableBody, TableContainer, TableHead, Paper, TableCell, TableRow } from "@mui/material"
import { ALL_BOOKS } from "../queries"

const Books = () => {

  const header = ['Title', 'Author', 'Publish Year']
  const {data:{allBooks}} = useQuery(ALL_BOOKS) 

  return (
    <>
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            {header.map(h => (
              <TableCell key={h}>{h}</TableCell>
            ))}
          </TableHead>

          <TableBody>
            {allBooks.map(b => (
              <TableRow key={b.id}>
                <TableCell>{b.title}</TableCell>
                <TableCell>{b.author}</TableCell>
                <TableCell>{b.published}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  )
}

export default Books