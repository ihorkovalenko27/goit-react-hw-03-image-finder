import s from './Button.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Button = ({ onClick, onLoading }) => {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      <Loader
        type="Oval"
        color="#ff9d00"
        height={20}
        width={20}
        timeout={3000}
        visible={onLoading}
      />
      {onLoading ? '' : 'Load more'}
    </button>
  );
};

export default Button;
