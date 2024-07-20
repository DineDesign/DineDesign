import { notFound } from 'next/navigation';
import { Typography, Card, CardMedia, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LocalFireDepartment, Restaurant, People } from '@mui/icons-material';
import menuData from '../../Menu/menu.json';

export default function MenuItem({ params }) {
  const { itemName } = params;
  const item = Object.values(menuData).flat().find(
    menuItem => menuItem.name === decodeURIComponent(itemName)
  );

  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 bg-gray-100">
      {/* Left section (2/3 on desktop) */}
      <div className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0">
        <Card className="h-full flex flex-col">
          <CardMedia
            component="img"
            className="h-64 lg:h-96 object-cover"
            image={item.image}
            alt={item.name}
          />
          <CardContent className="flex-grow flex flex-col">
            <Typography variant="h4" className="mb-2">{item.name}</Typography>
            <Typography variant="h6" color="text.secondary" className="mb-4">${item.price}</Typography>
            <Typography variant="h5" className="mb-4">Reviews</Typography>
            <div className="flex-grow bg-gray-200 rounded-lg p-4">
              {/* Add your carousel component here */}
              <p>Review carousel goes here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right section (1/3 on desktop) */}
      <div className="w-full lg:w-1/3">
        <Card className="h-full">
          <CardContent>
            <Typography variant="h4" className="mb-4">{item.name}</Typography>
            <Typography variant="body1" paragraph>
              Detailed description of {item.name} goes here. This paragraph should contain
              information about the dish, its ingredients, and any other relevant details.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><LocalFireDepartment color="error" /></ListItemIcon>
                <ListItemText primary="Spice Level" secondary="Medium" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Restaurant color="primary" /></ListItemIcon>
                <ListItemText primary="Flavor Profile" secondary="Savory with a hint of sweetness" />
              </ListItem>
              <ListItem>
                <ListItemIcon><People color="action" /></ListItemIcon>
                <ListItemText primary="Serving Size" secondary="2-3 people" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.values(menuData).flat().map(item => ({
    itemName: encodeURIComponent(item.name),
  }));
}