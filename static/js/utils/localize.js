module.exports = (state, textHash, textKey) => {
  return textHash[state.locale][textKey];
}
