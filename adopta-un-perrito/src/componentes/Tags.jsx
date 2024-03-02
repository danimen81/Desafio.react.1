import Badge from "react-bootstrap/Badge";



const Tags = ({ bg, texto }) => {
  return (

    <Badge bg={bg}>{texto}</Badge>
  );
};

export default Tags;
