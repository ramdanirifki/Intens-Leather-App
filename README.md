# Instructions to Run Intens.id Website in Visual Studio Code

## Prerequisites
Make sure you have these installed:
- **Node.js** (v16 or later) - [Download here](https://nodejs.org/)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)
- **Git** (optional) - [Download here](https://git-scm.com/)

## Step-by-Step Setup

### 1. Copy the Project Files
First, you'll need to get the project files. You can either:
- Copy the files from the current directory `/app/frontend/`
- Or create a new project and copy the files I created

### 2. Open in Visual Studio Code
```bash
# Navigate to your project folder
cd /path/to/your/project/frontend

# Open in VS Code
code .
```

### 3. Install Dependencies
Open the **Terminal** in VS Code (`Terminal → New Terminal`) and run:

```bash
# Install all required packages
npm install

# Or if you prefer yarn
yarn install
```

### 4. Project Structure
Your VS Code should show this structure:
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   └── LookbookPage.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── tailwind.config.js
```

### 5. Run the Development Server
In the VS Code terminal, run:

```bash
# Start the development server
npm start

# Or with yarn
yarn start
```

### 6. View the Website
- The app will automatically open in your browser at `http://localhost:3000`
- If it doesn't open automatically, manually navigate to `http://localhost:3000`

## VS Code Extensions (Recommended)

Install these extensions for better development experience:

1. **ES7+ React/Redux/React-Native snippets** - For React code snippets
2. **Tailwind CSS IntelliSense** - For Tailwind CSS autocomplete
3. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
4. **Bracket Pair Colorizer** - Color matching brackets
5. **Prettier - Code formatter** - Format code automatically
6. **GitLens** - Enhanced Git capabilities (if using Git)

## Development Tips

### Hot Reload
- The app has hot reload enabled
- Save any file and see changes instantly in the browser
- No need to restart the server for code changes

### Debugging in VS Code
1. Install the **Debugger for Chrome** extension
2. Add this to `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "pwa-chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

3. Set breakpoints in your code
4. Press `F5` to start debugging

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (use with caution)
npm run eject
```

## Customization

### Adding New Products
Edit `/src/data/mockData.js` to add new products:

```javascript
{
  id: 9,
  name: 'New Product Name',
  price: 120,
  colors: ['Black', 'White'],
  sizes: ['S', 'M', 'L'],
  category: 'mens', // or 'womens', 'accessories'
  // ... other properties
}
```

### Changing Styles
- Global styles: Edit `/src/App.css`
- Component styles: Use Tailwind CSS classes
- Colors/fonts: Edit `/tailwind.config.js`

### Adding New Pages
1. Create new component in `/src/pages/`
2. Add route in `/src/App.js`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

## Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
# Kill process on port 3000
npx kill-port 3000

# Or start on different port
PORT=3001 npm start
```

### Dependencies Issues
```bash
# Clear node modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Tailwind CSS Not Working
Make sure `tailwind.config.js` and `/src/index.css` are properly configured.

## Production Build

When ready to deploy:

```bash
# Create optimized production build
npm run build

# Serve the build locally (optional)
npx serve -s build
```

The build folder will contain the optimized static files ready for deployment.

---
