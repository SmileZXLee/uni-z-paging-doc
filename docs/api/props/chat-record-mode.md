### 聊天记录模式配置

| 参数                                                 | 说明                                                         | 类型    | 默认值 | 可选值 |
| :--------------------------------------------------- | ------------------------------------------------------------ | :------ | :----- | :----- |
| use-chat-record-mode                                 | 使用聊天记录模式，为保证良好的体验。<p style="color:red;">(由v2.7.0起，已完全解决在vue中加载更多闪动的问题，欢迎更新体验，代码差异请查阅[版本差异](/start/upgrade-guide.html#v2-7-0))</p> | Boolean | false  | true   |
| auto-hide-keyboard-when-chat <Badge text="2.3.4"/>   | 使用聊天记录模式时是否自动隐藏键盘(在用户触摸列表时候自动隐藏键盘) | Boolean | true   | false  |
| auto-adjust-position-when-chat <Badge text="2.7.4"/> | 使用聊天记录模式中键盘弹出时是否自动调整`slot="bottom"`高度  | Boolean | true   | false  |
| auto-to-bottom-when-chat <Badge text="2.7.4"/>       | 使用聊天记录模式中键盘弹出时是否自动滚动到底部               | Boolean | false  | true   |
| show-chat-loading-when-reload <Badge text="2.7.4"/>  | 使用聊天记录模式中`reload`时是否显示`chatLoading`            | Boolean | false  | true   |
