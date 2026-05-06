import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("Palestra");
  const [eventVagas, setEventVagas] = useState(30);
  const [eventList, setEventList] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [showStyleModal, setShowStyleModal] = useState(false);

  // Carregar dados
  useEffect(() => {
    const savedEvents = localStorage.getItem("@eventpulse_data");
    if (savedEvents) setEventList(JSON.parse(savedEvents));
  }, []);

  // Salvar dados
  useEffect(() => {
    localStorage.setItem("@eventpulse_data", JSON.stringify(eventList));
  }, [eventList]);

  // Criar Evento
  const addEvent = (e) => {
    e.preventDefault();
    if (!eventTitle.trim()) return;

    const newEvent = {
      id: crypto.randomUUID(),
      title: eventTitle,
      type: eventType,
      vagas: parseInt(eventVagas),
      status: "Agendado",
      date: new Date().toLocaleDateString()
    };

    setEventList([newEvent, ...eventList]);
    setEventTitle("");
    setEventVagas(30);
  };

  // Alternar Status
  const toggleStatus = (id) => {
    setEventList(eventList.map(evt => {
      if (evt.id === id) {
        const nextStatus = evt.status === "Agendado" ? "Em Andamento" :
                           evt.status === "Em Andamento" ? "Encerrado" : "Agendado";
        return { ...evt, status: nextStatus };
      }
      return evt;
    }));
  };

  // Inscrever Aluno (Reduzir Vagas)
  const enrollStudent = (id) => {
    setEventList(eventList.map(evt => {
      if (evt.id === id && evt.vagas > 0) {
        return { ...evt, vagas: evt.vagas - 1 };
      }
      return evt;
    }));
  };

  // Remover Evento Individual
  const deleteEvent = (id) => {
    setEventList(eventList.filter(t => t.id !== id));
  };

  // Limpar Todo o Cronograma
  const clearSchedule = () => {
    const isConfirmed = window.confirm(
      "ATENÇÃO: Você tem certeza que deseja limpar todo o cronograma? Esta ação apagará todos os eventos permanentemente e não pode ser desfeita."
    );

    if (isConfirmed) {
      setEventList([]);
      localStorage.removeItem("@eventpulse_data");
    }
  };

  // Lógica Múltipla de Filtros e Ordenação
  const filteredEvents = eventList.filter(evt => {
    if (filter === "Agendados") return evt.status === "Agendado";
    if (filter === "Em Andamento") return evt.status === "Em Andamento";
    if (filter === "Encerrados") return evt.status === "Encerrado";
    return true;
  }).filter(evt => {
    if (searchQuery.trim() === "") return true;
    return evt.title.toLowerCase().includes(searchQuery.toLowerCase());
  }).sort((a, b) => {
    // Fixa Workshops no topo
    if (a.type === "Workshop" && b.type !== "Workshop") return -1;
    if (a.type !== "Workshop" && b.type === "Workshop") return 1;
    return 0;
  });

  return (
    <div className="app-container">
      <header>
        <h1>EventPulse</h1>
        <p>Gestão de Eventos Acadêmicos</p>
        <button className="btn-clear-all" onClick={clearSchedule}>
          Limpar Cronograma
        </button>
      </header>

      <section className="form-section">
        <form onSubmit={addEvent}>
          <input
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Nome do evento ou atividade..."
          />
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="Palestra">Palestra</option>
            <option value="Workshop">Workshop</option>
            <option value="Painel">Painel</option>
          </select>
          <select value={eventVagas} onChange={(e) => setEventVagas(e.target.value)}>
            <option value={10}>10 Vagas</option>
            <option value={30}>30 Vagas</option>
            <option value={50}>50 Vagas</option>
          </select>
          <button type="submit">Agendar</button>
        </form>
      </section>

      <section className="filter-section">
        {["Todos", "Agendados", "Em Andamento", "Encerrados"].map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar evento por título..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <main className="event-grid">
        {filteredEvents.map(item => (
          <div key={item.id} className={`event-card ${item.type.toLowerCase()} ${item.status.toLowerCase().replace(" ", "-")}`}>
            
            <div className="event-content">
              <span className="status-badge">{item.status}</span>
              <h3>{item.title}</h3>
              <span className="event-tag">Tipo: {item.type}</span>
              
              <span className="vagas-text" style={{ color: item.vagas === 0 ? '#ef4444' : '#38bdf8' }}>
                Vagas: {item.vagas}
              </span>
              
              <small>Registrado em: {item.date}</small>
            </div>

            <div className="event-actions">
              <button onClick={() => toggleStatus(item.id)}>Mudar Status</button>
              
              <button
                onClick={() => enrollStudent(item.id)}
                disabled={item.vagas === 0}
                className={item.vagas === 0 ? "esgotado" : ""}
              >
                {item.vagas === 0 ? "Esgotado" : "Inscrever"}
              </button>
              
              <button onClick={() => deleteEvent(item.id)} className="delete">Remover</button>
            </div>
            
          </div>
        ))}
      </main>

      {/* Botão Flutuante */}
      <button className="floating-btn" onClick={() => setShowStyleModal(true)}>
        <img src="favicon_css.svg" alt="" style={{width: 30}}/>
      </button>

      {/* Modal de Alterações Visuais */}
      {showStyleModal && (
        <div className="modal-overlay" onClick={() => setShowStyleModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>✨ Alterações de Estilo</h2>
            <ul>
              <li><strong>Glassmorphism UI:</strong> Toda a interface foi convertida para um estilo de vidro fosco com <code>backdrop-filter</code> e transparências.</li>
              <li><strong>Background Deep Space:</strong> Substituído o cinza flat por um gradiente radial indigo/black de alta profundidade.</li>
              <li><strong>Neon Status Chips:</strong> Os indicadores de status agora possuem brilho externo (glow) e animações de pulsação para eventos ao vivo.</li>
            </ul>
            <button onClick={() => setShowStyleModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;