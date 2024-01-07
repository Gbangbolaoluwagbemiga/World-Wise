import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Login.module.css';
import PageNav from '../components/PageNav';
import Button from '../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }

  function handleUserDetails(e) {
    if (!email || !password) return;
    e.preventDefault();
    navigate('/');
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="philip@gmail.com"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required={true}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>

          <input
            type={showPassword ? 'password' : 'text'}
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required={true}
          />
          <span
            className={styles.visibility}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '👁️' : <strike>👁️</strike>}
          </span>
        </div>

        <div>
          <Button type={'primary'} onclick={handleUserDetails}>
            Login{' '}
          </Button>
        </div>
      </form>
    </main>
  );
}
