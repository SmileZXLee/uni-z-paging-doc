## z-paging-swiper配置

> 在swiper中使用z-paging时(左右滑动切换列表)，在根节点使用z-paging-swiper，其相当于一个view容器，默认铺满全屏，可免计算高度直接插入swiper的识图容器。

### props

| 参数                   | 说明                     | 类型    | 默认值 | 可选值 |
| :--------------------- | :----------------------- | :------ | :----- | :----- |
| fixed                  | 是否使用fixed布局        | Boolean | true   | false  |
| safe-area-inset-bottom | 是否开启底部安全区域适配 | Boolean | false  | true   |
| swiper-style           | z-paging-swiper样式      | Object  | {}     | -      |

### slots

| 名称                         | 说明                                                         |
| :--------------------------- | ------------------------------------------------------------ |
| top <Badge text="1.5.5"/>    | 可以将自定义导航栏、tab-view等需要固定的`(不需要跟着滚动的)`元素放入`slot="top"`的view中。<br/>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="top"`。需要固定在顶部的view请勿设置`position: fixed;`。 |
| bottom <Badge text="1.6.2"/> | 可以将需要固定在底部的`(不需要跟着滚动的)`元素放入`slot="bottom"`的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="bottom"`。需要固定在底部的view请勿设置`position: fixed;`。 |
| left <Badge text="2.2.3"/>   | 可以将需要固定在左侧的`(不需要跟着滚动的)`元素放入`slot="left"`的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="left"`。需要固定在左侧的view请勿设置`position: fixed;`。<p style="color:red;">`slot="left"`插入的view将夹在`slot="top"`和`slot="bottom"`之间，不会盖住它们。如果希望它的高度铺满屏幕，请为插入的view设置`height:100%`(如果是nvue请设置`flex:1`)，不建议在页面滚动模式下使用`slot="left"`，因为它也会跟着页面滚动。</p> |
| right <Badge text="2.2.3"/>  | 可以将需要固定在右侧的`(不需要跟着滚动的)`元素放入`slot="right"`的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="right"`。需要固定在右侧的view请勿设置`position: fixed;`。<p style="color:red;">`slot="right"`插入的view将夹在`slot="top"`和`slot="bottom"`之间，不会盖住它们。如果希望它的高度铺满屏幕，请为插入的view设置`height:100%`(如果是nvue请设置`flex:1`)，不建议在页面滚动模式下使用`slot="right"`，因为它也会跟着页面滚动。</p> |

## z-paging-swiper-item配置

> swiper+list极简写法中使用到，实际上就是对普通的swiper+list中swiper-item的包装封装，用以简化写法，但个性化配置局限较多

### props

| 参数                                        | 说明                                              | 类型   | 默认值 | 可选值 |
| :------------------------------------------ | :------------------------------------------------ | :----- | :----- | :----- |
| tab-index                                   | 当前组件的index，也就是当前组件是swiper中的第几个 | Number | 0      | -      |
| current-index                               | 当前swiper切换到第几个index                       | Number | 0      | -      |
| 虚拟列表&内置列表相关 <Badge text="2.2.8"/> | 见[虚拟列表配置](.././props/virtual-list.html)    | -      | -      | -      |

### methods

| 方法名   | 说明                                                         | 参数                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| reload   | 重新加载分页数据，pageNo恢复为默认值，相当于下拉刷新的效果   | `参数1(非必填)`:(传true或false，默认为false)reload时是否展示下拉刷新动画，默认为否 |
| complete | 请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，会自动判断是否有更多数据。 | `参数1(必填)`:请求结果数组                                   |

### events

| 事件名      | 说明                                                         | 回调参数                                                     |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @query      | 下拉刷新或滚动到底部时会自动触发此方法。`z-paging`加载时也会触发(若要禁止，请设置`:auto="false"`)。pageNo和pageSize会自动计算好，直接传给服务器即可。 | `参数1`:pageNo(当前第几页)；<br/>`参数2`:pageSize(每页多少条)<br/>`参数3` <Badge text="2.1.4"/>:from(@query的触发来源：0.用户主动下拉刷新 1.通过reload触发 2.通过refresh触发 3.通过滚动到底部加载更多或点击底部加载更多触发) |
| @updateList | 更新当前对应tab的数据                                        | 当前对应tab的数据(数组)                                      |

## z-paging-empty-view配置

> 通用的z-paging空数据组件

### props

| 参数                                          | 说明                                                         | 类型    | 默认值      | 可选值 |
| :-------------------------------------------- | :----------------------------------------------------------- | :------ | :---------- | :----- |
| empty-view-fixed <Badge text="2.0.3"/>        | 空数据图片是否铺满z-paging，默认为是。若设置为否，则为填充满z-paging的剩余部分 | Boolean | false       | true   |
| empty-view-text                               | 空数据图描述文字                                             | String  | 没有数据哦~ | -      |
| empty-view-img                                | 空数据图图片，默认使用z-paging内置的图片<br><p style="color:red;">(建议使用绝对路径，开头不要添加"@"，请以"/"开头)</p> | String  | -           | -      |
| empty-view-reload-text <Badge text="1.6.7"/>  | 空数据图点击重新加载文字                                     | String  | 重新加载    | -      |
| empty-view-style                              | 空数据图样式，可设置空数据view的top等，<br>如`:empty-view-style="{'top':'100rpx'}"`(如果空数据图不是fixed布局，则此处是`margin-top`) | Object  | {}          | -      |
| empty-view-img-style                          | 空数据图img样式                                              | Object  | {}          | -      |
| empty-view-title-style                        | 空数据图描述文字样式                                         | Object  | {}          | -      |
| empty-view-reload-style <Badge text="1.6.7"/> | 空数据图重新加载按钮样式                                     | Object  | {}          | -      |
| show-empty-view-reload <Badge text="1.6.7"/>  | 是否显示空数据图重新加载按钮(无数据时)                       | Boolean | false       | true   |
| is-load-failed                                | 是否是加载失败                                               | Boolean | true        | false  |

### events

| 事件名  | 说明               | 回调参数 |
| ------- | ------------------ | -------- |
| @reload | 点击了重新加载按钮 | -        |

## z-paging-cell配置 <Badge text="2.3.1"/>

> 用于兼容nvue和vue中的cell渲染，因为在nvue中z-paging内置的是list，因此列表item必须使用cell包住，在vue中不能使用cell，否则会报组件找不到的错误，此子组件为了兼容这两种情况，内部作了条件编译处理

### props

| 参数       | 说明     | 类型   | 默认值 | 可选值 |
| :--------- | :------- | :----- | :----- | :----- |
| cell-style | cell样式 | Object | {}     | -      |