
import { Table, Paper, TableHead, TableBody, TableRow, TableCell, Dialog, DialogTitle, DialogContent, Typography, TableContainer } from "@mui/material"

const Author = ({refAuthor, open, close}) => {

  const header = ['Title', 'Year of Publish']
  const author = refAuthor
  const bookListByAuthor = author.bookListByAuthor
  
 
  return(
    <>
      <Dialog fullWidth={true} open={open} onClose={() => close()}>
      <DialogTitle sx={{mb:-0.5}}>{author.name}</DialogTitle>
        <DialogContent>
          <Typography> Birth Year: {author.born}</Typography>
          <Typography> Books Published: {author.bookCountByAuthor}</Typography>
        </DialogContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {header.map(h => 
                  <TableCell key={h}>{h}</TableCell>  
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {bookListByAuthor.map(b =>
                <TableRow key={b.id}>
                  <TableCell>{b.title}</TableCell>
                  <TableCell>{b.published}</TableCell>
                </TableRow>  
              )}
            </TableBody>

          </Table>
        </TableContainer>
      </Dialog>
    </>
  )
}

export default Author