import { useMemo, FunctionComponent } from 'react'
import Hogan from 'hogan.js'

import getFramesForTimespan from './utils/getFramesForTimespan'

const SINGLE_FILE_TEMPLATE = Hogan.compile(
  `
# {{file}}
# {{start}}
# {{end}}

LoadPlugin("{{ffms2}}")

FFmpegSource2("{{path}}{{file}}", fpsnum=60, atrack=-1)

Trim({{startFrame}}, {{endFrame}})
FadeIn(180)
FadeOut(180)
`.trim()
)

const useAvisynthScript = (options: AvisynthOptions) =>
  useMemo(() => {
    return SINGLE_FILE_TEMPLATE.render({
      ...options,
      startFrame: getFramesForTimespan(options.start),
      endFrame: getFramesForTimespan(options.end)
    })
  }, [options])

interface OutputProps {
  options: AvisynthOptions
}

const Output: FunctionComponent<OutputProps> = ({ options }) => {
  const avisynthScript = useAvisynthScript(options)

  return (
    <div className="c-output">
      <pre>{avisynthScript}</pre>
    </div>
  )
}

export default Output
