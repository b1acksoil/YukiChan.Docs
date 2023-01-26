import{_ as a,c as s,o as n,a as e}from"./app.fbe2a338.js";const u=JSON.parse('{"title":"指令简介","description":"","frontmatter":{},"headers":[],"relativePath":"v2/intro.md","lastUpdated":1674770563000}'),o={name:"v2/intro.md"},p=e(`<h1 id="指令简介" tabindex="-1">指令简介 <a class="header-anchor" href="#指令简介" aria-hidden="true">#</a></h1><p>作为运行在聊天平台的机器人，指令操作是最直观、最简便的操作方式。接下来我会用一些示例，来帮助你快速上手指令操作。</p><p>一些基本概念：</p><ul><li><strong>指令</strong>。指令是组织功能的基本单位，例如查询 B30、查定数等都是一条条指令。</li><li><strong>选项</strong>。选项可以调整指令执行过程，或为其添加一些功能。例如，我们可以为 <code>/a b30</code> 加上 <code>--nya</code> 选项，使输出的 B30 图片带上猫猫曲绘。</li><li><strong>参数</strong>。参数是提供给指令的操作数，来控制指令的目标。例如，<code>/a info 1f1e33</code>，<code>1f1e33</code> 就是提供给指令 <code>/a info</code> 的参数。</li></ul><p>下面以查询 B30 的流程为例，来讲解一下指令的基本使用步骤：</p><p>首先你需要绑定自己的 Arcaea 账号。在有暮雪酱的群（或频道）里，输入以下消息并发送：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a bind 你的好友码或名字</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>暮雪酱会在确认用户存在后，将你的好友码保存至数据库。然后发送以下消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>等待一会，操作完成后，暮雪酱会把生成的图查图片发送出来。这样就完成了最基本的指令使用。很简单吧~</p><p>可以看到，暮雪酱默认使用的曲绘是原版曲绘，也就是游戏中的曲绘。如果我们想要使用猫猫曲绘呢？只需要加上 <code>-n</code> 选项（<code>--nya</code> 也可以）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">/a b30 -n</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>这样暮雪就会发送猫猫曲绘了！</p>`,13),c=[p];function t(l,d,r,i,b,_){return n(),s("div",null,c)}const g=a(o,[["render",t]]);export{u as __pageData,g as default};
