import { Contact } from './components/Contact/Contact'
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer'
import { PartyInfo } from './components/PartyInfo/PartyInfo'
import { Photos } from './components/Photos/Photos'
import { Presentation } from './components/Presentation/Presentation'

function App() {
  return (
    <div className="relative max-w-4xl mx-auto App">
      <Presentation />
      <PartyInfo />
      <Photos />
      <Contact />
      <MusicPlayer />
    </div>
  )
}

export default App
