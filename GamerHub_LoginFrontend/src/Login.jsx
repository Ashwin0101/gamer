import React, { useState } from 'react'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg('') // clear previous
    // Basic local validation
    if(username.trim().length < 3){
      setMsg('Username must be at least 3 characters.')
      return
    }
    try {
      // For demo, hitting a placeholder API route.
      const res = await fetch('/api/login', { method: 'GET' })
      if(!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setMsg(data.info || 'Welcome back, player!')
    } catch (err) {
      console.error(err)
      setMsg('Could not reach login server. If you are offline, check your connection.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Gamer Tag</label>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="e.g. ShadowNinja" />
      <label>Secret Key</label>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="your password" />
      <button className="btn" type="submit">Enter Hub</button>
      <div className="alt">
        <span style={{color:'#9aa4b2'}}>Forgot?</span>
        <span style={{color:'#9aa4b2'}}>New player?</span>
      </div>
      {msg && <div style={{marginTop:12, textAlign:'center', color:'#e6eef8'}}>{msg}</div>}
    </form>
  )
}
