import Title from '../Title/title';
import Card from '../Card/card';
import './body.css';

function Body () {
    return (
        <div className="body-container">
            <Title/>
            <div className="cards-container">
            <Card
            name="Zahra Omotoso"
            age="30 years"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. thddiifvjhvvhffhfv"
            occupation="Doctor"
            />
            <Card
            name="John Doe"
            age="25 years"
            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            occupation="Software Engineer"
            />
            <Card
            name="John Doe"
            age="25years"
            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            occupation="Software Engineer"
            />
            <Card
            name="Zahra Omotoso"
            age="30 years"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. thddiifvjhvvhffhfv"
            occupation="Doctor"
            />
            <Card
            name="Zahra Omotoso"
            age="30 years"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. thddiifvjhvvhffhfv"
            occupation="Doctor"
            />
            <Card
            name="John Doe"
            age="25 years"
            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            occupation="Software Engineer"
            />
            
  
            </div>
         
        </div>
      
        
  
    );
  };
  
  export default Body;