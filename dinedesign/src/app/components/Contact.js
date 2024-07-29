'use client'

import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Typography, 
  useMediaQuery 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div id = "contact">

    <Box sx={{ bgcolor: 'rose.50', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            { icon: <LocationOnIcon />, title: 'Locate us', content: 'Riverside 25, San Fran, Cali' },
            { icon: <AccessTimeIcon />, title: 'Open Hours', content: 'Mon - Fri: 9:00 am - 9:00 pm' },
            { icon: <EmailIcon />, title: 'Reservation', content: 'daveinder2007@gmail.com' },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
                  {item.icon}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Story Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="Restaurant.jpg"
              alt="Restaurant"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 400,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 }, borderLeft: { md: '2px solid', borderColor: 'grey.300' } }}>
              <Typography variant="h4" gutterBottom>
                The Story
              </Typography>
              <Typography variant="body1" paragraph>
                This is a paragraph of text that will be displayed next to the image. When the screen size
                is smaller than the `md` breakpoint, the image and text will stack vertically.
              </Typography>
              <Grid container spacing={2}>
                {['1996', '2005'].map((year, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="h5" gutterBottom>
                      {year}
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab minima error, accusantium odit sint!
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="h5" sx={{ mt: 4 }}>
                Dave Singh
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}