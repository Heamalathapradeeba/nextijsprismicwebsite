

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from '@/prismicio';
import { components } from "@/slices";
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';


export default async function Home() {
    const client = createClient();
    const page = await client.getSingle("home");
    const header = await client.getSingle("websiteheader");
    const footer = await client.getSingle("websitefooter");
    const isOpen = false;
    const isChangeColor = false;
   
    // const [isOpen, setIsOpen] = useState(false);
    // const [isChangeColor, setChangeColor] = useState(false);
  
    // const changeNavBarColor = () => {
    //   if(window.scrollY >= 80){
    //     setChangeColor(true)
    //   }
    //   else{
    //     setChangeColor(false)
    //   }
    // }

    // useEffect(function onFirstMount(){
    //   window.addEventListener('scroll', changeNavBarColor);
    // }, [])
    
   
  return (
    <main className={styles.main}>
     
     <div className={styles.header}>
 
     {/* <header className={`${styles.headerContent} ${isChangeColor ? styles.headerColor : ''}`}> */}
     <header className={styles.headerContent}>
               <PrismicNextImage field={header.data.logo}  
              className={styles.vercelLogo}
              width={217}
              height={107} />
            {/* <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
             onClick={() => setIsOpen(!isOpen)}> */}
               <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}> 
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>

            <ul className={styles.headerList}> 
           {header.data.menubar.map(({link, label}) => (
            <li key={label}>
               <PrismicNextLink className={styles.headerListItem} field={link}>{label}</PrismicNextLink>
            </li>
           ))}
           </ul>
           <button className={styles.loginButton}>
           <PrismicNextLink className={styles.goButtonText} field={header.data.link}><>{header.data.buttontext}</></PrismicNextLink></button>
       </header>
       </div>
     {/* Description Section - section below banner */}
     <SliceZone slices={page.data.slices} components={components} />
      
         
        {/* Carousel section */}
    {/* <div id="carouselExampleControls" className={`${"carousel slide"} ${styles.carouselSection}`} data-ride="carousel">
      <p>SDN VIDEOS</p>
       <div className={styles.carouselButtonGroup}>
        <button className={`${styles.carouselButton} ${"active"}`}>Dance Dramas</button>&nbsp;
        <button className={styles.carouselButton} type='button' data-bs-toggle="button">Thematic Presentations</button>&nbsp;
        <button className={styles.carouselButton} type='button' data-bs-toggle="button">Solo & Duet Performances</button>
       </div><br />
          <div className={styles.slider}>
             <div className={styles.slideTrack}>
              <div className={styles.slideItem}>
              <Image
             className={`${styles.slide}`}
              src="/banner.jpg" alt="website banner"
              width={300} height={200}
               />
               <p>Bala Margam</p>
               </div>
              
              <div className={styles.slideItem}>
             <Image
              className={`${styles.slide}`}
              src="/classical-banner.jpg" alt="website banner"
              width={300} height={200}
               />
              <p>Sivamayam</p>
              </div>
             <div className={styles.slideItem}>  
            <Image
              className={`${styles.slide}`}
              src="/banner.jpeg" alt="website banner"
              width={300} height={200}
               />
               <p>Shadaksharam</p>
              </div>
              <div className={styles.slideItem}>
             <Image
              className={styles.slide}
              src="/download.jfif" alt="website banner"
              width={300} height={200}
               />
               <p>Varudamellam Vaibhavam</p>
              </div>
              <div className={styles.slideItem}> 
             <Image
              className={`${styles.slide}`}
              src="/download (1).jfif" alt="website banner"
              width={300} height={200}
               />  
               <p>Margam Volume</p>
             </div>
             <div className={styles.slideItem}>
            <Image
             className={`${styles.slide}`}
              src="/banner.jpg" alt="website banner"
              width={300} height={200}
               />
               <p>Sri Krishna Vaibhavam</p>
               </div>
           </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
       </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

     </div> */}

     {/* section above footer */}
     
     {/* Description Section - section below banner */}
   


       <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <div className={styles.footerItem1}>
            {
              footer.data.footerlogogroup.map(({logo, text}) => (
                <>
                <PrismicNextImage field={logo} className={styles.vercelLogo}
                width={217}
                height={107} />
                <PrismicRichText field={text} />  
                </>
               ))
            }
          
          </div>

          <div className={styles.footerItem2}>
            <h6 className={styles.footerHeading1}>About SDN</h6>
            <ul className={styles.footerList}>
               {footer.data.footerlinks.map(({link, label}) => (
                <li key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
               ))}
            </ul>
          </div>

          <div className={styles.footerItem3}>
            <h6 className={styles.footerHeading2}>Video Collections</h6>
            <ul className={styles.footerList}>
              {footer.data.footerlist_2.map(({link, label}) => (
                <li key={label}>
                  <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerItem4}>
            <h6 className={styles.footerHeading3}></h6>
            {footer.data.address.map((item) => (
            <span>{item.address}</span>
            ))}
            <br />
          
          {/* contact section */}
            {footer.data.contactgroup.map(({text, icon}) => (
            <div className={styles.contactGroup}>
                <PrismicNextImage className={styles.contactIcon} width={40} height={40} field={icon} />&nbsp;&nbsp;<>{text}</>
                 <br />
              </div>   
               ))
             }
            </div>
      </div>

      {/* copyright section */}
        <div className={styles.socialMediaList}>
        {footer.data.socialmedia.map(({link, image}) => (
          <PrismicNextImage className={styles.socialIcon} width={40} height={40} field={image} />
          ))
        }
      </div>
        <br />
        <span className={styles.copyright}>Copyright &copy; 2023 All Rights Reserved</span>
        <br />
       </footer>
    </main>
  )
}
