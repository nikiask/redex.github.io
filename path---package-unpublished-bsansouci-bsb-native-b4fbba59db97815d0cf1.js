webpackJsonp([0xc4ef49f30884],{1201:function(s,e){s.exports={data:{package:{id:"unpublished/bsansouci/bsb-native",stars:111,name:"bsansouci/bsb-native",version:"2.1.1",category:"tool",flags:["neglected"],platforms:["native"],description:"bucklescript compiler, ocaml standard libary by bucklescript and its required runtime support",keywords:["development tools"],license:"SEE LICENSE IN LICENSE",updated:"2018-03-03T13:05:44.537Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bsb-native"><a href="#bsb-native" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsb-native</h1>\n<p>Bsb-native is a fork of <a href="https://bucklescript.github.io/docs/en/build-overview.html">bsb</a> that compiles to native OCaml instead.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<p>1) Add <code>"bs-platform": "bsansouci/bsb-native#2.1.1"</code> as a devDependency to your <code>package.json</code>\n2) Add a <code>bsconfig.json</code> like you would for bsb. Bsb-native uses the same schema, located <a href="http://bucklescript.github.io/bucklescript/docson/#build-schema.json">here</a> with small additions like <code>entries</code> (see below for complete config schema).\n3) run <code>npm install</code> / <code>yarn</code>.</p>\n<p>An <a href="https://github.com/bsansouci/bsb-native-example/blob/master/bsconfig.json">example bsconfig.json</a>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-string">"name"</span> : <span class="hljs-string">"NameOfLibrary"</span>,\n  <span class="hljs-string">"sources"</span> : <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"entries"</span>: [{\n    <span class="hljs-string">"backend"</span>: <span class="hljs-string">"bytecode"</span>,\n    <span class="hljs-string">"main-module"</span>: <span class="hljs-string">"Index"</span> <span class="hljs-comment">// Capitalized name of module (not a path)</span>\n  }]\n}</code></pre></div>\n<h2 id="run"><a href="#run" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run</h2>\n<p><code>./node_modules/.bin/bsb -make-world</code> (or add an <a href="https://docs.npmjs.com/misc/scripts">npm script</a> that runs <code>bsb -make-world</code>).</p>\n<p>That will build the first entry and use its <code>backend</code> to build all other entries targetting that <code>backend</code>. </p>\n<p>e.g if you have multiple <code>bytecode</code> targets, they\'ll all get built but not the <code>js</code> ones nor <code>native</code> ones. If you want to build to all targets you need to run the build command multiple times with different <code>-backend</code>.</p>\n<h2 id="initialize-a-new-package"><a href="#initialize-a-new-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Initialize a new package</h2>\n<p>Bsb-native comes with a basic init package to get you started. To create a package named <code>Hello</code> run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>bsb -init Hello</code></pre></div>\n<p>And a folder named <code>Hello</code> will be created with a basic project layout. If you want to initialize an already created folder, use <code>.</code> as the last argument.</p>\n<h2 id="useful-commandline-flags"><a href="#useful-commandline-flags" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Useful commandline flags</h2>\n<p>The <code>-make-world</code> flag builds all of the dependencies and the project.</p>\n<p>The <code>-clean-world</code> flag cleans all of the build artifacts.</p>\n<p>The <code>-w</code> enabled the watch mode which will rebuild on any source file change.</p>\n<p>The <code>-backend [js|bytecode|native]</code> flag tells <code>bsb-native</code> to build all entries in the <code>bsconfig.json</code> which match the backend <code>js</code>, <code>bytecode</code> or <code>native</code>.</p>\n<p>The build artifacts are put into the folder <code>lib/bs</code>. The bytecode executable would be at <code>lib/bs/bytecode/index.byte</code> and the native one at <code>lib/bs/native/index.native</code> for example.</p>\n<h2 id="opam-package-support"><a href="#opam-package-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Opam package support</h2>\n<p>Yes <code>bsb-native</code> supports opam packages (see <a href="https://github.com/bsansouci/bsb-native-example/tree/opam-example">ocamlfind example</a>).\n<strong>BUT</strong> you need to be on the switch <code>4.02.3+buckle-master</code> (which you can get to by running <code>opam switch 4.02.3+buckle-master</code>).</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-string">"name"</span> : <span class="hljs-string">"NameOfLibrary"</span>,\n  <span class="hljs-string">"sources"</span> : <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"ocamlfind-dependencies"</span>: [<span class="hljs-string">"lwt.unix"</span>, <span class="hljs-string">"lwt.ppx"</span>],\n  <span class="hljs-string">"entries"</span>: [{\n    <span class="hljs-string">"backend"</span>: <span class="hljs-string">"bytecode"</span>,\n    <span class="hljs-string">"main-module"</span>: <span class="hljs-string">"Index"</span>\n  }]\n}</code></pre></div>\n<h2 id="bsconfigjson-schema"><a href="#bsconfigjson-schema" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig.json schema</h2>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n    <span class="hljs-comment">// All of the bsb fields will work as expected. </span>\n    <span class="hljs-comment">// See the bucklescript schema:</span>\n    <span class="hljs-comment">// https://bucklescript.github.io/bucklescript/docson/#build-schema.json</span>\n    <span class="hljs-comment">// Below are just the bsb-native specific features.</span>\n\n    <span class="hljs-comment">// Entries is an array of targets to be built.</span>\n    <span class="hljs-comment">// When running `bsb -backend bytecode`, bsb will filter this array for</span>\n    <span class="hljs-comment">// all the entries compiling to bytecode and compile _all_ of those.</span>\n    <span class="hljs-string">"entries"</span>: [{\n      <span class="hljs-string">"backend"</span>: <span class="hljs-string">"bytecode"</span>, <span class="hljs-comment">// can be "bytecode" (ocamlc), "js" (bsc) or "native" (ocamlopt),</span>\n      <span class="hljs-string">"main-module"</span>: <span class="hljs-string">"MainModule"</span>, <span class="hljs-comment">// This has to be capitalized</span>\n      <span class="hljs-string">"output-name"</span>: <span class="hljs-string">"snake.exe"</span>, <span class="hljs-comment">// Custom executable name.</span>\n    }],\n\n    <span class="hljs-comment">// Array of opam dependencies.</span>\n    <span class="hljs-string">"ocamlfind-dependencies"</span>: [<span class="hljs-string">"lwt.unix"</span>],\n\n    <span class="hljs-comment">// Array of built-in ocaml dependencies that are not Pervasives (ie not</span>\n    <span class="hljs-comment">// linked by default).</span>\n    <span class="hljs-comment">// This is useful for making a ppx, where you need "compiler-libs".</span>\n    <span class="hljs-comment">// All of these except "compiler-libs" is linked by default, so you don\'t</span>\n    <span class="hljs-comment">// have to worry about it. That said it does increase the binary size so</span>\n    <span class="hljs-comment">// you can remove unused things here.</span>\n    <span class="hljs-string">"ocaml-dependencies"</span>: [<span class="hljs-string">"bigarray"</span>, <span class="hljs-string">"unix"</span>, <span class="hljs-string">"threads"</span>, <span class="hljs-string">"compiler-libs"</span>],\n\n    <span class="hljs-comment">// Array of flags to pass the OCaml compiler. This shouldn\'t be needed for</span>\n    <span class="hljs-comment">// most things.</span>\n    <span class="hljs-string">"ocaml-flags"</span>: [<span class="hljs-string">"-bin-annot"</span>],\n\n    <span class="hljs-comment">// This allows you to write JS specific packages (for example) and depend</span>\n    <span class="hljs-comment">// on them without bsb choking on them when building to another platform.</span>\n    <span class="hljs-comment">// If you have `MyLibJs` which exposes a module `Bla`, and `MyLibNative`</span>\n    <span class="hljs-comment">// which also exposes `Bla`, the compiler will use the native `Bla` when</span>\n    <span class="hljs-comment">// compiling to native and the JS `Bla` when compiling to JS thanks to this</span>\n    <span class="hljs-comment">// flag.</span>\n    <span class="hljs-string">"allowed-build-kinds"</span>: <span class="hljs-string">"js"</span>, <span class="hljs-comment">// Can be a string or an array, with the same values as "entries".</span>\n\n    <span class="hljs-comment">// List of relative paths (relative from library dir) to be linked at the </span>\n    <span class="hljs-comment">// end. Bsb-native doesn\'t care how those were generated as long as they</span>\n    <span class="hljs-comment">// are there at the linking stage. Generally you can use `build-script` to</span>\n    <span class="hljs-comment">// build those.</span>\n    <span class="hljs-string">"static-libraries"</span>: [<span class="hljs-string">"lib/c/my_lib.o"</span>],\n\n    <span class="hljs-comment">// File built and ran at compile time. Very useful for generating object files</span>\n    <span class="hljs-comment">// that are then linked into the app.</span>\n    <span class="hljs-comment">// See the C compilation section below for more details about the API exposed.</span>\n    <span class="hljs-string">"build-script"</span>: <span class="hljs-string">"build_script.re"</span>,\n\n    <span class="hljs-comment">// List of flags to be passed to the C linker at the linking stage.</span>\n    <span class="hljs-string">"c-linker-flags"</span>: [<span class="hljs-string">"-L/path/to/folder/with/linker/stuff"</span>],\n}</code></pre></div>\n<h2 id="c-compilation"><a href="#c-compilation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>C compilation</h2>\n<p>bsb-native allows C compilation through an OCaml/Reason file. To expose that file to bsb you can add <code>"build-script": "build_script.re"</code> to your <code>bsconfig.json</code>. </p>\n<p>Bsb expose to that file a module called <code>Bsb_internals</code> which contains helpers to compile C code.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Command that\'ll synchronously compile a C file to an object file (or not if `c=false` is passed).  \n   c:bool                 Equivalent to the `-c` flag passed to gcc. true by default.\n   include_ocaml:bool     Automatically add an include flag for the ocaml runtime. true by default. \n   flags:array(string)    Array of flags passed directly to gcc.\n   includes:array(string) Array of paths to folders that will be included during compilation.\n   string                 The output file.\n   array(string)          The input files. \n*/</span>\n<span class="hljs-keyword">let</span> gcc : (?<span class="hljs-built_in">c</span>:bool, ?include_ocaml:bool, ?flags:array(string), ?includes:array(string), string, array(string)) =&gt; unit;\n\n<span class="hljs-comment">/* Contains an absolute path to the current project\'s node_modules. */</span>\n<span class="hljs-keyword">let</span> node_modules : string;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">176</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Here is a <a href="https://github.com/bsansouci/reasongl/blob/2364bc0de0dc0d89b85c6bc1fc64b0ceb169038f/build_script.re">simple example</a> of a <code>build_script.re</code> file.</p>\n<p>The generated artifacts need to be added to the <code>"static-libraries": []</code> array inside the <code>bsconfig.json</code> in order to be added at the linking phase.</p>\n<p>Here\'s the same <a href="https://github.com/bsansouci/reasongl/blob/2364bc0de0dc0d89b85c6bc1fc64b0ceb169038f/bsconfig.json#L16">simple example</a>\'s <code>bsconfig.json</code>.</p>\n<p>The <code>gcc</code> function exposed to the <code>build-script</code> file uses a vendored mingw compiler, which works on all platforms (linux, osx, windows). </p>\n<h2 id="multi-target"><a href="#multi-target" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multi-target</h2>\n<p><code>bsb-native</code> actually supports building Reason/OCaml to JS as well as to native/bytecode. What that enables is cross platform code that depends only on an interface, and bsb-native will choose the right implementation depending on what you target.</p>\n<p>For example, you can write code that depends on the module Reasongl, and bsb-native will use <code>ReasonglNative</code> as the implementation for Reasongl when building to native/bytecode or it\'ll use <code>ReasonglWeb</code> when building to JS.</p>\n<p>Currently the way this works is to have each platform specific dependency expose a module with the same name and rely on the field <code>allowed-build-kinds</code> in the <code>bsconfig.json</code> to tell bsb-native which one of platform specific dep you want to build, given that you want to build the whole project to a specific target. Say you target JS, then ReasonglWeb will get built which exposes its own <a href="https://github.com/bsansouci/reasongl-web/blob/bsb-support-new/src/reasongl.re">Reasongl</a> module.</p>\n<h3 id="conditional-compilation"><a href="#conditional-compilation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conditional compilation</h3>\n<p>If you would like to have all your code in the same package, you can use BuckleScript\'s <a href="https://bucklescript.github.io/docs/en/conditional-compilation.html">conditional compilation</a>. To do so, place</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>#<span class="hljs-keyword">if</span> <span class="hljs-type">BSB_BACKEND</span> = <span class="hljs-string">"bytecode"</span> <span class="hljs-keyword">then</span>\n  <span class="hljs-keyword">include</span> <span class="hljs-type">MyModule_Native</span>\n#elif <span class="hljs-type">BSB_BACKEND</span> = <span class="hljs-string">"native"</span> <span class="hljs-keyword">then</span>\n  <span class="hljs-keyword">include</span> <span class="hljs-type">MyModule_Native</span>\n#<span class="hljs-keyword">else</span>\n  <span class="hljs-keyword">include</span> <span class="hljs-type">MyModule_Js</span>\n#<span class="hljs-keyword">end</span></code></pre></div>\n<p>inside a file called <code>MyModule</code> (for example). When you build to JavaScript (<code>BSB_BACKEND = "js"</code>), that module will use the <code>MyModule_Js</code> implementation (see <a href="https://github.com/Schmavery/reprocessing/blob/2ff7221789dcefff2ae927b8305c938845361d59/src/Reprocessing_Hotreload.ml">example</a>). Same for <code>BSB_BACKEND = "native"</code> and <code>BSB_BACKEND = "bytecode"</code>.</p>\n<p><code>BSB_BACKEND</code> value will be filled automatically by <code>bsb-native</code>, so you just need to use it at will with the language-level static <code>if</code> compilation.</p>\n<p>Platform specific files (like <code>MyModule_Native</code>) should be added to a folder that is only built for that specific backend (<code>native</code>, in the <code>MyModule_Native</code> case). You can do that by adding this to your <code>bsconfig.json</code> file:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"sources"</span>: [{\n  <span class="hljs-string">"dir"</span>: <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"subdirs"</span>: [{\n    <span class="hljs-string">"dir"</span>: <span class="hljs-string">"native"</span>,\n    <span class="hljs-string">"backend"</span>: <span class="hljs-string">"native"</span>\n  }]\n}]</code></pre></div>\n<p><strong>Note</strong>: BuckleScript\'s conditional compilation doesn\'t work with Reason yet, so any usage of conditional compilation will have to be implemented in OCaml <code>.ml</code> files.</p>\n',homepageUrl:"https://github.com/bucklescript/bucklescript#readme",repositoryUrl:"https://github.com/bsansouci/bsb-native",npmUrl:null,issuesUrl:"https://github.com/bucklescript/bucklescript/issues",slug:"/package/unpublished/bsansouci/bsb-native"}},pathContext:{id:"unpublished/bsansouci/bsb-native"}}}});
//# sourceMappingURL=path---package-unpublished-bsansouci-bsb-native-b4fbba59db97815d0cf1.js.map