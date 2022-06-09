import Card from 'react-bootstrap/Card';

function DisplayDetail ({item}) {

  console.log("Detail: "+item);
return(
  <Card style={{ width: '18rem' }}>
  <Card.Header>{item.id}</Card.Header>
  <Card.Body>
      <Card.Title>{item.first_name} {item.last_name}</Card.Title>
      <Card.Text>{item.age}</Card.Text>
      <Card.Text>{item.gender}</Card.Text>
  </Card.Body>
  </Card>
);}

export default DisplayDetail;