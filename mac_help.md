## 1. Macbook 删除搜狗输入法

打开命令行
> 将user替换成你当前的用户名。如果提示权限不够，请使用`sudo`
```
rm -rf /Library/Input\ Methods/SogouInput.app
rm -rf /Users/user/Library/Caches/SogouServices
rm -rf /Users/user/.sogouinput
```

## 2. Mac彻底删除一个APP

1. 首先将应用拖入垃圾桶，app store安装的可以长按卸载。

2. 删除其他文件（程序员版）
使用终端分别进入到以下目录：
```
~/Library/Application Support/
~/Library/Preferences/
~/Library/Caches/
~/Library/Containers
~/Library/LaunchAgents/
~/Library/PreferencePanes/
~/Download
/System/Library/LaunchDaemons/
/System/Library/LaunchAgents/
```
找寻所要删除的文件夹或者文件，执行 rm -f <文件名> 或者 rm -rf <文件夹名>
[参考链接](https://www.jianshu.com/p/6728dd12ea71)
