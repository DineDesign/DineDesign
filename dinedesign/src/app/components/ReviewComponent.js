'use client'
import React from 'react'
import { Box, Typography, Rating, Avatar, Paper, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .03)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 5px 15px 2px rgba(0, 0, 0, .08)',
    },
}))

const AvatarStyled = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
}))

export default function ReviewComponent({ name, rating, comment, avatar }) {
    return (
        <StyledPaper elevation={1}>
            <Stack direction="row" spacing={2} alignItems="center">
                <AvatarStyled alt={name} src={avatar} />
                <Box flex={1}>
                    <Typography variant="h6" gutterBottom>{name}</Typography>
                    <Rating value={rating} readOnly precision={0.5} sx={{ mb: 1 }} />
                    <Typography variant="body1" color="text.secondary">
                        {comment}
                    </Typography>
                </Box>
            </Stack>
        </StyledPaper>
    )
}