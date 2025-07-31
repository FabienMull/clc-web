// Page d’accueil simplifiée
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <img
        src="/CLC_logo.png"
        alt="Crypto Luck Legacy Logo"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          marginBottom: '20px',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)'
        }}
      />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Bienvenue sur <span style={{ color: '#FFD700' }}>Crypto Luck Legacy</span>
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '500px', color: '#bbbbbb' }}>
        Collectionnez des NFT uniques, inspirants et symboliques. Une expérience Web3 sans hasard ni promesse de gain.
      </p>
    </div>
  );
}
