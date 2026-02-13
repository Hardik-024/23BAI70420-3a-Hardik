import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

export default function Components() {
  const phoneModels = [
    {
      name: 'PhoneX Plus',
      price: '$1,299',
      specs: {
        display: '6.7" Super amoled Display, 120Hz LTPO',
        resolution: '2796 x 1290 pixels at 460 ppi',
        processor: 'Snapdragon 8 Gen 3 Leading Version',
        ram: '12GB LPDDR5',
        storage: '256GB/512GB/1TB',
        camera: {
          main: '108MP f/1.75 Main Camera',
          ultra: '12MP f/2.2 Ultra Wide',
          telephoto: '12MP f/2.0 5x Telephoto',
          selfie: '12MP f/1.9 TrueDepth'
        },
        battery: '4,685 mAh with 45W Fast Charging',
        display_refresh: '120Hz Adaptive',
        security: 'Face ID Pro & Fingerprint',
        colors: ['Midnight Black', 'Deep Purple', 'Titanium White'],
        water_resistant: 'IP69 (Submersible to 6m)'
      }
    },
    {
      name: 'PhoneX Pro',
      price: '$999',
      specs: {
        display: '6.1" Super amoled Display, 60Hz',
        resolution: '2556 x 1179 pixels at 460 ppi',
        processor: 'Snapdragon 8 Gen 3',
        ram: '8GB LPDDR5',
        storage: '128GB/256GB/512GB',
        camera: {
          main: '48MP f/1.9 Main Camera',
          ultra: '12MP f/2.4 Ultra Wide',
          selfie: '12MP f/2.2 TrueDepth'
        },
        battery: '3,200 mAh with 25W Fast Charging',
        display_refresh: '60Hz',
        security: 'Face ID & Touch ID',
        colors: ['Solar Red', 'Deep Blue', 'Silver'],
        water_resistant: 'IP68 (Submersible to 6m)'
      }
    },
    {
      name: 'PhoneX',
      price: '$799',
      specs: {
        display: '6.1" Super amoled Display, 60Hz',
        resolution: '2532 x 1170 pixels at 460 ppi',
        processor: 'Snapdragon 8 Gen 2',
        ram: '6GB LPDDR5',
        storage: '64GB/128GB/256GB',
        camera: {
          main: '48MP f/1.9 Main Camera',
          ultra: '12MP f/2.4 Ultra Wide',
          selfie: '12MP f/2.2 Camera'
        },
        battery: '3,240 mAh with 20W Fast Charging',
        display_refresh: '60Hz',
        security: 'Face ID',
        colors: ['Ocean Blue', 'Midnight Black', 'Alpine Green'],
        water_resistant: 'IP67 (Submersible to 1m)'
      }
    }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', py: 4 }}>
      {/* Header */}
      <Box 
        sx={{
          background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)',
          color: 'white',
          py: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '32px', md: '48px' }
            }}
          >
            PhoneX Specifications & Features
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' }
            }}
          >
            Detailed technical specifications for each PhoneX model
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Model Specs Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {phoneModels.map((phone, idx) => (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <Card 
                sx={{
                  height: '100%',
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2)',
                    borderColor: '#3b82f6'
                  }
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#1f2937'
                    }}
                  >
                    {phone.name}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#3b82f6',
                      fontWeight: 'bold',
                      mb: 2
                    }}
                  >
                    {phone.price}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#666',
                        mb: 1
                      }}
                    >
                      DISPLAY
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                      {phone.specs.display}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#999' }}>
                      {phone.specs.resolution}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#666',
                        mb: 1
                      }}
                    >
                      PROCESSOR & MEMORY
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', mb: 0.5 }}>
                      {phone.specs.processor}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', mb: 0.5 }}>
                      RAM: {phone.specs.ram}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      Storage: {phone.specs.storage}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#666',
                        mb: 1
                      }}
                    >
                      CAMERA SYSTEM
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', mb: 0.3 }}>
                      📷 {phone.specs.camera.main}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', mb: 0.3 }}>
                      📸 {phone.specs.camera.ultra}
                    </Typography>
                    {phone.specs.camera.telephoto && (
                      <Typography variant="body2" sx={{ color: '#333', mb: 0.3 }}>
                        🔭 {phone.specs.camera.telephoto}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      🤳 {phone.specs.camera.selfie}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#666',
                        mb: 1
                      }}
                    >
                      BATTERY & CHARGING
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      {phone.specs.battery}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#666',
                        mb: 1
                      }}
                    >
                      COLORS & DURABILITY
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                      {phone.specs.colors.map((color, i) => (
                        <Chip 
                          key={i}
                          label={color} 
                          size="small"
                          sx={{
                            background: '#f0f4f8',
                            color: '#1f2937',
                            fontWeight: 'bold'
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      🌊 {phone.specs.water_resistant}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#666',
                        mb: 1
                      }}
                    >
                      SECURITY
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      🔐 {phone.specs.security}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Specs Comparison Table */}
        <Card sx={{ background: 'white', mb: 4 }}>
          <CardContent>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
                color: '#1f2937'
              }}
            >
              📊 Detailed Comparison
            </Typography>
            
            <TableContainer component={Paper} sx={{ background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ background: '#1f2937' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Specification</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PhoneX Plus</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PhoneX Pro</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PhoneX</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Display Size</TableCell>
                    <TableCell align="center">6.7"</TableCell>
                    <TableCell align="center">6.1"</TableCell>
                    <TableCell align="center">6.1"</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Refresh Rate</TableCell>
                    <TableCell align="center">120Hz LTPO</TableCell>
                    <TableCell align="center">60Hz</TableCell>
                    <TableCell align="center">60Hz</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Processor</TableCell>
                    <TableCell align="center">SD 8 Gen 3 Leading</TableCell>
                    <TableCell align="center">SD 8 Gen 3</TableCell>
                    <TableCell align="center">SD 8 Gen 2</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>RAM</TableCell>
                    <TableCell align="center">12GB</TableCell>
                    <TableCell align="center">8GB</TableCell>
                    <TableCell align="center">6GB</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Storage</TableCell>
                    <TableCell align="center">256GB-1TB</TableCell>
                    <TableCell align="center">128GB-512GB</TableCell>
                    <TableCell align="center">64GB-256GB</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Main Camera</TableCell>
                    <TableCell align="center">48MP f/1.75</TableCell>
                    <TableCell align="center">48MP f/1.9</TableCell>
                    <TableCell align="center">48MP f/1.9</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Battery</TableCell>
                    <TableCell align="center">4,685 mAh</TableCell>
                    <TableCell align="center">3,200 mAh</TableCell>
                    <TableCell align="center">3,240 mAh</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Charging</TableCell>
                    <TableCell align="center">45W Fast</TableCell>
                    <TableCell align="center">25W Fast</TableCell>
                    <TableCell align="center">20W Fast</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Water Resistance</TableCell>
                    <TableCell align="center">IP69</TableCell>
                    <TableCell align="center">IP68</TableCell>
                    <TableCell align="center">IP67</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:hover': { background: '#f0f9ff' } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                    <TableCell align="center" sx={{ color: '#3b82f6', fontWeight: 'bold' }}>$1,299</TableCell>
                    <TableCell align="center" sx={{ color: '#3b82f6', fontWeight: 'bold' }}>$999</TableCell>
                    <TableCell align="center" sx={{ color: '#3b82f6', fontWeight: 'bold' }}>$799</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Key Features List */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ background: 'white', height: '100%' }}>
              <CardContent>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#1f2937'
                  }}
                >
                  🎥 Camera Excellence
                </Typography>
                <List>
                  {[
                    'Advanced Computational Photography',
                    '8K Video Recording at 60fps',
                    'Night Mode with AI Enhancement',
                    'Cinematic Video Mode',
                    'ProRAW Photo Support',
                    'Portrait Mode with Studio Lighting'
                  ].map((feature, i) => (
                    <ListItem key={i} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: '40px', color: '#3b82f6' }}>
                        ✓
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ background: 'white', height: '100%' }}>
              <CardContent>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#1f2937'
                  }}
                >
                  ⚡ Performance & Software
                </Typography>
                <List>
                  {[
                    'Latest Generation Processor',
                    'AI-Powered Performance Engine',
                    'Extended Software Support (7 years)',
                    'Game Boost Technology',
                    'Advanced Thermal Management',
                    'Fingerprint-First Security'
                  ].map((feature, i) => (
                    <ListItem key={i} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: '40px', color: '#3b82f6' }}>
                        ✓
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
