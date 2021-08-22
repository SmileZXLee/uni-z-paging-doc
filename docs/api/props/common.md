### 常规配置

|          参数          |                             说明                             |      类型      | 默认值 | 可选值 |
| :--------------------: | :----------------------------------------------------------: | :------------: | :----: | :----: |
|    default-page-no     |                     自定义pageNo(第几页)                     | Number\|String |   1    |   -    |
|   default-page-size    | 自定义pageSize(每页显示多少条)<p style="color:red;">(必须和后端的pageSize一致，例如后端分页的pageSize为15，此属性必须改为15)</p> | Number\|String |   10   |   -    |
|         fixed          | z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认铺满屏幕，页面中的view请放在z-paging标签内，需要固定在顶部的view使用slot="top"包住。<p style="color:red;">(当使用内置scroll-view滚动时有效，nvue无效。若使用了fixed，请不要设置`height:100%`)</p> |    Boolean     |  true  | false  |
| safe-area-inset-bottom |                   是否开启底部安全区域适配                   |    Boolean     | false  |  true  |
|    use-page-scroll     | 使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略繁琐 |    Boolean     | false  |  true  |
|  default-theme-style   | loading(下拉刷新、上拉加载更多)的主题样式，支持black，white  |     String     | black  | white  |
|      paging-style      | 设置z-paging的style，部分平台可能无法直接修改组件的style，可使用此属性代替<p style="color:red;">(在使用fixed布局时，若要设置列表背景色，请设置page的背景色或使用:paging-style="{'background-color':'red'}"方式，因为此时z-paging的父view是没有高度的，给它们设置背景色无效)</p> |     Object     |   -    |   -    |
|         delay          |           调用complete后延迟处理的时间，单位为毫秒           | Number\|String |   0    |   -    |
|       list.sync        | <p style="color:red;">(建议使用v-model代替)</p>绑定最终的列表渲染变量(页面data中声明的值)，当列表数据改变时，所绑定的变量会跟着改变 |     Array      |   -    |   -    |
| refresher-status.sync  | 绑定下拉刷新状态改变的变量(页面data中声明的值)，当下拉刷新状态改变时，此变量会跟着改变 |     Number     |   -    |   -    |
|    chat-index.sync     | 绑定聊天记录模式下当前聊天记录第一条index的变量(页面data中声明的值)，当聊天记录第一条index改变时，此变量会跟着改变 |     Number     |   -    |   -    |
