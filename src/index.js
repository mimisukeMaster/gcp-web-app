import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// ReactDOM.render()を使った書き方は旧型式化
// React 18 では先にDOMの情報を渡してからrender()する形に変更
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App title="App"
            message="this is App Component" />
    </StrictMode>,
)