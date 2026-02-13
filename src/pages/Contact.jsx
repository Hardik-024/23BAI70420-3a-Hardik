import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Alert
} from '@mui/material'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Contact Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ffa502 100%)', color: 'white', py: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Get in Touch
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>
      </Box>

      {/* Contact Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 4 }}>
              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#0066ff' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="email"
                      label="Email Address"
                      placeholder="you@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#0066ff' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      placeholder="How can we help?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#0066ff' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      label="Message"
                      placeholder="Tell us more about your inquiry..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#0066ff' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #0066ff 0%, #ff6b35 100%)',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        py: 2,
                        borderRadius: '8px',
                        '&:hover': {
                          boxShadow: '0 12px 40px rgba(0, 102, 255, 0.4)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  content: '123 Tech Street, San Francisco, CA 94105'
                },
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'support@techpulse.com'
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  content: '+1 (555) 123-4567'
                },
                {
                  icon: '⏰',
                  title: 'Business Hours',
                  content: 'Mon - Fri: 9:00 AM - 6:00 PM PT'
                }
              ].map((item, idx) => (
                <Grid item xs={12} key={idx}>
                  <Card sx={{ p: 2.5 }}>
                    <Typography sx={{ fontSize: '24px', mb: 1 }}>
                      {item.icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      {item.content}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Social Section */}
      <Box sx={{ background: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
            Connect With Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'Twitter', icon: '𝕏' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'Discord', icon: '💬' }
            ].map((social, idx) => (
              <Button
                key={idx}
                variant="contained"
                sx={{
                  background: 'white',
                  color: '#0066ff',
                  fontWeight: 'bold',
                  px: 3,
                  py: 1.5,
                  borderRadius: '8px',
                  border: '2px solid #0066ff',
                  '&:hover': {
                    background: '#0066ff',
                    color: 'white'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {social.icon} {social.name}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Map Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Office Locations
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              city: 'San Francisco',
              address: '123 Tech Street, San Francisco, CA 94105'
            },
            {
              city: 'New York',
              address: '456 Innovation Ave, New York, NY 10001'
            },
            {
              city: 'London',
              address: '789 Digital Lane, London, UK EC1A 1AA'
            }
          ].map((office, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${['#0066ff', '#00d084', '#ff6b35'][idx]} 0%, ${['#00d084', '#ff6b35', '#0066ff'][idx]} 100%)`,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {office.city}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {office.address}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
