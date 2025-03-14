import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const PRESET_USERNAME = 'admin';
  const PRESET_PASSWORD = '123456';

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.username.trim()) {
        setError('用户名不能为空');
        setLoading(false);
        return;
      }
      if (!formData.password.trim()) {
        setError('密码不能为空');
        setLoading(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (formData.username === PRESET_USERNAME && formData.password === PRESET_PASSWORD) {
        console.log('登录成功');
        navigate('/home');
      } else {
        setError('用户名或密码错误');
      }
    } catch (err) {
      setError('登录失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>用户登录</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="用户名"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="密码"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? '登录中...' : '登录'}
        </button>
        <div className="preset-info">
          <p>预设账号：{PRESET_USERNAME}</p>
          <p>预设密码：{PRESET_PASSWORD}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;