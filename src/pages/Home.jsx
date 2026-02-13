import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip
} from '@mui/material'

export default function Home() {
  const phones = [
    {
      name: 'PhoneX Plus',
      price: '$1,299',
      color: 'Midnight Black',
      image: '📱',
      highlight: true,
      specs: ['6.7" Display', '256GB Storage', 'Pro Camera', '120Hz Refresh']
    },
    {
      name: 'PhoneX Pro',
      price: '$999',
      color: 'Solar Red',
      image: '📱',
      highlight: false,
      specs: ['6.1" Display', '128GB Storage', 'Standard Camera', '60Hz Refresh']
    },
    {
      name: 'PhoneX',
      price: '$799',
      color: 'Ocean Blue',
      image: '📱',
      highlight: false,
      specs: ['6.1" Display', '64GB Storage', 'Standard Camera', '60Hz Refresh']
    },
    {
      name: 'PhoneX Mini',
      price: '$599',
      color: 'Glacier White',
      image: '📱',
      highlight: false,
      specs: ['5.4" Display', '64GB Storage', 'Basic Camera', '60Hz Refresh']
    }
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{
          background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 50%, #06b6d4 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '32px', md: '56px' },
              lineHeight: 1.2
            }}
          >
            The Future of Mobile<br />Technology
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '20px' }
            }}
          >
            Experience cutting-edge performance with PhoneX. Premium design meets powerful features.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained"
              sx={{ 
                background: 'white',
                color: '#3b82f6',
                fontWeight: 'bold',
                fontSize: '16px',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                '&:hover': { 
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Shop Now
            </Button>
            <Button 
              variant="outlined"
              sx={{ 
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                '&:hover': { 
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white'
                },
                transition: 'all 0.3s ease'
              }}
            >
              View Details
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Product Catalog */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 6,
            color: '#1f2937'
          }}
        >
          Our Smartphone Collection
        </Typography>
        
        <Grid container spacing={3}>
          {phones.map((phone, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card 
                sx={{
                  height: '100%',
                  background: phone.highlight 
                    ? 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
                    : 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                  border: phone.highlight ? '3px solid #3b82f6' : '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
                    borderColor: phone.highlight ? '#3b82f6' : '#3b82f6'
                  }
                }}
              >
                {phone.highlight && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 20,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      zIndex: 1
                    }}
                  >
                    BESTSELLER
                  </Box>
                )}
                <CardContent sx={{ textAlign: 'center', pt: phone.highlight ? 4 : 2 }}>
                  <Box sx={{ fontSize: '60px', mb: 2 }}>
                    {phone.image}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#1f2937'
                    }}
                  >
                    {phone.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      mb: 2
                    }}
                  >
                    {phone.color}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#3b82f6',
                      mb: 2
                    }}
                  >
                    {phone.price}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2, justifyContent: 'center' }}>
                    {phone.specs.map((spec, i) => (
                      <Chip 
                        key={i}
                        label={spec} 
                        size="small"
                        sx={{
                          background: phone.highlight ? '#3b82f6' : '#e5e7eb',
                          color: phone.highlight ? 'white' : '#1f2937',
                          fontWeight: 'bold'
                        }}
                      />
                    ))}
                  </Box>
                  <Button 
                    fullWidth
                    variant={phone.highlight ? 'contained' : 'outlined'}
                    sx={{
                      background: phone.highlight ? 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' : 'transparent',
                      color: phone.highlight ? 'white' : '#3b82f6',
                      fontWeight: 'bold',
                      borderColor: '#3b82f6',
                      '&:hover': {
                        background: phone.highlight 
                          ? 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'
                          : 'rgba(59, 130, 246, 0.1)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ background: '#f9fafb', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              textAlign: 'center', 
              mb: 6,
              color: '#1f2937'
            }}
          >
            Why Choose PhoneX?
          </Typography>
          
          <Grid container spacing={3}>
            {[
              {
                title: '📸 Professional Camera System',
                desc: 'Capture stunning photos with advanced computational photography and 8K video recording',
                color: '#ec4899'
              },
              {
                title: '⚡ Ultra-Fast Processor',
                desc: 'Latest generation chip delivers lightning-fast performance for gaming and multitasking',
                color: '#f59e0b'
              },
              {
                title: '🔋 All-Day Battery',
                desc: '5000mAh battery with fast charging keeps you going all day and night',
                color: '#10b981'
              },
              {
                title: '🛡️ Premium Build Quality',
                desc: 'Aerospace-grade aluminum frame with ceramic shield for durability',
                color: '#06b6d4'
              },
              {
                title: '📱 6.7" Display',
                desc: '120Hz LTPO display with 2000 nits peak brightness for stunning visuals',
                color: '#3b82f6'
              },
              {
                title: '🔐 Advanced Security',
                desc: 'Face ID and fingerprint biometrics for secure authentication',
                color: '#6366f1'
              }
            ].map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card 
                  sx={{
                    height: '100%',
                    background: 'white',
                    border: `2px solid ${feature.color}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${feature.color}30`,
                      borderColor: feature.color
                    }
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 1,
                        color: feature.color
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.8 }}>
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
