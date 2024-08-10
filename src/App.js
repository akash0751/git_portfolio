import logo from './logo.svg';
import './App.css';
import akash from './akash.jpg'
import resume from './resume.jpg'

function App() {
  return (
    <div className="App">
      <header className="header">Akash</header>
      <content>
      <img className="img" src={akash} alt="akash images"></img>
      <h1>-I,M AKASH</h1>
      <h2>WEB DEVELOPER</h2>
      <p>I'm an enthusiastic web developer focused oncrafting clean & user-friendly experiences. I'm passionate about building excellent software that improves the lives of those around me</p>
      -------
      <div className="h3">
      <h1>ABOUT ME</h1>
      <h3>Name: Akash</h3>
      <h3>Age: 19</h3>
      <h3>Nationality: Indian</h3>
      <h3>Address: Coimbatore</h3>
      <h3>Phone: 9791611675</h3>
      <h3>Email: akashsofficial05@gmail.com</h3>
      </div>
      ------------
      <h1>MY SKILLS</h1>
      <p>Java =</p>
      <p>React=</p>
      <p>C=</p>
      <p>You can view my resume </p>
      <a className="a" href={resume} alt="resume image">Download</a>
       <p>--------------------------------------------------</p>
       <h1>EDUCATION</h1>
       <h2>UG DEGREE - SNS INSTITUTIONS</h2>
       <p>Where innovation meets excellence, SNS paves the path for future technocrafts</p>
       <h2>HSC/SSLC- MOTHER'S MATRIC. HR. SEC. SCHOOL</h2>
       <p>Where childhood meets enjoyment, school paves the path for future talents</p>
      </content>
      <border>
        <div className="border">
        <h1>CONTACT</h1>
        <p>If you want to discuss more in details, please contact me</p>
        <p>Email: akashsofficial05@gmail.com</p>
        <p>Phone: 9791611675</p>
        </div>
      </border>
  
    </div>
  );
}

export default App;
