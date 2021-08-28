### nvue独有配置

| 参数                                       | 说明                                                         | 类型    | 默认值 | 可选值              |
| :----------------------------------------- | :----------------------------------------------------------- | :------ | :----- | :------------------ |
| nvue-list-is                               | nvue中修改列表类型，可选值有list、waterfall和scroller，默认为list<p style="color:red;">(为list和waterfall时仅可插入`<header>`和`<cell>`，为scroller时可插入任意view，但无法插入list独有的子view)</p> | String  | list   | waterfall、scroller |
| nvue-waterfall-config                      | waterfall配置，仅在nvue中且nvueListIs=waterfall时有效，如：{'column-gap': 20}，配置参数详情参见：[https://uniapp.dcloud.io/component/waterfall](https://uniapp.dcloud.io/component/waterfall) | Object  | -      | -                   |
| nvue-bounce                                | nvue 控制是否回弹效果，iOS不支持动态修改<p style="color:red;">(若禁用回弹效果，下拉刷新将失效)</p> | Boolean | true   | false               |
| nvue-fast-scroll <Badge text="1.9.4"/>     | nvue中通过代码滚动到顶部/底部时，是否加快动画效果(无滚动动画时无效) | Boolean | false  | true                |
| nvue-list-id <Badge text="2.0.4"/>                               | nvue中list的id                                               | String  | ""     | -                   |
| hide-nvue-bottom-tag <Badge text="2.0.4"/> | 是否隐藏nvue列表底部的tagView，此view用于标识滚动到底部位置，若隐藏则滚动到底部功能将失效，在nvue中实现吸顶+swiper功能时需将最外层z-paging的此属性设置为true | Boolean | false  | true                |