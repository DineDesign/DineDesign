'use client'
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ReviewComponent from './ReviewComponent';

const staticReviews = [
    { name: 'John Doe', rating: 4, comment: 'Great product! I really enjoyed using it and would recommend it to others.', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', rating: 5, comment: 'Excellent service and quality. The attention to detail was impressive.', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Mike Johnson', rating: 3.5, comment: 'Good overall, but there\'s room for improvement in some areas.', avatar: 'https://i.pravatar.cc/150?img=8' },
];

export default function Review() {


    return (
        <Container maxWidth="md" className='p-5' id = "reviews">
            <Typography variant="h3" gutterBottom sx={{ mb: 4, fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                Customer Reviews
            </Typography>
            <Box>
                {staticReviews.map((review, index) => (
                    <ReviewComponent key={index} {...review} />
                ))}
            </Box>
        </Container>
    );
}