webpackJsonp([0x6bf5d57dc689],{1191:function(e,s){e.exports={data:{package:{id:"@elliottcable/bs-cmdliner",stars:0,name:"@elliottcable/bs-cmdliner",version:"1.0.2",category:"library",flags:[],platforms:["browser","node","native"],description:"Cmdliner — Declarative definition of command line interfaces for OCaml",keywords:["utilities","parsing","cli"],license:"ISC",updated:"2018-07-24T18:52:13.341Z",type:"published",score:.4934605249016487,quality:.841495995178734,popularity:.02706354317348164,maintenance:.661541389249457,readme:'<h2 id="bs-cmdliner"><a href="#bs-cmdliner" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>bs-cmdliner</code></h2>\n<p>This is Cmdliner, a CLI-interface building tool for OCaml, packaged for\n<a href="https://bucklescript.github.io/">BuckleScript</a> (an OCaml-to-JavaScript compiler) and <a href="https://reasonml.github.io/">Reason</a> (an\nalternative OCaml syntax targeting that compiler.)</p>\n<p>You can safely ignore the installation instructions below when compiling\nto JS. Instead:</p>\n<ol>\n<li>\n<p>Install this fork through npm:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save @elliottcable/bs-cmdliner</code></pre></div>\n</li>\n<li>\n<p>Manually add <code>bs-cmdliner</code> to your <code>bsconfig.json</code>\'s\n<code>bs-dependencies</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code> <span class="hljs-string">"bs-dependencies"</span>: [\n   ...\n   <span class="hljs-string">"@elliottcable/bs-cmdliner"</span>\n ],</code></pre></div>\n</li>\n<li>\n<p>Write a CLI!</p>\n</li>\n</ol>\n<p>The usage docs are below, but one thing worth noting, is that <a href="https://nodejs.org/api/process.html#process_process_argv">Node.js\ndoesn\'t follow the POSIX standard for <code>argv</code></a>; so you need\nto prepend <code>process.argv.shift()</code> or similar to actually executing your\ncommand-line interface. Something like this should do:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-comment">(* OCaml syntax *)</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">Cmdliner</span>\n[%%raw <span class="hljs-string">"process.argv.shift()"</span>]\n\n<span class="hljs-keyword">let</span> hello <span class="hljs-literal">()</span> = print_endline <span class="hljs-string">"Hello, world!"</span>\n<span class="hljs-keyword">let</span> hello_t = <span class="hljs-type">Term</span>.(const hello $ const <span class="hljs-literal">()</span>)\n\n<span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> = <span class="hljs-type">Term</span>.exit @@ <span class="hljs-type">Term</span>.eval (hello_t, <span class="hljs-type">Term</span>.info <span class="hljs-string">"wrange"</span>)</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* ReasonML syntax */</span>\nopen <span class="hljs-type">Cmdliner</span>;\n%raw <span class="hljs-string">"process.argv.shift()"</span>;\n\n<span class="hljs-keyword">let</span> hello = () =&gt; print_endline(<span class="hljs-string">"Hello, world!"</span>);\n<span class="hljs-keyword">let</span> hello_t = <span class="hljs-type">Term</span>.(const(hello) $ const());\n\n<span class="hljs-keyword">let</span> () = <span class="hljs-type">Term</span>.exit @@ <span class="hljs-type">Term</span>.eval((hello_t, <span class="hljs-type">Term</span>.info(<span class="hljs-string">"wrange"</span>)));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Cmdliner</span>\n[%%raw <span class="hljs-string">"process.argv.shift()"</span>]\n<span class="hljs-keyword">let</span> hello <span class="hljs-literal">()</span> = print_endline <span class="hljs-string">"Hello, world!"</span>\n<span class="hljs-keyword">let</span> hello_t = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Term</span> <span class="hljs-keyword">in</span> (const hello) $ (const <span class="hljs-literal">()</span>)\n<span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> = <span class="hljs-type">Term</span>.exit @@ (<span class="hljs-type">Term</span>.eval (hello_t, (<span class="hljs-type">Term</span>.info <span class="hljs-string">"wrange"</span>)))</code></pre>\n      </div>\n    </div>\n  \n<blockquote>\n<p><strong>NOTE:</strong> OCaml doesn\'t often move fast; and I can\'t say I have much\nintention to follow the upstream development of Cmdliner with a\nmicroscope. As of right now, BuckleScript (4.02.3) is pretty far\nbehind upstream OCaml (4.07.0) <em>anyway</em>, so I\'m fairly worried that\nfuture versions of Cmdliner won\'t compile on BuckleScript.</p>\n<p>In any case, feel free to reach out directly if you want me to bump\nthe version on npm. No promises, though, if substantial changes to the\nsource are necessary to make it compile. (There\'s a reason I didn\'t\nstomp on the npm package names outside my own scope! <code>;)</code>)</p>\n</blockquote>\n<h4 id="original-readme-follows"><a href="#original-readme-follows" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Original README follows:</h4>\n<h2 id="cmdliner--declarative-definition-of-command-line-interfaces-for-ocaml"><a href="#cmdliner--declarative-definition-of-command-line-interfaces-for-ocaml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cmdliner — Declarative definition of command line interfaces for OCaml</h2>\n<p>%%VERSION%%</p>\n<p>Cmdliner allows the declarative definition of command line interfaces\nfor OCaml.</p>\n<p>It provides a simple and compositional mechanism to convert command\nline arguments to OCaml values and pass them to your functions. The\nmodule automatically handles syntax errors, help messages and UNIX man\npage generation. It supports programs with single or multiple commands\nand respects most of the <a href="http://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap12.html">POSIX</a> and <a href="http://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html">GNU</a> conventions.</p>\n<p>Cmdliner has no dependencies and is distributed under the ISC license.</p>\n<p>Home page: <a href="http://erratique.ch/software/cmdliner">http://erratique.ch/software/cmdliner</a><br>\nContact: Daniel Bünzli <code>&#x3C;daniel.buenzl i@erratique.ch></code></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Cmdliner can be installed with <code>opam</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>opam install cmdliner</code></pre></div>\n<p>If you don\'t use <code>opam</code> consult the <a href="opam"><code>opam</code></a> file for build\ninstructions.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>The documentation and API reference is automatically generated by from\nthe source interfaces. It can be consulted <a href="http://erratique.ch/software/cmdliner/doc/Cmdliner">online</a> or via\n<code>odig doc cmdliner</code>.</p>\n<h2 id="sample-programs"><a href="#sample-programs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sample programs</h2>\n<p>If you installed Cmdliner with <code>opam</code> sample programs are located in\nthe directory <code>opam config var cmdliner:doc</code>. These programs define\nthe command line of some classic programs.</p>\n<p>In the distribution sample programs are located in the <code>test</code>\ndirectory of the distribution. They can be built and run with:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>topkg build --tests <span class="hljs-literal">true</span> &amp;&amp; topkg <span class="hljs-built_in">test</span></code></pre></div>\n',homepageUrl:"http://erratique.ch/software/cmdliner",repositoryUrl:"https://github.com/ELLIOTTCABLE/bs-cmdliner",npmUrl:"https://www.npmjs.com/package/%40elliottcable%2Fbs-cmdliner",issuesUrl:"https://github.com/ELLIOTTCABLE/bs-cmdliner/issues",slug:"/package/@elliottcable/bs-cmdliner"}},pathContext:{id:"@elliottcable/bs-cmdliner"}}}});
//# sourceMappingURL=path---package-elliottcable-bs-cmdliner-03509ea4615bc5efff8d.js.map