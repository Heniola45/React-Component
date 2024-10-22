import PropTypes from 'prop-types';
import './card.css';

function Card ({name, age, content, occupation }) {
  return (
    
    <div className="card-body-container">
        <div className="card-description-container">
            <h2>{name}</h2>
            <h3>{age}</h3>
            <p>{content}</p>
        </div>

        <div>
            <button>{occupation}</button>
        </div>

    </div>   

  );
  
};

Card.propTypes = {
    name: PropTypes.string.isRequired, 
    age: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired
};


Card.defaultProps = {
    name: 'John Doe',
    age: '30 years',
    content: 'This is default content about the person.',
    occupation: 'Unemployed'
  };

export default Card;
