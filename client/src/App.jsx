import './App.css'
import axios from 'axios'

function App() {
  // const url = 'http://localhost:5400/test'
  const url = 'https://dollywears-gjd1.vercel.app'
  const getInfo = () => {
    axios.get(url)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <button onClick={getInfo}>Get Into</button>
    </>
  )
}

export default App
