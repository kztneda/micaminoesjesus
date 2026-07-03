import { useState } from 'react';
import defaultActivities from '../data/activities.json';

const ADMIN_PASSWORD = 'mcj@2025';

const emptyForm = { title: '', dates: '', desc: '' };

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [activities, setActivities] = useState(defaultActivities);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.dates.trim() || !form.desc.trim()) return;

    if (editingId !== null) {
      setActivities(activities.map((a) => (a.id === editingId ? { ...a, ...form } : a)));
      showToast('Actividad actualizada. Exporta el JSON para guardar los cambios.');
    } else {
      const newId = activities.length > 0 ? Math.max(...activities.map((a) => a.id)) + 1 : 1;
      setActivities([...activities, { id: newId, ...form }]);
      showToast('Actividad añadida. Exporta el JSON para guardar los cambios.');
    }

    setForm(emptyForm);
    setEditingId(null);
  }

  function handleEdit(act) {
    setEditingId(act.id);
    setForm({ title: act.title, dates: act.dates, desc: act.desc });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDelete(id) {
    if (!window.confirm('¿Eliminar esta actividad?')) return;
    setActivities(activities.filter((a) => a.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm(emptyForm);
    }
    showToast('Actividad eliminada. Exporta el JSON para guardar los cambios.');
  }

  function handleCancel() {
    setEditingId(null);
    setForm(emptyForm);
  }

  function handleExport() {
    const blob = new Blob([JSON.stringify(activities, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'activities.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Archivo descargado. Reemplaza src/data/activities.json en el proyecto.');
  }

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!Array.isArray(parsed)) throw new Error('El archivo debe contener un array JSON.');
        const valid = parsed.every((item) => item.title && item.dates && item.desc);
        if (!valid) throw new Error('Cada entrada debe tener title, dates y desc.');
        setActivities(parsed);
        setForm(emptyForm);
        setEditingId(null);
        showToast(`${parsed.length} actividad(es) cargada(s) en el editor.`);
      } catch (err) {
        alert('Error al importar: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function handleReset() {
    if (!window.confirm('¿Descartar todos los cambios y volver al JSON actual del proyecto?')) return;
    setActivities(defaultActivities);
    setForm(emptyForm);
    setEditingId(null);
    showToast('Cambios descartados.');
  }

  if (!authenticated) {
    return (
      <div style={s.loginPage}>
        <div style={s.loginBox}>
          <div style={s.pill}>MCJ</div>
          <h2 style={s.loginTitle}>Panel de administración</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="password"
              placeholder="Contraseña"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
              style={{ ...s.input, ...(passwordError ? { borderColor: '#8B1E2B' } : {}) }}
              autoFocus
            />
            {passwordError && <p style={{ margin: 0, fontSize: 13, color: '#8B1E2B' }}>Contraseña incorrecta.</p>}
            <button type="submit" style={s.btnRed}>Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={s.page}>
      {toast && <div style={s.toast}>{toast}</div>}

      <header style={s.header}>
        <div style={s.headerInner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={s.pill}>MCJ</div>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>Gestión de actividades</span>
          </div>
          <div style={s.headerActions}>
            <label style={s.btnOutlineLight} title="Cargar un activities.json para editarlo">
              Importar JSON
              <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
            </label>
            <button onClick={handleExport} style={s.btnOutlineLight}>Exportar JSON</button>
            <button onClick={handleReset} style={s.btnOutlineDanger}>Descartar cambios</button>
          </div>
        </div>
      </header>

      <div style={s.notice}>
        <strong>Flujo de trabajo:</strong> edita las actividades abajo → <em>Exportar JSON</em> → reemplaza <code>src/data/activities.json</code> en el proyecto → sube los cambios.
      </div>

      <main style={s.main}>
        <section style={s.card}>
          <h2 style={s.cardTitle}>
            {editingId !== null ? 'Editar actividad' : 'Nueva actividad'}
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minWidth: 220 }}>
                <label style={s.label}>Título *</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Ej: Levántate y sé Hombre"
                  style={s.input}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 220 }}>
                <label style={s.label}>Fechas *</label>
                <input
                  name="dates"
                  value={form.dates}
                  onChange={handleFormChange}
                  placeholder="Ej: 28 - 30 Agosto"
                  style={s.input}
                  required
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={s.label}>Descripción *</label>
              <textarea
                name="desc"
                value={form.desc}
                onChange={handleFormChange}
                placeholder="Descripción de la actividad..."
                style={s.textarea}
                rows={3}
                required
              />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button type="submit" style={s.btnRed}>
                {editingId !== null ? 'Guardar cambios' : 'Agregar'}
              </button>
              {editingId !== null && (
                <button type="button" onClick={handleCancel} style={s.btnGhost}>Cancelar</button>
              )}
            </div>
          </form>
        </section>

        <section style={s.card}>
          <h2 style={s.cardTitle}>Actividades en el editor ({activities.length})</h2>
          {activities.length === 0 ? (
            <p style={{ color: '#888', margin: '8px 0 0' }}>No hay actividades. Agrega una arriba.</p>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {activities.map((act) => (
                <li key={act.id} style={s.listItem}>
                  <div style={{ flex: 1 }}>
                    <div style={s.itemDates}>{act.dates}</div>
                    <div style={s.itemTitle}>{act.title}</div>
                    <div style={s.itemDesc}>{act.desc}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <button onClick={() => handleEdit(act)} style={s.btnDark}>Editar</button>
                    <button onClick={() => handleDelete(act.id)} style={s.btnDeleteSm}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

const s = {
  page: {
    minHeight: '100vh',
    background: '#f4f4f5',
    fontFamily: "'Manrope', sans-serif",
  },
  loginPage: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#14293A',
    fontFamily: "'Manrope', sans-serif",
  },
  loginBox: {
    background: '#fff',
    borderRadius: 12,
    padding: '40px 36px',
    width: '100%',
    maxWidth: 360,
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
    textAlign: 'center',
  },
  loginTitle: {
    margin: '0 0 24px',
    fontSize: 20,
    color: '#14293A',
    fontWeight: 700,
  },
  header: {
    background: '#14293A',
    padding: '0 24px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerInner: {
    maxWidth: 860,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    gap: 16,
  },
  headerActions: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
  },
  notice: {
    background: '#fef9ec',
    borderBottom: '1px solid #e9d88a',
    padding: '10px 24px',
    fontSize: 13,
    color: '#6b5a1a',
    textAlign: 'center',
  },
  main: {
    maxWidth: 860,
    margin: '32px auto',
    padding: '0 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  card: {
    background: '#fff',
    borderRadius: 10,
    padding: '28px 32px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  },
  cardTitle: {
    margin: '0 0 20px',
    fontSize: 17,
    fontWeight: 700,
    color: '#14293A',
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: '#444',
  },
  input: {
    padding: '10px 14px',
    borderRadius: 7,
    border: '1.5px solid #d1d5db',
    fontSize: 14,
    color: '#14293A',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '10px 14px',
    borderRadius: 7,
    border: '1.5px solid #d1d5db',
    fontSize: 14,
    color: '#14293A',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  pill: {
    background: '#8B1E2B',
    color: '#fff',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: 2,
    padding: '4px 10px',
    borderRadius: 5,
  },
  btnRed: {
    padding: '10px 22px',
    background: '#8B1E2B',
    color: '#fff',
    border: 'none',
    borderRadius: 7,
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnGhost: {
    padding: '10px 18px',
    background: 'transparent',
    color: '#555',
    border: '1.5px solid #d1d5db',
    borderRadius: 7,
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnOutlineLight: {
    padding: '7px 14px',
    background: 'transparent',
    color: '#e2e8f0',
    border: '1.5px solid rgba(255,255,255,0.3)',
    borderRadius: 7,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  btnOutlineDanger: {
    padding: '7px 14px',
    background: 'transparent',
    color: '#fca5a5',
    border: '1.5px solid rgba(252,165,165,0.4)',
    borderRadius: 7,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnDark: {
    padding: '6px 14px',
    background: '#14293A',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnDeleteSm: {
    padding: '6px 14px',
    background: 'transparent',
    color: '#8B1E2B',
    border: '1.5px solid #8B1E2B',
    borderRadius: 6,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    padding: '16px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  itemDates: {
    fontSize: 11,
    fontWeight: 700,
    color: '#C79A2B',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  itemTitle: {
    fontWeight: 700,
    fontSize: 15,
    color: '#14293A',
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 1.5,
  },
  toast: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    background: '#14293A',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    zIndex: 1000,
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    fontFamily: "'Manrope', sans-serif",
    maxWidth: 380,
  },
};
