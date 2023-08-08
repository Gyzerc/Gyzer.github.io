# Limit大全

::: warning Limit 大全
用于插件所有配置文件内涉及 limit 节点
```js
[total_points]数量 —— 玩家总贡献点是否达到要求
[guild_level]等级 —— 公会等级要求
[guild_member]数量 —— 公会人数要求
[guild_treelevel]数量 —— 公会神树等级要求
[has_tree_water_today]浇水壶ID;数量 —— 检测玩家今日是否使用指定ID浇水水壶为神树浇水指定次数
[has_tree_water]浇水壶ID;数量 —— 检测玩家否使用指定ID浇水水壶为神树浇水指定次数
[placeholder]变量;判断符号;判断值 —— 检测PAPI变量
 判断符号可选： > | = | >= | <= 
 例子:
 1. [placeholder]%player_world%;=;world —— 当该变量返回值等于world则通过
 2. [placeholder]%player_money%;>=;500 —— 当该变量返回值大于大于500则通过
 3. [placeholder]%player_isonline%;=;yes —— 当玩家在线则通过 
 注意：当使用=时 判断值与返回值必须完全一致才能通过 
 比如%xxx_xx%返回值为 10.0 而你的判断值为 10 
 则不通过：[placeholder]%xxx_xx%;=;10 (不通过) 
 你需要: [placeholder]%xxx_xx%;=;10.0 (通过)
```
:::