### reload相关配置

| 参数                                                | 说明                                                         | 类型    | 默认值 | 可选值 |
| :-------------------------------------------------- | :----------------------------------------------------------- | ------- | :----- | :----- |
| auto                                                | `z-paging` `mounted`后自动调用`reload`方法(`mounted`后自动调用接口)<p style="color:red;">(旧属性`mounted-auto-call-reload`由`v2.4.3`起废弃，在新的代码中请使用简化写法：`auto`)</p> | Boolean | true   | false  |
| auto-scroll-to-top-when-reload                      | reload时自动滚动到顶部                                       | Boolean | true   | false  |
| auto-clean-list-when-reload                         | reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的 | Boolean | true   | false  |
| show-refresher-when-reload <Badge text="1.7.2"/>    | 列表刷新时自动显示下拉刷新view                               | Boolean | false  | true   |
| show-loading-more-when-reload <Badge text="1.7.2"/> | 列表刷新时自动显示加载更多view，且为加载中状态<p style="color:red;">(仅初始设置有效，不可动态修改)</p> | Boolean | false  | true   |
| created-reload <Badge text="2.2.3"/>                | 组件`created`时立即触发`reload`(可解决一些情况下先看到页面再看到`loading`的问题)，`auto`为true时有效。为否时将在`mounted+nextTick`后触发`reload` | Boolean | false  | true   |