import { Component } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateResume from './components/CreateResume';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resume:  {
        first: '',
        last: '',
        email: '',
        number: '',
      },
      resumes: [],
    };
  }


  render() {
    return (
      <div className='page'>
        <Navbar />
        <CreateResume />
        <Footer />
      </div>  
    )
  }
}

export default App;
