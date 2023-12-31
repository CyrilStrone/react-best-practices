import { WorldOfCheckbox } from '../components/world-of-checkbox/organelles/world-of-checkbox'
import { WorldOfInput } from '../components/world-of-input/organelles/world-of-input'
import { WorldOfSelectMultiple } from '../components/world-of-select-multiple/organelles/world-of-select-multiple'
import { WorldOfSelect } from '../components/world-of-select/organelles/world-of-select'
import { WorldOfSlider } from '../components/world-of-slider/organelles/world-of-slider'
import { WorldOfSwitch } from '../components/world-of-switch/organelles/world-of-switch'
import { WorldOfTextarea } from '../components/world-of-textarea/organelles/world-of-textarea'
import { WorldOfName } from '../ui/world-of-name/organelles/world-of-name'
import './app.css'

function App() {

  return (
    <div className='App'>
      <WorldOfName title={'World Of Checkbox'}>
        <WorldOfCheckbox />
      </WorldOfName>
      <WorldOfName title={'World Of Input'}>
        <WorldOfInput />
      </WorldOfName>
      <WorldOfName title={'World Of Select'}>
        <WorldOfSelect />
      </WorldOfName>
      <WorldOfName title={'World Of Select Multiple'}>
        <WorldOfSelectMultiple />
      </WorldOfName>
      <WorldOfName title={'World Of Slider'}>
        <WorldOfSlider />
      </WorldOfName>
      <WorldOfName title={'World Of Switch'}>
        <WorldOfSwitch />
      </WorldOfName>
      <WorldOfName title={'World Of Textarea'}>
        <WorldOfTextarea />
      </WorldOfName>
    </div>
  )
}

export default App
