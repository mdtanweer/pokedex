import Modal from 'react-bootstrap/Modal';
import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonCard(props) {
  const [item,setItem]=useState();
  const [show, setShow] = useState(false);
  const src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"+props.id+".svg";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => res.json())
      .then((json) => {
        setItem();
        console.log(json);
      });
  })
  return (
    <>
    <div className='single-card'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>{props.id}</span>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" src={src} />
        <Button variant="primary" onClick={handleShow}>Click to open</Button>
      </Card.Body>
    </Card>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-body'>
            <img alt='img' src={src} className="image-size"/>
            <div>
              <h1>Stats</h1>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PokemonCard