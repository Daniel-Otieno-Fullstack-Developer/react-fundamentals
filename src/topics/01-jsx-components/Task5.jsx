// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 5: Page Layout

// Three small components, each with one job...
function Header() {
  return (
    <header style={{ borderBottom: '3px solid #c9a227', paddingBottom: 8 }}>
      <h2 style={{ margin: 0 }}>Delhi College</h2>
      <p className="muted" style={{ margin: 0 }}>Short courses · September intake</p>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h3>Courses starting this month</h3>
      <ul>
        <li>Web Design - 3 months</li>
        <li>Computer Packages - 2 months</li>
        <li>AI Web Development - 4 months</li>
      </ul>
    </main>
  )
}

function Footer() {
  return (
    <footer className="muted" style={{ fontSize: 13, borderTop: '1px solid #ddd' }}>
      <p>First Avenue, Eastleigh · Call 0712 345 678</p>
    </footer>
  )
}

// ...and one component that puts them together.
export default function PageLayout() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
