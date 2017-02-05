const html = require('choo/html');
const strings = require('../common/i18n/en');
const supplant = require('../utils/supplant');

module.exports = (state, prev, send) => {
  const totalCalls = state.totalCalls.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return html`
  <h2 class="callcount" onload=${(e) => send('getTotals')}>
    ${supplant(strings.callcount, {callCount: totalCalls})}
  </h2>
  `;
}
