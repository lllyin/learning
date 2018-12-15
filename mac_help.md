## 1. Macbook 删除搜狗输入法

打开命令行
> 将user替换成你当前的用户名。如果提示权限不够，请使用`sudo`
```
rm -rf /Library/Input\ Methods/SogouInput.app
rm -rf /Users/user/Library/Caches/SogouServices
rm -rf /Users/user/.sogouinput
```
