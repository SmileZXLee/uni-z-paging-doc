### 本地分页配置

::: tip 说明
在请求结束回调中设置：`this.$refs.paging.setLocalPaging(服务器返回的数组)`即可。(就是将`this.$refs.paging.comptele(xxx)`替换为`this.$refs.paging.setLocalPaging(xxx)`，具体参见[本地分页相关方法](/api/methods/main.html#本地分页相关方法))
:::


| 参数                      | 说明                                       | 类型           | 默认值 | 可选值 |
| :------------------------ | :----------------------------------------- | :------------- | :----- | :----- |
| local-paging-loading-time | 本地分页时上拉加载更多延迟时间，单位为毫秒 | Number\|String | 200    | -      |