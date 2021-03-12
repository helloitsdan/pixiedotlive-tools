const TIMESTAMP_REGEX = /((?<h>[0-9]+)\s?h(?:ours)?)?[,\s]*((?<m>[0-9]+)\s?m(?:inutes)?)?[,\s]*((?<s>[0-9]+)\s?s(?:econds)?)?/

const getFramesForTimespan = (timespan: string) => {
  const groups = timespan.match(TIMESTAMP_REGEX)?.groups

  if (!groups) {
    return 0
  }

  const { h = '0', m = '0', s = '0' } = groups

  return ((parseInt(h) * 60 + parseInt(m)) * 60 + parseInt(s)) * 60
}

export default getFramesForTimespan
