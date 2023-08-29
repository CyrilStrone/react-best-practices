import { WorldOfCheckbox } from '../components/world-of-checkbox/organelles/world-of-checkbox'
import { WorldOfInput } from '../components/world-of-input/organelles/world-of-input'
import { WorldOfSelectMultiple } from '../components/world-of-select-multiple/organelles/world-of-select-multiple'
import { WorldOfSelect } from '../components/world-of-select/organelles/world-of-select'
import { WorldOfSlider } from '../components/world-of-slider/organelles/world-of-slider'
import { WorldOfSwitch } from '../components/world-of-switch/organelles/world-of-switch'
import { WorldOfTextarea } from '../components/world-of-textarea/organelles/world-of-textarea'
import './app.css'

function App() {

  return (
    <div>
      <WorldOfCheckbox />
      <WorldOfInput />
      <WorldOfSelect />
      <WorldOfSelectMultiple />
      <WorldOfSlider />
      <WorldOfSwitch />
      <WorldOfTextarea />
    </div>
  )
}

export default App
