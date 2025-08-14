const categories = [
  { key: 'fruits', label: 'Fruits', icon: '🍎' },
  { key: 'vegetables', label: 'Vegetables', icon: '🥕' },
  { key: 'pigs', label: 'Pigs', icon: '🐖' },
  { key: 'animals', label: 'Animals', icon: '🐄' },
]

export default function Categories() {
  return (
    <section className="container categories vis-outline">
      <h3 className="section-title">Featured Categories</h3>
      <div className="category-grid">
        {categories.map((c) => (
          <div key={c.key} className="category-card">
            <div style={{ fontSize: 28 }}>{c.icon}</div>
            <div style={{ marginTop: 6 }}>{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}