import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Spinner extends React.Component {
  render() {
    return <Loader type="Circles" color="#ff9d00" height={150} width={150} timeout={5000} />;
  }
}
