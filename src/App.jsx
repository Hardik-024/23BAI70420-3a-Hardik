import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Home from './pages/Home'
import Components from './pages/Components'

const theme = createTheme({
  palette: {
    primary: { main: '#1f2937' },
    secondary: { main: '#3b82f6' },
    success: { main: '#10b981' },
    warning: { main: '#f59e0b' },
    info: { main: '#06b6d4' }
  },
  typography: {
    fontFamily: '"Poppins", "Segoe UI", sans-serif'
  }
})

function AppContent() {
  const location = useLocation()

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(31, 41, 55, 0.1)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
                fontSize: '24px'
              }}
            >
              PHONEX
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: location.pathname === '/' ? '#3b82f6' : '#333',
                    fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                    fontSize: '16px',
                    textTransform: 'none',
                    '&:hover': { color: '#3b82f6' }
                  }}
                >
                  Catalog
                </Button>
              </Link>
              <Link to="/components" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: location.pathname === '/components' ? '#3b82f6' : '#333',
                    fontWeight: location.pathname === '/components' ? 'bold' : 'normal',
                    fontSize: '16px',
                    textTransform: 'none',
                    '&:hover': { color: '#3b82f6' }
                  }}
                >
                  Specs
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
