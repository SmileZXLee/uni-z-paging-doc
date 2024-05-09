### z-index配置 <Badge text="1.7.0"/>

::: tip 说明

* z-index仅同级view才会相互影响，以下参数对应的view的层级结构如下：

  > z-paging
  >
  > > top-z-index
  > > super-content-z-index 
  > >
  > > > content-z-index
  > > > empty-view-z-index

* 这意味着`top-z-index`和`super-content-z-index`会相互影响；`content-z-index`和`empty-view-z-index`会相互影响。
  :::

| 参数                  | 说明                                            | 类型   | 默认值 | 可选值 |
| :-------------------- | :---------------------------------------------- | :----- | :----- | :----- |
| top-z-index           | slot="top"的view的z-index，仅使用页面滚动时有效 | Number | 99     | -      |
| super-content-z-index | z-paging内容容器父view的z-index                 | Number | 1      | -      |
| content-z-index       | z-paging内容容器部分的z-index                   | Number | 1     | -      |
| empty-view-z-index    | 空数据view的z-index                             | Number | 9      | -      |