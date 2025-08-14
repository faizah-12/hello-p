export default function Footer() {
  return (
    <footer className="container footer vis-outline" id="contact">
      <div>
        <h4 className="section-title">Quick Links</h4>
        <div style={{ display: 'grid', gap: 6 }}>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div>
        <h4 className="section-title">Contact</h4>
        <div style={{ display: 'grid', gap: 6, color: 'var(--muted)' }}>
          <div>Email: hello@agrishop.test</div>
          <div>Phone: +1 (555) 123-4567</div>
          <div>Address: 123 Farm Lane</div>
        </div>
      </div>
      <div>
        <h4 className="section-title">Newsletter</h4>
        <div style={{ display: 'flex', gap: 8 }}>
          <input className="input" type="email" placeholder="Email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </footer>
  )
}