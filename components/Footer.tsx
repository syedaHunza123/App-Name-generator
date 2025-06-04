import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem 0',
      borderTop: '1px solid #e9ecef',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #6c63ff, #ff6584)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            AppNameGenius
          </div>
          
          <p style={{ color: '#6c757d', maxWidth: '600px', marginBottom: '1.5rem' }}>
            Create the perfect name for your next app with our AI-powered name generator.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" passHref>
              <div style={{ color: '#6c757d', cursor: 'pointer' }}>Home</div>
            </Link>
            <Link href="/about" passHref>
              <div style={{ color: '#6c757d', cursor: 'pointer' }}>About</div>
            </Link>
          </div>
          
          <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} AppNameGenius. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;