webpackJsonp([0x6fe9bd5b785f],{1119:function(e,t){e.exports={data:{package:{id:"bs-react-intl",stars:3,name:"bs-react-intl",version:"0.1.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings to react-intl",keywords:["react","i18n"],license:"MIT",updated:"2018-03-04T09:11:35.438Z",type:"published",score:.4944291246796597,quality:.44632433076268907,popularity:.0352329272401079,maintenance:.9948580026194722,readme:'<h1 id="bs-react-intl"><a href="#bs-react-intl" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-intl</h1>\n<p>BuckleScript bindings to <a href="https://github.com/yahoo/react-intl">react-intl</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code><span class="hljs-comment"># yarn</span>\nyarn add bs-react-intl\n\n<span class="hljs-comment"># or npm</span>\nnpm install --save bs-react-intl</code></pre></div>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>Clone this repo.</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn install\nyarn run build</code></pre></div>\n<p>Then open some <code>*.html</code> from <a href="./examples"><code>examples</code></a> folder.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Despite lots of unchecked the most hard work is done. I\'ll add bindings to the rest of the components once I need them. Fell free to help me out and submit PR.</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> addLocaleData</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> intlShape</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> injectIntl</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> defineMessages</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> IntlProvider</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedDate</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedDate (children-as-function)</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedTime</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedTime (children-as-function)</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedRelative</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedRelative (children-as-function)</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedNumber</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedNumber (children-as-function)</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedPlural</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedPlural (children-as-function)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormattedMessage</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedMessage (children-as-function)</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedHTMLMessage</li>\n<li class="task-list-item"><input type="checkbox" disabled> FormattedHTMLMessage (children-as-function)</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See <a href="./examples"><code>examples</code></a> folder.</p>\n',homepageUrl:"https://github.com/alexfedoseev/bs-react-intl#readme",repositoryUrl:"https://github.com/alexfedoseev/bs-react-intl",npmUrl:"https://www.npmjs.com/package/bs-react-intl",issuesUrl:"https://github.com/alexfedoseev/bs-react-intl/issues",slug:"/package/bs-react-intl"}},pathContext:{id:"bs-react-intl"}}}});
//# sourceMappingURL=path---package-bs-react-intl-b31849443222ae64e444.js.map