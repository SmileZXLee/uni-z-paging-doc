### Events

## 数据处理相关事件

| 事件名      | 说明                                                         | 回调参数                                                     |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @query      | 下拉刷新或滚动到底部时会自动触发此方法。`z-paging`加载时也会触发(若要禁止，请设置`:auto="false"`)。pageNo和pageSize会自动计算好，直接传给服务器即可。 | `参数1`:pageNo(当前第几页)；<br/>`参数2`:pageSize(每页多少条)<span style="color:red;">(pageSize必须与传给服务器的一致，如果需要修改pageSize，请通过`:default-page-size="15"`修改)</span><br/>`参数3` <Badge text="2.1.4"/>:from(@query的触发来源：user-pull-down:用户主动下拉刷新；reload:通过reload触发；refresh:通过refresh触发；load-more:通过滚动到底部加载更多或点击底部加载更多触发)<span style="color:red;">(v2.8.0及之前的版本的from是number类型，对应为：0,1,2,3)</span> |
| @listChange | 分页渲染的数组改变时触发                                     | 最终的分页数据数组                                           |

## 下拉刷新相关事件

| 事件名                                   | 说明                                                         | 回调参数                                                     |
| ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @refresherStatusChange                   | 自定义下拉刷新状态改变<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：通过`:refresher-status.sync`绑定当前data中的指定变量亦可】 | default:默认状态；<br/>release-to-refresh:松手立即刷新；<br/>loading:刷新中；<br/>complete:刷新结束(默认情况下看不到此状态，如果需要展示刷新成功状态，请设置刷新结束以后延时收回的时间，如:`:refresher-complete-delay="200"`)；<br/>go-f2:松手进入二楼<br/><span style="color:red;">(v2.8.0及之前的版本是number类型，对应为：0,1,2,3,4)</span> |
| @refresherTouchstart                     | 自定义下拉刷新下拉开始<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】<p style="color:red;">(nvue无效)</p> | 当前触摸开始的屏幕点的y值(单位px)                            |
| @refresherTouchmove                      | 自定义下拉刷新下拉拖动中<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：在使用wxs的平台上(微信小程序、QQ小程序、app-vue、h5)，为减少wxs与js通信折损，此事件默认不触发，必须设置`:watch-refresher-touchmove="true"`方可使此事件被触发】 | {pullingDistance: 下拉的距离, dy: 前后两次回调滑动距离的差值, viewHeight: refresh组件高度, rate:pullingDistance/viewHeight的比值} |
| @refresherTouchend                       | 自定义下拉刷新下拉结束<p style="color:red;">(use-custom-refresher为false时无效)</p>【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用`refresherStatusChange`即可】<p style="color:red;">(nvue无效)</p> | 当前触摸结束分页内容下移的y值(单位px)                        |
| @refresherF2Change <Badge text="2.7.7"/> | 下拉进入二楼状态改变                                         | go-二楼开启 close-二楼关闭                                   |
| @onRefresh                               | 自定义下拉刷新被触发                                         | -                                                            |
| @onRestore                               | 自定义下拉刷新被复位                                         | -                                                            |

## 底部加载更多相关事件

| 事件名               | 说明                 | 回调参数                                                     |
| -------------------- | -------------------- | ------------------------------------------------------------ |
| @loadingStatusChange | 底部加载更多状态改变 | default:默认状态；<br/>loading:加载中；<br/>no-more:没有更多数据；<br/>fail:加载失败<br/><span style="color:red;">(v2.8.0及之前的版本是number类型，对应为：0,1,2,3)</span> |

## 空数据与加载失败相关事件

| 事件名                                    | 说明                           | 回调参数                                                     |
| ----------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| @emptyViewReload <Badge text="1.8.0"/>    | 点击了空数据图中的重新加载按钮 | 点击重新加载后是否进行reload操作，默认为是。<br>如果需要禁止reload事件，则在page的methods中书写：<p style="font-weight:bold;">emptyViewReload(e) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;e(false);<br/>  &nbsp;&nbsp;&nbsp;&nbsp;//处理自己的业务逻辑<br/>}</p> |
| @emptyViewClick <Badge text="2.3.3"/>     | 点击了空数据图view             | -                                                            |
| @isLoadFailedChange <Badge text="2.5.0"/> | `z-paging`请求失败状态改变     | 当前是否是请求失败状态，为true代表是，反之为否；默认状态为否 |

## 返回顶部按钮相关事件

| 事件名                                | 说明               | 回调参数                                                     |
| ------------------------------------- | ------------------ | ------------------------------------------------------------ |
| @backToTopClick <Badge text="2.6.1"/> | 点击了返回顶部按钮 | 点击返回顶部按钮后是否滚动到顶部，默认为是。<br>如果需要禁止滚动到顶部事件，则在page的methods中书写：<p style="font-weight:bold;">backToTopClick(e) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;e(false);<br/>  &nbsp;&nbsp;&nbsp;&nbsp;//处理自己的业务逻辑<br/>}</p> |

## 虚拟列表&内置列表相关事件

| 事件名                                              | 说明                                                         | 回调参数                         |
| --------------------------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| @virtualListChange <Badge text="2.2.7"/>            | 虚拟列表当前渲染的数组改变时触发，在虚拟列表中只会渲染可见区域内+预加载页面的数据<p style="color:red;">(nvue无效)</p> | 虚拟列表当前渲染的数组           |
| @innerCellClick <Badge text="2.4.0"/>               | 使用虚拟列表或内置列表时点击了cell<p style="color:red;">(nvue无效)</p> | `参数1`:item；<br/>`参数2`:index |
| @virtualPlaceholderTopHeight <Badge text="2.7.12"/> | 虚拟列表顶部占位高度改变                                     | 虚拟列表顶部占位高度(单位：px)   |

## 聊天记录模式相关事件

| 事件名                                      | 说明                                                         | 回调参数             |
| ------------------------------------------- | ------------------------------------------------------------ | -------------------- |
| @hidedKeyboard <Badge text="2.3.6"/>        | 在聊天记录模式下，触摸列表隐藏了键盘<p style="color:red;">(nvue无效)</p> | -                    |
| @keyboardHeightChange <Badge text="2.7.1"/> | 键盘高度改变<p style="color:red;">(聊天记录模式启用时才有效，如果在聊天记录模式页面需要监听键盘高度改变，请不要直接通过`uni.onKeyboardHeightChange`监听，否则可能导致`z-paging`内置的键盘高度改变监听失效。ps:H5、百度小程序、抖音小程序、飞书小程序不支持)</p> | {height:0(键盘高度)} |

## 滚动相关事件

| 事件名                           | 说明                                                         | 回调参数                                                     |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @scroll                          | `z-paging`列表滚动时触发<p style="color:red;">(此事件忠实地转发了`scroll-view/list`的`@scroll`数据，此方法受内部节流影响可能无法100%监听到滚动到顶部和底部事件，若有相关需求请结合`@scrolltoupper`、`@scrolltolower`综合判断，上述2个事件触发`z-paging`单独进行了进一步更严谨的判断)</p> | `(vue中)` event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}<br/>`(nvue中)` event = {`contentSize`(列表的内容尺寸) = {width, height}, `contentOffset`(列表的偏移尺寸) = {x, y} , `isDragging`(用户是否正在拖动列表)} |
| @scrollTopChange                 | scrollTop改变时触发，使用点击返回顶部时需要获取scrollTop时可使用此事件【注：通过`:scroll-top.sync`绑定当前data中的指定变量亦可】<p style="color:red;">(@scrolltoupper触发时，也会自动触发此方法，且scrollTop=0)</p> | scrollTop                                                    |
| @scrolltolower                   | `z-paging`内置的`scroll-view`、`list-view`或`waterfall`滚动底部时触发<p style="color:red;">(v2.8.6之前不支持nvue)</p> | -                                                            |
| @scrolltoupper                   | `z-paging`内置的`scroll-view`、`list-view`或`waterfall`滚动顶部时触发<p style="color:red;">(v2.8.6之前不支持nvue)</p> | -                                                            |
| @scrollend <Badge text="2.7.3"/> | `z-paging`内置的list滚动结束时触发<p style="color:red;">(仅nvue有效)</p> | event = {`contentSize`(列表的内容尺寸) = {width, height}, `contentOffset`(列表的偏移尺寸) = {x, y} , `isDragging`(用户是否正在拖动列表)} |

## 布局&交互相关事件

| 事件名                                      | 说明                                                     | 回调参数                                                     |
| ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| @contentHeightChanged <Badge text="2.1.3"/> | `z-paging`中内容高度改变时触发                           | 改变后的高度                                                 |
| @touchDirectionChange <Badge text="2.3.0"/> | 监听列表触摸方向改变<p style="color:red;">(nvue无效)</p> | <p style="color:red;">(必须同时设置`:watch-touch-direction-change="true"`)</p>列表触摸的方向，有`top`和`bottom`两种值，`top`代表用户将列表向上移动(scrollTop不断减小)，`bottom`代表用户将列表向下移动(scrollTop不断增大) |