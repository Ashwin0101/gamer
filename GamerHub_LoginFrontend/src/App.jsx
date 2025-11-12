import React from 'react'
import Login from './Login'

export default function App(){
  return (
    <div className="wrap">
      <div className="card">
        <div className="logo">
          <div className="mark">GH</div>
          <div>
            <h1>Gamer Hub</h1>
            <p className="sub">Sign in to access your games and stats</p>
          </div>
        </div>
        <Login />
        <div className="footer">Made with passion • Play responsibly</div>
      </div>
    </div>
  )
}
