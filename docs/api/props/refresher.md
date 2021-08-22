### 下拉刷新配置

|                  参数                   |                             说明                             |      类型      |     默认值      |                            可选值                            |
| :-------------------------------------: | :----------------------------------------------------------: | :------------: | :-------------: | :----------------------------------------------------------: |
|            refresher-enabled            |                       是否开启下拉刷新                       |    Boolean     |      true       |                            false                             |
|           refresher-threshold           | 设置自定义下拉刷新阈值，默认单位为px。<p style="color:red;">(支持传100、"100px"或"100rpx")(nvue无效)</p> | Number\|String |      80rpx      |                              -                               |
|             refresher-only              | 是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图 |    Boolean     |      false      |                             true                             |
|          use-custom-refresher           | 是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新 |    Boolean     |      true       | h5、App、微信小程序以外的平台设置为false时，无法使用下拉刷新 |
|          refresher-theme-style          |             下拉刷新的主题样式，支持black，white             |     String     |      black      |                            white                             |
|           refresher-img-style           |                 自定义下拉刷新左侧图标的样式                 |     Object     |       {}        |                              -                               |
|          refresher-title-style          |             自定义下拉刷新右侧状态描述文字的样式             |     Object     |       {}        |                              -                               |
|       refresher-update-time-style       | 自定义下拉刷新右侧最后更新时间文字的样式<p style="color:red;">(show-refresher-update-time为true时有效)</p> |     Object     |       {}        |                              -                               |
|       show-refresher-update-time        |                     是否显示最后更新时间                     |    Boolean     |      false      |                             true                             |
|        refresher-update-time-key        | 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串 |     String     |     default     |                              -                               |
|         refresher-default-text          | 自定义下拉刷新默认状态下的文字(use-custom-refresher为true时生效)<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object |  继续下拉刷新   |                              -                               |
|         refresher-pulling-text          | 自定义下拉刷新松手立即刷新状态下的文字(use-custom-refresher为true时生效)<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object |  松开立即刷新   |                              -                               |
|        refresher-refreshing-text        | 自定义下拉刷新刷新中状态下的文字(use-custom-refresher为true时生效)<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object |   正在刷新...   |                              -                               |
|      refresher-end-bounce-enabled       | 是否开启自定义下拉刷新刷新结束回弹效果<p style="color:red;">(use-custom-refresher为true时生效)</p> |    Boolean     |      true       |                            false                             |
|         refresher-default-style         | 设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式 |     String     |      black      |                         white、none                          |
|          refresher-background           |                设置自定义下拉刷新区域背景颜色                |     String     | #FFFFFF00(透明) |                              -                               |
|       refresher-fixed-background        |             设置固定的自定义下拉刷新区域背景颜色             |     String     | #FFFFFF00(透明) |                              -                               |
|       refresher-fixed-bac-height        |               设置固定的自定义下拉刷新区域高度               | Number\|String |        0        |                              -                               |
|           refresher-out-rate            | 设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。<p style="color:red;">(nvue无效)</p> |     Number     |       0.7       |                              -                               |
|              refresher-fps              | 自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题<p style="color:red;">(use-custom-refresher为true时生效)</p> | Number\|String |       40        |                              -                               |
|           refresher-max-angle           | 自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发。<p style="color:red;">(值小于0或大于90时，代表不受角度限制)</p> | Number\|String |       40        |                             0-90                             |
| refresher-angle-enable-change-continued | 自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势 |    Boolean     |      false      |                             true                             |
