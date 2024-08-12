import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made by 
      <Link href='https://github.com/eeyll18' translate='_blank'>
        Eda Eylül Günay
      </Link>
    </footer>
  )
}
