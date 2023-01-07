import { useMemo, useCallback, FunctionComponent } from 'react'
import Hogan from 'hogan.js'
import FileSaver from 'file-saver'

import getFramesForTimespan from '../utils/getFramesForTimespan'

import classes from './AvisynthOutput.module.scss'

const FILENAME_REGEX = /^(?:.*[\\/])*(?<filename>.*)\..*$/

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

interface AvisynthOutputProps {
  options: AvisynthOptions
}

const AvisynthOutput: FunctionComponent<
  React.PropsWithChildren<AvisynthOutputProps>
> = ({ options }) => {
  const avisynthScript = useAvisynthScript(options)

  const filename = useMemo(() => {
    const match = options.file.match(FILENAME_REGEX)
    return `${match?.groups?.filename || 'script'}.avs`
  }, [options])

  const onDownload = useCallback(() => {
    const blob = new Blob([avisynthScript], {
      type: 'text/plain;charset=utf-8'
    })

    FileSaver.saveAs(blob, filename)
  }, [filename, avisynthScript])

  return (
    <div className={classes['c-output']}>
      <nav className={classes['c-output__menu']}>
        <button onClick={onDownload}>Download {filename}</button>
      </nav>

      <pre className={classes['c-output__script']}>{avisynthScript}</pre>
    </div>
  )
}

export default AvisynthOutput
