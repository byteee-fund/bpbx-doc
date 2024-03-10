# 安装BPBX

## 系统要求

  * Ubuntu 22.0 或其他Debian系统



## 安装步骤

下载安装包

```shell
wget https://xxxxx.com/bpbx.tar.gz
```



解压安装

```shell
tar -zxvf bpbx.tar.gz
```



执行安装脚本

```
cd bpbx
./install.sh
```

安装过程中，会询问进行UDP端口设置，根据情况进行设置



## 服务管理

启动BPBX服务

```shell
service start bpbx
```

停止BPBX服务

```shell
service stop bpbx
```





