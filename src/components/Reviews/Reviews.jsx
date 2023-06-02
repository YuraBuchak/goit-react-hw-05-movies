import { fetchReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'Style.module.css';

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
    <div className={css.review}>
      {reviews.length === 0 ? (
        <p className={css.reviewTitle}>
          We don't have any rewiews for this movie.
        </p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <div key={id}>
            <h4 className={css.reviewTitle}>Author: {author} </h4>
            <p className={css.reviewInfo}>{content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
