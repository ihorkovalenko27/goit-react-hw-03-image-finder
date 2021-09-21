import { Component } from 'react';
import Searchbar from './components/searchbar/Searchbar';
import SearchApi from './services/SearchApi';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import Spinner from './components/loader/Loader';
import Modal from './components/modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searchName: '',
    pickedImage: null,
    images: [],
    currentpage: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      this.setState({ images: [], currentpage: 1 }, () => this.fetchImages());
    }
  }

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  handlePickedImage = imageUrl => {
    this.setState({ pickedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ pickedImage: null });
  };

  fetchImages = () => {
    const { searchName, currentpage } = this.state;

    this.setState({ loading: true });

    SearchApi(searchName, currentpage)
      .then(data => {
        if (data.hits.length === 0) {
          toast.error('Sorry! We did not find your request.');
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentpage: prevState.currentpage + 1,
        }));
        if (currentpage > 1) {
          this.autoScroll();
        }
      })
      .finally(() => this.setState({ loading: false }));
  };

  autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, loading, pickedImage } = this.state;
    const visibleLoadmore = images.length > 0;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Spinner />}
        <ImageGallery images={images} onPicked={this.handlePickedImage} />
        {visibleLoadmore && <Button onClick={this.fetchImages} onLoading={loading} />}
        {pickedImage && <Modal src={pickedImage} closeModal={this.handleCloseModal} />}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

export default App;
