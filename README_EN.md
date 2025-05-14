# Optimal Assistant

English | [简体中文](./README.md)

Optimal Assistant is a web application that helps users make more informed decisions. Through scientific methods and an intuitive interface, it assists users in rational analysis when facing choices, or reflecting on past decisions to gain experience and lessons.

## Features

The application provides two main functional modules:

### 1. Option Comparator

Helps users compare different options through multi-dimensional analysis:

- Add multiple options (up to 5)
- Customize evaluation dimensions and weights
- Score each option on various dimensions
- Automatically calculate weighted total scores and visualize results
- Intelligently recommend the best choice

### 2. "What If" Scenario Simulator

Helps users reflect on past decisions and explore possible alternative outcomes:

- Record past choices and their results
- Envision alternative options
- Analyze the potential impact of alternative options
- Simulate possible different outcomes
- Provide structured summaries for decision reflection

## Tech Stack

This project is built with the following technologies:

- **Frontend Framework**: React 19
- **Development Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS (custom variables and responsive design)
- **Font**: Noto Sans SC

## Installation and Usage

### Requirements

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation Steps

1. Clone the repository

```bash
git clone <repository-url>
cd Optimal-Assistant
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview the production build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/         # Static assets (like logo)
├── components/     # Components
│   ├── OptionComparator.tsx    # Option comparator component
│   └── IfOnlySimulator.tsx     # "What if" scenario simulator component
├── App.tsx         # Main application component
├── App.css         # Application styles
├── main.tsx        # Application entry point
└── index.css       # Global styles and CSS variables
```

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Contribution Guidelines

Contributions to this project are welcome! If you'd like to contribute, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
