import { Contact } from './components/Contact/Contact'
import { Gifts } from './components/Gifts/Gifts'
import { PartyInfo } from './components/PartyInfo/PartyInfo'
import { Photos } from './components/Photos/Photos'
import { Presentation } from './components/Presentation/Presentation'

function App() {
  return (
    <div className="App">
      <Presentation />
      <PartyInfo />
      <Photos />
      <Gifts />
      <Contact />
    </div>
  )
}

export default App
