## CSS规范

> 个人总结，仅做交流学习

### 命名规则

#### 1. 使用小写命名，不建议使用大写或大小写混合
```
/* Not recommended */
.BOX{
  width: 300px;
  height: 200px;
}
```
```
/* Recommended */
.box{
  width: 300px;
  height: 200px;
}
```

#### 2. 使用有含义的 id 和 class 名称
```
/* Not recommended: meaningless */
#yee-1901 {}

/* Not recommended: presentational */
.button-green {}
.clear {}
```
/* Recommended: specific */
#gallery {}
#login {}
.video {}

/* Recommended: generic */
.aux {}
.alt {}


### 3. id 和 class 应该尽量简短，同时要容易理解。
/* Not recommended */
#navigation {}
.atr {}
/* Recommended */
#nav {}
.author {}


### 嵌套建议

#### 1. 嵌套层级不应该超过三层 

    层级太深，客户端css解析效率就会降低



### 组件样式（如：react、vue组件开发）

#### 1.

### 其他

1. 少用id，因为ID会注册为window全局变量，造成变量污染

2. 样式值为小数，不用加0
```
font-size: .8em;
```


## 参考文献
1. [[译]谷歌 HTML/CSS 规范](https://segmentfault.com/a/1190000007023192#articleHeader21)

