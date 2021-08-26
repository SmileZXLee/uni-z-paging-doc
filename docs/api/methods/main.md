### Methods

::: tip 调用方式
假设给z-paging设置ref="paging"，则通过`this.$refs.paging.xxx()`方式调用
:::
::: danger 注意
在Page的onLoad()方法中无法同步获取this.$refs，请加一个setTimeOut延时1毫秒或nextTick再调用(默认会在页面加载时自动调用reload()无须手动调用)
:::

| 方法名                                                       | 说明                                                         | 参数                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| reload                                                       | 重新加载分页数据，pageNo恢复为默认值，相当于下拉刷新的效果   | `参数1(非必填)`:(传true或false，默认为false)reload时是否展示下拉刷新动画，默认为否 |
| complete或<br/>end <Badge text="2.0.2"/>                     | 请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理<p style="color:red;">(全局错误处理：当请求失败时，也必须调用complete，可在封装的网络请求错误的地方书写：`uni.$emit('z-paging-error-emit');`  即可将当前加载中状态的z-paging设置为请求失败状态)</p> | `参数1(必填)`:请求结果数组；<br>`参数2(非必填)`:是否请求成功，不填默认为true。<br><p style="color:red;">请求失败时直接调用：this.$refs.paging.complete(false); 即可；如果只是想表达请求结束，则调用：this.$refs.paging.complete(); 即可</p> |
| completeByTotalCount <Badge text="1.9.7"/>或<br>endByTotalCount <Badge text="2.0.2"/> | 【通过totalCount判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理 | `参数1(必填)`:请求结果数组；<br/>`参数2(必填)`:totalCount(列表总数)<br/>`参数3(非必填)`:是否请求成功，不填默认为true |
| completeByNoMore <Badge text="1.9.2"/>或<br/>endByNoMore <Badge text="2.0.2"/> | 【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理 | `参数1(必填)`:请求结果数组；<br/>`参数2(必填)`:是否有更多数据，若为true则可以继续滚动到底部加载更多，但如果在某个时刻参数1传入了空数组，也代表着没有更多数据了；<br/>`参数3(非必填)`:是否请求成功，不填默认为true |
| completeByKey <Badge text="1.6.4"/>或<br/>endByKey <Badge text="2.0.2"/> | 【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理<p style="color:red;">(关于数据一致性，请查看demo中`consistency-demo.vue`文件)</p> | `参数1(必填)`:请求结果数组；<br/>`参数2(必填)`:dataKey，需与:data-key绑定的一致；<br/>`参数3(非必填)`:是否请求成功，不填默认为true |
| clean <Badge text="1.6.7"/>                                  | 清空分页数据，pageNo恢复为默认值。                           | -                                                            |
| setLocalPaging                                               | 设置本地分页，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理<p style="color:red;">（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）</p> | `参数1(必填)`:请求结果数组；<br/>`参数2(非必填)`:是否请求成功，不填默认为true |
| doLoadMore                                                   | 手动触发上拉加载更多(非必须，可依据具体需求使用，例如当z-paging未确定高度时，内部的scroll-view会无限增高，此时z-paging无法得知是否滚动到底部，您可以在页面的`onReachBottom`中手动调用此方法触发上拉加载更多) <p style="color:red;">ps:`use-page-scroll`需要设置为true</p> | -                                                            |
| doChatRecordLoadMore                                         | 手动触发滚动到顶部加载更多，聊天记录模式时有效               | -                                                            |
| scrollToTop                                                  | 滚动到顶部                                                   | `参数1(非必填)`:是否有动画效果，默认为是                     |
| scrollToBottom                                               | 滚动到底部                                                   | `参数1(非必填)`:是否有动画效果，默认为是                     |
| scrollIntoViewById                                           | 滚动到指定view<p style="color:red;">(vue中有效，若此方法无效，请使用`scrollIntoViewByNodeTop`)</p> | `参数1(必填)`需要滚动的view的id值，不包含"#"；<br/>`参数2(非必填)`:偏移量，单位为px，默认为0；<br/>`参数3(非必填)`:是否有动画效果，默认为否 |
| scrollIntoViewByNodeTop <Badge text="1.7.4"/>                | 滚动到指定view<p style="color:red;">(vue中有效)</p>          | `参数1(必填)`:需要滚动的view的top值(通过uni.createSelectorQuery()获取)；<br/>`参数2(非必填)`:偏移量，单位为px，默认为0；<br/>`参数3(非必填)`:是否有动画效果，默认为否 |
| scrollIntoViewByIndex                                        | 滚动到指定view<p style="color:red;">(nvue中有效)(在nvue中的cell必须设置 :ref="`z-paging-${index}`")</p> | `参数1(必填)`:需要滚动的view的index(第几个)；<br/>`参数2(非必填)`:偏移量，单位为px，默认为0；<br/>`参数3(非必填)`:是否有动画效果，默认为否 |
| scrollIntoViewByView                                         | 滚动到指定view<p style="color:red;">(nvue中有效)</p>         | `参数1(必填)`:需要滚动的view(通过`this.$refs.xxx`获取)；<br/>`参数2(非必填)`:偏移量，单位为px，默认为0；<br/>`参数3(非必填)`:是否有动画效果，默认为否 |
| updatePageScrollTop                                          | 当使用页面滚动(z-paging不固定高度)并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新 | `参数1(必填)`:从page的onPageScroll中获取的scrollTop                        |
| updatePageScrollTopHeight                                    | 在nvue中或使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法 | -                                                            |
| updatePageScrollBottomHeight                                 | 在nvue中或使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法 | -                                                            |
| addChatRecordData                                            | 添加聊天记录，`use-chat-record-mode`为true时有效             | `参数1(必填)`:需要添加的聊天数据，可以是一条数据或一组数据；<br/>`参数2(非必填)`:是否滚动到底部，不填默认为true；<br/>`参数3(非必填)`:是否使用动画滚动到底部，不填默认为true |
| addDataFromTop                                               | 从顶部添加数据，不会影响分页的pageNo和pageSize               | `参数1(必填)`:需要添加的数据，可以是一条数据或一组数据；<br/>`参数2(非必填)`:是否滚动到顶部，不填默认为true；<br/>`参数3(非必填)`:是否使用动画滚动到顶部，不填默认为true |
| resetTotalData                                               | <p style="color:red;">(建议使用v-model代替:list.sync，则无需调用此方法)</p>重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。<p style="color:red;">(当出现类似的需要修改列表数组的场景时，请使用此方法，请勿直接修改page中:list.sync绑定的数组)</p> | `参数1(必填)`:修改后的列表数组                               |
| getVersion                                                   | 获取当前版本号                                               | -                                                            |
| setListSpecialEffects或<br>setSpecialEffects <Badge text="2.0.4"/> | 设置nvue List的specialEffects                                | `参数1(必填)`:参见[https://uniapp.dcloud.io/component/list?id=listsetspecialeffects](https://uniapp.dcloud.io/component/list?id=listsetspecialeffects) |