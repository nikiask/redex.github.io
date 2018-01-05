webpackJsonp([0xb980a9aced3d],{1045:function(t,e){t.exports={data:{package:{id:"bs-little-parser",score:.5798206614704392,name:"bs-little-parser",version:"0.3.4",description:"Little parser combinator for BuckleScript or Reason.",keywords:["bucklescript"],license:"MIT",updated:"2018-01-04T18:00:52.792Z",stars:2,type:"published",quality:.7021204126054833,popularity:.06067819663033788,maintenance:.9941347681947885,readme:'<h1>bs-little-parser</h1>\n<p>Little parser combinator for BuckleScript or Reason.</p>\n<h2>Usage</h2>\n<pre><code class="language-ml">open BsLittleParser.Parser\n\nlet input = BsLittleParser.Input.{text = "abcabc  abc"; index = 0; whitespace = " "}\n\nlet abc = stringParser "abc"\n\nlet () =\n  input\n  |> rep abc\n  |> Js.log\n</code></pre>\n<p>Type <code>Input.t</code> has a whitespace which specify a character sequence should be ignored.</p>\n<h2>Parsers</h2>\n<table>\n<thead>\n<tr>\n<th align="left">parser</th>\n<th align="left">description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">str s</td>\n<td align="left">expect string</td>\n</tr>\n<tr>\n<td align="left">chr c</td>\n<td align="left">expect char</td>\n</tr>\n<tr>\n<td align="left">regex r</td>\n<td align="left">expect regex</td>\n</tr>\n<tr>\n<td align="left">p \n<code>&#x3C;*></code>\n q</td>\n<td align="left">execute q only if p succeeds</td>\n</tr>\n<tr>\n<td align="left">p \n<code>&#x3C;|></code>\n q</td>\n<td align="left">execute q only if p fails</td>\n</tr>\n<tr>\n<td align="left">p \n<code>&#x3C;*</code>\n q</td>\n<td align="left">same with \n<code>&#x3C;*></code>\n but throw the result of q away</td>\n</tr>\n<tr>\n<td align="left">p \n<code>*></code>\n q</td>\n<td align="left">same with \n<code>&#x3C;*></code>\n but throw the result of p away</td>\n</tr>\n<tr>\n<td align="left">p \n<code>>></code>\n fnq</td>\n<td align="left">apply the result of p to fnq then execute the return parser</td>\n</tr>\n<tr>\n<td align="left">p \n<code>^^</code>\n fn</td>\n<td align="left">apply the result of p to fn</td>\n</tr>\n<tr>\n<td align="left">rep p</td>\n<td align="left">repeat p</td>\n</tr>\n<tr>\n<td align="left">rep1 p</td>\n<td align="left">repeat p at least once</td>\n</tr>\n<tr>\n<td align="left">opt p</td>\n<td align="left">execute p zero or once</td>\n</tr>\n<tr>\n<td align="left">andPred p</td>\n<td align="left">execute p without consuming the input</td>\n</tr>\n<tr>\n<td align="left">notPred p</td>\n<td align="left">succeeds only if p fails without consuming the input</td>\n</tr>\n</tbody>\n</table>\n<h2>License</h2>\n<p>MIT</p>\n',homepageUrl:"https://github.com/Henoc/bs-little-parser#readme",repositoryUrl:"https://github.com/Henoc/bs-little-parser",npmUrl:"https://www.npmjs.com/package/bs-little-parser",issuesUrl:"https://github.com/Henoc/bs-little-parser/issues",slug:"packages/bs-little-parser"}},pathContext:{id:"bs-little-parser"}}}});
//# sourceMappingURL=path---packages-bs-little-parser-7b546d35ca4f479b5e97.js.map