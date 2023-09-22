### 虚拟列表&内置列表模块 <Badge text="2.2.5"/>
> 轻松渲染万级列表数据。

::: tip 为什么需要虚拟列表？

* <div style="font-size:14px;">在一般情况下，无论是使用scroll-view滚动还是页面滚动，即使进行了分页，当列表本身长度很长时依然会存在严重的性能问题。随着渲染的dom越来越多，页面占用的内存会持续升高，从而造成页面卡顿、白屏等问题。</div>

* <div style="font-size:14px;">虚拟列表适合长列表渲染，当需要渲染一万条数据时，实际上不需要渲染一万个cell，只需要渲染屏幕可视范围内的cell即可，超出屏幕的不应该渲染，然后随着列表滚动不断切换需要显示或销毁的cell。这可以保证无论有多少数据，页面渲染的dom都不会无限增加，它将保持在一个较低的水平，从而保持了列表的良好性能。</div>

:::

::: warning 注意
①由于超出屏幕的cell可能被销毁并重新创建，因此cell内的switch等带状态的控件同样将被销毁和重新创建，因此请确保是通过for循环item绑定它们的状态的，否则其状态将丢失。  
②cell高度模式为dynamic时，z-paging会在cell渲染时获取并缓存对应cell的高度，因此如果cell的高度是异步增高的(也就是在cell初次渲染后增高，例如评论列表，在cell渲染后手动插入子评论，或是`<image />`标签定宽，高度根据图片实际大小撑开的)，其高度需要确定已更新后调用`this.$refs.paging.didUpdateVirtualListCell(index)`进行更新，删除列表cell亦然，否则将导致列表跳动。具体方法参见[虚拟列表相关方法](/api/methods/main.html#虚拟列表相关方法)。  
③`use-virtual-list`与`use-inner-list`在微信小程序中部分较高版本调试库会报`More than one slot named "cell" are found...`的警告并导致开发者工具卡顿，将基础库版本调到`2.18.0`以下即可。因线上没有控制台打印，因此不会影响线上版本。  
④ `use-virtual-list`与`use-inner-list`在微信小程序中若在slot插入的cell内部引用了页面中的data、computed、methods等，将导致cell只能渲染一行，需等待官方修复，详见：[点击查看详情](https://ask.dcloud.net.cn/question/147333)。(替代解决方案：在调用complete前处理列表数据，此时可以调用页面中的data、computed、methods等，在计算完毕后给列表中的item新增一个属性并赋值，在cell中直接获取这个值即可)  
⑤ `use-virtual-list`与`use-inner-list`在微信小程序中若在slot插入的cell内部通过switch等修改item内部变量，内部变量修改无效，需等待官方修复，详见：[点击查看详情](https://ask.dcloud.net.cn/question/147494)   
⑥在使用vue3且同时运行在微信小程序上时，暂不支持`use-inner-list`与`use-virtual-list(非兼容模式)`。  
⑦上方 ③、④、⑤、⑥ 四个问题可通过使用`兼容模式`解决，在微信小程序中推荐使用兼容模式的写法！  
⑧在微信小程序中使用虚拟列表时，如果不同的cell中的image不同，会存在image闪动的问题。目前原因不明，可通过给view设置`background-image`来代替`<image />`以解决此问题。  
⑨在微信小程序模拟器中，cell高度模式为dynamic时可能存在上下跳动的问题，此为模拟器的bug，不影响生产用户正常使用。可使用真机预览模式进行测试。
:::

### [Props](/api/props/virtual-list.html)
属性配置：设置`是否开启虚拟列表`、设置`是否开启内置列表`、设置`虚拟列表高度模式`、设置`虚拟列表个性化配置`等
### [Slots](/api/slot/main.html#虚拟列表-内置列表slot)
插槽：设置虚拟列表或内置列表插入的`cell`、`header`、`footer`
### [Methods](/api/methods/main.html#虚拟列表相关方法)
方法：在动态高度虚拟列表中`新增缓存高度`、`更新指定行缓存高度`、`删除指定行缓存高度`
### [Events](/api/events/main.html#虚拟列表-内置列表相关事件)
事件：监听`虚拟列表当前渲染的数组改变`、监听`虚拟列表或内置列表时点击了cell`

### 效果演示

#### 渲染1w+条数据时，dom中渲染的列表item数量始终保持在45个左右。

<img style="width:800px;" src="https://z-paging.zxlee.cn/public/img/z-paging-virtual-list.gif"></img>

***

### 示例
* [虚拟列表示例](../../start/use.html#虚拟列表示例)