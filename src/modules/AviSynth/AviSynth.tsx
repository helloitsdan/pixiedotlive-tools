import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

import FileForm from './components/FileForm'
import AvisynthOutput from './components/AvisynthOutput'

import useLocalStorage from '../../effects/useLocalStorage'

const AviSynth: FunctionComponent = () => {
  const [input, setInput] = useLocalStorage<AvisynthOptions>('avisynth.input', {
    ffms2: '',
    path: '',
    file: '',
    start: '',
    end: ''
  })

  return (
    <>
      <Helmet title="AviSynth script creator" />

      <div className="o-scaffolding">
        <div className="o-scaffolding__sidebar">
          <div className="c-sidebar">
            <h1>avisynth</h1>

            <FileForm input={input} onSubmit={setInput} />
          </div>
        </div>

        <div className="o-scaffolding__page">
          <AvisynthOutput options={input} />
        </div>
      </div>
    </>
  )
}

export default AviSynth
