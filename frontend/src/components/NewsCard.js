import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ title = 'Untitled', description = 'No description available', image = null, date }) => {
  const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date';
  const imageUrl = image ? `http://localhost:1337${image}` : 'https://via.placeholder.com/300x200';
  
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={imageUrl}
        alt={title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="h5 mb-2">{title}</Card.Title>
        <Card.Text className="text-muted">
          {description.length > 150 ? `${description.substring(0, 150)}...` : description}
        </Card.Text>
        <small className="text-muted d-block mt-2">{formattedDate}</small>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
