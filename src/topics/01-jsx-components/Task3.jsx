// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 3: Price Calculator

const item = 'Laptop bag'
const price = 2500 // KES
const quantity = 3
const vatRate = 0.16 // 16% VAT in Kenya

// Work out the numbers first, then show them in the JSX
const subtotal = price * quantity
const vat = subtotal * vatRate
const total = subtotal + vat

// 8700 -> "8,700"
function kes(amount) {
  return 'KES ' + amount.toLocaleString('en-KE')
}

export default function PriceCalculator() {
  return (
    <div className="card" style={{ maxWidth: 360 }}>
      <h3>Price Calculator</h3>
      <p>
        {quantity} × {item} at {kes(price)} each
      </p>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{kes(subtotal)}</td>
          </tr>
          <tr>
            <td>VAT ({vatRate * 100}%)</td>
            <td>{kes(vat)}</td>
          </tr>
          <tr>
            <td>
              <strong>Total to pay</strong>
            </td>
            <td className="price">{kes(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
