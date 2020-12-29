import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import {Link} from 'gatsby'  using AniLink instead of Link for special effects
import {FaRProject} from 'react-icons/fa'


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
        {links.map((item, index)=>{
            return(
             <AniLink fade key={index} to={item.path}>
            {item.text}
             </AniLink>
            )
        })}
            </div>
          <div className={styles.icons}> 
          {socialIcons.map((item, index)=>{
              return (
                  <a key={index} href={item.url} target="_blank" rel="noopener noreferrer"> 
                  {item.icon}
                  </a>
              )
          })}</div>
          <div className={styles.copyright}>
              copyright &copy; backroads travel company { new Date().getFullYear} all rights reserved
          </div>
        </footer>
    )
}
