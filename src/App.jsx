import { gql, useQuery } from '@apollo/client'
import './App.css'

const PENGUINS = gql`
  query MyQuery {
    penguins {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`

function App() {
  // useQueryで必要なデータを取ってくる
  const { data, loading, error } = useQuery(PENGUINS)
  // ロード中ならそれを表示
  if (loading) return "ロード中. . ."
  if (error) return `エラー発生！ ${error}`
  console.log(data)
  return (
    <div className="App">
      <h1>GraphQLとReactとヘッドレスCMS</h1>
      <div className="dogsContainer">
        {data.penguins.map((penguin) => (
          <div key={penguin.id}>
            <div className='dogCard'>
              <img src={penguin.thumbnail.url} />
              <p>{penguin.name}</p>
              <p>{penguin.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
