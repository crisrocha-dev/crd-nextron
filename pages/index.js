import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to CRD Nextron</h1>
      <p className={styles.description}>Edit and create as you want</p>
    </div>
  )
}
