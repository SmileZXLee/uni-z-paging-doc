### 底部加载更多配置

| 参数                                                | 说明                                                         | 类型           | 默认值                 | 可选值 |
| :-------------------------------------------------- | :----------------------------------------------------------- | :------------- | :--------------------- | :----- |
| loading-more-enabled                                | 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据) | Boolean        | true                   | false  |
| lower-threshold                                     | 距底部/右边多远时，触发 scrolltolower 事件，默认单位为px。<p style="color:red;">(支持传100、"100px"或"100rpx")</p> | Number\|String | 100rpx                 | -      |
| to-bottom-loading-more-enabled                      | 是否启用滑动到底部加载更多数据                               | Boolean        | true                   | false  |
| show-loading-more-when-reload <Badge text="1.7.2"/>                       | 调用reload方法时自动显示加载更多view，且为加载中状态<p style="color:red;">(仅初始设置有效，不可动态修改)</p> | Boolean        | false                  | true   |
| loading-more-theme-style                            | 底部加载更多的主题样式，支持black，white                     | String         | black                  | white  |
| loading-more-custom-style                           | 自定义底部加载更多样式；如：{'color':'red'}                  | Object         | -                      | -      |
| loading-more-loading-icon-custom-style              | 自定义底部加载更多加载中动画样式                             | Object         | -                      | -      |
| loading-more-loading-icon-type                      | 自定义底部加载更多加载中动画图标类型，可选flower或circle，默认为flower | String         | flower                 | circle |
| loading-more-loading-icon-custom-image              | 自定义底部加载更多加载中动画图标图片，若设置则使用自定义的动画图标，`loading-more-loading-icon-type`将无效<p style="color:red;">(nvue无效)</p> | String         | -                      | -      |
| loading-more-loading-animated <Badge text="1.9.4"/>                       | 底部加载更多加载中view是否展示旋转动画<p style="color:red;">(loading-more-loading-icon-custom-image有值时有效，nvue无效)</p> | Boolean        | true                   | false  |
| loading-more-default-text                           | 滑动到底部"默认"文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object | 点击加载更多           | -      |
| loading-more-loading-text                           | 滑动到底部"加载中"文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object | 正在加载...            | -      |
| loading-more-no-more-text                           | 滑动到底部"没有更多"文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object | 没有更多了             | -      |
| loading-more-fail-text                              | 滑动到底部"加载失败"文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object | 加载失败，点击重新加载 | -      |
| hide-loading-more-when-no-more-and-inside-of-paging | 当没有更多数据且分页内容未超出z-paging时是否隐藏没有更多数据的view(nvue不支持，nvue中请使用`hide-loading-more-when-no-more-by-limit`控制) | Boolean        | false                  | true   |
| hide-loading-more-when-no-more-by-limit             | 当没有更多数据且分页数组长度少于这个值时，隐藏没有更多数据的view，默认为0，代表不限制。此属性优先级高于`hide-loading-more-when-no-more-and-inside-of-paging` | Number         | 0                      | -      |
| inside-more <Badge text="2.0.0"/>                                         | 当分页未满一屏时，是否自动加载更多(nvue无效)                 | Boolean        | false                  | true   |
| show-loading-more-no-more-view                      | 是否显示没有更多数据的view                                   | Boolean        | true                   | false  |
| show-default-loading-more-text                      | 是否显示默认的加载更多text                                   | Boolean        | true                   | false  |
| show-loading-more-no-more-line                      | 是否显示没有更多数据的分割线，默认为是                       | Boolean        | true                   | false  |
| loading-more-no-more-line-custom-style              | 自定义底部没有更多数据的分割线样式                           | Object         | -                      | -      |