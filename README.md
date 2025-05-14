# 择优助手 (Optimal Assistant)

[English](./README_EN.md) | 简体中文

择优助手是一个帮助用户做出更明智决策的Web应用。通过科学的方法和直观的界面，帮助用户在面临选择时进行理性分析，或者反思过去的决策以获取经验教训。

## 功能特点

应用提供两个主要功能模块：

### 1. 选项对比器

帮助用户通过多维度分析比较不同选项：

- 添加多个待选项（最多5个）
- 自定义评估维度及权重
- 为每个选项在各维度上打分
- 自动计算加权总分并可视化展示结果
- 智能推荐最佳选择

### 2. "如果当初"情景模拟

帮助用户反思过去的决策，探索可能的替代结果：

- 记录过去做出的选择及其结果
- 设想替代方案
- 分析替代方案可能带来的影响
- 模拟可能出现的不同结果
- 提供决策反思的结构化总结

## 技术栈

本项目使用以下技术构建：

- **前端框架**：React 19
- **开发语言**：TypeScript
- **构建工具**：Vite
- **样式**：CSS（自定义变量和响应式设计）
- **字体**：Noto Sans SC

## 安装与使用

### 环境要求

- Node.js 18.0 或更高版本
- npm 9.0 或更高版本

### 安装步骤

1. 克隆仓库到本地

```bash
git clone <仓库地址>
cd Optimal-Assistant
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 构建生产版本

```bash
npm run build
```

5. 预览生产构建

```bash
npm run preview
```

## 项目结构

```
src/
├── assets/         # 静态资源（如logo）
├── components/     # 组件
│   ├── OptionComparator.tsx    # 选项对比器组件
│   └── IfOnlySimulator.tsx     # "如果当初"情景模拟组件
├── App.tsx         # 主应用组件
├── App.css         # 应用样式
├── main.tsx        # 应用入口
└── index.css       # 全局样式和CSS变量
```

## ESLint 配置

如果你正在开发生产应用，我们建议更新配置以启用类型感知的lint规则：

```js
export default tseslint.config({
  extends: [
    // 移除 ...tseslint.configs.recommended 并替换为以下内容
    ...tseslint.configs.recommendedTypeChecked,
    // 或者使用更严格的规则
    ...tseslint.configs.strictTypeChecked,
    // 可选：添加样式规则
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // 其他选项...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

你也可以安装 [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) 和 [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) 来使用React特定的lint规则：

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // 添加 react-x 和 react-dom 插件
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // 其他规则...
    // 启用推荐的typescript规则
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 贡献指南

欢迎对本项目做出贡献！如果你想参与，请：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m '添加一些很棒的功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请查看 LICENSE 文件