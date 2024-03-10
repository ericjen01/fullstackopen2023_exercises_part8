import { useQuery } from "@apollo/client"
import { Button, TableCell, TableContainer, TableHead, Table, TableBody, TableRow, Paper } from "@mui/material"

import { ALL_AUTHORS } from "../queries"
import { useState } from "react"
import EditAuthor from "./EditAuthor.jsx"

const Authors = ({setNoti}) => {
  
  const header = ['Author', 'Birth Year', 'Books Published', 'ID']

  const [open, setOpen] = useState(false)
  const [refId, setRefId] = useState('')
  const [refName, setRefName] = useState('')
  const [anchor, setAnchor] = useState(null)
  const {data:{allAuthors}} = useQuery(ALL_AUTHORS)

  const toClose = () => setOpen(false)

  const handleOpen = (id, name) => {    
    setAnchor(document.activeElement)
    setRefId(id)
    setRefName(name)
    setOpen(true)
  }

  return (
    <>
      <TableContainer  component={Paper} style={{ overflowX: "initial" }}>
        <Table stickyHeader>

          <TableHead position='sticky'>
            <TableRow>
              {header.map(h=>(
                  <TableCell key={h}>{h}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {allAuthors.map(a => (
              <TableRow key={a.id}>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.born}
                  <Button onClick={()=>handleOpen(a.id, a.name)}>
                    {String.fromCharCode(9998)}
                  </Button>
                  <EditAuthor open={open} id={refId} name={refName} closeBox={toClose} setNoti={setNoti} anchor={anchor}/>     
                </TableCell>
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