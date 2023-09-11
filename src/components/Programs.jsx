import React from "react";
import "./Programs.css";
import ImageCard from "./ImageCard";
import Card from "./Card"

function Programs() {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="title">
                    <h1>Programs Offered</h1>
                </div>
                <div className="card-container">
                    <Card
                        title="Playgroup"
                        imageSrc={require('../images/home_students.jpg')}
                        description1="Age Group - 2 to 3 years"
                        description2="Timings: 8:00 AM to 11:00 AM"
                        fulldescription="Our playgroup provides a nurturing and engaging environment where children can explore, play, and develop their social and cognitive skills. With a focus on age-appropriate activities, our experienced teachers foster curiosity, creativity, and a love for learning."
                    />
                    <Card
                        title="Nursery"
                        imageSrc={require('../images/nursery.jpg')}
                        description1="Age Group - 4 to 5 years"
                        description2="Timings: 8:00 AM to 11:00 AM"
                        fulldescription="In our Nursery program, we offer a well-rounded early education experience for children. Through a blend of structured learning and play-based activities, we foster their cognitive, social, and emotional development. Our dedicated teachers create a supportive and stimulating environment where children can thrive and develop a strong foundation for future learning."
                    />
                    <Card
                        title="Daycare Center"
                        imageSrc={require('../images/daycare.jpg')}
                        description1="Age Group - 2 to 10 years"
                        description2="Timings: 8:00 AM to 05:00 PM"
                        fulldescription="Our Daycare Center provides a safe and nurturing environment for children of various ages. We prioritize the well-being and happiness of each child in our care. With a balance of supervised play, age-appropriate activities, and rest time, we ensure that children feel secure and engaged throughout the day. Our qualified staff members are dedicated to providing quality care and fostering positive growth for every child."
                    />
                </div>
                <div className="images-container">
                    <div className="row">
                        <ImageCard
                            title="Settlers Program"
                            imageSrc={require('../images/settlers_program.jpg')}
                            description="This unique program sparks curiosity and fosters exploration as children embark on exciting learning quests. Through hands-on experiences, imaginative play, and interactive lessons, your child will develop crucial cognitive, social, and problem-solving skills"
                        />
                        <ImageCard
                            title="Fine Motor Development"
                            imageSrc={require('../images/fine_motor.jpg')}
                            description="Unlock your child's potential with fine motor development at Poetree. Our engaging activities and attentive teachers help little hands gain confidence in essential skills like writing, drawing, and more. Watch your child flourish with us!"
                        />
                        <ImageCard
                            title="Homework Support"
                            imageSrc={require('../images/homework_support.jpg')}
                            description="Our experienced tutors provide personalized assistance, ensuring your child grasps concepts, completes assignments, and gains confidence in their academic journey. From explaining tricky topics to time management skills, we're here to support your child's success every step of the way."
                        />
                        <ImageCard
                            title="Confidence Building"
                            imageSrc={require('../images/confidence_building.jpg')}
                            description="Through engaging activities and supportive guidance, children build a strong sense of self, fostering the courage to face challenges with confidence. Join us on this transformative journey, nurturing your child's inner strength and helping them grow into confident individuals ready to take on the world."
                        />
                    </div>
                    <div className="row1">
                        <ImageCard
                            title="संस्कार वर्ग"
                            imageSrc={require('../images/sanskar_varg.jpg')}
                            description="Discover the essence of culture and values with Sanskar Varg. Our program instills a sense of pride in heritage, imparts moral values, and fosters a strong character in children. Join us to nurture young minds and build a bright future steeped in tradition and goodness."
                        />
                        <ImageCard
                            title="Hourly Basis Facility Available"
                            imageSrc={require('../images/hourly_basis.jpg')}
                            description="Our preschool offers an hourly basis facility where whether you need a few hours of care during specific days or a part-time option, our hourly basis facility ensures that your child receives quality education and nurturing in a convenient and tailored manner."
                        />
                        <ImageCard
                            title="Unique Storytelling method"
                            imageSrc={require('../images/storytelling.jpg')}
                            description="Our program employs three different approaches that captivate young minds, fostering imagination, creativity, and a love for stories that will inspire and entertain your child during their preschool journey."
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Programs;
