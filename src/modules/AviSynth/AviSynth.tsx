import FileForm from './components/FileForm'
import Output from './components/Output'

import useLocalStorage from '../../effects/useLocalStorage'

const AviSynth = () => {
  const [input, setInput] = useLocalStorage<AvisynthOptions>(
    'avisynthOptions',
    { ffms2: '', path: '', file: '', start: '', end: '' }
  )

  return (
    <div className="o-scaffolding">
      <div className="o-scaffolding__sidebar">
        <FileForm input={input} onSubmit={setInput} />
      </div>

      <div className="o-scaffolding__page">
        <Output options={input} />
      </div>
    </div>
  )
}

export default AviSynth
