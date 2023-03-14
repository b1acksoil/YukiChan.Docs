import{_ as t,c as s,o as a,Q as n}from"./chunks/framework.e7dbb61d.js";const b=JSON.parse('{"title":"BaiduTranslate - 百度翻译","description":"","frontmatter":{},"headers":[],"relativePath":"v1/trans.md","lastUpdated":1678805591000}'),e={name:"v1/trans.md"},r=n(`<div class="danger custom-block"><p class="custom-block-title">本页面已归档！</p><p>本页面为 v1 版本的旧文档，已经过时并停止更新。你可以前往<a href="./../v3/">暮雪酱 v3 文档</a>查看当前最新版本。</p></div><h1 id="baidutranslate-百度翻译" tabindex="-1">BaiduTranslate - 百度翻译 <a class="header-anchor" href="#baidutranslate-百度翻译" aria-label="Permalink to &quot;BaiduTranslate - 百度翻译&quot;">​</a></h1><h2 id="指令帮助" tabindex="-1">指令帮助 <a class="header-anchor" href="#指令帮助" aria-label="Permalink to &quot;指令帮助&quot;">​</a></h2><h3 id="trans-执行百度翻译" tabindex="-1">#trans - 执行百度翻译 <a class="header-anchor" href="#trans-执行百度翻译" aria-label="Permalink to &quot;#trans - 执行百度翻译&quot;">​</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#trans [源语言:目标语言] &lt;文本&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#trans [源语言:目标语言] &lt;文本&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><p><strong>简写形式</strong></p><p><code>翻译</code></p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- 将 pure 翻译成中文（源语言将自动检测）</span></span>
<span class="line"><span style="color:#e1e4e8;">#trans pure</span></span>
<span class="line"><span style="color:#e1e4e8;">- 等同于</span></span>
<span class="line"><span style="color:#e1e4e8;">#trans auto:zh pure</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- 将 rabbit 由英文翻译成日文</span></span>
<span class="line"><span style="color:#e1e4e8;">#trans en:jp rabbit</span></span>
<span class="line"><span style="color:#e1e4e8;">- 等同于</span></span>
<span class="line"><span style="color:#e1e4e8;">#trans 英语:日语 rabbit</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- 使用简写形式</span></span>
<span class="line"><span style="color:#e1e4e8;">翻译 world ender</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- 将 pure 翻译成中文（源语言将自动检测）</span></span>
<span class="line"><span style="color:#24292e;">#trans pure</span></span>
<span class="line"><span style="color:#24292e;">- 等同于</span></span>
<span class="line"><span style="color:#24292e;">#trans auto:zh pure</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- 将 rabbit 由英文翻译成日文</span></span>
<span class="line"><span style="color:#24292e;">#trans en:jp rabbit</span></span>
<span class="line"><span style="color:#24292e;">- 等同于</span></span>
<span class="line"><span style="color:#24292e;">#trans 英语:日语 rabbit</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- 使用简写形式</span></span>
<span class="line"><span style="color:#24292e;">翻译 world ender</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><p><strong>语言列表</strong></p><p>代码和中文名都可以使用</p><table><thead><tr><th>语言代码</th><th>语言中文名</th></tr></thead><tbody><tr><td>auto</td><td>自动, 自动检测</td></tr><tr><td>zh</td><td>中文, 简中</td></tr><tr><td>en</td><td>英语, 英文</td></tr><tr><td>yue</td><td>粤语</td></tr><tr><td>wyw</td><td>文言文</td></tr><tr><td>jp</td><td>日语, 日文</td></tr><tr><td>kor</td><td>韩语, 韩文</td></tr><tr><td>fra</td><td>法语, 法文</td></tr><tr><td>spa</td><td>西班牙语</td></tr><tr><td>th</td><td>泰语</td></tr><tr><td>ara</td><td>阿拉伯语</td></tr><tr><td>ru</td><td>俄语, 俄文</td></tr><tr><td>pt</td><td>葡萄牙语</td></tr><tr><td>de</td><td>德语, 德文</td></tr><tr><td>it</td><td>意大利语</td></tr><tr><td>el</td><td>希腊语</td></tr><tr><td>nl</td><td>荷兰语</td></tr><tr><td>pl</td><td>波兰语</td></tr><tr><td>bul</td><td>保加利亚语</td></tr><tr><td>est</td><td>爱沙尼亚语</td></tr><tr><td>dan</td><td>丹麦语</td></tr><tr><td>fin</td><td>芬兰语</td></tr><tr><td>cs</td><td>捷克语</td></tr><tr><td>rom</td><td>罗马尼亚语</td></tr><tr><td>slo</td><td>斯洛文尼亚语</td></tr><tr><td>swe</td><td>瑞典语</td></tr><tr><td>hu</td><td>匈牙利语</td></tr><tr><td>cht</td><td>繁体中文, 繁中</td></tr><tr><td>vie</td><td>越南语</td></tr></tbody></table>`,13),l=[r];function d(p,o,c,i,h,u){return a(),s("div",null,l)}const _=t(e,[["render",d]]);export{b as __pageData,_ as default};
