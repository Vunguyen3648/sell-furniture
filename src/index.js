import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';

// Import createRoot từ "react-dom/client"
import { createRoot } from 'react-dom/client';

// Tạo một root bằng cách sử dụng createRoot
const root = createRoot(document.getElementById('root'));

// Sử dụng root để render ứng dụng
root.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
);

// Nếu bạn muốn sử dụng service workers, bạn có thể thay đổi unregister() thành register()
// Đọc thêm về service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();