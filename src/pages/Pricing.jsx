import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

export default function Pricing() {
  return (
    <div>
      {/* Pricing Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0066ff 0%, #00d084 100%)', color: 'white', py: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
          Choose the perfect plan for your needs. Upgrade or downgrade anytime with no setup fees.
        </Typography>
      </Box>

      {/* Pricing Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {[
            {
              name: 'Starter',
              price: '$29',
              period: '/month',
              desc: 'Perfect for getting started',
              highlight: false,
              features: [
                '✓ Up to 10,000 requests/day',
                '✓ 10 GB storage',
                '✓ Email support',
                '✓ Basic analytics',
                '✗ Custom domain',
                '✗ Priority support'
              ]
            },
            {
              name: 'Professional',
              price: '$99',
              period: '/month',
              desc: 'Most popular for growing businesses',
              highlight: true,
              features: [
                '✓ Up to 100,000 requests/day',
                '✓ 100 GB storage',
                '✓ Priority email support',
                '✓ Advanced analytics',
                '✓ Custom domain',
                '✗ Phone support'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: 'pricing',
              desc: 'For large-scale operations',
              highlight: false,
              features: [
                '✓ Unlimited requests',
                '✓ Unlimited storage',
                '✓ 24/7 phone support',
                '✓ Custom analytics',
                '✓ Custom domain',
                '✓ Dedicated account manager'
              ]
            }
          ].map((plan, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  border: plan.highlight ? '2px solid #0066ff' : '1px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  background: plan.highlight ? 'linear-gradient(135deg, #f8f9ff 0%, #f0f9ff 100%)' : 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 102, 255, 0.2)'
                  }
                }}
              >
                {plan.highlight && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #0066ff 0%, #ff6b35 100%)',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '12px'
                    }}
                  >
                    MOST POPULAR
                  </Box>
                )}
                <CardContent sx={{ pt: plan.highlight ? 4 : 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                    {plan.desc}
                  </Typography>
                  <Box sx={{ my: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'inline' }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'inline', ml: 1, color: '#666' }}>
                      {plan.period}
                    </Typography>
                  </Box>
                  <Button
                    fullWidth
                    variant={plan.highlight ? 'contained' : 'outlined'}
                    sx={{
                      background: plan.highlight ? 'linear-gradient(135deg, #0066ff 0%, #ff6b35 100%)' : 'transparent',
                      color: plan.highlight ? 'white' : '#0066ff',
                      fontWeight: 'bold',
                      mb: 3,
                      py: 1.5,
                      '&:hover': {
                        background: plan.highlight ? 'linear-gradient(135deg, #0052cc 0%, #e55a2b 100%)' : 'rgba(0, 102, 255, 0.1)'
                      }
                    }}
                  >
                    Get Started
                  </Button>
                  <List sx={{ '& .MuiListItem-root': { py: 0.8 } }}>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} sx={{ pl: 0 }}>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2', sx: { color: feature.includes('✗') ? '#ccc' : '#333' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Comparison Table */}
      <Box sx={{ background: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
            Detailed Comparison
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'white', borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Feature</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Starter</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Professional</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['API Rate Limit', '10K/day', '100K/day', 'Unlimited'],
                  ['Storage', '10 GB', '100 GB', 'Unlimited'],
                  ['Support', 'Email', 'Priority Email', '24/7 Phone'],
                  ['Analytics', 'Basic', 'Advanced', 'Custom'],
                  ['Users', '1', '5', 'Unlimited'],
                  ['SLA', 'No', 'No', 'Yes (99.99%)']
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e0e0e0', background: idx % 2 === 0 ? 'white' : '#fafafa' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold' }}>{row[0]}</td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>{row[1]}</td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>{row[2]}</td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              q: 'Can I change my plan anytime?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
            },
            {
              q: 'Do you offer refunds?',
              a: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
            },
            {
              q: 'Is there a free trial?',
              a: 'Yes, all new users get a 14-day free trial with full access to features.'
            }
          ].map((faq, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Box sx={{ p: 3, background: '#f5f5f5', borderRadius: '12px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#0066ff' }}>
                  {faq.q}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.8 }}>
                  {faq.a}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
