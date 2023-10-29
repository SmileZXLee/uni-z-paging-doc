### 其他配置

| 参数                 | 说明                                                         | 类型           | 默认值 | 可选值 |
| :------------------- | :----------------------------------------------------------- | :------------- | :----- | :----- |
| auto-height          | <p style="color:red;">(建议使用fixed代替)</p>z-paging是否自动高度，若自动高度则会自动铺满屏幕，不需要设置父view为100%等操作。（注意：自动高度可能并不准确） | Boolean        | false  | true   |
| auto-height-addition | <p style="color:red;">(建议使用fixed代替)</p>z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，默认为px，若需要减少高度，请传负数。如"-10rpx"，"10.5px" | Number\|String | 0px    | -      |