const html = require('choo/html');
const strings = require('../common/i18n/en');
const constants = require('../common/constants');
const supplant = require('../utils/supplant');

const about = strings.pages.about;

const whyCallingWorksP1 = html`<p></p>`;
whyCallingWorksP1.innerHTML = about.whyCallingWorks.p1;

const whyCallingWorksArticleList = html`<ul></ul>`;
whyCallingWorksArticleList.innerHTML = about.whyCallingWorks.articlesList;

const whyCallingWorksP3 = html`<p></p>`;
whyCallingWorksP3.innerHTML = supplant(about.whyCallingWorks.p3, {contactEmail: constants.contact.email});

const whoIs5CallsP2 = html`<p></p>`;
whoIs5CallsP2.innerHTML = about.whoIs5Calls.p2;

const joinUsP1 = html`<p></p>`;
joinUsP1.innerHTML = supplant(about.joinUs.p1, {contactEmail: constants.contact.email});

module.exports = (state, prev, send) => {
  return html`
    <main role="main" class="layout__main">
      <section class="about">

        <h2 class="about__title">${about.title}</h2>

        <h3 class="about__subtitle">${about.whyCallingWorks.title}</h3>
        ${whyCallingWorksP1}
        <p>${about.whyCallingWorks.listHeader}</p>
        ${whyCallingWorksArticleList}
        <p>${about.whyCallingWorks.p2}</p>
        ${whyCallingWorksP3}

        <h3 class="about__subtitle">${about.callingTips.title}</h3>
        <p>${about.callingTips.p1}</p>
        <p>${about.callingTips.p2}</p>

        <h3 class="about__subtitle">${about.whoIs5Calls.title}</h3>
        <p>${about.whoIs5Calls.p1}</p>
        ${whoIs5CallsP2}

        <h3 class="about__subtitle">${about.joinUs.title}</h3>
        ${joinUsP1}

      </section>
    </main>
  `;
}
