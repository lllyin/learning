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
