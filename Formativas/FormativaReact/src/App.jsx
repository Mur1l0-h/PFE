import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [taskText, setTaskText] = useState("");
const [priority, setPriority] = useState("Baixa");
const [taskList, setTaskList] = useState([]);
const [filter, setFilter] = useState("Todas");
const [searchQuery, setSearchQuery] = useState("");
const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState("");

useEffect(() => {
const saved = localStorage.getItem("@taskflow_data");
if (saved) setTaskList(JSON.parse(saved));
}, []);

useEffect(() => {
localStorage.setItem("@taskflow_data", JSON.stringify(taskList));


}, [taskList]);

const addTask = (e) => {
e.preventDefault();
if (!taskText.trim()) return;

const newTask = {
id: crypto.randomUUID(),
text: taskText,
priority: priority,
completed: false,
createdAt: new Date().toLocaleDateString()
};

setTaskList([newTask, ...taskList]);
setTaskText("");
};

const toggleTask = (id) => {
setTaskList(taskList.map(t =>
t.id === id ? { ...t, completed: !t.completed } : t
));
};

const deleteTask = (id) => {
   
    const isConfirmed = window.confirm("Tem certeza que deseja remover esta tarefa?");
    
    if (isConfirmed) {
      setTaskList(taskList.filter(t => t.id !== id));
    }
  };
const priorityValues = ["Alta", "Média", "Baixa"];

const displayedTasks = taskList
    .filter(t => {

      if (filter === "Pendentes") return !t.completed;
      if (filter === "Concluídas") return t.completed;
      return true;
    })
    .filter(t => {

      if (searchQuery.trim() === "") return true;
      return t.text.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => priorityValues.indexOf(a.priority) - priorityValues.indexOf(b.priority));

    const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text); 
  };

  const saveTaskEdit = (id) => {
    
    if (!editText.trim()) return; 

    setTaskList(taskList.map(t =>
      t.id === id ? { ...t, text: editText } : t
    ));
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };


return (
    <div className="app-container">
      <header>
        <h1>TaskFlow</h1>
        <p>Gestão de Produtividade</p>
      </header>

      <section className="form-section">
        <form onSubmit={addTask}>
          <input
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Descrição da tarefa..."
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
          <button type="submit">Criar</button>
        </form>
        
        
        <input 
          placeholder='Procurar por nome'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      <section className="filter-section">
        {["Todas", "Pendentes", "Concluídas"].map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

   <main className="task-grid">
        {displayedTasks.map(item => (
          <div key={item.id} className={`task-card ${item.priority.toLowerCase()} ${item.completed ? 'done' : ''}`}>
            
            <div className="task-content">
              {editingId === item.id ? (
                <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                    style={{ width: '100%', padding: '5px' }}
                  />
                  <button onClick={() => saveTaskEdit(item.id)}>Salvar</button>
                  <button onClick={cancelEditing}>Cancelar</button>
                </div>
              ) : (
                <h3>{item.text}</h3>
              )}
              
              <span>Prioridade: {item.priority}</span>
              <small>Criada em: {item.createdAt}</small>
            </div>

            <div className="task-actions">
              <button onClick={() => toggleTask(item.id)}>
                {item.completed ? "Reabrir" : "Concluir"}
              </button>
              
              {editingId !== item.id && (
                <button onClick={() => startEditing(item)}>
                  Editar
                </button>
              )}

              <button onClick={() => deleteTask(item.id)} className="delete">
                Remover
              </button>
            </div>
            
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;