import './App.css'
import Navbar from './shared/Navbar/Navbar'
import Characters from './components/Characters/Characters'

function App() {
  return (
    <>
      <Navbar />
      <section className="container py-5">
        <Characters />
      </section>
    </>
  )
}

export default App
