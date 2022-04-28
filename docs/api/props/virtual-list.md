### 虚拟列表配置 <Badge text="2.2.5"/>

::: tip 为什么需要虚拟列表？
* <div style="font-size:14px;">在一般情况下，无论是使用scroll-view滚动还是页面滚动，即使进行了分页，当列表本身长度很长时将存在严重的性能问题。随着渲染的dom越来越多，页面占用的内存会持续升高，从而造成页面卡顿、白屏等问题。</div>
* <div style="font-size:14px;">虚拟列表适合长列表渲染，当需要渲染一万条数据时，实际上不需要渲染一万个cell，只需要渲染屏幕可视范围内的cell即可，超出屏幕的不应该渲染，然后随着列表滚动不断切换需要显示或销毁的cell。这可以保证无论有多少数据，页面渲染的dom都不会无限增加，它将保持在一个较低的水平，从而保持了列表的良好性能。</div>
:::

::: warning 注意
* <div style="font-size:14px;">由于超出屏幕的cell可能被销毁并重新创建，因此cell内的switch等带状态的控件同样将被销毁和重新创建，因此请确保是通过for循环item绑定它们的状态的，否则其状态将丢失。</div>
* <div style="font-size:14px;">由于字节跳动小程序不支持`slot-scope`，因此`use-virtual-list`与`use-inner-list`无法在字节跳动小程序中使用。</div>
:::


| 参数             | 说明                                                         | 类型           | 默认值 | 可选值            |
| :--------------- | :----------------------------------------------------------- | :------------- | :----- | :---------------- |
| use-virtual-list | 是否使用虚拟列表<p style="color:red;">(由于字节跳动小程序不支持`slot-scope`，因此`use-virtual-list`无法在字节跳动小程序中使用)</p>                                             | Boolean        | false  | true              |
| use-inner-list   | 是否在z-paging内部循环渲染列表，若`use-virtual-list`为true，则此项恒为true<p style="color:red;">(由于字节跳动小程序不支持`slot-scope`，因此`use-inner-list`无法在字节跳动小程序中使用)</p> | Boolean        | false  | true              |
| inner-list-style | innerList样式                                                | Object         | {}     | -                 |
| preload-page     | 预加载的列表可视范围(列表高度)页数，默认为7，即预加载当前页及上下各7页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题 | Number\|String | 7      | -                 |
| cell-height-mode | 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算 | String         | fixed  | dynamic(暂不支持) |

