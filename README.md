# Robotics Portfolio

机器人项目展示：宇树 G1 动作演示与 VLA 仿真任务。

## 内容

- 宇树 G1：4 个视频，页面保留参考主页来源链接。
- VLA 仿真：Task 1、Task 2、Task 3 三个视频。
- 全部视频和真实画面封面位于 `assets/`，使用相对路径。

## 维护

编辑 `projects.js` 修改项目标题、说明、视频或封面路径；编辑 `style.css` 调整外观。将更改提交到 `main` 后，GitHub Pages 会重新发布。

## 本地预览

安装 Node.js 后，在此目录运行 `node server.mjs`，打开终端显示的本地预览地址。不需要安装依赖。预览服务只监听本机，使用 Ctrl+C 停止。

## GitHub Pages

仓库 Settings → Pages，选择 Deploy from a branch、main、/(root)。`index.html` 位于仓库根目录，`.nojekyll` 禁用 Jekyll 构建。网站不需要服务器端程序。

`media-sources.json` 记录视频来源，`asset-checksums.json` 记录媒体文件校验值。
