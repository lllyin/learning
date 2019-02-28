IOS safari下，无法实现`input`、`textarea`、`contenteditable = true`等元素的autofocus（触发这些元素的click事件来达到focus也是行不通的），这是一个IOS的「安全功能」而不是「bug」

IOS safari在编程触发focus时，会检查调用栈，如果当前栈元素的的下一个元素，是用户触发的调用，那么focs起作用，否则不起任何作用

## 实验如下：

```html
<input type="text" autofocus class="input">
<!-- input/textarea/contenteditable="true" 等可以focus的元素都是一样的，不支持autofocus -->
<!-- <div contenteditable="true" class="input"></div> -->
<!-- <textarea class="input"></textarea> -->
<button class="button">点击focus</button>
<script>
   document.addEventListener('DOMContentLoaded', function () {
      const input = document.querySelector('.input')
      // input.focus() // 直接focus不起作用
      
      // 新建一个btn，编程方式触发其click，然后触发focus也不行
      // const btn = document.createElement('button')
      // btn.onclick = function () {
      //    console.log('btn\'s click')
      //    input.focus()
      // }
      // btn.click()
      
      // 只有用户触发的事件才能focus
      const button = document.querySelector('.button')
      button.onclick = function () {
         console.log('button click ...')
         // 起作用，下一个栈元素是onclick，这个调用是用户触发的
         input.focus()
         // 不起作用，下一个调用站是setTimeout，这个调用是编程方式触发的
         // setTimeout(() => {
         //    input.focus()
         // })
      }
   })
</script>
```

## 参考：
1. https://juejin.im/entry/59e5b5246fb9a0450406f1e1
2. https://stackoverflow.com/questions/6287478/mobile-safari-autofocus-text-field
3. http://www.cnblogs.com/shuiyi/p/5419585.html 

在UIWebview下可以设置`keyboardDisplayRequiresUserAction`为`NO`，禁用掉这个限制，所以`Hybrid App`中嵌入的网页可以实现`autofocus`

> 2018-05-30
