module.exports = function supplant(string = '', values = {}) {
  return string.replace(/{([^{}]*)}/g,
    (a, b) => {
      const r = values[b]
      return typeof r === 'string' || typeof r === 'number' ? r : a
    },
  )
}
