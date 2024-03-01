
const Books = ({show, books}) => {
  if(!show) return null

  return (
    <>
      <h2>Books</h2>
      <table>
        <tbody>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
          {books.map(b => (
            <tr key={b.title}>
              <th>{b.title}</th>
              <th>{b.author}</th>
              <th>{b.published}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Books