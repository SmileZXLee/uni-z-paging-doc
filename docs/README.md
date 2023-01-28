::: danger 2023新年快乐！！🎉🧨🎉🧨
（`・ω・)つ━☆・*。祝大家在新的一年里工作顺利，事事顺心！  
<span style="font-size: 14px;font-weight: bold;">工作再忙，也要记得照顾好自己･◡･</span>
:::

<!-- ::: tip 虚拟列表
`z-paging`现已支持虚拟列表，支持cell动态高度。轻松渲染万级数据！[点击查看](../../api/props/virtual-list.html)
::: -->

```html                                  
  ____     _ __   __ _  __ _(_)_ __   __ _ 
 |_  /____| '_ \ / _` |/ _` | | '_ \ / _` |
  / /_____| |_) | (_| | (_| | | | | | (_| |
 /___|    | .__/ \__,_|\__, |_|_| |_|\__, |
          |_|          |___/         |___/   文档
—————————————————————————————————————————————————
v2.5.0 (2023-01-28)
- by ZXLee
感谢使用^_^
```
###  ⭐️ 如果您觉得`z-paging`还不错的话，可以点一个star鼓励一下(＾ω＾)👉🏻  [![Github stars](https://img.shields.io/github/stars/smilezxlee/uni-z-paging?logo=GitHub&style=flat-square)](https://github.com/SmileZXLee/uni-z-paging)
## 基本使用
### `选项式api写法(vue2/vue3)`
```html
<template>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
        <view class="item" v-for="(item,index) in dataList" :key="index">
            <view class="item-title">{{item.title}}</view>
        </view>
    </z-paging>
</template>

<script>
    export default {
        data() {
            return {
                dataList: []
            };
        },
        methods: {
            queryList(pageNo, pageSize) {
				// 此处请求仅为演示，请替换为自己项目中的请求
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	this.$refs.paging.complete(res.data.list);
                })
            }
        },
    };
</script>
```
### `组合式api写法(vue3)`

```html  
<template>
    <!-- 与选项式api写法一致 -->
</template>

<script setup>
    import { ref } from 'vue';
    const paging = ref(null)
    let dataList = ref([])
    
    const queryList = (pageNo, pageSize) => {
		// 此处请求仅为演示，请替换为自己项目中的请求
        request.queryList({ pageNo,pageSize }).then(res => {
            paging.value.complete(res.data.list);
        })
    }
</script>
```

::: danger 特别注意
#### ① v-model所绑定的list请不要在网络请求成功回调中自己修改，只需要将请求结果通过`this.$refs.paging.complete(请求回调数组)`传给z-paging即可，不要自己给list赋值！！
#### ② @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用`this.$refs.paging.reload()`即可。
:::

<center style="margin-bottom:10px;"><img src="https://visitor-badge.glitch.me/badge?page_id=smilezxlee.z-paging" /></center>
<img style="display:none" src="https://api.z-notify.zxlee.cn/v1/public/statistics/8293556910106066944/addOnly" />
<div style="margin-bottom:-80px; display:flex;justify-content: center;font-size:13px;">Copyright 2021-2023 z-paging | <a style="color: #014084;margin-left:5px;" href="https://beian.miit.gov.cn/" target="_blank">闽ICP备17015849号-1</a></div>
