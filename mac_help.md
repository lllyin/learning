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

## 3. mac cat显示换行符

mac的cat命令和linux的cat命令参数非常，记录一下。

### 基本语法
cat基本用途是把指定文件读取出来，并输出到STDOUT中。
```
cat [-benstuv] [file ...]
```
### 参数含义
```
-b 打印出行数，不包含空白行，从1开始

-n 打印出行数，包括空白航，从1开始
-e 显示不能打印的字符，每行结尾打印$符号
-t 显示不能打印的字符，制表符显示为^I
```
### 示例
```
打印一个文件到终端来查看其中内容

cat file

打印文件到另一个文件中

cat file1 > file2

打印文件到另一个文件结尾

cat file1 >> file2

显示换行符, $代表 \r是unix换行符，^M$是\r\n为window默认换行符

cat -e file
```


## 4. Mac针对没有语言设置选项的app修改默认语言
1. 查看app包名

    语法：osascript -e 'id of app "App名"'
    ```sh
      // 例如Finder com.apple.finder
      osascript -e 'id of app "Finder"'

      // 例如企业微信 com.tencent.WeWorkMac
      osascript -e 'id of app "企业微信"'
    ```

2. 打开终端，在Terminal运行下面的命令。将包名替换成步骤一的即可。
    ```sh
    defaults write com.tencent.WeWorkMac AppleLanguages '("zh-CN")'
    ```
3. 重启app
