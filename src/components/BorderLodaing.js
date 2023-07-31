import { Spinner } from 'react-bootstrap';

function BorderLoading(props) {
  return (
    <Spinner {...props} animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default BorderLoading;
