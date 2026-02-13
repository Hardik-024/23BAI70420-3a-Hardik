import { Card, Button } from 'react-bootstrap'

export default function BootstrapCard() {
  return (
    <Card className="mt-4" style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.2)', background: 'linear-gradient(180deg, #fff5f9 0%, #ffffff 100%)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(236, 72, 153, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.1)'; }}>
      <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
        <Card.Title style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem', color: '#be185d' }}>
          Sample Bootstrap Component
        </Card.Title>
        <Card.Text style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#6b7280', fontWeight: '500' }}>
          Modern styled card with responsive design\n        </Card.Text>
        <Button style={{ fontSize: '1rem', padding: '10px 40px', background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #db2777 0%, #be185d 100%)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'; }}>
          Explore Now
        </Button>
      </Card.Body>
    </Card>
  )
}
