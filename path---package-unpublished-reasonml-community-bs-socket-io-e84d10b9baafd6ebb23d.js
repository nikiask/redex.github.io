webpackJsonp([0x6334fea7a392],{1219:function(e,s){e.exports={data:{package:{id:"unpublished/reasonml-community/bs-socket.io",stars:7,name:"reasonml-community/bs-socket.io",version:"1.0.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"socket.io in Reason",keywords:["real-time communication"],license:null,updated:"2018-02-25T16:52:49.656Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h2 id="bs-socket"><a href="#bs-socket" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-socket</h2>\n<p>Simple bindings to <a href="https://socket.io/">socket.io</a>.</p>\n<p>To build everything run <code>npm run build</code> and to run the demo run <code>npm run run</code> and go to <code>localhost:3000</code> on two tabs. You can send messages back and forth!</p>\n<h1 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h1>\n<p>Everything lives under the namespace BsSocket.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyServer</span> = <span class="hljs-title">BsSocket</span>.<span class="hljs-title">Server</span>.<span class="hljs-title">Make</span>(</span>{\n  <span class="hljs-keyword">type</span> t = ...;\n  <span class="hljs-keyword">type</span> stringify = ...;\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">166</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>See <code>example/</code> folder for more.</p>\n<p>The API reflects socket.io\'s API. Generally, e.g. JavaScript\'s <code>socket.emit("bla", 10)</code> becomes <code>Server.emit(socket, "bla", 10)</code> in Reason.</p>\n<p>To create a server/client/namespace, use <code>Server.Make</code>, <code>Client.Make</code> and <code>Namespace.Make</code> respectively. These functors take a module that contains 2 things: a type called <code>t</code> and a function called <code>stringify</code>. This allows ocaml to typecheck the messages that you send back and forth between the server and the client. ie: you can only listen to/send messages that the server can listen to/send too.</p>\n<h2 id="couple-gotchas"><a href="#couple-gotchas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Couple Gotchas</h2>\n<p>There are a couple differences between the JS API and this one. We\'ll refer to the supposed module you\'ve created from the <code>Server.Make</code> functor as <code>MyServer</code>. Same for <code>Namespace</code> and <code>Client</code>.</p>\n<ul>\n<li><code>MyServer.emit</code> is different from <code>MyServer.Socket.emit</code>. The former emits to all connected peers while the latter emits to the given peer.</li>\n<li>Instead of <code>io.sockets</code> there is <code>MyNamespace.default(io)</code> which does the same thing.</li>\n<li>Instead of <code>io.of</code> there is <code>MyNamespace.of_(io)</code> which does the same thing. (<code>of</code> is a Reason keyword)</li>\n<li>All functions that are overloaded have different names depending on what you\'re passing. There\'s <code>MyServer.create</code> but also <code>MyServer.createWithHttp</code> (see example) among others.</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/reasonml-community/bs-socket.io",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/reasonml-community/bs-socket.io"}},pathContext:{id:"unpublished/reasonml-community/bs-socket.io"}}}});
//# sourceMappingURL=path---package-unpublished-reasonml-community-bs-socket-io-e84d10b9baafd6ebb23d.js.map