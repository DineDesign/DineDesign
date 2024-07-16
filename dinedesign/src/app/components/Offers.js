'use client'
import { Container, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '$9.99',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '$12.99',
    },
];

export default function Offers() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="md" className='p-9'>
            <Typography variant="h2" align="center" gutterBottom>
                Our Special Offers
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <ImageList cols={isSmallScreen ? 1 : 2} gap={16}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: 600,
                        margin: '0 auto',
                    }}>
                        <img
                            src={`${item.img}?w=600&h=450&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=600&h=450&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}