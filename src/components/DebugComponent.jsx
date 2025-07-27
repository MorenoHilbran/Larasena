import React from 'react'

const DebugComponent = () => {
  console.log('DebugComponent rendered successfully!')
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      margin: '20px',
      border: '2px solid #000',
      fontSize: '18px'
    }}>
      <h1 style={{ color: '#000', fontSize: '24px', marginBottom: '10px' }}>
        DEBUG: React is working!
      </h1>
      <p style={{ color: '#333' }}>
        If you can see this, React is rendering properly.
      </p>
      <p style={{ color: '#666' }}>
        Timestamp: {new Date().toLocaleString()}
      </p>
    </div>
  )
}

export default DebugComponent
