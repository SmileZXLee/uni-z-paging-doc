### 全屏Loading配置

| 参数                                           | 说明                                                         | 类型           | 默认值    | 可选值 |
| :--------------------------------------------- | :----------------------------------------------------------- | :------------- | :-------- | :----- |
| auto-hide-loading-after-first-loaded           | 第一次加载后自动隐藏loading slot                             | Boolean        | true      | false  |
| loading-full-fixed <Badge text="2.0.9"/>       | loading slot的父view是否铺满屏幕并固定<p style="color:red;">(设置为true后，插入的loading的父view会铺满全屏，请注意插入的loading需要设置height:100%【nvue为flex:1】才可铺满全屏，loading内的view从导航栏顶部开始，会被导航栏盖住，请妥善处理)</p> | Boolean        | false     | true   |
| auto-show-system-loading <Badge text="2.3.7"/> | 是否自动显示系统Loading：即uni.showLoading，若开启则将在刷新列表时(调用reload、refresh时)显示，下拉刷新和滚动到底部加载更多不会显示 | Boolean        | false     | true   |
| system-loading-text <Badge text="2.3.7"/>      | 显示系统Loading时显示的文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-Hans':'中文配置'}的i18n配置)</p> | String\|Object | 加载中... | -      |
| system-loading-mask <Badge text="2.3.9"/>      | 显示系统Loading时是否显示透明蒙层，防止触摸穿透(H5、App、微信小程序、百度小程序有效) | Boolean        | true      | false  |

