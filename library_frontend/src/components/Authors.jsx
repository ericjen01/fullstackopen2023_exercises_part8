import { useQuery } from "@apollo/client"
import { Button, TableCell, TableContainer, TableHead, Table, TableBody, TableRow, Paper } from "@mui/material"

import { ALL_AUTHORS } from "../queries"
import { useState} from "react"
import EditAuthor from "./EditAuthor.jsx"
import Author from "./Author.jsx"

const Authors = ({setNoti}) => {
  
  const header = ['Author', 'Birth Year', 'Books Published', 'ID']

  const [openEditor, setOpenEditor] = useState(false)
  const [openViewer, setOpenViewer] = useState(false)
  const [anchor, setAnchor] = useState(null)
  const {data:{allAuthors}} = useQuery(ALL_AUTHORS)



  const toClose = () => {
    setOpenEditor(false)
    setOpenViewer(false)
  }

  const toViewAuthor = () => {
    setOpenViewer(true)
  }

  const toEditAuthor = () => {    
    setAnchor(document.activeElement)
    setOpenEditor(true)
  }

  return (
    <>
      <TableContainer  component={Paper} style={{ overflowX: "initial" }}>
        <Table stickyHeader>
          <TableHead position='sticky'>
            <TableRow
            >
              {header.map(h=>(
                  <TableCell key={h}>{h}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {allAuthors.map(a => (
              <TableRow key={a.id}>
                <TableCell>{a.name}
                  <Button  onClick={()=>toViewAuthor(a)}>
                      {String.fromCharCode(9204)}
                    </Button>
                    <Author refAuthor={a} open={openViewer} close={toClose}/>
                  </TableCell>
                <TableCell>{a.born}
                  <Button  onClick={()=>toEditAuthor(a)}>
                    {String.fromCharCode(9998)}
                  </Button>
                  <EditAuthor refAuthor={a} open={openEditor} closeBox={toClose} setNoti={setNoti} anchor={anchor}/>     
                </TableCell>
                <TableCell>{a.bookCountByAuthor}</TableCell>
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