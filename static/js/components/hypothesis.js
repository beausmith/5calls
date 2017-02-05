const html = require('choo/html');
const callcount = require('./callcount.js');
const strings = require('../common/i18n/en');
const hypothesis = strings.pages.hypothesis;

module.exports = (state, prev, send) => {
  // TODO: separate this out into straight up content and stats
  return html`
    <div class="hypothesis" onload=${(e) => send('getTotals')}>
      <header class="hypothesis__header">
        <h2 class="hypothesis__title">${hypothesis.title}</h2>
        <p>${hypothesis.p1}</p>
        <p><strong>${hypothesis.p2}</strong></p>
      </header>
      <div class="hypothesis__text">
        <p>
          ${hypothesis.p3}
          <a href="#about">${hypothesis.learnWhyCallingWorks}</a>
        </p>
        <h3 class="hypothesis__subtitle">${hypothesis.featuresTitle}</h3>
        <ul class="hypothesis__list">
          <li>${hypothesis.feature1}</li>
          <li>${hypothesis.feature2}</li>
        </ul>
      </div>
      ${callcount(state, prev, send)}
    </div>
  `;
}
