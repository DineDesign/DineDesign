import { Container, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

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
    return (
        <Container maxWidth="md" className='p-9'>
            <Typography variant="h2" align="center" gutterBottom>
                Our Special Offers
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <ImageList sx={{ display: 'flex', flexGrow: 1 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: 600, height: 450 }}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
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