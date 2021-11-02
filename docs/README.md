
```html                                  
  ____     _ __   __ _  __ _(_)_ __   __ _ 
 |_  /____| '_ \ / _` |/ _` | | '_ \ / _` |
  / /_____| |_) | (_| | (_| | | | | | (_| |
 /___|    | .__/ \__,_|\__, |_|_| |_|\__, |
          |_|          |___/         |___/   文档
—————————————————————————————————————————————————
V 2.0.9
- by ZXLee
感谢使用^_^
```

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
              	//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
              	//这里的请求只是演示，请替换成自己的项目的网络请求，请在网络请求回调中
              	//通过this.$refs.paging.complete(请求回来的数组);将请求结果传给z-paging
                this.$request.queryList(pageNo, pageSize, (data) => {
                    this.$refs.paging.complete(data);
                });
            },
        },
    };
</script>

<style scoped>
    
</style>
```

::: danger 特别注意
#### ① v-model所绑定的list请不要在网络请求成功回调中自己修改，只需要将请求结果通过`this.$refs.paging.complete(请求回调数组)`传给z-paging即可，不要自己给list赋值！！
#### ② @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用`this.$refs.paging.reload()`即可。
:::