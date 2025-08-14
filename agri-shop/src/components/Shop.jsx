import { useMemo, useState } from 'react'
import { products as allProducts } from '../data/products'

export default function Shop() {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('price')

  const products = useMemo(() => {
    const filtered = allProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'popularity') return a.id - b.id
      return a.price - b.price
    })
    return sorted
  }, [query, sortBy])

  return (
    <section id="shop" className="container shop">
      <aside className="sidebar vis-outline">
        <h3 className="section-title">Filter</h3>
        <input
          className="input"
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="hr" />
        <div style={{ marginBottom: 8, color: 'var(--muted)' }}>Sort by</div>
        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="radio"
              name="sort"
              value="price"
              checked={sortBy === 'price'}
              onChange={() => setSortBy('price')}
            />
            Price
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="radio"
              name="sort"
              value="popularity"
              checked={sortBy === 'popularity'}
              onChange={() => setSortBy('popularity')}
            />
            Popularity
          </label>
        </div>
        <div className="hr" />
        <h3 id="about" className="section-title">About</h3>
        <p style={{ margin: 0, color: 'var(--muted)' }}>
          Locally sourced produce and animal products from trusted farms.
        </p>
      </aside>

      <div>
        <div className="grid" style={{ marginBottom: 12 }}>
          <h3 className="section-title" style={{ margin: 0 }}>Shop</h3>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-image">🖼️</div>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ opacity: 0.9 }}>${p.price.toFixed(2)}</div>
              <button className="btn" style={{ marginTop: 8 }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}