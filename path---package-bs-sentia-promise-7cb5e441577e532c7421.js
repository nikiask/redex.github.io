webpackJsonp([94148688698094],{1123:function(s,a){s.exports={data:{package:{id:"bs-sentia-promise",stars:null,name:"bs-sentia-promise",version:"0.3.0",category:"library",flags:["neglected"],platforms:["browser","node"],description:"promise library for Ocaml/Reason based on javascript promises.",keywords:["async"],license:"MIT",updated:"2018-02-21T22:39:47.795Z",type:"published",score:.3414519095697294,quality:.7099685933697188,popularity:.033699042548991635,maintenance:.3333333333333333,readme:'<h1 id="bs-promise"><a href="#bs-promise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-promise</h1>\n<p>promise library for Ocaml/Reason based on javascript promises.</p>\n<p>example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-type">Promise</span>.make (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> reject<span class="hljs-params"> resolve<span class="hljs-params"> <span class="hljs-params"> </span></span></span></span></span>=&gt; resolve <span class="hljs-string">"Hello"</span>)\n  |&gt; <span class="hljs-type">Promise</span>.<span class="hljs-built_in">map</span> (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> s<span class="hljs-params"> </span></span></span>=&gt; s ^ <span class="hljs-string">", World!"</span>)\n  |&gt; <span class="hljs-type">Promise</span>.finally (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> err<span class="hljs-params"> </span></span></span>=&gt; print_endline @@ <span class="hljs-string">"Error: "</span> ^ err) (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> s<span class="hljs-params"> </span></span></span>=&gt; print_endline s );</code></pre></div>\n<p>Read the <a href="/src/Promise.rei">promise.rei</a> file for the api.</p>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-sentia-promise",issuesUrl:null,slug:"/package/bs-sentia-promise"}},pathContext:{id:"bs-sentia-promise"}}}});
//# sourceMappingURL=path---package-bs-sentia-promise-7cb5e441577e532c7421.js.map