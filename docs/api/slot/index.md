## Slot
::: danger 注意
使用slot插入的view必须是z-paging的子view(此view的上一级必须是z-paging)
:::

| 名称               | 说明                                                         |
| :----------------- | ------------------------------------------------------------ |
| empty              | 自定义空数据占位view                                         |
| loading            | 自定义页面reload时的加载view，注意：这个slot默认仅会在第一次加载时显示，若需要每次reload时都显示，需要将`auto-hide-loading-after-first-loaded`设置为false |
| refresher          | 自定义下拉刷新view，设置后则不使用uni自带的下拉刷新view和z-paging自定义的下拉刷新view。此view的style必须设置为`height:100%`<p style="color:red;">(在非nvue中，自定义下拉刷新view的高度受refresher-threshold控制，因此如果它的高度不为默认的80rpx，则需要设置refresher-threshold="自定义下拉刷新view的高度")</p> |
| top                | 可以将自定义导航栏、tab-view等需要固定的<p style="color:red;">(不需要跟着滚动的)</p>元素放入slot="top"的view中。<br/>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置slot="top"。需要固定在顶部的view请勿设置`position: fixed;`。 |
| bottom             | 可以将需要固定在底部的<p style="color:red;">(不需要跟着滚动的)</p>元素放入slot="bottom"的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置slot="bottom"。需要固定在底部的view请勿设置`position: fixed;`。 |
| chatLoading        | 使用聊天记录模式时自定义顶部加载更多view，`use-chat-record-mode`为true时有效 |
| loadingMoreDefault | 自定义滑动到底部"默认"状态的view                             |
| loadingMoreLoading | 自定义滑动到底部"加载中"状态的view                           |
| loadingMoreNoMore  | 自定义滑动到底部"没有更多数据"状态的view                     |
| loadingMoreFail    | 自定义滑动到底部"加载失败"状态的view                         |
| backToTop          | 自定义点击返回顶部view<p style="color:red;">(此view受“【返回顶部按钮】配置”控制，且其父view默认宽高为76rpx)</p><br/> |
