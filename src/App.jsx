import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import QRCode from "react-qr-code";

function TelaAdmin() {
  const linkDoFormulario = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/form`;

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>Sorteio de Fiscais</h1>
      <p>Peça para o fiscal escanear este código:</p>
      
      <div style={{ background: 'white', padding: '16px', display: 'inline-block' }}>
        <QRCode value={linkDoFormulario} />
      </div>
      
      <p><small>Link gerado: {linkDoFormulario}</small></p>

      <div style={{ marginTop: 30, border: '1px solid #ccc', padding: 20 }}>
        <h3>Lista de Fiscais Cadastrados (Tempo Real)</h3>
        {/* adicionar comunicação com o supabase aqui depois*/}
        <p>Aguardando cadastros...</p>
      </div>
    </div>
  )
}

function TelaFormulario() {
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  const enviarDados = (e) => {
    e.preventDefault();
    alert(`Enviando CPF: ${cpf} para o sistema...`);
    {/* Salvar os dados no supabase depois */}
    setCpf("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h2>Cadastro de Fiscal</h2>
      <form onSubmit={enviarDados}>
        <div style={{ marginBottom: 15 }}>
          <label>Digite seu CPF:</label>
          <input 
            type="number" 
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Apenas números"
            style={{ width: '100%', padding: 10, marginTop: 5, fontSize: 16 }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 15, fontSize: 18 }}>
          CONFIRMAR PRESENÇA
        </button>
      </form>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaAdmin />} />
        <Route path="/form" element={<TelaFormulario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App