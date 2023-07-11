import "./Aboutus.css";
//import './Bg.css';
// import './Aboutus_image.jpg';
export const About = () => {
  return (
    <div class="section">
      <div class="container">
        <div class="title">
          <h1>About Us</h1>
        </div>
        <div class="article">
          <h1>About Our Project</h1>
          <p>
          This project primarily emphasizes the detection of weather patterns through image analysis and utilizing a weather API to predict temperature and humidity based on user-entered city names. Our objective is to employ cutting-edge Deep Learning algorithms, particularly Convolutional Neural Networks, to process the images and integrate an AI model as a user-friendly interface. Simultaneously,the frontend and backend components were developed to ensure seamless functionality.
            <b />
            <p>
            </p>
          </p>
          <h2>About us</h2>
          <p>
            As second-year students of KMIT, we have undertaken this team project as part of our Project-School curriculum. This endeavor has proven to be highly beneficial in enhancing our understanding of the underlying concepts involved. It has provided us with valuable hands-on experience and learning opportunities.
            <br />
            {/* 2.  */}
            {/* <br /> */}
            {/* 3.  */}
          </p>
          {/* <br />
          <br /> */}
          {/* <br /> */}
        </div>
        <div class="images">
          {/* <img src='C:\Users\Paduru Ananya\OneDrive\Documents\VS REACT\ps2\weather\src\pexels-anna-shvets-3987020.jpg' />
           */}
        </div>
      </div>
    </div>
  );
};
