webpackJsonp([64160360599056],{1150:function(s,n){s.exports={data:{package:{id:"bs-promise-monad",stars:9,name:"bs-promise-monad",version:"0.2.9",category:"library",flags:[],platforms:["browser","node"],description:"A monadic syntax to work with Promise.",keywords:["async","utilities"],license:"MIT",updated:"2018-08-02T17:31:23.837Z",type:"published",score:.4931186311800231,quality:.42334447722104906,popularity:.04634968454902103,maintenance:.9996939954901458,readme:'<h1 id="bs-promise-monad"><a href="#bs-promise-monad" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-promise-monad</h1>\n<p>Monadic syntax to work with promise in ReasonML</p>\n<p>This project is a minimal syntax extension that help you to be more happy, and keep every promise in a way.</p>\n<h1 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>status</h1>\n<p>This module is simple and self-completed. It means that you can use it with confidence that it won\'t bring any breaking changes in a subsequent update.</p>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>installation</h1>\n<p><code>npm install bs-promise-monad --save</code></p>\n<p>and add</p>\n<p><code>bs-promise-monad</code> into bsconfig.json.</p>\n<p>You also need to install bs-webapi.</p>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<p>simply </p>\n<p><code>open BsPromiseMonad.PromiseMonad;</code></p>\n<p>and enjoy life.</p>\n<h1 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">let</span> mySweetenPromise = <span class="hljs-built_in">return</span>(<span class="hljs-number">2</span>);\n\nmySweetenPromise\n&gt;&gt;= (value =&gt; {\n    Js.log(value);\n    <span class="hljs-built_in">return</span>(value + <span class="hljs-number">2</span>);\n  })\n&gt;&gt;= (value =&gt; {\n    Js.log(value);\n    <span class="hljs-built_in">return</span>(value + <span class="hljs-number">3</span>);\n  })\n&gt;&gt;| (err =&gt; {\n    Js.log2(<span class="hljs-string">"Failure!!"</span>, err);\n    <span class="hljs-built_in">return</span>(-<span class="hljs-number">2</span>);\n  });</code></pre></div>\n<p>Reject the promise</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>exception Sorry;\n\nerror(Sorry)\n&gt;&gt;= (x =&gt; Js.log(<span class="hljs-string">"do it "</span> ++ x) |&gt; <span class="hljs-built_in">return</span>)\n&gt;&gt;| (err =&gt; <span class="hljs-built_in">return</span>(Js.log2(<span class="hljs-string">"I handled this"</span>, err)));</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>exception Sorry;\n<span class="hljs-built_in">let</span> <span class="hljs-built_in">break</span>Promise = <span class="hljs-built_in">return</span>(<span class="hljs-string">"I\'m trying..."</span>);\n\n<span class="hljs-built_in">break</span>Promise \n&gt;&gt;= ( x =&gt; Js.log(<span class="hljs-string">"Program: "</span> ++ x) |&gt; <span class="hljs-built_in">return</span> )\n&gt;&gt;= ( y =&gt; error(Sorry) )   /* Reject here */\n&gt;&gt;= ( z =&gt; Js.log(<span class="hljs-string">"this is skipped"</span>)|&gt;<span class="hljs-built_in">return</span>)\n&gt;&gt;| ( err =&gt; Js.log2(<span class="hljs-string">"Handled error!!"</span>, err)|&gt;<span class="hljs-built_in">return</span>); /* Error handling here */</code></pre></div>\n<h1 id="change"><a href="#change" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Change</h1>\n<ul>\n<li>v0.2.6 : update example on error handling</li>\n<li>v0.2.5 : add error handling (>>|)</li>\n<li>v0.2.0 : add Promise.reject by <code>error</code></li>\n</ul>\n',homepageUrl:"https://github.com/digitake/bs-promise-monad#bs-promise-monad",repositoryUrl:"https://github.com/digitake/bs-promise-monad",npmUrl:"https://www.npmjs.com/package/bs-promise-monad",issuesUrl:"https://github.com/digitake/bs-promise-monad/issues",slug:"/package/bs-promise-monad"}},pathContext:{id:"bs-promise-monad"}}}});
//# sourceMappingURL=path---package-bs-promise-monad-5de231bc29d4a022a83c.js.map