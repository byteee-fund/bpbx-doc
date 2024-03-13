# 安装
## 系统要求

  * Ubuntu 22.0 或其他Debian系统



## 安装步骤

点击购买，获取安装包，下载安装包到服务器

```shell
wget https://xxxxx/bpbx.tar.gz
```



解压安装包

```shell
tar -zxvf bpbx.tar.gz
```



执行安装脚本

```
cd bpbx
./install.sh
```

安装过程中，会询问进行UDP端口设置，如果是公网服务器，建议修改为其他端口



打开浏览器访问：` http://你的服务器IP:8888` 即可访问到管理配置后台

>默认用户名admin， 密码：123456`



## 公网访问

默认BPBX 已经开了`NAT`，如果你的服务器托管在云服务厂商，请注意开启相关端口配置。

* 8888 web服务器端口
* 8889 后台接口端口
* UDP端口 （根据自己的配置）
* RTP端口（范围10000 - 20000）



## 服务管理

启动BPBX服务

```shell
service start bpbx
```

停止BPBX服务

```shell
service stop bpbx
```





