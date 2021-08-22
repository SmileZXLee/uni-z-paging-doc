### reload相关配置

|              参数              |                             说明                             |  类型   | 默认值 | 可选值 |
| :----------------------------: | :----------------------------------------------------------: | :-----: | :----: | :----: |
|              auto              | `z-paging` `mounted`后自动调用`reload`方法(`mounted`后自动调用接口)<br>旧属性`mounted-auto-call-reload`依然可用，在新的代码中建议使用简化写法：`auto` | Boolean |  true  | false  |
| auto-scroll-to-top-when-reload |                    reload时自动滚动到顶部                    | Boolean |  true  | false  |
|  auto-clean-list-when-reload   | reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的 | Boolean |  true  | false  |
|   show-refresher-when-reload   |             调用reload方法时自动显示下拉刷新view             | Boolean | false  |  true  |
| show-loading-more-when-reload  | 调用reload方法时自动显示加载更多view，且为加载中状态<p style="color:red;">(仅初始设置有效，不可动态修改)</p> | Boolean | false  |  true  |
