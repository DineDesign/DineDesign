'use client';
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box, CardActionArea } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import menuData from '../Menu/menu.json';
import Link from 'next/link';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Pizza');
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="md" className="p-9">
      <Typography variant="h2" align="center" gutterBottom>
        Menu
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
      </Typography>
      <div className="flex flex-col gap-12">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mb: 4,
            overflowX: isXsScreen ? 'auto' : 'visible',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {Object.keys(menuData).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setActiveCategory(category)}
              size="small"
              sx={{
                minWidth: 'auto',
                px: 1,
                whiteSpace: 'nowrap',
              }}
            >
              <Typography variant="button" noWrap>
                {category}
              </Typography>
            </Button>
          ))}
        </Box>

        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          {menuData[activeCategory].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
             
              <Link href={`/menus/${encodeURIComponent(item.name)}`}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price}
                    </Typography>
                  </CardContent>

                </CardActionArea>
                </Link>

              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
