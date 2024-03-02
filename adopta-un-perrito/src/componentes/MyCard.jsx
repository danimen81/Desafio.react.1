
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({img, name, desc, bg, texto})=>{
   

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {desc}
          </Card.Text>
          <Tags bg={bg} texto={texto}/>
        </Card.Body>
      </Card>
    );
  }
  
  export default MyCard;