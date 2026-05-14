import React from 'react'

export default function Layout() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconRow}>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
        </div>

        <h1 style={styles.heading}>Under Construction</h1>

        <p style={styles.message}>
          A brand new version of my site is on the way.
          <br />
          Check back in a bit — it'll be worth the wait.
        </p>

        <div style={styles.divider}></div>

        <p style={styles.footer}>— Prataya</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    margin: 0,
    padding: '24px',
    boxSizing: 'border-box',
  },
  card: {
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
    padding: '48px 32px',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '32px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#d4d4d4',
    display: 'inline-block',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 600,
    color: '#1a1a1a',
    margin: '0 0 16px 0',
    letterSpacing: '-0.02em',
  },
  message: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#6b6b6b',
    margin: '0 0 32px 0',
    fontWeight: 400,
  },
  divider: {
    width: '40px',
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '0 auto 24px auto',
  },
  footer: {
    fontSize: '14px',
    color: '#a0a0a0',
    margin: 0,
    fontWeight: 400,
    fontStyle: 'italic',
  },
}