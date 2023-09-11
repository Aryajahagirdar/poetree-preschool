import React from "react";
import "./About.css"

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-title">
                        Our Preschool and Daycare
                    </div>
                    <div className="about-description">
                        Our preschool is founded by a team of highly experienced and Early Childhood Education (ECE) trained teachers who are passionate about providing exceptional early learning experiences for children. With their extensive knowledge and expertise in child development, our teachers have created a nurturing and stimulating environment that fosters growth, curiosity, and a love for learning.
                    </div>
                </div>
                <div className="about-img">
                    <img src={require('../images/tree1.png')} alt="Logo" className="about_img" />
                </div>
            </div>

            <div className="card-container-about">
                <div className="about-card">
                    <div className="card-title">
                        <div className="title-name">
                            Mission
                        </div>
                        <div className="title-img">
                            <img src={require('../images/mission.png')} alt="mission" className="mission-img" />
                        </div>
                    </div>
                    <p className="card-description">
                        The mission of our daycare and preschool is to provide a nurturing and inclusive environment where children can grow, learn, and thrive. We are dedicated to fostering their holistic development by offering a stimulating and personalized attention, all while ensuring their safety and well-being.
                    </p>
                </div>
                <div className="about-card">
                    <div className="card-title">
                        <div className="title-name">
                            Vision
                        </div>
                        <div className="title-img">
                            <img src={require('../images/vision.png')} alt="vision" className="vision-img" />
                        </div>
                    </div>
                    <p className="card-description">
                        Our vision is to be a leading early childhood education institution that empowers young learners to become confident, curious, and compassionate individuals. We strive to create an atmosphere of creativity, exploration, and joy, where children develop a lifelong love for learning and are well-prepared for future academic and social success.
                    </p>
                </div>

                <div className="values">
                    <div className="card-title">
                        <div className="title-values">
                            Values
                        </div>
                    </div>
                    <ul className="card-description">
                        <li><strong>Child-Centered Approach:</strong> We prioritize the needs, interests, and individuality of each child. We tailor our programs and activities to support their unique development, abilities, and learning styles.</li>
                        <li><strong>Respect and Inclusion:</strong> We promote an inclusive and respectful environment that embraces diversity. We celebrate and value each child's background, culture, and experiences, fostering a sense of belonging and acceptance.</li>
                        <li><strong>Holistic Development:</strong> We believe in nurturing children's cognitive, physical, social, emotional, and creative abilities. Our curriculum and activities are designed to promote well-rounded growth and provide a strong foundation for future learning.</li>
                        <li><strong>Safety and Well-being:</strong> We prioritize the safety, health, and well-being of every child in our care. We maintain a secure environment, adhere to strict safety standards, and provide nutritious meals to support their overall development.</li>
                        <li><strong>Partnership with Families:</strong> We recognize the importance of building strong partnerships with families. We strive to maintain open and transparent communication, involving parents/guardians in their child's learning journey and seeking their input and feedback</li>
                        <li><strong>Professionalism and Continuous Learning:</strong> We are committed to maintaining high standards of professionalism and expertise. Our teachers engage in ongoing professional development to stay updated with the latest research and best practices in early childhood education.</li>
                        <li><strong>Play-based Learning:</strong> We embrace the power of play as a fundamental aspect of children's learning and development. We create a play-based environment where children can explore, discover, and develop essential skills through hands-on experiences.</li>
                    </ul>
                </div>
                <div className="end-description">
                    These mission, vision, and values reflect our commitment to providing an exceptional early childhood education experience that lays a solid foundation for lifelong learning and well-being.
                </div>
            </div>

        </div>
    );
}

export default About;
