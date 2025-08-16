import React, { useState } from 'react';
import './App.css';
import antiyoy2 from './assets/antiyoy2.png';
import simontatham from './assets/simontatham.png';
import techminoicon from './assets/techminoicon.png';

function selectColor(colorNum, colors) {
  if (colors < 1) colors = 1;
  return `hsl(${(colorNum * (360 / colors) % 360)},100%,50%)`;
}

function App() {
  const [bgColor, setBgColor] = useState('white');
  const [form, setForm] = useState({ name: '', email: '', messages: '' });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(false);

  const handleTitleClick = () => {
    const color = selectColor(Math.floor(Math.random() * 999), 10);
    setBgColor(color);
  };

  // Form validation helpers
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Provide valid email';
    else if (!isValidEmail(form.email)) newErrors.email = 'Provide valid email';
    // Uncomment if you want to validate message
    // if (!form.messages.trim()) newErrors.messages = 'Please enter a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setAlert(true);
      setForm({ name: '', email: '', messages: '' });
      setTimeout(() => setAlert(false), 3000);
    }
  };

  return (
    <>
      <section className="section" id="home">
        <nav className="navbar navbar-expand-lg bg-light" id="navbar">
          <div className="container-fluid">
            <a href="https://github.com/arlenadjaa/react-portfolio" className="navbar-brand">My Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="links"><a href="#portfolio1" className="nav-link active">Portfolio</a></li>
                <li className="links"><a href="#contact" className="nav-link">Contact</a></li>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section className="section" id="portfolio1">
        <div className="container py-5" id="projectContainer" style={{ backgroundColor: bgColor }}>
          <h1 className="text-center my-5" id="myProject">Projects</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-3 p-3 my-5 mx-auto mb-5" style={{ maxWidth: "30rem" }}>
                <img src={antiyoy2} className="card-img-top" id="antiyoy" alt="Antiyoy" />
                <div className="card-body">
                  <h5 className="card-title" id="title1" onClick={handleTitleClick}>Antiyoy</h5>
                  <p className="card-text">A turn-based mobile strategy game with simple rules. Easy to learn, hard to master.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-3 p-3 my-5 mx-auto mb-5" style={{ maxWidth: "30rem" }}>
                <img src={techminoicon} className="card-img-top" id="techmino" alt="Techmino" />
                <div className="card-body">
                  <h5 className="card-title" id="title2" onClick={handleTitleClick}>Techmino</h5>
                  <p className="card-text">A multi-platform, block-stacking open-source fan game.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-3 p-3 my-5 mx-auto" style={{ maxWidth: "22rem" }}>
                <img src={simontatham} className="card-img-top" alt="Portable Puzzle Collection" />
                <div className="card-body">
                  <h5 className="card-title" id="title3" onClick={handleTitleClick}>Portable Puzzle Collection</h5>
                  <p className="card-text">A collection of small computer programs which implement one-player puzzle games.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="text-center my-5" id="contact">Contact Me</h1>
      <section className="section" id="contact">
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3" id="form1">
            <div className="input-control">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={form.name} onChange={handleChange} />
              <div className="error">{errors.name}</div>
            </div>
          </div>
          <div className="mb-3" id="form2">
            <div className="input-control">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" value={form.email} onChange={handleChange} />
              <div className="error">{errors.email}</div>
            </div>
          </div>
          <div className="mb-3" id="form3">
            <div className="input-control">
              <label htmlFor="messages" className="form-label">Message</label>
              <textarea className="form-control" id="messages" rows="4" placeholder="Type your message here..." value={form.messages} onChange={handleChange} />
              <div className="error">{errors.messages}</div>
            </div>
          </div>
          <button className="btn btn-primary" id="submit" type="submit">Submit</button>
          {alert && (
            <div className="alert show showAlert">
              Submitted!
              <button type="button" className="close-btn" onClick={() => setAlert(false)}>×</button>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

export default App;
