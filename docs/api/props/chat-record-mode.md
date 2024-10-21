### 聊天记录模式配置

| 参数                                                       | 说明                                                         | 类型    | 默认值 | 可选值 |
| :--------------------------------------------------------- | ------------------------------------------------------------ | :------ | :----- | :----- |
| use-chat-record-mode                                       | 使用聊天记录模式，为保证良好的体验。<p style="color:red;">(由v2.7.0起，已完全解决在vue中加载更多闪动的问题，欢迎更新体验，代码差异请查阅[版本差异&更新记录](/start/upgrade-guide.html#v2-7-0))</p> | Boolean | false  | true   |
| auto-hide-keyboard-when-chat <Badge text="2.3.4"/>         | 使用聊天记录模式时是否自动隐藏键盘(在用户触摸列表时候自动隐藏键盘) | Boolean | true   | false  |
| auto-adjust-position-when-chat <Badge text="2.7.4"/>       | 使用聊天记录模式中键盘弹出时是否自动调整`slot="bottom"`高度  | Boolean | true   | false  |
| auto-to-bottom-when-chat <Badge text="2.7.4"/>             | 使用聊天记录模式中键盘弹出时是否自动滚动到底部               | Boolean | false  | true   |
| chat-adjust-position-offset <Badge text="2.7.6"/>          | 使用聊天记录模式中键盘弹出时占位高度偏移距离。默认0rpx。单位px | String  | 0px    | -      |
| show-chat-loading-when-reload <Badge text="2.7.4"/>        | 使用聊天记录模式中`reload`时是否显示`chatLoading`            | Boolean | false  | true   |
| bottom-bg-color <Badge text="2.7.4"/>                      | `bottom`的背景色，默认透明，传字符串，如"#ffffff"            | String  | -      | -      |
| chat-loading-more-default-as-loading <Badge text="2.7.5"/> | 在聊天记录模式中滑动到顶部状态为默认状态时，是否以加载中的状态展示 | Boolean | true   | false  |