### Slots

::: warning 注意
① 使用slot插入的view必须是`z-paging`的子view(此view的上一级必须是`z-paging`)，如：

<code-group>
<code-block title="vue2" active>

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
  <view slot="top">我是固定在顶部的view</view>
</z-paging>
```

</code-block>

<code-block title="vue2/3">

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
  <template #top>
    <view>我是固定在顶部的view</view>
  </template>
</z-paging>
```

</code-block>
</code-group>

② slot节点不支持通过v-if或v-show动态显示/隐藏，若需要动态控制，可将v-if添加在其子节点上，如：

<code-group>
<code-block title="vue2" active>

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
  <view slot="bottom">
    <view v-if="showBottom">
      <!-- bottom的内容 -->
    </view>
  </view>
</z-paging>
```

</code-block>

<code-block title="vue2/3">

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
  <template #bottom>
    <view v-if="showBottom">
      <!-- bottom的内容 -->
    </view>
  </template>
</z-paging>
```

</code-block>
</code-group>

:::

## 主体布局Slot

| 名称                         | 说明                                                         |
| :--------------------------- | ------------------------------------------------------------ |
| top <Badge text="1.5.5"/>    | 可以将自定义导航栏、tab-view等需要固定的`(不需要跟着滚动的)`元素放入`slot="top"`的view中。<br/>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="top"`。需要固定在顶部的view请勿设置`position: fixed;`。<p style="color:red;">在使用页面滚动时，若top中的内容动态变化(即高度动态变化)，请在高度更新后调用[this.$refs.paging.updatePageScrollTopHeight()](../methods/main.html#页面滚动-布局相关方法)</p> |
| bottom <Badge text="1.6.2"/> | 可以将需要固定在底部的`(不需要跟着滚动的)`元素放入`slot="bottom"`的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="bottom"`。需要固定在底部的view请勿设置`position: fixed;`。<p style="color:red;">在使用页面滚动时，若bottom中的内容动态变化(即高度动态变化)，请在高度更新后调用[this.$refs.paging.updatePageScrollBottomHeight()](../methods/main.html#页面滚动-布局相关方法)</p> |
| left <Badge text="2.2.3"/>   | 可以将需要固定在左侧的`(不需要跟着滚动的)`元素放入`slot="left"`的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="left"`。需要固定在左侧的view请勿设置`position: fixed;`。<p style="color:red;">`slot="left"`插入的view将夹在`slot="top"`和`slot="bottom"`之间，不会盖住它们。如果希望它的高度铺满屏幕，请为插入的view设置`height:100%`(如果是nvue请设置`flex:1`)，不建议在页面滚动模式下使用`slot="left"`，因为它也会跟着页面滚动。(当left的宽度动态改变时，请在其宽度改变后调用[this.$refs.paging.updateLeftAndRightWidth()](../methods/main.html#页面滚动-布局相关方法))</p> |
| right <Badge text="2.2.3"/>  | 可以将需要固定在右侧的`(不需要跟着滚动的)`元素放入`slot="right"`的view中。<br>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="right"`。需要固定在右侧的view请勿设置`position: fixed;`。<p style="color:red;">`slot="right"`插入的view将夹在`slot="top"`和`slot="bottom"`之间，不会盖住它们。如果希望它的高度铺满屏幕，请为插入的view设置`height:100%`(如果是nvue请设置`flex:1`)，不建议在页面滚动模式下使用`slot="right"`，因为它也会跟着页面滚动。(当right的宽度动态改变时，请在其宽度改变后调用[this.$refs.paging.updateLeftAndRightWidth()](../methods/main.html#页面滚动-布局相关方法))</p> |

## 下拉刷新Slot

| 名称                                    | 说明                                                         |
| :-------------------------------------- | ------------------------------------------------------------ |
| refresher                               | 自定义下拉刷新view，设置后则不使用uni自带的下拉刷新view和z-paging自定义的下拉刷新view。此view的style必须设置为`height:100%`<p style="color:red;">(在非nvue中，自定义下拉刷新view的高度受`refresher-threshold`控制，因此如果它的高度不为默认的80rpx，则需要设置`refresher-threshold="自定义下拉刷新view的高度"`)</p><p>slot-scope="{ refresherStatus(0-默认状态 1.松手立即刷新 2.刷新中 3.刷新成功) }"</p> |
| refresherComplete <Badge text="2.1.1"/> | 自定义`结束状态下`的下拉刷新view，若设置，当下拉刷新结束时，会替换当前状态下的下拉刷新view。<p style="color:red;">(注意：默认情况下您无法看到结束状态的下拉刷新view，除非您设置了`refresher-complete-delay`并且值足够大，例如：500)</p> |
| refresherF2 <Badge text="2.7.7"/>       | 自定义松手显示二楼状态下的view                               |
| f2 <Badge text="2.7.7"/>                | 自定义需要插入二楼的view                                     |

## 底部加载更多Slot

| 名称               | 说明                                                         |
| :----------------- | ------------------------------------------------------------ |
| loadingMoreDefault | 自定义滑动到底部"默认"状态的view(即"点击加载更多view")<p style="color:red;">(自定义插入时默认点击无法加载更多，若需要实现点击加载更多，请为插入的view添加点击事件，并在点击事件中调用`this.$refs.paging.doLoadMore('click')`)</p> |
| loadingMoreLoading | 自定义滑动到底部"加载中"状态的view                           |
| loadingMoreNoMore  | 自定义滑动到底部"没有更多数据"状态的view                     |
| loadingMoreFail    | 自定义滑动到底部"加载失败"状态的view                         |

## 空数据图Slot

| 名称  | 说明                                                         |
| :---- | ------------------------------------------------------------ |
| empty | 自定义空数据占位view<p><Badge text="2.5.0"/> slot-scope="{ isLoadFailed(true: 加载失败，false: 加载成功) }"</p> |

## 全屏Loading Slot

| 名称    | 说明                                                         |
| :------ | ------------------------------------------------------------ |
| loading | 自定义页面reload时的加载view，注意：这个slot默认仅会在第一次加载时显示，若需要每次reload时都显示，需要将`auto-hide-loading-after-first-loaded`设置为false |

## 返回顶部按钮Slot

| 名称                            | 说明                                                         |
| :------------------------------ | ------------------------------------------------------------ |
| backToTop <Badge text="1.9.4"/> | 自定义点击返回顶部view<p style="color:red;">(此view受“【返回顶部按钮】配置”控制，且其父view默认宽高为76rpx)</p><br/> |

## 虚拟列表&内置列表Slot

| 名称                         | 说明                                                         |
| :--------------------------- | ------------------------------------------------------------ |
| cell <Badge text="2.2.5"/>   | `use-virtual-list`或`use-inner-list`为true时有效<br>内置列表中的cell<br>slot-scope="{ item, index }" |
| header <Badge text="2.2.5"/> | `use-virtual-list`或`use-inner-list`为true时有效<br/>内置列表中的header(在cell顶部且跟随列表滚动) |
| footer <Badge text="2.2.5"/> | `use-virtual-list`或`use-inner-list`为true时有效<br/>内置列表中的footer(在cell底部且跟随列表滚动) |

## 聊天记录模式Slot

| 名称                             | 说明                                                         |
| :------------------------------- | ------------------------------------------------------------ |
| chatLoading                      | 使用聊天记录模式时自定义顶部加载更多view(除没有更多数据外)，`use-chat-record-mode`为true时有效<p>slot-scope="{ loadingMoreStatus(0-默认状态 1.加载中 2.没有更多数据 3.加载失败) }" <Badge text="2.7.5"/> </p> |
| chatNoMore <Badge text="2.7.5"/> | 使用聊天记录模式时自定义没有更多数据view，`use-chat-record-mode`为true时有效 |