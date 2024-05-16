### 聊天记录模式模块
> 支持vue无闪动聊天记录模式&支持nvue cell复用&支持聊天模式与虚拟列表结合使用

::: warning 注意
※ 以下注意事项讨论的均为在vue中的情况。  
※ 在 `z-paging` `v2.7.0`及之后的版本使用新的聊天记录模式。  
※ 新的聊天记录模式使用`列表倒置方式`实现，支持vue无闪动聊天记录模式&支持聊天模式与虚拟列表结合使用，体验优于旧版页面滚动模式。  
※ 新的聊天记录模式在`安卓9`及以下系统和`iOS15`及以下系统中不支持，若要兼容旧系统，请使用`z-paging` `v2.6.9`或以下版本！！  
※ 旧版本`z-paging`下载请查阅[Release](https://github.com/SmileZXLee/uni-z-paging/releases)(npm安装可直接指定`z-paging`版本)
:::

### [Props](/api/props/chat-record-mode.html)
#### 属性配置：设置`是否启用聊天记录模式`、设置`聊天记录模式时是否自动隐藏键盘`、设置`使用聊天记录模式中键盘弹出时是否自动调整slot="bottom"高度`、设置`使用聊天记录模式中键盘弹出时是否自动滚动到底部`、设置`使用聊天记录模式中reload时是否显示chatLoading`
***
### [Slots](/api/slot/main.html#聊天记录模式slot)
#### 插槽：自定义`聊天记录模式时自定义顶部加载更多view`
***
### [Methods](/api/methods/main.html#聊天记录模式相关方法)
#### 方法：触发`滚动到顶部加载更多`、`添加聊天记录`
***
### [Events](/api/events/main.html#下拉刷新相关事件)
#### 事件：监听`聊天记录模式下，触摸列表隐藏了键盘`、`键盘高度改变`
***

### 预览
<br />
<img src="https://z-paging.zxlee.cn/public/img/z-paging-demo7.gif" />

***

### 示例
* 下载[示例项目](/start/example-download.html)查看`chat-history-demo.vue`