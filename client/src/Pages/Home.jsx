import React from "react";
import {
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card,
  CardContent, CardActions, Paper, Link as MuiLink,
  CssBaseline, IconButton,
  Avatar, Divider, Stack
} from "@mui/material";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Icons
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditIcon from '@mui/icons-material/Edit';
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SearchIcon from "@mui/icons-material/Search";
import PollIcon from '@mui/icons-material/Poll';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CampaignIcon from '@mui/icons-material/Campaign';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

// Social Media Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// --- Data for Highlighted Services ---
const highlightedServices = [
  { id: "register-voter", icon: <AssignmentIndIcon sx={{ fontSize: 40 }} color="primary" />, title: "New Voter Registration", description: "Join the electoral roll for the first time. Quick and easy online process.", actionText: "Register Now", path: "/forms/form-6" },
  { id: "update-details", icon: <EditIcon sx={{ fontSize: 40 }} color="primary" />, title: "Update Your Details", description: "Correct or update your information on the Voter ID card.", actionText: "Update Now", path: "/forms/form-8" },
  { id: "find-name", icon: <SearchIcon sx={{ fontSize: 40 }} color="primary" />, title: "Search Your Name", description: "Verify your enrollment status in the electoral roll.", actionText: "Check Electoral Roll", path: "/services/search-electoral-roll" },
  { id: "download-id", icon: <CloudDownloadIcon sx={{ fontSize: 40 }} color="primary" />, title: "Download e-EPIC", description: "Access your digital Voter ID card anytime, anywhere.", actionText: "Get e-EPIC", path: "/services/download-epic" },
];

// --- Component: Navbar (Professional & Clean) --- (No changes to this component's internal code)
function AppNavbar() {
  const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Forms', path: '/forms', icon: <DescriptionIcon /> },
    { label: 'Services', path: '/services', icon: <HowToVoteIcon /> },
    { label: 'Elections', path: '/election', icon: <PollIcon /> },
    { label: 'Results', path: '/result', icon: <PollIcon sx={{transform: 'scaleX(-1)'}} /> },
    { label: 'FAQs', path: '/faqs', icon: <QuestionAnswerIcon /> },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "primary.dark", boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.06), 0px 1px 10px 0px rgba(0,0,0,0.08)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HowToVoteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: '2.5rem', color: 'secondary.main' }} />
          <Typography variant="h5" noWrap component={RouterLink} to="/" sx={{ mr: 3, display: { xs: "none", md: "flex" }, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 600, color: "white", textDecoration: "none",}}>VOTER PORTAL</Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit" aria-label="open navigation menu">
              <MenuIcon />
            </IconButton>
          </Box>

          <HowToVoteIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1, fontSize: '2rem', color: 'secondary.main' }} />
          <Typography variant="h6" noWrap component={RouterLink} to="/" sx={{mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 600, color: "white", textDecoration: "none",}}>VSP</Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button 
                key={item.label} 
                component={RouterLink} 
                to={item.path} 
                startIcon={React.cloneElement(item.icon, {sx: {mr:0.5, fontSize:'1.1rem'}})} 
                sx={{ 
                  color: "white", 
                  textTransform: 'none', 
                  fontSize: '0.95rem', 
                  px:1.5, py:0.8, 
                  '&:hover': {backgroundColor: 'primary.main'} 
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Button 
              component={RouterLink}
              to="/admin"
              startIcon={<AdminPanelSettingsIcon />} 
              variant="outlined"
              color="secondary"
              sx={{ 
                my: 1, 
                py: 0.8, 
                whiteSpace: 'nowrap', 
                borderRadius: '20px', 
                px: 2.5, 
                borderColor: 'secondary.light',
                color: 'secondary.light',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'rgba(255,255,255,0.08)'
                }
              }}
            >
              Admin
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// --- Component: Hero Section (MODIFIED for Voatz-like layout) ---
function HeroSection() {
  const navigate = useNavigate();
  // Placeholder image for Voatz-like hero. Replace with a high-quality, relevant image.
  const heroImageUrl = "https://t3.ftcdn.net/jpg/11/82/68/24/240_F_1182682428_tJCEz9F25lCWhniHEWgQzt7Gbw7HeUvn.jpg"; // Abstract tech background

  return (
    <Box 
      sx={{ 
        minHeight: { xs: 'auto', md: 'calc(90vh - 64px)' }, // Adjusted height
        background: 'linear-gradient(135deg, #1c3a6b 0%, #2a5298 45%, #3e6ac2 100%)', // Slightly adjusted gradient
        color: "white", 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{xs: 4, md: 6}} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              component="h1" 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2, 
                textAlign: { xs: 'center', md: 'left' },
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
              }}
            >
              Your Voice, Your Vote.
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                color: 'rgba(255,255,255,0.9)', 
                maxWidth: { xs: '100%', md: '550px' }, 
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.7,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Welcome to the official Voter Service Portal. Access essential electoral services, stay informed, and participate actively in the democratic process.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              {/* "Check Your Name" button removed from here */}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              src={heroImageUrl}
              alt="Modern electoral technology"
              sx={{
                width: '100%',
                maxWidth: { xs: '350px', sm: '450px', md: '550px' },
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                objectFit: 'cover',
                maxHeight: '450px' 
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// --- Component: Highlighted Service Card --- (No changes to this component's internal code)
function HighlightedServiceCard({ icon, title, description, actionText, path }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper elevation={0} sx={{ p: 3, textAlign: 'center', borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid', borderColor: 'divider', transition: 'all 0.3s ease', '&:hover': {borderColor: 'primary.main', transform: 'translateY(-5px)', boxShadow: '0 12px 20px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'} }}>
        <Box>
          <Avatar sx={{ bgcolor: 'rgba(13,71,161,0.1)', color: 'primary.main', width: 72, height: 72, margin: '0 auto 20px auto' }}>
            {icon}
          </Avatar>
          <Typography variant="h6" component="h3" sx={{ color: 'primary.dark', fontWeight: '600', mb: 1.5 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2.5, minHeight: '3.2em' /* Ensure consistent description height */ }}>
            {description}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={() => navigate(path)} fullWidth sx={{ mt: 'auto', borderRadius: '20px', py: 1.2, fontWeight: 'bold' }}>
          {actionText}
        </Button>
      </Paper>
    </Grid>
  );
}

// --- Component: Footer --- (No changes to this component's internal code)
function SiteFooter() {
  return ( <Box sx={{ bgcolor: "primary.dark", color: "grey.300", p: {xs:3, md:6} }} component="footer"><Container maxWidth="xl"><Grid container spacing={5} justifyContent="space-between"><Grid item xs={12} sm={6} md={4} lg={3}><Typography variant="h6" sx={{color: "white", mb:2}}>Election Commission</Typography><Typography variant="body2" sx={{mb:1}}>Nirvachan Sadan, Ashoka Road,<br/>New Delhi 110001, India.</Typography><Typography variant="body2">Toll Free: 1950</Typography></Grid><Grid item xs={12} sm={6} md={2} lg={2}><Typography variant="h6" sx={{color: "white", mb:2}}>Quick Links</Typography><MuiLink component={RouterLink} to="/about-eci" color="inherit" display="block" sx={{mb:1, '&:hover':{color:'secondary.main', textDecoration:'underline'}}}>About ECI</MuiLink><MuiLink component={RouterLink} to="/contact-us" color="inherit" display="block" sx={{mb:1, '&:hover':{color:'secondary.main', textDecoration:'underline'}}}>Contact Us</MuiLink><MuiLink component={RouterLink} to="/faqs" color="inherit" display="block" sx={{mb:1, '&:hover':{color:'secondary.main', textDecoration:'underline'}}}>FAQs</MuiLink><MuiLink component={RouterLink} to="/disclaimer" color="inherit" display="block" sx={{'&:hover':{color:'secondary.main', textDecoration:'underline'}}}>Disclaimer</MuiLink></Grid><Grid item xs={12} sm={6} md={3} lg={3}><Typography variant="h6" sx={{color: "white", mb:2}}>Related Portals</Typography><MuiLink href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" color="inherit" display="block" sx={{mb:1, '&:hover':{color:'secondary.main', textDecoration:'underline'}}}>ECI Main Website</MuiLink><MuiLink href="#" color="inherit" display="block" sx={{mb:1, '&:hover':{color:'secondary.main', textDecoration:'underline'}}}>National Grievance Service</MuiLink><MuiLink href="#" color="inherit" display="block" sx={{mb:1, '&:hover':{color:'secondary.main', textDecoration:'underline'}}}>cVIGIL</MuiLink><MuiLink href="#" color="inherit" display="block" sx={{'&:hover':{color:'secondary.main', textDecoration:'underline'}}}>SVEEP Portal</MuiLink></Grid><Grid item xs={12} sm={6} md={3} lg={3}><Typography variant="h6" sx={{color: "white", mb:2}}>Connect With Us</Typography><Box><IconButton href="#" sx={{color: 'grey.300', '&:hover':{color:'secondary.main'}}}><FacebookIcon /></IconButton><IconButton href="#" sx={{color: 'grey.300', '&:hover':{color:'secondary.main'}}}><TwitterIcon /></IconButton><IconButton href="#" sx={{color: 'grey.300', '&:hover':{color:'secondary.main'}}}><YouTubeIcon /></IconButton><IconButton href="#" sx={{color: 'grey.300', '&:hover':{color:'secondary.main'}}}><InstagramIcon /></IconButton></Box><Typography variant="body2" sx={{mt:2}}>For latest updates and information.</Typography></Grid></Grid><Divider sx={{ my: {xs:3, md:4}, borderColor: 'rgba(255,255,255,0.2)' }} /><Typography variant="body2" align="center">{"Content owned & provided by Election Commission of India. © "}<MuiLink color="inherit" href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" sx={{'&:hover':{color:'secondary.main', textDecoration:'underline'}}}>ECI</MuiLink>{" "}{new Date().getFullYear()}{". All rights reserved."}</Typography></Container></Box> );
}

// --- Main NewHomePage Component (MODIFIED for Voatz-like section styling) ---
export default function NewHomePage() {
  return (
    <>
      <CssBaseline />
      <AppNavbar />
      <main>
        <HeroSection /> {/* Uses the modified HeroSection */}

        {/* Key Voter Services Section - Light Background */}
        <Box sx={{ backgroundColor: 'background.paper', py: {xs:6, md:10} }}> {/* Voatz often uses white or very light gray */}
          <Container maxWidth="lg">
            <Typography 
              variant="h3" // Slightly larger for emphasis
              component="h2" 
              align="center" 
              sx={{ mb: 2, color: 'primary.dark', fontWeight: 'bold' }}
            >
              Key Voter Services
            </Typography>
            <Typography 
              variant="h6" 
              align="center" 
              color="text.secondary" 
              sx={{ mb: {xs:5, md:8}, maxWidth: '700px', marginX: 'auto', lineHeight: 1.7 }}
            >
              Empowering every citizen with accessible and efficient electoral services. Find what you need to participate with confidence.
            </Typography>
            <Grid container spacing={4} justifyContent="center"> {/* Increased spacing slightly */}
              {highlightedServices.map((service) => (<HighlightedServiceCard key={service.id} {...service} />))}
            </Grid>
            <Box textAlign="center" mt={6}> {/* Increased margin top */}
              <Button 
                component={RouterLink} 
                to="/services" 
                variant="contained" // Changed to contained for more prominence
                color="primary" 
                size="large" 
                sx={{borderRadius: '25px', px:5, py: 1.5, fontSize: '1rem'}}
              >
                Explore All Services
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Simple Steps to Participate Section - Tinted Background */}
        <Box sx={{ backgroundColor: '#f4f7fc' /* Light blue/gray tint, Voatz-like */, py: {xs:6, md:10} }}>
          <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center"> {/* Increased spacing */}
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  sx={{ mb: 2.5, color: 'primary.dark', fontWeight: 'bold' }}
                >
                  Seamless Electoral Journey
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3.5, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Our portal is designed to make your electoral participation straightforward and secure. From first-time registration to staying informed, we provide clear pathways.
                </Typography>
                {[
                  "Verify your eligibility and register online seamlessly.",
                  "Keep your voter details accurate and up-to-date with ease.",
                  "Locate your polling station and learn about your candidates.",
                  "Cast your vote confidently and be an active part of democracy."
                ].map((step, index) => (
                  <Stack direction="row" spacing={2} alignItems="center" key={index} sx={{mb: 2}}>
                    <CheckCircleOutlineIcon color="success" sx={{fontSize: '1.8rem'}} />
                    <Typography variant="body1" sx={{fontSize: '1.05rem'}}>{step}</Typography>
                  </Stack>
                ))}
                 <Button 
                    component={RouterLink} 
                    to="/about-us" 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    sx={{ mt: 4, borderRadius: '25px', px:4, py: 1.2 }} 
                    startIcon={<InfoOutlinedIcon />}
                  >
                  Learn More About Us
                </Button>
              </Grid>
              <Grid item xs={12} md={6} sx={{display: {xs: 'none', md: 'flex'}, justifyContent:'center', alignItems:'center'}}>
                <Box 
                    component="img" 
                    src="https://t4.ftcdn.net/jpg/14/84/18/97/240_F_1484189733_ug4HPksoeln5Ni93D93n8klpZQ36d1b2.jpg" 
                    alt="Voting Process Illustration" 
                    sx={{ width: '100%', maxWidth: '500px', borderRadius: 3, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }} 
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Latest Updates Section - Light Background again */}
        <Box sx={{ backgroundColor: 'background.paper', py: {xs:6, md:10} }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              sx={{ mb: {xs:5, md:8}, color: 'primary.dark', fontWeight: 'bold' }}
            >
              <CampaignIcon sx={{fontSize: '3rem', verticalAlign: 'bottom', mr: 1.5, color: 'secondary.main'}}/>
              Latest Updates & News
            </Typography>
            <Grid container spacing={4}> {/* Increased spacing */}
              {[
                {title: "ECI announces schedule for upcoming state elections.", date: "15 Mar 202X", link:"#", category: "Election News"},
                {title: "Final electoral rolls published for XYZ constituency.", date: "10 Mar 202X", link:"#", category: "Roll Updates"},
                {title: "New voter awareness campaign launched nationwide.", date: "05 Mar 202X", link:"#", category: "SVEEP Activities"}
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.07)', '&:hover': {boxShadow: '0 8px 24px rgba(0,0,0,0.12)',  transform: 'translateY(-3px)'}, transition: 'all 0.3s ease'}}>
                    <CardContent sx={{flexGrow: 1}}>
                      <Typography variant="caption" color="secondary.dark" display="block" sx={{mb:0.5, fontWeight:'bold', letterSpacing: '0.5px'}}>{item.category.toUpperCase()}</Typography>
                      <Typography variant="h6" component="div" sx={{mb:1, fontWeight:'600', color:'primary.textDark', minHeight:'3.5em', lineHeight: 1.4}}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{mb:2}}>Published on: {item.date}</Typography>
                    </CardContent>
                    <CardActions sx={{px:2, pb:2, pt:0}}>
                      <Button component={RouterLink} to={item.link} size="small" variant="text" color="primary" sx={{fontWeight:'bold', textTransform: 'none', '&:hover': {backgroundColor: 'rgba(13,71,161,0.05)'}}}>Read Full Story →</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box textAlign="center" mt={6}> {/* Increased margin top */}
              <Button 
                component={RouterLink} 
                to="/announcements" 
                variant="outlined" // Changed to outlined for secondary action
                color="primary" 
                size="large" 
                sx={{borderRadius: '25px', px:5, py: 1.5, fontSize: '1rem'}}
              >
                View All News & Updates
              </Button>
            </Box>
          </Container>
        </Box>
      </main>
      <SiteFooter />
    </>
  );
}