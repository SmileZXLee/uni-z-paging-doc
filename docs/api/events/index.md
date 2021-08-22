## Events

| 事件名                 | 说明                                                         | 回调参数                                                     |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @query                 | 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用。pageNo和pageSize会自动计算好，直接传给服务器即可。 | 参数1:pageNo(当前第几页)；<br/>参数2:pageSize(每页多少条)    |
| @loadingStatusChange   | 上拉加载更多状态改变                                         | 0-默认状态 1.加载中 2.没有更多数据 3.加载失败                |
| @refresherStatusChange | 自定义下拉刷新状态改变<p style="color:red;">(use-custom-refresher为true时生效)</p>【注：通过`:refresher-status.sync`绑定当前data中的指定变量亦可】 | 0-默认状态 1.松手立即刷新 2.刷新中                           |
| @refresherTouchstart   | 自定义下拉刷新下拉开始<p style="color:red;">(use-custom-refresher为true时生效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】 | 当前触摸开始的屏幕点的y值(单位px)                            |
| @refresherTouchmove    | 自定义下拉刷新下拉中开始<p style="color:red;">(use-custom-refresher为true时生效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】 | 当前需要下拉的距离(单位px)                                   |
| @refresherTouchend     | 自定义下拉刷新下拉结束<p style="color:red;">(use-custom-refresher为true时生效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】 | 当前触摸结束分页内容下移的y值(单位px)                        |
| @onRefresh             | 自定义下拉刷新被触发                                         | -                                                            |
| @onRestore             | 自定义下拉刷新被复位                                         | -                                                            |
| @scroll                | `z-paging`内置的scroll-view滚动时触发                        | event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |
| @scrollTopChange       | scrollTop改变时触发，使用点击返回顶部时需要获取scrollTop时可使用此事件【注：通过`:scroll-top.sync`绑定当前data中的指定变量亦可】<p style="color:red;">(@scrolltoupper触发时，也会自动触发此方法，且scrollTop=0)</p> | scrollTop                                                    |
| @scrolltolower         | `z-paging`内置的scroll-view滚动底部时触发                    | 来源(`toBottom`滚动到底部；`click`点击了加载更多view)        |
| @scrolltoupper         | `z-paging`内置的scroll-view滚动顶部时触发                    | -                                                            |
| @listChange            | 分页渲染的数组改变时触发                                     | 最终的分页数据数组                                           |
| @emptyViewReload       | 点击了空数据图中的重新加载按钮                               | 点击重新加载后是否进行reload操作，默认为是。<br>如果需要禁止reload事件，则在page的methods中书写：<p style="font-weight:bold;">emptyViewReload(e){<br/> e(false);<br/>  //处理自己的业务逻辑<br/>}</p> |

