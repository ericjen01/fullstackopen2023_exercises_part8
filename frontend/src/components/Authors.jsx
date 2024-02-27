
const Authors = ({show}) => {
  if(!show) return null

  const authors = []

  return (
    <>
      <h2>Authors</h2>
      <table>
        <tbody>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
          {authors.map(a => (
            <tr key={a.name}>
              <th>{a.name}</th>
              <th>{a.born}</th>
              <th>{a.bookCount}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Authors