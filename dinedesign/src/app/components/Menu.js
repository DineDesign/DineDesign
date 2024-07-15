'use client';
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';

const menuItems = {
    Appetizers: [
        { name: "Bruschetta", price: 8, image: "/path-to-bruschetta.jpg" },
        { name: "Calamari", price: 10, image: "/path-to-calamari.jpg" },
        { name: "Calamari", price: 10, image: "/path-to-calamari.jpg" },
        { name: "Calamari", price: 10, image: "/path-to-calamari.jpg" },

    ],
    Pizza: [
        { name: "Margherita", price: 10, image: "/path-to-margherita.jpg" },
        { name: "Pepperoni", price: 12, image: "/path-to-pepperoni.jpg" },
    ],
    Desserts: [
        { name: "Tiramisu", price: 7, image: "/path-to-tiramisu.jpg" },
        { name: "Cannoli", price: 6, image: "/path-to-cannoli.jpg" },
        { name: "Tiramisu", price: 7, image: "/path-to-tiramisu.jpg" },

        // ... more desserts
    ],
    Bar: [
        { name: "Red Wine", price: 8, image: "/path-to-red-wine.jpg" },
        { name: "Cocktail", price: 10, image: "/path-to-cocktail.jpg" },
    ]
};

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('Pizza');

    return (
        <Container maxWidth="md" className='p-9'>
            <Typography variant="h2" align="center" gutterBottom>
                Menu
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
            </Typography>
            <div className='flex flex-col gap-12'>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
                    {Object.keys(menuItems).map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "contained" : "outlined"}
                            color="primary"
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {menuItems[activeCategory].map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ${item.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}