import { useMemo, useState } from 'react';
import './styles.css';

const initialMovies = [
  { id: 1, title: 'Interestelar', genre: 'Ficção científica', year: 2014, status: 'backlog' },
  { id: 2, title: 'Parasita', genre: 'Drama', year: 2019, status: 'todo' },
  { id: 3, title: 'Duna: Parte Dois', genre: 'Aventura', year: 2024, status: 'doing' },
  { id: 4, title: 'O Poderoso Chefão', genre: 'Crime', year: 1972, status: 'review' },
  { id: 5, title: 'A Viagem de Chihiro', genre: 'Animação', year: 2001, status: 'done' }
];

const columns = [
  { id: 'backlog', title: 'Backlog' },
  { id: 'todo', title: 'A fazer' },
  { id: 'doing', title: 'Em andamento' },
  { id: 'review', title: 'Em revisão' },
  { id: 'done', title: 'Concluído' }
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState('');
  const [form, setForm] = useState({ title: '', genre: '', year: '' });

  const visibleMovies = useMemo(() => {
    const query = filter.trim().toLowerCase();
    return movies.filter((movie) =>
      !query || `${movie.title} ${movie.genre}`.toLowerCase().includes(query)
    );
  }, [movies, filter]);

  function addMovie(event) {
    event.preventDefault();
    if (!form.title.trim()) return;
    setMovies((current) => [...current, {
      id: Date.now(),
      title: form.title.trim(),
      genre: form.genre.trim() || 'Não informado',
      year: form.year || '—',
      status: 'backlog'
    }]);
    setForm({ title: '', genre: '', year: '' });
  }

  function moveMovie(id, direction) {
    setMovies((current) => current.map((movie) => {
      if (movie.id !== id) return movie;
      const index = columns.findIndex((column) => column.id === movie.status);
      const nextIndex = Math.max(0, Math.min(columns.length - 1, index + direction));
      return { ...movie, status: columns[nextIndex].id };
    }));
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Projeto CineLista</p>
          <h1>Seu cinema organizado</h1>
          <p className="subtitle">Acompanhe filmes, descubra seu próximo título e controle seu progresso em um único quadro.</p>
        </div>
        <input aria-label="Pesquisar filmes" value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Pesquisar filme..." />
      </header>

      <form className="movie-form" onSubmit={addMovie}>
        <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Título do filme" required />
        <input value={form.genre} onChange={(event) => setForm({ ...form, genre: event.target.value })} placeholder="Gênero" />
        <input value={form.year} onChange={(event) => setForm({ ...form, year: event.target.value })} placeholder="Ano" inputMode="numeric" />
        <button type="submit">Adicionar filme</button>
      </form>

      <section className="board" aria-label="Quadro Kanban de filmes">
        {columns.map((column) => {
          const items = visibleMovies.filter((movie) => movie.status === column.id);
          return (
            <article className="column" key={column.id}>
              <div className="column-heading"><h2>{column.title}</h2><span>{items.length}</span></div>
              <div className="cards">
                {items.map((movie) => (
                  <div className="card" key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre} · {movie.year}</p>
                    <div className="card-actions">
                      <button onClick={() => moveMovie(movie.id, -1)} disabled={column.id === columns[0].id}>←</button>
                      <button onClick={() => moveMovie(movie.id, 1)} disabled={column.id === columns[columns.length - 1].id}>→</button>
                    </div>
                  </div>
                ))}
                {!items.length && <p className="empty">Nenhum filme nesta coluna.</p>}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
