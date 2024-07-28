'use client';
import { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, 
  ListItemText, Card, CardContent, Button, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

// Array of website sections for the CMS
const websiteSections = [
  { title: 'Home Page', description: 'Edit main landing page content' },
  { title: 'Menu', description: 'Update food and drink items' },
  { title: 'About Us', description: 'Modify restaurant information' },
  { title: 'Contact', description: 'Change contact details and form' },
  { title: 'Reservations', description: 'Adjust reservation system settings' },
];

export default function CMSPage() {
  // State for sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for expanded card index
  const [expandedCard, setExpandedCard] = useState(null);
  // State for controlling the expansion animation
  const [isExpanding, setIsExpanding] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Handle card expansion
  const toggleCard = (index) => {
    if (expandedCard === null) {
      setExpandedCard(index);
      setIsExpanding(true);
    } else {
      setIsExpanding(false);
    }
  };

  // Effect to handle the closing animation
  useEffect(() => {
    if (!isExpanding && expandedCard !== null) {
      const timer = setTimeout(() => setExpandedCard(null), 300); // 300ms matches the CSS transition time
      return () => clearTimeout(timer);
    }
  }, [isExpanding, expandedCard]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="flex-grow">
            Restaurant CMS
          </Typography>
          <Button color="inherit">Analytics</Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar}>
        <div className="w-64">
          <IconButton onClick={toggleSidebar}>
            <ChevronRightIcon />
          </IconButton>
          <List>
            {websiteSections.map((section, index) => (
              <ListItem button key={index} onClick={() => toggleCard(index)}>
                <ListItemText primary={section.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      {/* Main content area */}
      <main className="p-4">
        <Typography variant="h4" className="mb-4">Website Content</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {websiteSections.map((section, index) => (
            <Card key={index} className="transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleCard(index)}>
              <CardContent>
                <Typography variant="h6">{section.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {section.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Expanded card overlay */}
      {expandedCard !== null && (
        <div className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${isExpanding ? 'bg-opacity-50' : 'bg-opacity-0'} flex items-center justify-center z-50`}>
          <div className={`bg-white rounded-lg w-full max-w-3xl m-4 p-6 relative transition-all duration-300 ease-in-out ${isExpanding ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <IconButton 
              className="absolute top-2 right-2" 
              onClick={() => setIsExpanding(false)}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" className="mb-4">
              {websiteSections[expandedCard].title}
            </Typography>
            <Typography variant="body1" className="mb-4">
              {websiteSections[expandedCard].description}
            </Typography>
            <Box className="bg-gray-100 p-4 rounded">
              <Typography variant="body2">
                This is where you can add form fields, JSON editors, or any other
                content management tools for the {websiteSections[expandedCard].title} section.
              </Typography>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
}