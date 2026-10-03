// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 6: Campus Parts

// Default export: no curly braces, and you may choose the name.
// Named exports: curly braces, and the names must match exactly.
import ContactCard, { Address, Logo } from './CampusParts.jsx'

export default function CampusParts() {
  return (
    <div className="card" style={{ maxWidth: 360 }}>
      <Logo />
      <Address />
      <ContactCard />
      <p className="muted" style={{ fontSize: 13, marginBottom: 0 }}>
        Built from three components imported from CampusParts.jsx
      </p>
    </div>
  )
}
