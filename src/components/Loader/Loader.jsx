import Spinner from 'react-loader-spinner';
import { Fallback } from './Loader.styles';

export default function Loader() {
  return (
    <Fallback>
      <Spinner
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </Fallback>
  );
}
