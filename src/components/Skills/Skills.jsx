import React from "react";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <>
      <h1 className={styles.skillsTitle} id="skills">
        Versatile Fitness Professional
      </h1>
      <div className={styles.container}>
        <div className={styles.weightTraining}>
          <h2>Style of Training</h2>
          <>
            <ul>
              <li>
                <h3>Strength Training</h3>
              </li>
              <p>
                <b>Build Lean Muscle Mass:</b> Sculpt your body and achieve a
                toned, athletic physique by engaging in exercises that target
                specific muscle groups
              </p>
              <p>
                <b>Boost Metabolism:</b> As you build muscle, your metabolism
                revs up, helping you burn more calories both during and after
                your workouts.
              </p>

              <p>
                <b>Injury Prevention:</b> A well rounded strength training
                program not only builds strength but also supports joint
                stability and flexibility, reducing the risk of injuries.
              </p>
              <p>
                <b>Mental Resilience:</b> Strength training is not just about
                physical prowess, it also fosters mental toughness and
                discipline, instilling a positive mindset that extends beyond
                the gym.
              </p>
              <br />
              <li>
                <h3>Functional Training</h3>
              </li>

              <p>
                <b>Real-Life Applications:</b> Functional training targets
                movements like pushing, pulling, bending, and twisting, ensuring
                that your body is prepared for the demands of your daily
                activities.
              </p>
              <p>
                <b>Core Strength and Stability:</b> Develop a strong, stable
                core is the foundation of functional movement supporting your
                spine and improving your posture.
              </p>
              <p>
                <b>Enhanced Flexibility:</b> Improve your range of motion,
                flexibility, and joint mobility, enhancing your body&apos;s
                ability to move freely and efficiently.
              </p>
              <p>
                <b>Efficient Workouts:</b> Get more out of your workouts by
                engaging multiple muscle groups simultaneously, burning
                calories, and building strength in a time efficient manner.
              </p>
            </ul>
          </>
        </div>
        <div className={styles.nutrition}>
          <h2>Nutrition Coach</h2>
          <>
            <ul>
              <li>
                <h3>What that includes:</h3>
              </li>
              <p>
                <b>Weekly Meetings:</b> Embark on a journey of self discovery
                and sustainable health through our weekly one on one meetings.
                These sessions provide a platform for personalized guidance,
                progress assessments, and adjustments to ensure your fitness
                plan aligns with your evolving goals.
              </p>
              <p>
                <b>Accountability:</b> Achieving your health and fitness goals
                requires more than just a workout routine. Our program
                prioritizes accountability, offering the support you need to
                stay on track. Together, we&apos;ll celebrate successes,
                navigate challenges, and build habits that last a lifetime.
              </p>
              <p>
                <b>Education about food & fuel:</b> Knowledge is power,
                especially when it comes to nutrition. Gain a deeper
                understanding of how food fuels your body, and discover the
                impact it has on your overall well being. Our educational
                sessions empower you to make informed choices, fostering a
                healthier relationship with food.
              </p>
              <p>
                <b>Food/Macro tracking:</b> Tailor your nutrition to your unique
                needs with our food and macro tracking system. Precision
                nutrition is key to optimizing your energy levels, promoting
                muscle growth, and achieving your desired physique. We&apos;ll
                guide you through the process, making nutrition an integral part
                of your success.
              </p>
            </ul>
          </>
        </div>
      </div>
    </>
  );
};

export default Skills;
