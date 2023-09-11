import React from 'react';
import './Home.css';
import Row from './Row';

function Home() {
  return (
    <div className="home-container">
      <div className='home-img-div'>
        <img src={require('../images/front_img.png')} alt="Logo" className="front_image" />
      </div>

      <div className="heading">
        <h1>Welcome to Poetree Preschool! A place where little learners embark on an exciting educational journey filled with wonder, growth, and joyful exploration.</h1>
      </div>

      <div className='first-row'>
        <Row imageSrc={require('../images/i2.jpg')} title="Holistic Development" description="Our preschool program focuses on the holistic development of each child, encompassing their cognitive, physical, social, emotional, and creative growth. We offer a range of activities, including art, music, storytelling, outdoor play, and hands-on experiences, to provide a well-rounded educational experience. " />
        <Row imageSrc={require('../images/i1.jpg')} title="Child-Centered Approach" description="At our preschool, we believe in a child-centered approach to education. We understand that each child is unique and has their own individual learning style. Our teachers create a supportive and inclusive environment that encourages children to explore, discover, and learn at their own pace. " />
      </div>
      <div className='second-row'>
        <Row imageSrc={require('../images/homework_support.jpg')} title="Individualized Attention" description="We value the importance of individualized attention and strive to maintain small class sizes. This allows our teachers to provide personalized guidance and support to each child, recognizing their strengths, interests, and areas for growth. We aim to create a warm and nurturing environment where children feel safe, valued and empowered. " />
        <Row imageSrc={require('../images/i3.jpg')} title="Safe and Stimulating Environment" description="Your child's safety and well-being are our top priorities. We maintain a clean, secure and stimulating environment that is conducive to learning and exploration. We adhere to strict safety protocols and ensure that our facilities and materials are age-appropriate and maintained to the highest standards." />
      </div>
      <div className="description">
        At our preschool, we believe in the power of early childhood education to shape the foundation of a child's future success. Started by <strong>ECE trained and experienced teachers,</strong> we create a safe and stimulating space where every child can thrive. We are dedicated to fostering a love for learning, nurturing social-emotional development, and igniting curiosity through play-based experiences. Join us as we inspire young minds, celebrate each milestone, and build a solid educational foundation for a lifetime of achievement.
      </div>
    </div>
  );
}

export default Home;
