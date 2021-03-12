import Sidebar from './Sidebar'
import Output from './Output'

import useLocalStorage from './effects/useLocalStorage'

const App = () => {
  const [input, setInput] = useLocalStorage<AvisynthOptions>(
    'avisynthOptions',
    { ffms2: '', path: '', file: '', start: '', end: '' }
  )

  return (
    <div className="o-scaffolding">
      <div className="o-scaffolding__sidebar">
        <Sidebar input={input} onSubmit={setInput} />
      </div>

      <div className="o-scaffolding__output">
        <Output options={input} />
      </div>
    </div>
  )
}

export default App
