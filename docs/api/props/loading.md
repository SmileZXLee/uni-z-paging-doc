### 全屏Loading配置

| 参数                                     | 说明                             | 类型    | 默认值 | 可选值 |
| :--------------------------------------- | :------------------------------- | :------ | :----- | :----- |
| auto-hide-loading-after-first-loaded     | 第一次加载后自动隐藏loading slot | Boolean | true   | false  |
| loading-full-fixed <Badge text="2.0.9"/> | loading slot的父view是否铺满屏幕并固定<p style="color:red;">(设置为true后，插入的loading的父view会铺满全屏，请注意插入的loading需要设置height:100%【nvue为flex:1】才可铺满全屏，loading内的view从导航栏顶部开始，会被导航栏盖住，请妥善处理)</p>   | Boolean | false  | true   |