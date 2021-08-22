### 空数据与加载失败配置

|               参数                |                             说明                             |      类型      |      默认值      | 可选值 |
| :-------------------------------: | :----------------------------------------------------------: | :------------: | :--------------: | :----: |
|          hide-empty-view          |                     是否强制隐藏空数据图                     |    Boolean     |      false       |  true  |
|          empty-view-text          | 空数据图描述文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object |   没有数据哦~    |   -    |
|          empty-view-img           |  空数据图图片，默认使用z-paging内置的图片(建议使用绝对路径)  |     String     |        -         |   -    |
|       empty-view-error-img        | 空数据图“加载失败”图片，默认使用z-paging内置的图片(建议使用绝对路径) |     String     |        -         |   -    |
|      empty-view-reload-text       | 空数据图点击重新加载文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object |     重新加载     |   -    |
|       empty-view-error-text       | 空数据图“加载失败”描述文字<p style="color:red;">(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)</p> | String\|Object | 很抱歉，加载失败 |   -    |
|         empty-view-style          |                         空数据图样式                         |     Object     |        {}        |   -    |
|       empty-view-img-style        |                       空数据图img样式                        |     Object     |        {}        |   -    |
|      empty-view-title-style       |                     空数据图描述文字样式                     |     Object     |        {}        |   -    |
|      empty-view-reload-style      |                   空数据图重新加载按钮样式                   |     Object     |        {}        |   -    |
|      show-empty-view-reload       |            是否显示空数据图重新加载按钮(无数据时)            |    Boolean     |      false       |  true  |
| show-empty-view-reload-when-error |            加载失败时是否显示空数据图重新加载按钮            |    Boolean     |       true       | false  |
| auto-hide-empty-view-when-loading |            加载中时是否自动隐藏空数据图，默认为是            |    Boolean     |       true       | false  |