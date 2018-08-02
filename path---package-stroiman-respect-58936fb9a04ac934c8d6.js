webpackJsonp([28513554896801],{1250:function(e,t){e.exports={data:{package:{id:"@stroiman/respect",stars:20,name:"@stroiman/respect",version:"0.7.2",category:"library",flags:[],platforms:["node"],description:"BDD-style test framework for Reason/bucklescript",keywords:["testing"],license:"MIT",updated:"2018-07-26T15:56:14.767Z",type:"published",score:.620014450376958,quality:.8428188932179049,popularity:.0503297645573152,maintenance:.9987238994757892,readme:'<h1 id="respect"><a href="#respect" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReSpect</h1>\n<p>BDD-style test framework for Reason/bucklescript</p>\n<p><strong>Attention</strong> - <em>The NPM package has moved to <code>@stroiman/respect</code>. Remember to\nupdate both _package.json</em> AND <code>bsconfig.json</code>._</p>\n<p><em>The source repo was moved from to <code>https://github.com/stroiman/respect.git</code></em></p>\n<p><a href="https://travis-ci.org/stroiman/respect"><img src="https://travis-ci.org/stroiman/respect.svg?branch=master" alt="Build Status"></a></p>\n<p>This is an RSpec inspired test framework for ReasonML/OCaml/Bucklescript. The\nrunner uses raw javascript code, so it will only run in node environments at the moment.</p>\n<p>I base this on a lot of experience I gained from a similar project for F#, FSpec.</p>\n<p>This project is still in a very early stage, so use at your own risk. Breaking\nchanges occur from time to time.</p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li>The framework places tests in "examples", which are grouped in "example\ngroups", just like mocha, jest, jasmine, etc.</li>\n<li>Example groups and their examples are build using immutable data structures,\nallowing for metaprogramming to modify/generate the examples.</li>\n<li>Support for testing async code.</li>\n<li>The framework provides a context object that is unique to each individual\ntest case, and provides a place where each test case can store state\nnecessary for that case.</li>\n<li>Each example or group can have metadata atteched that will be made available\nthrough the context object. This can be used modify what happens in the\nsetup code.</li>\n</ul>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>Run <code>npm install --save-dev @stroiman/respect</code> and add <code>@stroiman/respect</code> to the <code>bs-dev-dependencies</code> in <code>bsconfig.json</code>.</p>\n<p>For more info, see the full <a href="https://github.com/PeteProgrammer/respect/blob/master/Documentation.md">Documentation</a></p>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h2>\n<ul>\n<li>"Finalize" DSL for building test suites.</li>\n<li>Determine whether or not to allow mutation of <code>TestContext</code>. This worked well\nin F#/FSpec, but we don\'t have runtime type checking in Reason/Bucklescript.</li>\n<li>Finalize assertion framework.</li>\n<li>Nicer test output when running.</li>\n<li>Nicer test output when assertions fail.</li>\n<li>Internally, figure out how to report progresss.</li>\n<li>More flexible runner, e.g. configurable location of test files</li>\n<li>✓ Handle async timeout to avoid hanging when async tests don\'t call back</li>\n<li>Make timeout configurable through example metadata.</li>\n<li>Support tear-down code</li>\n</ul>\n<p>Although, I had learned from many mistakes when building FSpec, there are some\nproblems that demand different solutions in Reason/Bucklescript. Async support\nin particular.</p>\n<h2 id="latest-changes"><a href="#latest-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Latest changes</h2>\n<p>This section just contains the most recent changes. Find the full version\nhistory <a href="https://github.com/PeteProgrammer/respect/blob/master/CHANGELOG.md">here</a>.</p>\n<h3 id="051"><a href="#051" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.5.1</h3>\n<ul>\n<li>No of passed, pending, and failed tests are written to the console after the\ntest run.</li>\n</ul>\n<h3 id="050"><a href="#050" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.5.0</h3>\n<ul>\n<li>Breaking change: Renamed <code>TestContext</code> module to <code>Respect_ctx</code> and made it\navailable under <code>Respect.Ctx</code>. A quick fix to get your code to compile\nis to add the this to your own modules <code>module TestContext = Respect.Ctx</code>.</li>\n</ul>\n',homepageUrl:"https://github.com/stroiman/respect#readme",repositoryUrl:"https://github.com/stroiman/respect",npmUrl:"https://www.npmjs.com/package/%40stroiman%2Frespect",issuesUrl:"https://github.com/stroiman/respect/issues",slug:"/package/@stroiman/respect"}},pathContext:{id:"@stroiman/respect"}}}});
//# sourceMappingURL=path---package-stroiman-respect-58936fb9a04ac934c8d6.js.map