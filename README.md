<div align="center">

# 不再害怕搞坏仓库

**一个中文 Git / GitHub 学习工作区：11 节课，从图形界面走到命令行，再到自动化发布。**

`11 节课` · `4 个模块` · `5 张速查表` · `每天 2 小时`

</div>

---

很多人用过 `git clone`、点过 VSCode 的提交按钮，但心里一直没底：

- commit 之后为什么 GitHub 上没有？
- 改乱了、提错了，还能救回来吗？
- 分支、冲突、远程……到底是怎么串起来的？

这个仓库就是为了解决这些问题而写的。**每一课都是一个自包含的 HTML 页面**，讲解 + 图解 + 小测 + 动手任务，跟着做就能把 Git 变成顺手工具，而不是玄学。

## 🗺️ 课程地图

```text
$ git log --oneline --graph
│ * 01 Git 和 GitHub 到底是什么关系？
│ * 02 日常安全网：.gitignore、撤销、提交信息
│ * 03 分支：安全的平行宇宙
│ * 04 正面解决合并冲突
│ * 05 远程仓库与 GitHub 认证
│ * 06 效率三件套：stash / amend / cherry-pick
│ * 07 撤销事故：reset vs revert
│ * 08 把项目打造成像样的开源仓库
│ * 09 CI/CD 概念与第一个 GitHub Actions
│ * 10 实战：自动测试 + 自动部署
│ * 11 毕业项目：完整开源发布流程   ← tag: v1.0 🎓
```

### 模块一 · 生存基础

> 先跑通日常闭环，建立"错了也能救回来"的安全感

| 课 | 主题 | 核心产出 |
|---|------|----------|
| [01](lessons/0001-git-vs-github-four-zones.html) | Git 和 GitHub 到底是什么关系？ | Git 是什么、`git init` 与 `.git`，四个区域心智模型 |
| [02](lessons/0002-gitignore-undo-commit-message.html) | 日常安全网 | `.gitignore`、restore / amend 撤销、规范提交信息 |

### 模块二 · 分支与协作基础

> 学会在平行宇宙里工作，连冲突都不再可怕

| 课 | 主题 | 核心产出 |
|---|------|----------|
| [03](lessons/0003-branches-and-merge.html) | 分支：安全的平行宇宙 | 创建 → 开发 → 合并循环 |
| [04](lessons/0004-merge-conflicts.html) | 正面解决合并冲突 | 故意制造并解决冲突，掌握 `--abort` 逃生门 |
| [05](lessons/0005-remotes-and-auth.html) | 远程仓库与 GitHub 认证 | `origin` / `push -u` / SSH 免密 |

### 模块三 · 掌控历史

> 效率工具 + 事故救援，还有保命的 reflog

| 课 | 主题 | 核心产出 |
|---|------|----------|
| [06](lessons/0006-stash-amend-cherry-pick.html) | 效率三件套 | `stash` / `amend` / `cherry-pick` |
| [07](lessons/0007-undo-emergency.html) | 撤销事故 | reset 三模式 vs revert，reflog 救命药 |

### 模块四 · GitHub 与自动化

> 让仓库像模像样，再让 Actions 替你干活

| 课 | 主题 | 核心产出 |
|---|------|----------|
| [08](lessons/0008-github-repo-setup.html) | 像样的开源仓库 | README / LICENSE / tag / Release |
| [09](lessons/0009-ci-cd-github-actions-basics.html) | CI/CD 与 Actions 入门 | 第一条 workflow，学会看失败日志 |
| [10](lessons/0010-actions-deploy.html) | 自动测试 + 自动部署 | Pages 上线 / Secrets / tag 自动 Release |
| [11](lessons/0011-capstone.html) | 毕业项目 | 独立完成 开发 → 合并 → CI → 发布 → 部署 |

## ⚡ 速查表

卡住时先查这里，也适合长期复习：

- [Git 四个区域](reference/git-zones.html) —— 数据在 working / stage / local / remote 之间怎么流动
- [撤销与急救](reference/undo-cheatsheet.html) —— 改错了、提错了、合错了怎么救
- [分支与合并](reference/branching-cheatsheet.html) —— 日常分支操作速查
- [GitHub Actions](reference/github-actions-cheatsheet.html) —— workflow 语法与常用写法
- [课程地图](reference/course-map.html) —— 全部 11 课总览

## ✅ 学习进度

边学边勾（在 GitHub 上编辑 README 直接勾选即可记录进度）：

- [ ] 01 · Git 和 GitHub 到底是什么关系？
- [ ] 02 · 日常安全网
- [ ] 03 · 分支：安全的平行宇宙
- [ ] 04 · 正面解决合并冲突
- [ ] 05 · 远程仓库与 GitHub 认证
- [ ] 06 · 效率三件套
- [ ] 07 · 撤销事故
- [ ] 08 · 像样的开源仓库
- [ ] 09 · CI/CD 与 Actions 入门
- [ ] 10 · 自动测试 + 自动部署
- [ ] 11 · 毕业项目 🎓

## 🚀 怎么用这个仓库

1. **打开 [index.html](index.html)**（本地浏览器打开即可）——课程导航主页，带进度记录
2. 每天 1 课（约 40 分钟）+ 30 分钟在**你自己的真实项目**里动手复习
3. 每课末尾有动手任务，卡住了就把命令和报错贴给 AI 教练问个明白
4. 全部 11 课学完，你应该能独立完成：从本地提交到 GitHub 发布，再到 Actions 自动部署

## 📚 推荐外部资源

| 资源 | 什么时候用 |
|------|-----------|
| [Pro Git 中文版](https://git-scm.com/book/zh/v2) | 任何概念的正统解释，第 2、3 章是核心 |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN) | 可视化闯关游戏，练分支直觉 |
| [Oh Shit Git!](https://ohshitgit.com/zh) | 出事了怎么救 |
| [GitHub Docs: Using Git](https://docs.github.com/en/get-started/using-git) | GitHub 侧操作与 push 报错排查 |
| [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials) | commit / branch / merge 的高质量图解 |

## 📁 仓库结构

```text
.
├── index.html          # 课程导航主页（本地打开）
├── lessons/            # 11 节课，每课一个 HTML
├── reference/          # 5 张速查表 + 课程地图
├── assets/             # 共享样式与测验组件
├── learning-records/   # 学习记录（起点、课程调整）
├── MISSION.md          # 学习目标：为什么要学这些
└── RESOURCES.md        # 外部资源清单
```

---

<div align="center">

*Git 的恐惧来自不了解，历史都在 `.git` 里，随时可以救回来。*

</div>
