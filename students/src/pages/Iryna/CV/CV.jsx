import { Route } from "react-router-dom";
import my from "./img/my.jpg";
import React from "react";
import styles from ".//CV.module.css";
const Con = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.profile}>
            <img
              style={{ backgroundSize: "cover", width: "100%" }}
              src={my}
              alt="photo"
            />
          </div>
          <div className={styles.content}>
            <h1>About me</h1>
            <p>
              After finishing my studies in Logos Front-end Academy, I'm looking
              for a job in IT to start my career. I want to use my skills in
              creating website, gain experience and to develop as a specialist.
            </p>
            <br />
            <p>
              <span style={{ color: "white" }}>My strengths are:</span> the
              ability to convey and defend one's ideas, sociability, maximum
              efficiency in work, responsible and conscientious performance of
              any tasks, organization, purposefulness. An extremely energetic
              person who helps me achieve my goals.
            </p>
            <br />
            <div className={styles.focus}>
              <h1>Contact</h1>
              <p>
                <i class="fa fa-map"></i> &nbsp;Lviv,Ukraine{" "}
              </p>
              <p>
                <i class="fa fa-phone"></i> &nbsp;phone +380980546109
              </p>
              <p>
                <i class="fa fa-envelope"></i> &nbsp;email :
                bednarska.ira.2000@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cube}></div>
          <div className={styles.main}>
            <div className={styles.intro}>
              <br />
              <h1 className={styles.ma}>Iryna</h1>
              <h1>
                <strong>Bednarska</strong>
              </h1>
              <p className={styles.phead}>Student</p>
              <div className={styles.clearfix}></div>
              <hr className={styles.hr1} />
            </div>
            <br />
            <br />
            <br />
            <div className={styles.content - 2}>
              <h1 className={styles.head}>Experience</h1>
              <hr className={styles.hr2} />
              <div className={styles.clearfix}></div>
              <p className={styles.para - 1}>
                I HAVE NO COMMERCIAL EXPERIENCE IN IT INDUSTRY YET, THEREFORE
                I'M DETERMINED TO GET ONE.{" "}
              </p>
            </div>
            <div className={styles.content - 2}>
              <h1 className={styles.head}>Education</h1>
              <hr className={styles.hr2} />
              <div className={styles.clearfix}></div>
              <p className={styles.para - 1}>
                IVAN FRANKO NATIONAL UNIVERSITY OF LVIV{" "}
                <strong>(2017 - 2021)</strong>
              </p>
              <p className={styles.para - 21}>
                I was earned a bachelor's degree in "Slavic languages and
                literature" (including translation).
                <br />
                <b>Additional information: Diploma with honors.</b>
              </p>
              <p className={styles.para - 1}>
                <strong>(2021)</strong>
              </p>
              <p className={styles.para - 21}>
                English language courses, "Green Forest" in Lviv
              </p>
              <p className={styles.para - 1}>
                <strong>(2021-2022)</strong>
              </p>
              <p className={styles.para - 21}>
                Studying in Logos Front-end Academy
              </p>
            </div>
            <div className={styles.content - 2}>
              <h1 className={styles.head}>Skills</h1>
              <hr className={styles.hr2} />
              <div className={styles.clearfix}>
                <div className={styles.point}>
                  <p className={styles.p25}>HTML</p>
                </div>
                <div className={styles.item}>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle1"></i>
                </div>
                <div className={styles.point}>
                  <p className={styles.p25}>CSS</p>
                </div>
                <div className={styles.item}>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle1"></i>
                </div>
                <div className={styles.point}>
                  <p className={styles.p25}>JAVASCRIPT</p>
                </div>
                <div className={styles.item}>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle1"></i>
                  <i class="fa fa-circle circle1"></i>
                </div>
                <div className={styles.point}>
                  <p className={styles.p25}>REACT</p>
                </div>
                <div className={styles.item}>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle1"></i>
                  <i class="fa fa-circle circle1"></i>
                  <i class="fa fa-circle circle1"></i>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={styles.content - 2}>
              <h1 className={styles.head}>Languages</h1>
              <hr className={styles.hr2} />
              <div className={styles.clearfix}>
                <div className={styles.point}>
                  <p className={styles.p25}>UKRAINIAN</p>
                </div>
                <div className={styles.item}>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                </div>
                <div className={styles.point}>
                  <p className={styles.p25}>English</p>
                </div>
                <div className={styles.item}>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle"></i>
                  <i class="fa fa-circle circle1"></i>
                  <i class="fa fa-circle circle1"></i>
                  <i class="fa fa-circle circle1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cube2}></div>
      </div>
    </div>
  );
};
export default Con;
