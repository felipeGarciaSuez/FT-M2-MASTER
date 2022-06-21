import React from 'react';
import styles from "../styles/Card.module.css"

export default function Card(props) {
  // acá va tu código
  //props = {max, min, name, img, onClose}
  let imgUrl = `http://openweathermap.org/img/wn/${props.img}@2x.png`
  return (<div className={styles.card}>
    <button onClick={props.onClose} className={`${styles.btn} ${styles.btnColor}`}>X</button>
    <h4>{props.name}</h4>
    <div className={styles.middleDiv}>
      <div className={styles.temperature}>
      <p>Min</p>
      <p>{props.min}</p>
      </div>
      <div className={styles.temperature}>
      <p>Max</p>
      <p>{props.max}</p>
      </div>
      <img src={imgUrl}></img>
    </div>
    
  </div>)
};