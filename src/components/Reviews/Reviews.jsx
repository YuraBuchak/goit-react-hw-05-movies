import { fetchReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const { results } = await fetchReviews(movieId);

        const filteredReviws = results.map(({ id, author, content }) => {
          return { id, author, content };
        });

        setReviews(filteredReviws);
      } catch (error) {
        console.warn(error);
      }
    }
    fetch();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any rewiews for this movie.</p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <div key={id}>
            <h4>Author: {author} </h4>
            <p>{content}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Reviews;
