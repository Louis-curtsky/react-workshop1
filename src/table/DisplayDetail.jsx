import Card from 'react-bootstrap/Card';

function DisplayDetail ({item}) {

  console.log("Detail: "+item);
return(
  <Card border="primary" style="max-width: 18rem;">
  <Card.Header></Card.Header>
  <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text></Card.Text>
      <Card.Text></Card.Text>
  </Card.Body>
  </Card>
);}

export default DisplayDetail;