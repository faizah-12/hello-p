import { FiShoppingCart } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="header container">
      <div className="logo" style={{ fontWeight: 700 }}>LOGO</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div title="Cart" aria-label="Cart" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FiShoppingCart size={22} />
      </div>
    </header>
  )
}