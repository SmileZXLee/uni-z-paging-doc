### 版本差异

#### 如何查看z-paging版本？

* 【方式1】展开`z-paging`文件夹，查看`z-paging.vue`文件，顶部有注明版本号。
* 【方式2】通过`console.log(this.$refs.paging.getVersion())`打印当前版本号。
* 【方式3】若您的项目使用`uni_modules`管理，展开`uni_modules`下的`z-paging`文件夹，查看其中`package.json`的`version`字段即为版本号。

::: tip 说明
`z-paging`的所有版本更新都会尽可能兼容低版本写法，更新版本之后可能出现的不兼容之处都会在下方列出。  
:::

## `V2.7.0+`

* 由V2.7.0起，将vue中的聊天记录模式与nvue中对齐，完全解决了聊天记录模式滚动到顶部加载更多在vue中抖动的问题，同时将聊天记录模式键盘自动弹出自动上推页面交由`z-paging`处理，解决了由此引发的各种问题，尤其是在微信小程序中导航栏被键盘顶出屏幕外的问题。如果您使用了`z-paging`的聊天记录模式，强烈建议更新！  
写法有一定变更，主要为去除了聊天记录模式`use-chat-record-mode`配置、去除了cell需要添加`:id="z-paging-${index}"`的要求、新增cell需要添加`style="transform: scaleY(-1)"`的要求，具体请下载[示例项目](/start/example-download.html)查看`chat-history-demo.vue`和`chat-input-bar.vue`。

## `V2.6.5+`

* 由V2.6.5起，【全局配置】`在路径@/uni_modules/z-paging下创建z-paging-config.js`废弃
* 由V2.6.5起，【全局配置】在`main.js`中`import zConfig from '@/uni_modules/z-paging/components/z-paging/js/z-paging-config'`(此路径为使用uni_modules情况下使用，可依照具体情况进行修改)，然后进行z-paging的全局配置: `zConfig.setConfig(xxx)` 废弃
* 新方案可参见👉🏻 [全局配置](/api/props/global-config.html)

## `V2.5.1+`

* 由V2.5.1起，方法`end`废弃，由`complete`代替
* 由V2.5.1起，方法`endByTotalCount`、`endByTotal`、`completeByTotalCount`废弃，由`completeByTotal`代替
* 由V2.5.1起，方法`endByNoMore`废弃，由`completeByNoMore`代替
* 由V2.5.1起，方法`endByKey`废弃，由`completeByKey`代替
* 由V2.5.1起，方法`completeByNoMore`中参数2(必填):`是否有更多数据`，修改为`是否没有更多数据`，若为true则代表没有更多数据了。与V2.5.1之前相反。

## `V2.4.3+`

* 由V2.4.3起，旧属性`mounted-auto-call-reload`废弃，由`auto`代替)
* 由V2.4.3起，旧属性`loading-more-when-no-more-and-inside-of-paging`废弃，由`hide-no-more-inside`代替
* 由V2.4.3起，旧属性`hide-loading-more-when-no-more-by-limit`废弃，由`hide-no-more-by-limit`代替

## `V2.4.1+`

* 由V2.4.1起，`z-paging`的i18n配置与`uni-app`国际化方案对齐，具体参见[i18n配置](/api/props/i18n.html)。

## `V2.0.5+`

* 由V2.0.5起，`z-paging`的内置下拉刷新`z-paging-refresh`和内置滚动到底部加载更多`z-paging-load-more`内部view的class和props有所改变。若之前使用`/deep/`修改内置下拉刷新或滚动到底部view的样式，更新到此版本及之后的版本，需要进行相关的调整。


## `V1.9.0+`

* 由V1.9.0起，`fixed`属性默认值为true，`z-paging`默认会铺满屏幕。V1.9.0之前的版本更新请注意，使用侧滑滚动切换选项卡或需要局部使用`z-paging`请设置`:fixed="false"`。<br>如果您希望fixed属性默认为false，请参考[全局配置](/api/props/global-config.md)，将fixed默认值设置为false。