

import { Popover, TextField } from "@mui/material"
import { useState } from "react"
import Props from './Props'
import { useMutation } from '@apollo/client';
import { EDIT_AUTHOR, ALL_BOOKS, ALL_AUTHORS } from '../queries';

const EditAuthor = ({refAuthor, open, closeBox, anchor, setNoti}) => {

  const author = refAuthor
  const name = author.name
  const id = author.id

  const currentYear = new Date().getFullYear()
  const [born, setBorn] = useState(NaN)
  const [invalidYear, setInvalidYear] = useState(true)

  const [editAuthor] = useMutation(
    EDIT_AUTHOR,{
      refetchQueries:[{query:ALL_BOOKS},{query:ALL_AUTHORS}],
      onCompleted:(res) => {
        setNoti(`Birth year updated for ${name}: ${res.editAuthor.born}`)
      },
      onError:({graphQLErrors}) => {
        const msg = graphQLErrors.map(e => e.message)
        setNoti(msg)
      }
    }
  )

  const toClose = () =>{
    setBorn(NaN)
    setInvalidYear(true)
    closeBox()
  }

  const onEvent = ({target:{value}}) => {
      setBorn(parseInt(value, 10).toString())
      const input = value
      if(!input || input > currentYear) {setInvalidYear(true)} 
      else{setInvalidYear(false)}     
    }

  const toSubmit = (e) => {
    e.preventDefault()
    editAuthor({variables:{id, born}})
    setBorn('')
    toClose()
  }

  return(
    <Popover
      open={open}
      onClose={toClose}
      anchorEl={anchor}
      {...Props.editAuthorPopover}
    >
      <form onSubmit={toSubmit}>
        <TextField
          {...Props.editAuthorTxtfield}
          onChange={(e) => onEvent(e)}
          label={invalidYear? `Enter Year (0~${currentYear})` : ''}
          error={invalidYear}
          InputProps={{
            endAdornment: 
            <div {...Props.flexRow}>{!invalidYear && 
              <button {...Props.smallSqrBtn} disabled={invalidYear? true : false}> Save </button>}
              <button {...Props.smallSqrBtn} onClick={toClose}> X </button>
            </div>
          }}
        />
  
      </form>
    </Popover>
  )
}

export default EditAuthor

