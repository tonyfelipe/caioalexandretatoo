:root {
  --bg-color: #0b0c10;
  --card-bg: #1f2833;
  --card-accent: #141a22;
  --gold: #d4af37;
  --gold-hover: #b89628;
  --text-main: #c5c6c7;
  --text-bright: #ffffff;
  --whatsapp: #25d366;
  --instagram: #e1306c;
  --border-color: #333333;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  line-height: 1.6;
}

h1, h2, h3, h4, .brand {
  font-family: 'Cinzel', serif;
  color: var(--text-bright);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

/* NAVBAR */
.navbar {
  background-color: rgba(11, 12, 16, 0.95);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
}

.brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--gold);
}

.admin-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: 0.3s;
}

.admin-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* HERO SECTION */
.hero {
  text-align: center;
  padding: 60px 20px 40px;
  background: radial-gradient(circle at center, #1f2833 0%, #0b0c10 100%);
  border-bottom: 1px solid var(--border-color);
}

.hero-logo-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--gold);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 5px;
  letter-spacing: 1px;
}

.subtitle {
  color: var(--text-main);
  font-size: 1rem;
}

.latin-quote {
  color: var(--gold);
  font-style: italic;
  font-size: 0.9rem;
  margin-top: 5px;
}

.stats-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 30px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-item strong {
  font-size: 1.2rem;
  color: var(--text-bright);
}

.stat-item span {
  font-size: 0.8rem;
  color: #888;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background-color: var(--border-color);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  transition: transform 0.2s, opacity 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.btn-whatsapp {
  background-color: var(--whatsapp);
  color: #000;
}

.btn-instagram {
  background-color: transparent;
  border: 1px solid var(--instagram);
  color: var(--text-bright);
}

.btn-gold {
  background-color: var(--gold);
  color: #000;
}

.full-btn {
  width: 100%;
  justify-content: center;
}

/* CARDS / SECTIONS */
.card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.4rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gold);
}

.section-desc {
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.contact-info-list {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
}

/* GALERIA */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.badge {
  background-color: var(--card-accent);
  border: 1px solid var(--border-color);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  color: var(--gold);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 220px;
  border: 1px solid var(--border-color);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 10px;
  color: var(--text-bright);
  font-size: 0.85rem;
  text-align: center;
}

/* FORMULÁRIOS */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group.full-width {
  grid-column: span 2;
}

label {
  font-size: 0.85rem;
  color: var(--text-main);
}

input, textarea {
  background-color: var(--card-accent);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 10px;
  color: var(--text-bright);
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--gold);
}

/* VIDEO CONTAINER */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* FÓRUM */
.forum-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.comment-card {
  background-color: var(--card-accent);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 15px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.comment-author {
  font-weight: 600;
  color: var(--gold);
}

.comment-date {
  color: #777;
}

/* MODAL ADMIN */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.modal-overlay.active {
  opacity: 1;
  pointer-events: all;
}

.modal-card {
  background-color: var(--card-bg);
  border: 1px solid var(--gold);
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  padding: 25px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
}

.hidden {
  display: none !important;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.btn-logout {
  background: transparent;
  border: 1px solid #ff4d4d;
  color: #ff4d4d;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.admin-upload-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.admin-items-list {
  max-height: 150px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.admin-item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--card-accent);
  padding: 8px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.btn-delete {
  background: #ff4d4d;
  color: #fff;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 0.8rem;
  border-top: 1px solid var(--border-color);
}

@media (max-width: 600px) {
  .nav-links { display: none; }
  .form-grid { grid-template-columns: 1fr; }
  .form-group.full-width { grid-column: span 1; }
}
