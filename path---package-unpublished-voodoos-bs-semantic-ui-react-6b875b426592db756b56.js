webpackJsonp([0xfe890fab624d],{1308:function(e,s){e.exports={data:{package:{id:"unpublished/voodoos/bs-semantic-ui-react",stars:2,name:"voodoos/bs-semantic-ui-react",version:"0.2.0",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Semantic UI React",keywords:["react","ui"],license:"MIT",updated:"2018-08-02T22:33:36.384Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-semantic-ui-react"><a href="#bs-semantic-ui-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-semantic-ui-react</h1>\n<p>A work in progress Bucklescript and ReasonReact set of bindings for <a href="https://react.semantic-ui.com">Semantic UI React</a>. </p>\n<p>You can find a example usage of theses bindings in the ElpIDE project : <a href="https://github.com/voodoos/ElpIDE">source</a> || <a href="https://voodoos.github.io/ElpIDE/">demo</a></p>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>This is an early work in progress that I build to fulfill my need. But I hope it is a clean enough basis for anyone to participate (there are loads of components with hundreds of properties in Semantic UI React).</p>\n<p>The method I used to create these bindings is well documented in <a href="https://khoanguyen.me/writing-reason-react-bindings-the-right-way/">this blog post by Khoa Nguyen</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>To use these bindings in an existing ReasonReact project simply add the repository to your dependencies :</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add <span class="hljs-string">"https://github.com/voodoos/bs-semantic-ui-react"</span></code></pre></div>\n<p>And ask <code>bsb</code> to use it by adding <code>bs-semantic-ui-react</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>.</p>\n<p>You will also need to load semantic-ui\'s css, here is one way to do it :</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[%bs.raw {|require(\'semantic-ui-css/semantic.<span class="hljs-built_in">min</span>.css\')|}];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = [%bs.raw {|require(<span class="hljs-symbol">\'semantic</span>-ui-css/semantic.min.css\')|}]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="contributions"><a href="#contributions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributions</h2>\n<p>All contributions are welcomed.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LICENSE</h2>\n<p>MIT (see LICENSE file for more details)</p>\n',homepageUrl:"https://github.com/voodoos/bs-semantic-ui-react",repositoryUrl:"https://github.com/voodoos/bs-semantic-ui-react",npmUrl:null,issuesUrl:"https://github.com/voodoos/bs-semantic-ui-react/issues",slug:"/package/unpublished/voodoos/bs-semantic-ui-react"}},pathContext:{id:"unpublished/voodoos/bs-semantic-ui-react"}}}});
//# sourceMappingURL=path---package-unpublished-voodoos-bs-semantic-ui-react-6b875b426592db756b56.js.map