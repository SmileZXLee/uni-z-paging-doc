### 虚拟列表配置 <Badge text="2.2.5"/>

> 轻松渲染万级列表数据。

::: tip 为什么需要虚拟列表？

* <div style="font-size:14px;">在一般情况下，无论是使用scroll-view滚动还是页面滚动，即使进行了分页，当列表本身长度很长时依然会存在严重的性能问题。随着渲染的dom越来越多，页面占用的内存会持续升高，从而造成页面卡顿、白屏等问题。</div>

* <div style="font-size:14px;">虚拟列表适合长列表渲染，当需要渲染一万条数据时，实际上不需要渲染一万个cell，只需要渲染屏幕可视范围内的cell即可，超出屏幕的不应该渲染，然后随着列表滚动不断切换需要显示或销毁的cell。这可以保证无论有多少数据，页面渲染的dom都不会无限增加，它将保持在一个较低的水平，从而保持了列表的良好性能。</div>

:::

::: warning 注意

* 由于超出屏幕的cell可能被销毁并重新创建，因此cell内的switch等带状态的控件同样将被销毁和重新创建，因此请确保是通过for循环item绑定它们的状态的，否则其状态将丢失。
* 由于字节跳动小程序不支持`slot-scope`，因此`use-virtual-list`与`use-inner-list`无法在字节跳动小程序中使用。
* `use-inner-list`在微信小程序中部分较高版本调试库会报`More than one slot named "cell" are found...`的警告并导致开发者工具卡顿，将基础库版本调到`2.18.0`以下即可。因线上没有控制台打印，因此不会影响线上版本。

:::


| 参数                                         | 说明                                                         | 类型           | 默认值 | 可选值  |
| :------------------------------------------- | :----------------------------------------------------------- | :------------- | :----- | :------ |
| use-virtual-list                             | 是否使用虚拟列表<p style="color:red;">(使用页面滚动或nvue时，不支持虚拟列表。在nvue中z-paging内置了list组件，效果与虚拟列表类似，并且可以提供更好的性能)</p><p style="color:red;">(由于字节跳动小程序不支持`slot-scope`，因此`use-virtual-list`无法在字节跳动小程序中使用)</p> | Boolean        | false  | true    |
| cell-height-mode                             | 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值：`dynamic`，即代表高度是动态非固定的；`dynamic`性能低于`fixed`，因此如非必要，请使用`fixed` | String         | fixed  | dynamic |
| preload-page                                 | 预加载的列表可视范围(列表高度)页数，默认为7，即预加载当前页及上下各7页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题 | Number\|String | 7      | -       |
| virtual-list-col <Badge text="2.2.8"/>       | 虚拟列表列数，默认为1。常用于每行有多列的情况，例如每行有2列数据，需要将此值设置为2<p style="color:red;">(仅支持`cell-height-mode`为fixed的情况，即：不支持动态高度的瀑布流)</p>例：需要设置每行2列的瀑布流时，请设置：`virtual-list-times="2"`、`:inner-list-style="{'display':'flex','flex-wrap':'wrap'}"`(设置inner-list开启flex布局，且子view自动换行)、`:inner-cell-style="{width:'50%'}"`(设置子view宽度为50%) | Number\|String | 1      | -       |
| virtual-scroll-fps                           | 虚拟列表scroll取样帧率，默认为60，过高可能出现卡顿等问题     | Number\|String | 60     | -       |
| use-inner-list                               | 是否在z-paging内部循环渲染列表(使用内置列表)，若`use-virtual-list`为true，则此项恒为true<br><br>此模式下使用`slot="cell"`插入cell；使用`slot="header"`插入header(在cell顶部且跟随列表滚动)；使用`slot="footer"`插入bottom(在cell底部且跟随列表滚动)；  <p style="color:red;">(由于字节跳动小程序不支持`slot-scope`，因此`use-inner-list`无法在字节跳动小程序中使用)</p><p style="color:red;">(use-inner-list在微信小程序中部分较高版本调试库会报`More than one slot named "cell" are found...`的警告并导致开发者工具卡顿，将基础库版本调到2.18.0以下即可。因线上没有控制台打印，因此不会影响线上版本。)</p> | Boolean        | false  | true    |
| force-close-inner-list <Badge text="2.2.7"/> | 强制关闭inner-list，默认为false，如果为true将强制关闭innerList，适用于开启了虚拟列表后需要强制关闭inner-list的情况 | Boolean        | false  | true    |
| cell-key-name <Badge text="2.2.7"/>          | 内置列表cell的key名称<p style="color:red;">(仅nvue有效，在nvue中开启use-inner-list时必须填此项)</p> | String         | ""     | -       |
| inner-list-style                             | innerList样式                                                | Object         | {}     | -       |
| inner-cell-style <Badge text="2.2.8"/>       | innerCell样式                                                | Object         | {}     | -       |

***

### 虚拟列表效果演示
#### 渲染1w+条数据时，dom中渲染的列表item数量始终保持在45个左右。
<img style="width:800px;" src="https://z-paging.zxlee.cn/public/img/z-paging-virtual-list.gif"></img>

***

### 虚拟列表写法示例

[点击查看](../../start/use.html#虚拟列表示例)