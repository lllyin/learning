# learning
前端踩坑记

## css判断某元素的子元素个数，并分别设置样式
```css
 /*ul只有一个子元素的样式*/
li:nth-last-child(1):first-child{
    width:100%;
}

  /*ul有2个子元素的样式*/
 /*li:nth-last-child(2):first-child,  是倒数第二个元素，又是第一个元素，说明li的父元素ul有2个子元素（起到了 判断某父元素下有几个子元素 的作用）*/
li:nth-last-child(2):first-child,
/* ~ 选择位于li:nth-last-child(2):first-child 即 第一个子元素之后的元素*/
li:nth-last-child(2):first-child ~ li{
    width:calc(100% / 2);
}

/*ul有3个子元素的样式*/
/*第一个元素宽度为1/3，字体颜色为蓝色*/
li:nth-last-child(3):first-child{
    width:calc(100% / 3);
    color:blue;
}
/*第一个元素之后的第一个元素（即 有3个子元素的ul 的 第 3 个元素）*/
li:nth-last-child(3):first-child ~ li:nth-last-child(1){
    width:calc(100% / 4);
    color:red;
}
/*第一个元素之后的第一个元素（即 有3个子元素的ul 的 第 2 个元素）*/
li:nth-last-child(3):first-child ~ li:nth-last-child(2){
    width:calc(100% / 6);
    color:yellow;
}
```
[原文链接](https://segmentfault.com/a/1190000010359642) 2018.12.4

## X-Content-Type-Options请求头
互联网上的资源有各种类型，通常浏览器会根据响应头的Content-Type字段来分辨它们的类型。例如："text/html"代表html文档，"image/png"是PNG图片，"text/css"是CSS样式文档。然而，有些资源的Content-Type是错的或者未定义。这时，某些浏览器会启用MIME-sniffing来猜测该资源的类型，解析内容并执行。

> 例如，我们即使给一个html文档指定Content-Type为"text/plain"，在IE8-中这个文档依然会被当做html来解析。利用浏览器的这个特性，攻击者甚至可以让原本应该解析为图片的请求被解析为JavaScript。通过下面这个响应头可以禁用浏览器的类型猜测行为：

` X-Content-Type-Options: nosniff `
这个响应头的值只能是nosniff，可用于IE8+和Chrome。另外，它还被Chrome用于扩展下载，见这里。

[参考链接](https://imququ.com/post/web-security-and-response-header.html) 2019.01.289
