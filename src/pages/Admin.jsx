import { useState } from 'react';
import { getActivities, saveActivities, resetActivities } from '../data/activitiesStore';
import { activities as defaultActivities } from '../data/activities';

const ADMIN_PASSWORD = 'mcj@2025';

const emptyForm = { title: '', dates: '', desc: '' };

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [activities, setActivities] = useState(getActivities);
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

  function persist(list) {
    saveActivities(list);
    setActivities(list);
  }

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.dates.trim() || !form.desc.trim()) return;

    let updated;
    if (editingId !== null) {
      updated = activities.map((a) =>
        a.id === editingId ? { ...a, ...form } : a
      );
      showToast('Actividad actualizada.');
    } else {
      const newId = activities.length > 0 ? Math.max(...activities.map((a) => a.id)) + 1 : 1;
      updated = [...activities, { id: newId, ...form }];
      showToast('Actividad añadida.');
    }

    persist(updated);
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
    const updated = activities.filter((a) => a.id !== id);
    persist(updated);
    if (editingId === id) {
      setEditingId(null);
      setForm(emptyForm);
    }
    showToast('Actividad eliminada.');
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
    showToast('JSON exportado.');
  }

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!Array.isArray(parsed)) throw new Error('El archivo debe contener un array.');
        const valid = parsed.every((item) => item.title && item.dates && item.desc);
        if (!valid) throw new Error('Cada actividad debe tener title, dates y desc.');
        persist(parsed);
        showToast(`${parsed.length} actividad(es) importada(s).`);
      } catch (err) {
        alert('Error al importar: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function handleReset() {
    if (!window.confirm('¿Restaurar las actividades originales del código? Se perderán los cambios guardados.')) return;
    resetActivities();
    setActivities(defaultActivities);
    setForm(emptyForm);
    setEditingId(null);
    showToast('Actividades restauradas.');
  }

  if (!authenticated) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <div style={styles.loginLogo}>MCJ</div>
          <h2 style={styles.loginTitle}>Panel de administración</h2>
          <form onSubmit={handleLogin} style={styles.loginForm}>
            <input
              type="password"
              placeholder="Contraseña"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
              style={{ ...styles.input, ...(passwordError ? styles.inputError : {}) }}
              autoFocus
            />
            {passwordError && <p style={styles.errorMsg}>Contraseña incorrecta.</p>}
            <button type="submit" style={styles.btnPrimary}>Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {toast && <div style={styles.toast}>{toast}</div>}

      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <span style={styles.headerLogo}>MCJ</span>
            <span style={styles.headerTitle}>Panel de actividades</span>
          </div>
          <div style={styles.headerActions}>
            <label style={styles.btnSecondary} title="Importar JSON">
              Importar JSON
              <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
            </label>
            <button onClick={handleExport} style={styles.btnSecondary}>Exportar JSON</button>
            <button onClick={handleReset} style={styles.btnDanger}>Restaurar</button>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>
            {editingId !== null ? 'Editar actividad' : 'Nueva actividad'}
          </h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Título *</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Ej: Levántate y sé Hombre"
                  style={styles.input}
                  required
                />
              </div>
              <div style={{ ...styles.formGroup, maxWidth: 220 }}>
                <label style={styles.label}>Fechas *</label>
                <input
                  name="dates"
                  value={form.dates}
                  onChange={handleFormChange}
                  placeholder="Ej: 28 - 30 Agosto"
                  style={styles.input}
                  required
                />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Descripción *</label>
              <textarea
                name="desc"
                value={form.desc}
                onChange={handleFormChange}
                placeholder="Descripción de la actividad..."
                style={styles.textarea}
                rows={3}
                required
              />
            </div>
            <div style={styles.formActions}>
              <button type="submit" style={styles.btnPrimary}>
                {editingId !== null ? 'Guardar cambios' : 'Agregar actividad'}
              </button>
              {editingId !== null && (
                <button type="button" onClick={handleCancel} style={styles.btnSecondary}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>
            Actividades ({activities.length})
          </h2>
          {activities.length === 0 ? (
            <p style={{ color: '#888', marginTop: 8 }}>No hay actividades. Agrega una arriba.</p>
          ) : (
            <ul style={styles.list}>
              {activities.map((act) => (
                <li key={act.id} style={styles.listItem}>
                  <div style={styles.listItemBody}>
                    <div style={styles.listItemDates}>{act.dates}</div>
                    <div style={styles.listItemTitle}>{act.title}</div>
                    <div style={styles.listItemDesc}>{act.desc}</div>
                  </div>
                  <div style={styles.listItemActions}>
                    <button onClick={() => handleEdit(act)} style={styles.btnEdit}>Editar</button>
                    <button onClick={() => handleDelete(act.id)} style={styles.btnDeleteSm}>Eliminar</button>
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

const styles = {
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
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  loginLogo: {
    display: 'inline-block',
    background: '#8B1E2B',
    color: '#fff',
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 2,
    padding: '6px 14px',
    borderRadius: 6,
    marginBottom: 16,
  },
  loginTitle: {
    margin: '0 0 24px',
    fontSize: 20,
    color: '#14293A',
    fontWeight: 700,
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  header: {
    background: '#14293A',
    padding: '0 24px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerInner: {
    maxWidth: 900,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    gap: 16,
  },
  headerLogo: {
    background: '#8B1E2B',
    color: '#fff',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: 2,
    padding: '3px 8px',
    borderRadius: 4,
    marginRight: 12,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 15,
  },
  headerActions: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
  },
  main: {
    maxWidth: 900,
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
  sectionTitle: {
    margin: '0 0 20px',
    fontSize: 17,
    fontWeight: 700,
    color: '#14293A',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  formRow: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    flex: 1,
    minWidth: 200,
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
    transition: 'border-color 0.15s',
  },
  inputError: {
    borderColor: '#8B1E2B',
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
  formActions: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  errorMsg: {
    margin: 0,
    fontSize: 13,
    color: '#8B1E2B',
    textAlign: 'left',
  },
  btnPrimary: {
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
  btnSecondary: {
    padding: '8px 16px',
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
  btnDanger: {
    padding: '8px 16px',
    background: 'transparent',
    color: '#fca5a5',
    border: '1.5px solid rgba(252,165,165,0.4)',
    borderRadius: 7,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    padding: '16px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  listItemBody: {
    flex: 1,
  },
  listItemDates: {
    fontSize: 12,
    fontWeight: 600,
    color: '#C79A2B',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  listItemTitle: {
    fontWeight: 700,
    fontSize: 15,
    color: '#14293A',
    marginBottom: 4,
  },
  listItemDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 1.5,
  },
  listItemActions: {
    display: 'flex',
    gap: 8,
    flexShrink: 0,
  },
  btnEdit: {
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
  },
};
