body {
  background: #f0f0f0;
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  max-width: 1000px;
  margin: auto;
}

.materia {
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px #aaa;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
}

.materia:hover {
  background-color: #e9f5ff;
}

.materia.tachado {
  text-decoration: line-through;
  background-color: #d4edda;
  color: #555;
}

.materia.bloqueada {
  background-color: #eeeeee;
  color: #999;
  cursor: not-allowed;
}
