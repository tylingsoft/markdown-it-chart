const chartBlock = (code) => {
  try {
    let json = JSON.parse(code)
    return `<canvas class="chartjs">${JSON.stringify(json)}</canvas>`
  } catch (e) { // JSON.parse exception
    return `<pre>${e}</pre>`
  }
}

const ChartPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    let token = tokens[idx]
    let code = token.content.trim()
    if (token.info === 'chart') {
      return chartBlock(code)
    }
    return temp(tokens, idx, options, env, slf)
  }
}

export default ChartPlugin
