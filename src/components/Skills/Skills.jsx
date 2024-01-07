import React, { useState } from "react";
import styles from "./Skills.module.scss";

const TrainingType = ({ title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(
    Array(content.length).fill(false)
  );
  const [isInfoClicked, setIsInfoClicked] = useState(
    Array(content.length).fill(false)
  );

  const toggleContentVisibility = (index) => {
    const newVisibility = [...isContentVisible];
    newVisibility[index] = !newVisibility[index];
    setIsContentVisible(newVisibility);

    const newInfoClicked = [...isInfoClicked];
    newInfoClicked[index] = true;
    setIsInfoClicked(newInfoClicked);
  };

  return (
    <li>
      <h3>{title}</h3>
      <ul>
        {content.map((paragraph, index) => (
          <li key={index} className={styles.bContainer}>
            <b onClick={() => toggleContentVisibility(index)}>
              {paragraph.title}
            </b>
            {!isInfoClicked[index] && (
              <a
                href="#"
                className={styles.moreInfo}
                onClick={(e) => {
                  e.preventDefault();
                  toggleContentVisibility(index);
                }}
              >
                Click for more info
              </a>
            )}
            {isContentVisible[index] && <p>{paragraph.content}</p>}
          </li>
        ))}
      </ul>
    </li>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className={styles.skillsTitle} id="skills">
        Versatile Fitness Professional
      </h1>
      <div className={styles.container}>
        <div className={styles.weightTraining}>
          <h2>Style of Training</h2>
          <ul>
            <TrainingType
              title="Strength Training"
              content={[
                {
                  title: "Build Lean Muscle Mass",
                  content:
                    "Sculpt your body and achieve a toned, athletic physique by engaging in exercises that target specific muscle groups",
                },
                {
                  title: "Boost Metabolism",
                  content:
                    "As you build muscle, your metabolism revs up, helping you burn more calories both during and after your workouts.",
                },
                {
                  title: "Injury Prevention",
                  content:
                    "A well-rounded strength training program not only builds strength but also supports joint stability and flexibility, reducing the risk of injuries.",
                },
                {
                  title: "Mental Resilience",
                  content:
                    "Strength training is not just about physical prowess, it also fosters mental toughness and discipline, instilling a positive mindset that extends beyond the gym.",
                },
              ]}
              className={styles.trainingType}
            />
            <TrainingType
              title="Functional Training"
              content={[
                {
                  title: "Real-Life Applications",
                  content:
                    "Functional training targets movements like pushing, pulling, bending, and twisting, ensuring that your body is prepared for the demands of your daily activities.",
                },
                {
                  title: "Core Strength and Stability",
                  content:
                    "Develop a strong, stable core is the foundation of functional movement supporting your spine and improving your posture.",
                },
                {
                  title: "Enhanced Flexibility",
                  content:
                    "Improve your range of motion, flexibility, and joint mobility, enhancing your body's ability to move freely and efficiently.",
                },
                {
                  title: "Efficient Workouts",
                  content:
                    "Get more out of your workouts by engaging multiple muscle groups simultaneously, burning calories, and building strength in a time-efficient manner.",
                },
              ]}
              className={styles.trainingType}
            />
          </ul>
        </div>
        <div className={styles.nutrition}>
          <h2>Nutrition Coaching</h2>
          <ul>
            <li>
              <h3>What that includes:</h3>
            </li>
            <TrainingType
              // title="Weekly Meetings"
              content={[
                {
                  title: "Weekly Meetings",
                  content:
                    "These sessions provide a platform for personalized guidance, progress assessments, and adjustments to ensure your fitness plan aligns with your evolving goals.",
                },
              ]}
              className={styles.trainingType}
            />
            <TrainingType
              // title="Accountability"
              content={[
                {
                  title: "Accountability",
                  content:
                    "Our program prioritizes accountability, offering the support you need to stay on track. Together, we'll celebrate successes, navigate challenges, and build habits that last a lifetime.",
                },
              ]}
              className={styles.trainingType}
            />
            <TrainingType
              // title="Education about food & fuel"
              content={[
                {
                  title: "Education about food & fuel",
                  content:
                    "Gain a deeper understanding of how food fuels your body, and discover the impact it has on your overall well-being. Our educational sessions empower you to make informed choices, fostering a healthier relationship with food.",
                },
              ]}
            />
            <TrainingType
              // title="Food/Macro tracking"
              content={[
                {
                  title: "Food/Macro tracking",
                  content:
                    "Precision nutrition is key to optimizing your energy levels, promoting muscle growth, and achieving your desired physique. We'll guide you through the process, making nutrition an integral part of your success.",
                },
              ]}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
