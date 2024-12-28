import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/articles');
        console.log('Full API Response:', response.data);
        
        if (response.data && response.data.data) {
          setArticles(response.data.data);
        } else {
          setError('No articles data found in the response');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return (
      <div>
        <Hero />
        <Container>
          <p className="text-center text-danger">{error}</p>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <Container>
        <h2 className="text-center mb-4">Latest News & Articles</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : articles && articles.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {articles.map((article) => {
              if (!article) {
                return null;
              }
              
              return (
                <Col key={article.id}>
                  <NewsCard
                    title={article.title || 'Untitled'}
                    description={article.description || 'No description available'}
                    image={article.cover?.formats?.medium?.url || article.cover?.url}
                    date={article.publishedAt}
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          <p className="text-center">No articles found</p>
        )}
      </Container>
    </div>
  );
};

export default Home;
