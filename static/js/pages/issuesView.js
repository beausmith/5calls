const html = require('choo/html');

const sidebar = require('../components/sidebar.js');
const issuesByCategory = require('../components/issuesByCategory.js');
const footer = require('../components/footer.js');

module.exports = (state, prev, send) => {
  return html`
    <div id="root">
      <div class="layout">
        ${sidebar(state, prev, send)}
        ${issuesByCategory(state, prev, send)}
      </div>
      ${footer(state, prev, send)}
    </div>
  `;
};
