import { Component } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateResume from './components/CreateResume';
import ViewResume from './components/ViewResume';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resume:  {
        first: '',
        last: '',
        email: '',
        number: '',
        education: [],
        work: [],
        skills: [],
        additional: '',
      },
      resumes: [],
      resumeForm: true,
    };
  }

  render() {
    const pageHandler = () => {
        if(this.state.resumeForm === true) {
          this.setState({
            resumeForm: false,
          })
        }
        else {
          this.setState({
            resumeForm: true,
          });
        }
    };

    return (
      <div className='page'>
        <Navbar onPage={pageHandler}/>
        {this.state.resumeForm ? <CreateResume/> : <ViewResume/>}
        <Footer />
      </div>  
    )
  }
}

export default App;
