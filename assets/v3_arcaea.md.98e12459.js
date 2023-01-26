import{_ as a,c as s,o as e,a as l}from"./app.fbe2a338.js";const g=JSON.parse('{"title":"Arcaea - Arcaea 相关功能","description":"","frontmatter":{},"headers":[{"level":2,"title":"指令帮助","slug":"指令帮助","link":"#指令帮助","children":[{"level":3,"title":"/a bind - 绑定 Arcaea 账号","slug":"a-bind-绑定-arcaea-账号","link":"#a-bind-绑定-arcaea-账号","children":[]},{"level":3,"title":"/a b30 - 查询 Best30 成绩","slug":"a-b30-查询-best30-成绩","link":"#a-b30-查询-best30-成绩","children":[]},{"level":3,"title":"/a best - 查询单曲最高分","slug":"a-best-查询单曲最高分","link":"#a-best-查询单曲最高分","children":[]},{"level":3,"title":"/a recent - 查询最近一次成绩","slug":"a-recent-查询最近一次成绩","link":"#a-recent-查询最近一次成绩","children":[]},{"level":3,"title":"/a info - 查询曲目信息","slug":"a-info-查询曲目信息","link":"#a-info-查询曲目信息","children":[]},{"level":3,"title":"/a alias - 查询曲目别名","slug":"a-alias-查询曲目别名","link":"#a-alias-查询曲目别名","children":[]},{"level":3,"title":"/a user - 查询用户潜力值曲线","slug":"a-user-查询用户潜力值曲线","link":"#a-user-查询用户潜力值曲线","children":[]},{"level":3,"title":"/a preview - 查询谱面预览","slug":"a-preview-查询谱面预览","link":"#a-preview-查询谱面预览","children":[]},{"level":3,"title":"/a guess - 猜曲绘小游戏","slug":"a-guess-猜曲绘小游戏","link":"#a-guess-猜曲绘小游戏","children":[]},{"level":3,"title":"/a random - 随机曲目","slug":"a-random-随机曲目","link":"#a-random-随机曲目","children":[]},{"level":3,"title":"/a ptt - 计算单曲潜力值","slug":"a-ptt-计算单曲潜力值","link":"#a-ptt-计算单曲潜力值","children":[]},{"level":3,"title":"/a set - 设置全局偏好","slug":"a-set-设置全局偏好","link":"#a-set-设置全局偏好","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"potential is below the threshold of querying best30 (7.0)","slug":"potential-is-below-the-threshold-of-querying-best30-7-0","link":"#potential-is-below-the-threshold-of-querying-best30-7-0","children":[]}]}],"relativePath":"v3/arcaea.md","lastUpdated":1674770563000}'),n={name:"v3/arcaea.md"},t=l(`<h1 id="arcaea-arcaea-相关功能" tabindex="-1">Arcaea - Arcaea 相关功能 <a class="header-anchor" href="#arcaea-arcaea-相关功能" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#指令帮助">指令帮助</a><ul><li><a href="#a-bind-绑定-arcaea-账号">/a bind - 绑定 Arcaea 账号</a></li><li><a href="#a-b30-查询-best30-成绩">/a b30 - 查询 Best30 成绩</a></li><li><a href="#a-best-查询单曲最高分">/a best - 查询单曲最高分</a></li><li><a href="#a-recent-查询最近一次成绩">/a recent - 查询最近一次成绩</a></li><li><a href="#a-info-查询曲目信息">/a info - 查询曲目信息</a></li><li><a href="#a-alias-查询曲目别名">/a alias - 查询曲目别名</a></li><li><a href="#a-user-查询用户潜力值曲线">/a user - 查询用户潜力值曲线</a></li><li><a href="#a-preview-查询谱面预览">/a preview - 查询谱面预览</a></li><li><a href="#a-guess-猜曲绘小游戏">/a guess - 猜曲绘小游戏</a></li><li><a href="#a-random-随机曲目">/a random - 随机曲目</a></li><li><a href="#a-ptt-计算单曲潜力值">/a ptt - 计算单曲潜力值</a></li><li><a href="#a-set-设置全局偏好">/a set - 设置全局偏好</a></li></ul></li><li><a href="#常见问题">常见问题</a><ul><li><a href="#potential-is-below-the-threshold-of-querying-best30-7-0">potential is below the threshold of querying best30 (7.0)</a></li></ul></li></ul></nav><h2 id="指令帮助" tabindex="-1">指令帮助 <a class="header-anchor" href="#指令帮助" aria-hidden="true">#</a></h2><p>指令格式中，中括号 <code>[]</code> 中的内容为<strong>可选参数</strong>，尖括号 <code>&lt;&gt;</code> 中的内容为<strong>必选参数</strong>。</p><div class="warning custom-block"><p class="custom-block-title">输入指令的时候不用输入 <code>&lt; &gt; [ ]</code> ！</p><p>例如只用 <code>/a bind 114514191</code>，而不是 <code>/a bind &lt;114514191&gt;</code>。</p></div><div class="tip custom-block"><p class="custom-block-title">完整的指令格式太复杂？</p><p>也可以跳过它，直接看下面的使用示例。</p></div><h3 id="a-bind-绑定-arcaea-账号" tabindex="-1">/a bind - 绑定 Arcaea 账号 <a class="header-anchor" href="#a-bind-绑定-arcaea-账号" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a bind [选项] &lt;名称/好友代码&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>选项说明</strong></p><p><code>-u, --uncheck</code>: 不检查用户的真实性。服务器不可用时可以加这个选项强制绑定用户，但无法避免输入错误等问题。</p><details class="details custom-block"><summary>使用示例</summary><ul><li>通过用户名绑定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a bind ToasterKoishi</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>通过好友码绑定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a bind 114514191</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-b30-查询-best30-成绩" tabindex="-1">/a b30 - 查询 Best30 成绩 <a class="header-anchor" href="#a-b30-查询-best30-成绩" aria-hidden="true">#</a></h3><p><a href="./gallery.html#a-b30">预览</a></p><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30 [选项] [用户名/好友代码]</span></span>
<span class="line"><span style="color:#abb2bf;">查b30 [选项] [用户名/好友代码]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>选项说明</strong></p><p><code>-d, --dark</code>: 生成暗色 B30 图片。<br><code>-n, --nya</code>: 使用猫猫曲绘。</p><details class="details custom-block"><summary>使用示例</summary><ul><li>查询自己的 Best30 成绩（需先绑定）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询玩家 Nagiha0798 的 Best30 成绩</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30 Nagiha0798</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询好友代码为 191981011 的 Best30 成绩</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30 191981011</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>使用暗色模式</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30 -d</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>使用猫猫曲绘</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30 -n</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-best-查询单曲最高分" tabindex="-1">/a best - 查询单曲最高分 <a class="header-anchor" href="#a-best-查询单曲最高分" aria-hidden="true">#</a></h3><p><a href="./gallery.html#a-best-a-recent">预览</a></p><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a best [选项] &lt;曲名&gt; [难度，默认Future]</span></span>
<span class="line"><span style="color:#abb2bf;">查最高 [选项] &lt;曲名&gt; [难度，默认Future]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>选项说明</strong></p><p><code>-d, --dark</code>: 生成暗色 B30 图片。<br><code>-n, --nya</code>: 使用猫猫曲绘。<br><code>-u, --user &lt;用户名/好友代码&gt;</code>: 指定查询的用户。</p><details class="details custom-block"><summary>使用示例</summary><ul><li>查询自己 Pentiment FTR 最高分（需先绑定）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a best pentiment</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询自己 Arcana Eden BYD 最高分（需先绑定）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a best arcaeaeden byd</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询用户 ToasterKoishi 的 Testify (Beyond) 最高分，并同时使用猫猫曲绘、暗色模式</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a best -u ToasterKoishi -nd testify byd</span></span>
<span class="line"><span style="color:#abb2bf;">/a best --user ToasterKoishi --nya --dark testify byd</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><s>真的有人用下面那种写法吗x</s></p></details><h3 id="a-recent-查询最近一次成绩" tabindex="-1">/a recent - 查询最近一次成绩 <a class="header-anchor" href="#a-recent-查询最近一次成绩" aria-hidden="true">#</a></h3><p><a href="./gallery.html#a-best-a-recent">预览</a></p><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a recent</span></span>
<span class="line"><span style="color:#abb2bf;">/a</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>选项说明</strong></p><p><code>-u, --user &lt;名称/好友代码&gt;</code>: 指定查询的用户。<br><code>-d, --dark</code>: 生成暗色 B30 图片。<br><code>-n, --nya</code>: 使用猫猫曲绘。</p><details class="details custom-block"><summary>使用示例</summary><ul><li>查询自己的最近一条成绩（需先绑定）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询玩家 Nagiha0798 的最近一条成绩</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a recent -u Nagiha0798</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-info-查询曲目信息" tabindex="-1">/a info - 查询曲目信息 <a class="header-anchor" href="#a-info-查询曲目信息" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a info &lt;曲目名称&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">查定数 &lt;曲目名称&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>选项说明</strong></p><p><code>-n, --nya</code>: 使用猫猫曲绘。</p><details class="details custom-block"><summary>使用示例</summary><ul><li>查询 Sheriruth 的信息</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a info sheriruth</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询 Sheriruth 的信息，使用简写和曲目别名</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">查定数 对立削苹果</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询 Grievous Lady 的信息，并使用猫猫曲绘</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">查定数 -n gl</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-alias-查询曲目别名" tabindex="-1">/a alias - 查询曲目别名 <a class="header-anchor" href="#a-alias-查询曲目别名" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a alias &lt;曲目名称&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">查别名 &lt;曲目名称&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><details class="details custom-block"><summary>使用示例</summary><ul><li>查询 Sheriruth 的别名</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a alias sheriruth</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询 Sheriruth 的别名，使用简写和曲目别名</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">查别名 对立削苹果</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-user-查询用户潜力值曲线" tabindex="-1">/a user - 查询用户潜力值曲线 <a class="header-anchor" href="#a-user-查询用户潜力值曲线" aria-hidden="true">#</a></h3><p><a href="./gallery.html#a-user">预览</a></p><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a user [用户名或好友码]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>选项说明</strong></p><p><code>-d, --dark</code>: 生成暗色图片。<br><code>-n, --nya</code>: 使用猫猫曲绘。<br><code>-y, --year</code>: 查询一年 (365d) 内的记录。<br><code>-s, --season</code>: 查询一个季度 (90d) 内的记录。<br><code>-m, --month</code>: 查询一个月 (30d) 内的记录。<br><code>-w, --week</code>: 查询一个星期 (7d) 内的记录。</p><details class="details custom-block"><summary>使用示例</summary><ul><li>查询自己的曲线（需先绑定）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a user</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询用户 Nagiha0798 的曲线</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a user Nagiha0798</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-preview-查询谱面预览" tabindex="-1">/a preview - 查询谱面预览 <a class="header-anchor" href="#a-preview-查询谱面预览" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a preview &lt;曲名&gt; [难度，默认Future]</span></span>
<span class="line"><span style="color:#abb2bf;">查预览 &lt;曲名&gt; [难度，默认Future]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><details class="details custom-block"><summary>使用示例</summary><ul><li>查询 Ringed Genesis (Future) 的谱面预览</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a preview rg</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>查询 Testify (Beyond) 的铺面预览</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a preview testify byd</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-guess-猜曲绘小游戏" tabindex="-1">/a guess - 猜曲绘小游戏 <a class="header-anchor" href="#a-guess-猜曲绘小游戏" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a guess [模式关键字|回答] [模式关键字]</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘 [模式关键字|回答] [模式关键字]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><em>看格式可能不太好看懂 推荐直接看下面示例</em></p><details class="details custom-block"><summary>使用示例</summary><ul><li>开始猜曲绘游戏，模式为默认的 Normal (正常模式)</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">猜曲绘</span></span>
<span class="line"><span style="color:#abb2bf;">/a guess</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>开始猜曲绘游戏，模式为 Hard (困难模式)；更多模式可见下表。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">猜曲绘 hard</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘 h</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>（若正在游戏中）提交猜测答案，如 testify</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">猜曲绘 testify</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><p><strong>模式列表</strong></p><table><thead><tr><th style="text-align:center;">模式名称</th><th style="text-align:center;">模式关键字</th><th style="text-align:center;">模式信息</th></tr></thead><tbody><tr><td style="text-align:center;">简单</td><td style="text-align:center;"><code>e</code> 或 <code>easy</code></td><td style="text-align:center;">100x100 大小</td></tr><tr><td style="text-align:center;">正常</td><td style="text-align:center;"><code>n</code> 或 <code>normal</code></td><td style="text-align:center;">64x64 大小</td></tr><tr><td style="text-align:center;">困难</td><td style="text-align:center;"><code>h</code> 或 <code>hard</code></td><td style="text-align:center;">40x40 大小</td></tr><tr><td style="text-align:center;">灰度</td><td style="text-align:center;"><code>g</code> 或 <code>gray</code> 或 <code>grayscale</code></td><td style="text-align:center;">100x100 大小，且曲绘为灰度图（黑白）</td></tr><tr><td style="text-align:center;">反色</td><td style="text-align:center;"><code>i</code> 或 <code>invert</code></td><td style="text-align:center;">100x100 大小，且曲绘反色</td></tr></tbody></table><h3 id="a-random-随机曲目" tabindex="-1">/a random - 随机曲目 <a class="header-anchor" href="#a-random-随机曲目" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a random [起始难度] [最高难度]</span></span>
<span class="line"><span style="color:#abb2bf;">随机曲目</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><details class="details custom-block"><summary>使用示例</summary><ul><li>随机 9 级曲目</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a random 9</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>随机曲目，范围为 9 ~ 10+，使用简写</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">随机曲目 9 10+</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>全曲随机（Future 难度）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">随机曲目</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><p><strong>备注</strong></p><p>若输入了起始难度但没有输入最高难度，则会在起始难度中随机抽取。</p><h3 id="a-ptt-计算单曲潜力值" tabindex="-1">/a ptt - 计算单曲潜力值 <a class="header-anchor" href="#a-ptt-计算单曲潜力值" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a ptt &lt;曲名&gt; &lt;得分&gt; [难度，默认FTR]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><details class="details custom-block"><summary>使用示例</summary><ul><li>计算得分 9780000 时，Ringed Genesis [Future] 的单曲潜力值</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a ptt rg 9780000</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>计算得分 9900000 时，World Ender [Beyond] 的单曲潜力值</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a ptt world ender 9900000 byd</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h3 id="a-set-设置全局偏好" tabindex="-1">/a set - 设置全局偏好 <a class="header-anchor" href="#a-set-设置全局偏好" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a set &lt;偏好名称[=值][;偏好名称[=值][;...]]&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>可用设置</strong></p><table><thead><tr><th style="text-align:left;">偏好名称</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nya</code></td><td style="text-align:center;">开关</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>dark</code></td><td style="text-align:center;">开关</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>single_dynamic_bg</code></td><td style="text-align:center;">开关</td><td style="text-align:center;"><code>true</code></td></tr></tbody></table><details class="details custom-block"><summary>使用示例</summary><ul><li>将所有展示曲绘的功能预先设置为猫猫曲绘。这样单独使用 <code>/a b30</code> 等展示的也是猫猫曲绘了。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a set nya</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>将所有支持暗色模式的功能预先设置为暗色。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a set dark</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>关闭某一项开关类型的偏好（<code>true</code> 代表开启，<code>false</code> 代表关闭）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a set dark=false</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>批量设置</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a set nya=false;dark</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a></h2><h3 id="potential-is-below-the-threshold-of-querying-best30-7-0" tabindex="-1">potential is below the threshold of querying best30 (7.0) <a class="header-anchor" href="#potential-is-below-the-threshold-of-querying-best30-7-0" aria-hidden="true">#</a></h3><p>你的 ptt（潜力值）没有到达 7.0 及以上，还不能使用 AUA 查分哦~ 努力提升吧</p>`,80),o=[t];function p(c,i,r,d,b,u){return e(),s("div",null,o)}const h=a(n,[["render",p]]);export{g as __pageData,h as default};
