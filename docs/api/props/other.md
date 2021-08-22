### 其他配置

|         参数         |                             说明                             |      类型      | 默认值 | 可选值 |
| :------------------: | :----------------------------------------------------------: | :------------: | :----: | :----: |
|       data-key       | 为保证数据一致，设置当前tab切换时的标识key，并在complete中传递相同key，若二者不一致，则complete将不会生效<p style="color:red;">(关于数据一致性，请查看demo中`consistency-demo.vue`文件)</p> | Number\|Object |   -    |   -    |
|  autowire-list-name  | 【极简写法】自动注入的list名，可自动修改父view(包含ref="paging")中对应name的list值<p style="color:red;">z-paging标签必须设置`ref="paging"`</p> |     String     |   ""   |   -    |
| autowire-query-name  | 【极简写法】自动注入的query名，可自动调用父view(包含ref="paging")中的query方法<p style="color:red;">z-paging标签必须设置`ref="paging"`</p> |     String     |   ""   |   -    |
|     auto-height      | <p style="color:red;">(建议使用fixed代替)</p>z-paging是否自动高度，若自动高度则会自动铺满屏幕，不需要设置父view为100%等操作。（注意：自动高度可能并不准确） |    Boolean     | false  |  true  |
| auto-height-addition | <p style="color:red;">(建议使用fixed代替)</p>z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，默认为px，若需要减少高度，请传负数。如"-10rpx"，"10.5px" | Number\|String |  0px   |   -    |
|   auto-full-height   |         使用页面滚动时，是否在不满屏时自动填充满屏幕         |    Boolean     |  true  | false  |
|        concat        |    自动拼接complete中传过来的数组(使用聊天记录模式时无效)    |    Boolean     |  true  | false  |
|  show-console-error  |                  是否将错误信息打印至控制台                  |    Boolean     |  true  | false  |
