::: warning 通知
由于此域名`z-paging.com`未备案，只能部署在国外的服务器上，因此此网站访问速度较慢。  
为提供更快速的文档浏览体验，推荐访问国内镜像： [https://z-paging.zxlee.cn](https://z-paging.zxlee.cn)，感谢大家理解和支持。
:::

```html                                  
  ____     _ __   __ _  __ _(_)_ __   __ _ 
 |_  /____| '_ \ / _` |/ _` | | '_ \ / _` |
  / /_____| |_) | (_| | (_| | | | | | (_| |
 /___|    | .__/ \__,_|\__, |_|_| |_|\__, |
          |_|          |___/         |___/   文档
—————————————————————————————————————————————————
v2.1.6 (2022-02-25)
- by ZXLee
感谢使用^_^
```
###  ⭐️ 如果您觉得`z-paging`还不错的话，可以点一个star鼓励一下(＾ω＾)👉🏻  [![Github stars](https://img.shields.io/github/stars/smilezxlee/uni-z-paging?logo=GitHub)](https://github.com/SmileZXLee/uni-z-paging)
## 基本使用
```html
<template>
    <view class="content">
        <z-paging ref="paging" v-model="dataList" @query="queryList">
            <view class="item" v-for="(item,index) in dataList" :key="index">
                <view class="item-title">{{item.title}}</view>
            </view>
        </z-paging>
    </view>
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
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	this.$refs.paging.complete(res.data.list);
                })
            }
        },
    };
</script>

<style scoped>
    
</style>
```
[查看详情](../start/use)

::: danger 特别注意
#### ① v-model所绑定的list请不要在网络请求成功回调中自己修改，只需要将请求结果通过`this.$refs.paging.complete(请求回调数组)`传给z-paging即可，不要自己给list赋值！！
#### ② @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用`this.$refs.paging.reload()`即可。
:::

<center style="margin-bottom:10px;"><img src="https://visitor-badge.glitch.me/badge?page_id=smilezxlee.z-paging" /></center> 
<div style="margin-bottom:-80px; display:flex;justify-content: center;font-size:13px;">Copyright 2021 z-paging | <a style="color: #014084;margin-left:5px;" href="https://beian.miit.gov.cn/" target="_blank">闽ICP备17015849号-1</a></div>
