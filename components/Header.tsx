import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '1rem 0' 
        }}>
          <Link href="/" passHref>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              cursor: 'pointer',
              background: 'linear-gradient(to right, #6c63ff, #ff6584)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AppNameGenius
            </div>
          </Link>
          
          <nav>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '1.5rem' 
            }}>
              <li>
                <Link href="/" passHref>
                  <div style={{ 
                    fontWeight: router.pathname === '/' ? 'bold' : 'normal',
                    color: router.pathname === '/' ? '#6c63ff' : '#333',
                    cursor: 'pointer'
                  }}>
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <div style={{ 
                    fontWeight: router.pathname === '/about' ? 'bold' : 'normal',
                    color: router.pathname === '/about' ? '#6c63ff' : '#333',
                    cursor: 'pointer'
                  }}>
                    About
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;