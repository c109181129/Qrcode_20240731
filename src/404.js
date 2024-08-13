import { useLocation } from 'react-router-dom'; // 修改為正確的模組名

function Error404() {
  const location = useLocation();

  return (
    <div>
      <h1>404 - 找不到頁面</h1>
      <p>資源未找到：{location.pathname}</p>
    </div>
  );
}

export default Error404;