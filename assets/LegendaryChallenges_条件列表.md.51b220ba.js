import{_ as s,o as a,c as n,S as l}from"./chunks/framework.18e6722a.js";const i=JSON.parse('{"title":"条件列表","description":"","frontmatter":{},"headers":[],"relativePath":"LegendaryChallenges/条件列表.md","filePath":"LegendaryChallenges/条件列表.md"}'),p={name:"LegendaryChallenges/条件列表.md"},o=l(`<h1 id="条件列表" tabindex="-1">条件列表 <a class="header-anchor" href="#条件列表" aria-label="Permalink to &quot;条件列表&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>用于任务目标中的 <strong>condition</strong></p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[y] 判断当前玩家位置的高度 示例： [y]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> ， [y]</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> ， [y]</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> ， [y]</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;">，[y]</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#A6ACCD;">[permission] 判断玩家是否拥有全息 </span><span style="color:#FFCB6B;">示例</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [permission]xxx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">[biome] 判断玩家所处的群系名称 </span><span style="color:#FFCB6B;">示例</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[biome]PLAINS 或 [biome]PLAINS</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">SNOWY_PLAINS</span></span>
<span class="line"><span style="color:#A6ACCD;">[sneak] 判断玩家是否处于潜行状态 示例 [sneak]</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> (如果玩家潜行则通过) [sneak]</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> (相反的)</span></span>
<span class="line"><span style="color:#A6ACCD;">[fly] 判断玩家是否处于飞行 示例 [fly]</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">/</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">[vehicle] 判断玩家是否处于载具内 [vehicle]</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">/</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">[world] 判断玩家当前世界 [world]世界名称</span></span>
<span class="line"><span style="color:#A6ACCD;">[chance] 通过该条件的几率 [chance]</span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;"> 为有50</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">概率通过</span></span>
<span class="line"><span style="color:#A6ACCD;">[stand] 判断玩家脚下的方块 [stand]方块id </span><span style="color:#FFCB6B;">例如</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [stand]GRASS_BLOCK 当玩家脚下是草方块则通过</span></span>
<span class="line"><span style="color:#A6ACCD;">[heal] 比较玩家当前生命值 （</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">） 例如 [heal]</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">10.0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> [heal]</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">[maxheal] 比较玩家当前最大生命值 （</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">） 例如 [maxheal]</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">10.0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> [maxheal]</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">[distance] 判断玩家是否距离当前世界长生点指定距离内 [distance]</span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">[level] 比较玩家当前原版等级 同[heal]使用方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[food] 比较玩家当前饥饿值 同[heal]使用方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[papi] </span><span style="color:#82AAFF;">比较PlaceholderAPI值</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">&gt;,&lt;,&gt;=,&lt;=,=</span><span style="color:#A6ACCD;">) [papi]</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">player_heal</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">10.0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> [papi]</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">player_has_xxx</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> yes</span></span>
<span class="line"><span style="color:#A6ACCD;">[hasitem] 判断玩家背包内是否有指定物品 原版物品格式[hasitem]ID</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">DATA</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">数量 自定义物品格式[hasitem]物品名称</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">数量</span></span>
<span class="line"><span style="color:#A6ACCD;">[onfire] 判断玩家是否被点燃 [onfire]</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">/</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">[run] 判断玩家是否在奔跑 [run]</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">/</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">[night] 判断玩家当前世界是否是黑夜 [night]</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">fals</span></span>
<span class="line"><span style="color:#A6ACCD;">[targetName] 目标实体名称（适用于部分有关于生物类目标） [targetName]</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">c僵尸王</span></span>
<span class="line"><span style="color:#A6ACCD;">[hand_item] 手持物品检测 示例： 1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">原版： [hand_item]DIAMOND_PIACKAXE 2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">自定义名称[hand_item]</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">c超级钻石稿</span></span>
<span class="line"><span style="color:#A6ACCD;">[offhand_item] 副手物品检测 使用方法同上</span></span></code></pre></div>`,3),e=[o];function t(c,C,r,D,A,y){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
