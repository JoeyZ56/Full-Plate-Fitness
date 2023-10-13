import React from "react";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <div className={styles.weightTraining}>
        <h2>Weight Training</h2>
        <>
          <ul>
            <li>Heavy Lifting</li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              sequi voluptates et aliquid mollitia, nam repellendus libero rem
              fugit porro cupiditate, saepe ea cumque accusamus a pariatur esse
              ratione reiciendis.
            </p>
            <li>Calisthenics</li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              aliquam, tenetur doloribus perspiciatis esse unde! Eius rerum
              error veniam soluta excepturi! Atque sapiente fuga dolore culpa
              doloribus animi in mollitia?
            </p>
            <li>Light Lifting</li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dicta
              corrupti. Explicabo iusto distinctio quae, eos rerum eligendi
              temporibus voluptas ad omnis repellat, ipsum autem repellendus
              dicta, voluptates dolore? Nobis.
            </p>
          </ul>
        </>
      </div>
      <div className={styles.nutrition}>
        <h2>Nutrition</h2>
        <>
          <ul>
            <li>Dieting</li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              sequi voluptates et aliquid mollitia, nam repellendus libero rem
              fugit porro cupiditate, saepe ea cumque accusamus a pariatur esse
              ratione reiciendis.
            </p>
            <li>Calorie Counting</li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              aliquam, tenetur doloribus perspiciatis esse unde! Eius rerum
              error veniam soluta excepturi! Atque sapiente fuga dolore culpa
              doloribus animi in mollitia?
            </p>
            <li>Proper Foods</li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dicta
              corrupti. Explicabo iusto distinctio quae, eos rerum eligendi
              temporibus voluptas ad omnis repellat, ipsum autem repellendus
              dicta, voluptates dolore? Nobis.
            </p>
          </ul>
        </>
      </div>
    </div>
  );
};

export default Skills;
