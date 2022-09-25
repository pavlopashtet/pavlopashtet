import React from "react";
import styles from "./CV.module.css";


class NataliaCV extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Natalia",
            phone:' +380686293764',
            email: 'natalia.gmail'
        }
    }
    render() {
        return(
            <section id="about">
                <div className={styles.box}>
                    <h2> Natalia Tymkiv</h2>

                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address"> Name:
                                <span>{this.state.name}</span>
                                <br /> </p>
                            <p>Email:
                                <span>{this.state.email}</span>
                            </p>
                            <p>Phone:
                                <span>{this.state.phone}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default NataliaCV




