import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 清除 localStorage 中的登入信息
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');

    // 導航到登入頁面
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h2> 正在登出... </h2>
    </div>
  );
}

export default Logout;
