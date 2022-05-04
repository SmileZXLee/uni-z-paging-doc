### Events

| 事件名                                      | 说明                                                         | 回调参数                                                     |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @query                                      | 下拉刷新或滚动到底部时会自动触发此方法。`z-paging`加载时也会触发(若要禁止，请设置`:auto="false"`)。pageNo和pageSize会自动计算好，直接传给服务器即可。 | `参数1`:pageNo(当前第几页)；<br/>`参数2`:pageSize(每页多少条)<br/>`参数3` <Badge text="2.1.4"/>:from(@query的触发来源：0.用户主动下拉刷新 1.通过reload触发 2.通过refresh触发 3.通过滚动到底部加载更多或点击底部加载更多触发) |
| @loadingStatusChange                        | 上拉加载更多状态改变                                         | 0-默认状态 1.加载中 2.没有更多数据 3.加载失败                |
| @refresherStatusChange                      | 自定义下拉刷新状态改变<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：通过`:refresher-status.sync`绑定当前data中的指定变量亦可】 | 0-默认状态 1.松手立即刷新 2.刷新中 3.刷新成功                |
| @refresherTouchstart                        | 自定义下拉刷新下拉开始<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】 | 当前触摸开始的屏幕点的y值(单位px)                            |
| @refresherTouchmove                         | 自定义下拉刷新下拉拖动中<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：在使用wxs的平台上，为减少wxs与js通信折损，只有在z-paging添加@refresherTouchmove时，wxs才会实时将下拉拖动事件传给js，在微信小程序和QQ小程序中，因$listeners无效，所以必须设置`:watch-refresher-touchmove="true"`方可使此事件被触发】 | {pullingDistance: 下拉的距离, dy: 前后两次回调滑动距离的差值, viewHeight: refresh组件高度, rate:pullingDistance/viewHeight的比值} |
| @refresherTouchend                          | 自定义下拉刷新下拉结束<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】 | 当前触摸结束分页内容下移的y值(单位px)                        |
| @onRefresh                                  | 自定义下拉刷新被触发                                         | -                                                            |
| @onRestore                                  | 自定义下拉刷新被复位                                         | -                                                            |
| @scroll                                     | `z-paging`列表滚动时触发                                     | event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |
| @scrollTopChange                            | scrollTop改变时触发，使用点击返回顶部时需要获取scrollTop时可使用此事件【注：通过`:scroll-top.sync`绑定当前data中的指定变量亦可】<p style="color:red;">(@scrolltoupper触发时，也会自动触发此方法，且scrollTop=0)</p> | scrollTop                                                    |
| @scrolltolower                              | `z-paging`内置的scroll-view滚动底部时触发                    | 来源(`toBottom`滚动到底部；`click`点击了加载更多view)        |
| @scrolltoupper                              | `z-paging`内置的scroll-view滚动顶部时触发                    | -                                                            |
| @listChange                                 | 分页渲染的数组改变时触发                                     | 最终的分页数据数组                                           |
| @virtualListChange <Badge text="2.2.7"/>    | 虚拟列表当前渲染的数组改变时触发，在虚拟列表中只会渲染可见区域内+预加载页面的数据 | 虚拟列表当前渲染的数组                                       |
| @contentHeightChanged <Badge text="2.1.3"/> | `z-paging`中内容高度改变时触发                               | 改变后的高度                                                 |
| @emptyViewReload <Badge text="1.8.0"/>      | 点击了空数据图中的重新加载按钮                               | 点击重新加载后是否进行reload操作，默认为是。<br>如果需要禁止reload事件，则在page的methods中书写：<p style="font-weight:bold;">emptyViewReload(e){<br/> e(false);<br/>  //处理自己的业务逻辑<br/>}</p>### Events |