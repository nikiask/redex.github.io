webpackJsonp([37392313400131],{1178:function(s,a){s.exports={data:{package:{id:"bs-ws",stars:2,name:"bs-ws",version:"1.0.8",category:"binding",flags:[],platforms:["node"],description:"ws bindings for Reason",keywords:["real-time communication"],license:"MIT",updated:"2018-07-21T11:07:41.016Z",type:"published",score:.5379640998611508,quality:.5957387935042661,popularity:.031427409397863634,maintenance:.994979624344625,readme:'<h1 id="bs-ws"><a href="#bs-ws" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-ws</h1>\n<p>Simple node websocket implementation for Reason</p>\n<p><a href="https://www.npmjs.com/package/bs-ws"><img src="https://img.shields.io/npm/v/bs-ws.svg" alt="npm"></a></p>\n<p><a href="https://github.com/kfish610/bs-ws/issues"><img src="https://img.shields.io/github/issues/kfish610/bs-ws.svg" alt="GitHub issues"></a></p>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-ws</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i -S bs-ws</code></pre></div>\n<p>Then add bs-ws to bs-dependencies in your bsconfig.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-ws"</span>]\n}</code></pre></div>\n<h1 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h1>\n<p>Simple Example</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> ws = <span class="hljs-type">WebSocket</span>.make(<span class="hljs-string">"wss://www.example.com"</span>);\n<span class="hljs-type">WebSocket</span>.(\nws\n|. on(`message((data) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Message: "</span> ++ data)))\n|. on(`close((code, reason) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Closed: "</span> ++ string_of_int(code) ++ reason)))\n|. on(`open_(<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Opened!"</span>)))\n|. on(`error(error =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Error: "</span> ++ <span class="hljs-type">ErrorEvent</span>.message(error))))\n);</code></pre></div>\n<p>Example with subprotocols</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> ws = <span class="hljs-type">WebSocket</span>.makeWithProtocols(<span class="hljs-string">"wss://gateway.discord.gg/?v=6&amp;encoding=json"</span>, [| <span class="hljs-string">"soap"</span> |]);\n<span class="hljs-type">WebSocket</span>.(\nws\n|. on(`message((data) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Message: "</span> ++ data)))\n|. on(`close((code, reason) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Closed: "</span> ++ string_of_int(code) ++ reason)))\n|. on(`open_(<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Opened!"</span>)))\n|. on(`error(error =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Error: "</span> ++ <span class="hljs-type">ErrorEvent</span>.message(error))))\n);</code></pre></div>\n<p>Send</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">let</span> ws = WebSocket.make(<span class="hljs-string">"wss://www.example.com"</span>);\nWebSocket.(\nws\n|. send(<span class="hljs-string">"Hello World!"</span>)\n);</code></pre></div>\n',homepageUrl:"https://github.com/kfish610/bs-ws",repositoryUrl:"https://github.com/kfish610/bs-ws",npmUrl:"https://www.npmjs.com/package/bs-ws",issuesUrl:"https://github.com/kfish610/bs-ws/issues",slug:"/package/bs-ws"}},pathContext:{id:"bs-ws"}}}});
//# sourceMappingURL=path---package-bs-ws-3091b0c36cba7965916c.js.map