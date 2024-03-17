## 怎么介绍项目

- 可以安排

- 全栈项目
    - vue 全家桶
    - node 后端api服务 koa/express 登录 +  post 表
    - elementplus 文章列表页 登录

- 介绍项目
    - 后端api服务
        - sql 服务
            - user
                create table user (
                    id int(11) not null auto_increment primary key, 
                    name varchar(255) unique key default null, 
                    password varchar(255) not null
                );
            - avatar 头像表
                create table avatar (
                    id int(11) not null auto_increment primary key,
                    mimetype varchar(255) not null,
                    filename varchar(255) not null,
                    size int(11) not null,
                    user_id int(11) not null,
                    constraint avatar_user_id_fk foreign key (user_id) references user (id) on delete cascade on update cascade
                )
                select filename from avator where user_id = 123;
                索引meet 查询

- sql 是后端项目的核心
- 面试官心态 考查索引 
    - 主键索引  id autoincrement
    - 唯一索引  name 不重复
    - 普通索引  
    - 外键索引
    索引提升查询的速度，项目里用到了哪些查询 加索引，分配相应的空间和数据结构 来加速查询 索引是数据库的主要性能瓶颈

    create table commit(
        id int(11) not null auto_increment primary key,
        content longtext not null,
        postId int(11) not null,
        userId int(11) not null,
        parentId int(11) default null,
        key postID(postId),
        key userId(userId),
        key parentId(parentId)
    )
