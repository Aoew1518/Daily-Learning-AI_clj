# git 使用
- 拉取代码：
    git clone
- 查看状态：
    git status
- 查看或创建分支：
    git branch
- 切换分支：
    git checkout '分支名'
- 暂存文件并 merge 代码
    git stash
    git pull --rebase / git pull origin master
    git stash pop
    - 暂存暂存的更改文件，即已经 add 过的文件
        git stash push --staged -m "add file"
    - 恢复特定 stash
        git stash apply stash@{0}
    - 删除特定 stash
        git stash drop stash@{0}
    - 直接应用并删除 stash
        git stash pop stash@{0}
- 添加暂存文件：
    git add
- 提交本地仓库：
    git commit -m ''
    git commit --amend
- 提交到指定远程仓库分支：
    git push origin dbg_image_test
    - 提交评审（看开发要求或使用特定命令）
        git push origin HEAD:refs/for/dbg_image_test

# 提交错误的内容到远程分支怎么办？
- 查看提交历史，并找到需要撤销的提交哈希值:
    git reflog / git log
    - 恢复指定提交（soft会保留包括修改和新增的文件）：
        git reset --soft xxx
    - 撤销错误提交
        git revert abc1234
- git push origin master

# 跳过 eslint 校验
git commit --amend --no-verify

# 依赖包更新&删除
rm -rf package-lock.json 这个命令会强制递归删除当前目录下的 package-lock.json 文件。如果该文件存在，命令会直接删除它，而不会做任何提示。

# 来个背景渲染气氛
![](https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/abed09ad2a76582ccb53485786082906.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_960%2ch_540)