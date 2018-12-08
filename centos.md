## CENTOS: 增加SWAP的大小

* 第一步：关闭SWAP

` sudo swapoff -a`

* 第二步：把当前的SWAP文件增大

 `sudo dd if=/dev/zero of=/swapfile bs=1M count=1024`

> bs指的是Block Size，就是每一块的大小。这里的例子是1M，意思就是count的数字，是以1M为单位的。
counter是告诉程序，新的swapfile要多少个block。这里是1024，就是说，新的swap文件是1G大小。

* 第三步：把增大后的文件变为swap文件。

`sudo mkswap /swapfile`

* 第四步：重新打开swap

` sudo swapon /swapfile `

* 第五步：让swap在启动的时候，自动生效。打开/etc/fstab文件
sudo vim /etc/fstab


第六步：最后一行，加上以下命令。然后保存。

`/swapfile swap swap defaults 0 0`


完成。
