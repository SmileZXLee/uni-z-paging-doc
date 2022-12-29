### 注意事项与常见问题
::: danger 注意事项①
在nvue中，z-paging中插入的列表item(z-paging的直接子view)必须是cell，必须使用cell包住，因为在nvue中，z-paging使用的是nvue的list组件。<br>不能使用index作为key的唯一标识，`:key`必须添加并且必须是唯一的。<br>具体请查阅demo中的`common-demo-n.vue`示例
:::

::: warning 注意事项②
在使用fixed布局时，若要设置列表背景色，请设置page的背景色或使用`:paging-style="{'background-color':'red'}"`方式，因为此时z-paging的父view是没有高度的，给它们设置背景色无效。
:::

::: warning 注意事项③
安卓App`(vue)`若要取消下拉刷新和滚动到底部灰色半弧形，请在`pages.json`中进行如下设置：
```json
//以下代码可以写在globalStyle中或特定页面的style中
//在App中，取消安卓下拉刷新灰色半弧形效果
"app-plus" : {
  "bounce" : "none"
}
```
安卓App`(nvue)`若要取消下拉刷新和滚动到底部灰色半弧形，请在`z-paging`标签上设置`:nvue-bounce="false"`。
:::

::: warning 注意事项④
在支付宝和钉钉小程序中，必须在`pages.json`中进行如下设置：
```json
//以下代码可以写在globalStyle中或特定页面的style中
//支付宝和钉钉小程序需要取消回弹效果
"mp-alipay": {
  "allowsBounceVertical": "NO"
}
```
:::


::: details 点击展开其他常见问题

* 【若无法下拉刷新】请确认要在@query所绑定的方法中调用`this.$refs.paging.complete()`，无论是否需要网络请求都要调用，只有告知z-paging刷新状态结束了，才可以开始下次的下拉刷新。

* 【使用内置scroll-view滚动时】z-paging必须有确定的高度！否则上拉加载更多将无法触发，建议设置`:fixed=true`即可不设置高度！！(不希望跟着滚动的view可以设置`slot="top"`)。

* 【使用页面滚动时】使用z-paging内置的scroll-view滚动性能不及使用页面的滚动。若您要使用页面的滚动，请勿固定z-paging的高度，并且必须设置`use-page-scroll`为true，否则将导致页面无法滚动(不希望跟着滚动的view可以设置`slot="top"`)。

* 【使用页面滚动时】必须引入mixin(可全局引入)(具体可参照demo中的`page-default-demo.vue`文件)

  或在页面的`onReachBottom`事件中调用`this.$refs.paging.doLoadMore()`且在`onPageScroll(e)`事件中调用`this.$refs.paging.updatePageScrollTop(e.scrollTop)`。(具体可参照demo中的`page-default-demo.vue`文件)

* 【出现实际上有更多数据，而显示没有更多数据时】默认的pageSize(每页显示数量)为10，如果您服务端不需要传pageSize(例如有默认的pageSize：8)，则您需要将默认的pageSize改成您与后端约定好的（8），若没有修改，则z-paging会认为传给服务端的pageSize是10，而服务端只返回了8条，因此会直接判定为没有更多数据。

* 【若页面无法滚动】请检查z-paging是否有固定的高度；若您想使用页面滚动而非z-paging内置的scroll-view的滚动，请设置`use-page-scroll`为true。

* 【关于自定义导航栏】若设置了`:fixed=true`，则必须将自定义导航栏放在z-paging标签中且添加slot="top"，如：`<custom-nav slot="top"></custom-nav>`，如果有多个需要固定顶部的元素，则书写`<view slot="top">所有需要固定顶部的元素</view>`。
:::