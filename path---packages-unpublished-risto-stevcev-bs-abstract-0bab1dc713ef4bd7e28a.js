webpackJsonp([0xd22e1c1c3b9d],{1141:function(e,t){e.exports={data:{package:{id:"unpublished/Risto-Stevcev/bs-abstract",score:0,name:"Risto-Stevcev/bs-abstract",version:"0.4.0",description:"Bucklescript interfaces and implementations for category theory and abstract algebra",keywords:["bucklescript","reason"],license:"BSD-3-Clause",updated:"2017-12-31T20:34:19.670Z",stars:13,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>bs-abstract</h1>\n<p>Bucklescript interfaces and implementations for category theory and abstract algebra</p>\n<img src="https://raw.githubusercontent.com/Risto-Stevcev/bs-abstract/master/cantellated_tesseract.png" height="100" width="100"/>\n<h2>Installation</h2>\n<p>Install the project:</p>\n<p><code>npm install bs-abstract --save</code></p>\n<p>And add the dependency to your bs-dependencies in <code>bsconfig.json</code>:</p>\n<pre><code class="language-json">"bs-dependencies": [\n  "bs-abstract"\n]\n</code></pre>\n<p>The project will be available under the <code>BsAbstract</code> namespace</p>\n<h2>Project Layout</h2>\n<p>This is the current layout of the project. It\'s subject to change:</p>\n<ul>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/Interface.re">src/Interface.re</a> - Contains the category theory and abstract algebra interfaces</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/Verify.re">src/Verify.re</a> - Contains property based tests to verify that implementations are lawful</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/Infix.re">src/Infix.re</a> - Contains functors to generate infix operators for the interfaces. Modules implementing interfaces contain an already instantiated Infix module for convenience where appropriate</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/Default.re">src/Default.re</a> - Contains default implementations for interface functions</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/Functions.re">src/Functions.re</a> - Contains generic functions that are built on top the abstract interfaces</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/Functors.re">src/Functors.re</a> - Contains already instantiated functors for common data combinations for convenience</li>\n</ul>\n<p>The rest of the files under <code>src</code> are implementations based on data type (ie: <code>String.re</code> for strings). These files and their corresponding unit tests in the <code>test</code> folder will give you an idea on how to use and implement the interfaces for your own data structures.</p>\n<h2>Suggested Usage</h2>\n<ul>\n<li>For interfaces based on functors, Use already instantiated functors if available to avoid the extra boilerplate (ie: <code>ArrayF.Int.Additive.Fold_Map.fold_map</code>)</li>\n<li>Don\'t overuse infix operators. If the code is combinatorial it can make it more readable, but a lot of times prefix operators are simpler and easier to read</li>\n<li>If you do use infix operators, prefer local opens over global opens, and prefer explicit unpacking over local opens (ie: <code>let ((&#x3C;.), (>.)) = Function.Infix.((&#x3C;.), (>.))</code>)</li>\n<li>Abbreviated modules can make code terser and easier to read in some situations (ie: <code>A.map</code>), especially in situations where infix operators can\'t be used because they would introduce ambiguity, like for example when two different monoids are used in the same function.</li>\n</ul>\n<p>Example code:</p>\n<pre><code class="language-reason">module A = ListF.Option.Traversable;\nassert(A.sequence([Some("foo"), Some("bar")]) == Some(["foo", "bar"]));\nJs.log(ListF.Int.Show.show([1,1,2,3,5,8]));\n</code></pre>\n<p>See the unit tests for many more examples</p>\n<h2>Side effects / IO</h2>\n<p>See the <a href="https://github.com/Risto-Stevcev/bs-effects">bs-effects</a> package for sync and async implementations of the "IO monad".</p>\n<h2>License</h2>\n<p>Licensed under the BSD-3-Clause license. See <code>LICENSE</code></p>\n',homepageUrl:"https://github.com/Risto-Stevcev/bs-abstract",repositoryUrl:"https://github.com/Risto-Stevcev/bs-abstract",npmUrl:null,issuesUrl:"https://github.com/Risto-Stevcev/bs-abstract/issues",slug:"packages/unpublished/Risto-Stevcev/bs-abstract"}},pathContext:{id:"unpublished/Risto-Stevcev/bs-abstract"}}}});
//# sourceMappingURL=path---packages-unpublished-risto-stevcev-bs-abstract-0bab1dc713ef4bd7e28a.js.map