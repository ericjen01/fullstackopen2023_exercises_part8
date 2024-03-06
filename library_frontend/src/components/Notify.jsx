const Notify = ({msg}) => {
  if(msg ==='') return null  

  return (
    <div style={{color:'red'}}>
        {msg}
    </div>
  )
}

export default Notify