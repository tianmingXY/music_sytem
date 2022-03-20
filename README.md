# 基于大数据分析的音乐推荐系统，毕业设计时候做的，功能相对完善，重点界面美观，代码注释多  【有论文文档】

#### 介绍
基于大数据分析的音乐推荐系统，毕业设计时候做的，功能相对完善，重点界面美观，代码注释多，具体功能看下面的运行效果截图，
#  系统功能：
## 前台：用户登陆注册，歌曲搜索，分页显示，按照音乐标签分类，用户标签选择，音乐评分，音乐评论，算法推荐音乐，标签推荐音乐，问卷调查，公告查看。
## 后台：管理员管理，用户管理，问卷管理，留言管理，友情链接管理，标签管理，音乐管理，公告管理。

#### 使用技术说明
###  开发框架   Spring+SpringMVC+Mybatis （SSM框架）或者Springboot框架两个版本，
###  数据库采用  MYSQL  （5.x版本或者8.x版本都支持 都可以正常使用）
###  开发工具可以使用Eclipse和IntelliJ IDEA ，我这里把代码转换为了这两个开发工具都可以使用。


#### 软件架构
软件架构说明


#### 安装使用教程

基于大数据分析的音乐推荐系统

用户测试账号    test  123456

管理员测试账号  admin   123456

数据库每个表都有详细注释

代码也有详细注释（详细说明）

前段使用技术：html+JavaScript+css+layui+jQuery


前台：用户登陆注册，歌曲搜索，分页显示，按照音乐标签分类，用户标签选择，音乐评分，
音乐评论，算法推荐音乐，标签推荐音乐，问卷调查，公告查看。
后台：管理员管理，用户管理，问卷管理，留言管理，友情链接管理，标签管理，音乐管理，公告管理。



网站前端：http://localhost:8080/CommonWeb/pc/index

网站后台:http://localhost:8080/CommonWeb/manage/login

4.系统实现（基础代码，业务功能代码的编写）

com   项目包结构说明

└─module

    ├─controller  控制层，负责请求的处理，数据库的操作调用

    ├─mapper      数据库操作接口，sql文件在xml中的配置

    ├─pojo        数据库对应实体类，用来和数据库表实现映射关系

    └─util        java中常见工具类的存放


所有WEB-INF/view/pc文件夹中的都是前端相关jsp页面

    login.jsp 登录页面

    register.jsp   注册页面

    index.jsp 首页

    code.jsp 验证码生成页面

    liuyan.jsp 留言添加显示页面

    ....
所有WEB-INF/view/manage文件夹中的都是后台管理相关jsp页面，按照文件夹进行划分表，
    每一个文件夹对应一张表的操作，例如userinfo是用户表的所有管理操作。
### 前端首页
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100525_b8be8351_865419.jpeg "个人中心.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100532_1a99a346_865419.jpeg "公告.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100542_d4f383d3_865419.jpeg "首页.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100549_fa35ffab_865419.jpeg "问卷调查.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100558_fca24f43_865419.jpeg "详情.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100606_f11e3521_865419.jpeg "协同过滤算法推荐.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100616_5b60299e_865419.jpeg "音乐标签推荐.jpg")

![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100625_1be64347_865419.jpeg "音乐评分.jpg")

#### 运行效果截图
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100632_4fbb415f_865419.jpeg "后台登陆.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100640_826150d1_865419.jpeg "公告管理.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100648_91c9beaa_865419.jpeg "管理员修改密码.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2022/0320/100656_427bd6d5_865419.jpeg "音乐管理.jpg")

### 运行中有什么不明白的地方或者不会运行，可以加我扣扣联系1516993194

