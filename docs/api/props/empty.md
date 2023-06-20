### 空数据与加载失败配置

::: tip 说明
下方的“空数据图”与“加载失败图”等效，因为它们是共用同一个组件的。
:::

| 参数                                                    | 说明                                                         | 类型           | 默认值           | 可选值 |
| :------------------------------------------------------ | :----------------------------------------------------------- | :------------- | :--------------- | :----- |
| hide-empty-view                                         | 是否强制隐藏空数据图                                         | Boolean        | false            | true   |
| empty-view-fixed <Badge text="2.0.3"/>                  | 空数据图片是否铺满z-paging，默认为否，即填充满z-paging内列表(滚动区域)部分。若设置为否，则为填铺满整个z-paging | Boolean        | false            | true   |
| empty-view-center <Badge text="2.0.6"/>                 | 空数据图片是否垂直居中，默认为是，若设置为否即为从空数据容器顶部开始显示<p style="color:red;">(`empty-view-fixed`为false时有效)</p><p style="color:red;">(在nvue中，如果列表内占位的cell特别高导致空数据图特别靠下甚至超出屏幕外时，请务必设置此属性为false！)</p> | Boolean        | true             | false  |
| empty-view-text                                         | 空数据图描述文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文','zh-Hans':'简体中文','zh-Hant':'繁体中文'}的i18n配置)</p> | String\|Object | 没有数据哦~      | -      |
| empty-view-img                                          | 空数据图图片，默认使用z-paging内置的图片<br><p style="color:red;">(建议使用绝对路径，开头不要添加"@"，请以"/"开头)</p> | String         | -                | -      |
| empty-view-error-img <Badge text="1.6.7"/>              | 空数据图“加载失败”图片，默认使用z-paging内置的图片<br><p style="color:red;">(建议使用绝对路径，开头不要添加"@"，请以"/"开头)</p> | String         | -                | -      |
| empty-view-reload-text <Badge text="1.6.7"/>            | 空数据图点击重新加载文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文','zh-Hans':'简体中文','zh-Hant':'繁体中文'}的i18n配置)</p> | String\|Object | 重新加载         | -      |
| empty-view-error-text <Badge text="1.6.7"/>             | 空数据图“加载失败”描述文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文','zh-Hans':'简体中文','zh-Hant':'繁体中文'}的i18n配置)</p> | String\|Object | 很抱歉，加载失败 | -      |
| empty-view-super-style                                  | 空数据图父view样式                                           | Object         | {}               | -      |
| empty-view-style                                        | 空数据图样式，可设置空数据view的top等，<br>如`:empty-view-style="{'top':'100rpx'}"`(如果空数据图不是fixed布局，则此处是`margin-top`) | Object         | {}               | -      |
| empty-view-img-style                                    | 空数据图img样式                                              | Object         | {}               | -      |
| empty-view-title-style                                  | 空数据图描述文字样式                                         | Object         | {}               | -      |
| empty-view-reload-style <Badge text="1.6.7"/>           | 空数据图重新加载按钮样式                                     | Object         | {}               | -      |
| show-empty-view-reload <Badge text="1.6.7"/>            | 是否显示空数据图重新加载按钮(无数据时)                       | Boolean        | false            | true   |
| show-empty-view-reload-when-error <Badge text="1.6.7"/> | 加载失败时是否显示空数据图重新加载按钮                       | Boolean        | true             | false  |
| auto-hide-empty-view-when-loading                       | 加载中时是否自动隐藏空数据图                                 | Boolean        | true             | false  |
| auto-hide-empty-view-when-pull <Badge text="2.0.9"/>    | 用户下拉列表触发下拉刷新加载中时是否自动隐藏空数据图         | Boolean        | true             | false  |