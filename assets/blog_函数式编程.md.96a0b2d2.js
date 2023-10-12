import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.4313453f.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/函数式编程.md","filePath":"blog/函数式编程.md","lastUpdated":1697093828000}'),p={name:"blog/函数式编程.md"},o=l(`<h3 id="函数式编程的特点" tabindex="-1">函数式编程的特点 <a class="header-anchor" href="#函数式编程的特点" aria-label="Permalink to &quot;函数式编程的特点&quot;">​</a></h3><ol><li>函数是一等公民（意味着函数和其他数据类型一样，可以赋值给其他变量，也能作为参数，传给另一个函数，或者作为函数的返回值）</li><li>声明式编程（声明我需要做什么，不关心怎么实现）</li><li>惰性执行（函数只在需要的时候执行）</li><li>没有副作用</li></ol><p>不随意操作外部变量。比如</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;">// 改变了list的属性，有副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">list.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  item.type </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  item.age</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 没有副作用的应该这么做</span></span>
<span class="line"><span style="color:#E1E4E8;">list.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">({</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">item, type:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, age:item.age </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;">// 改变了list的属性，有副作用</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  item.type </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  item.age</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 没有副作用的应该这么做</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">({</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">item, type:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, age:item.age </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}))</span></span></code></pre></div><ol start="5"><li>纯函数</li></ol><p>没有副作用（数据不变）：不修改全局变量，不修改入参 不依赖外部状态（无状态）：函数的运行结果不依赖外部状态，this之类的</p><h3 id="函数柯里化" tabindex="-1">函数柯里化 <a class="header-anchor" href="#函数柯里化" aria-label="Permalink to &quot;函数柯里化&quot;">​</a></h3><p>所谓的函数柯里化就是把多个入参的函数，拆成单个入参</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(x,y,z) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(x)(y)(z)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(x,y,z) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(x)(y)(z)</span></span></code></pre></div>`,9),e=[o];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
