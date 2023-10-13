import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from '../../app/page.module.css';

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <>
    {
      slice.variation === 'default' && (
   <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
         >
        <PrismicNextImage field={slice.primary.bannerimage}
            className={styles.bannerImage}
             width={400} height={400} />
    
       <div className={styles.exploreRow}>
        <div className={styles.bannerText}>
        <PrismicRichText field={slice.primary.text} />
       </div> 
        <button className={styles.exploreButton}>
        <PrismicNextLink className={styles.goButtonText} field={slice.primary.link}><>{slice.primary.buttontext}&nbsp;&rarr;</></PrismicNextLink></button>
        </div>
        <div className={styles.section2}>
        <PrismicRichText field={slice.primary.institutiontext} />
       </div> 
    </section>
      )}
    {slice.variation === 'secondSection' && (
      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
       >
  
   <div className='container-fluid p-0'>
     <div className={`${styles.description} ${"row w-100 m-0"}`}>
        <div className='col-lg-1 col-xl-1'></div>
    <div className={`${"col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 align-middle"}`}>
        <PrismicRichText field={slice.primary.heading} />
          <article>
            <div className={styles.natyam}>
              <PrismicRichText field={slice.primary.text} />
            </div>
            <div className={styles.author}>
            <PrismicRichText field={slice.primary.authorname} />
            </div>
           
           <br/>
            <button className={styles.goButton}><PrismicNextLink className={styles.goButtonText} field={slice.primary.link}>{slice.primary.buttontext} &nbsp;&rarr;</PrismicNextLink></button>
            <br />
          </article><br />
    </div>

    <div className={`${"col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 align-middle"}`}>
      <PrismicNextImage field={slice.primary.image} className={styles.natyamImage}
        width={450} height={250} />
        </div>
        <div className='col-md-1 col-lg-1 col-xl-1'></div>
      </div>
    </div>
   </section>
    )}

    {/* fifth section */}
    {
      slice.variation === 'fifthSection' && (
    <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
         >
     <div className='container-fluid p-0'>
     
        <div className={`${styles.sdndescription} ${"row w-100 m-0"}`}>
          <div className='col-lg-1 col-xl-1'></div>
          <div className={`${"col-sm-12 col-xs-12 col-md-6 col-lg-5 col-xl-5 align-middle"}`}>
          <h5 className={`${styles.heading1} ${'align-middle'}`}>
          <PrismicRichText field={slice.primary.heading} />
            </h5>     
            <article>
              <span className={styles.sdndescription1}>
              <PrismicRichText field={slice.primary.subheading1} />
              <PrismicRichText field={slice.primary.text} />
              <PrismicRichText field={slice.primary.subheading2} />
              <PrismicRichText field={slice.primary.paragraph2} />
              </span>
              <button className={styles.goButton}>
              <PrismicNextLink className={styles.goButtonText} field={slice.primary.link}>{slice.primary.buttontext} &nbsp;&rarr;</PrismicNextLink></button>
            </article>
            <br />
          </div>
       
          <div className={`${"col-sm-12 col-xs-12 col-md-6 col-lg-5 col-xl-5 align-middle"}`}>
          <PrismicNextImage field={slice.primary.image} width={150} height={300}
                   className={`${styles.natyamImage} ${"d-block w-100"}`} />
          </div>
           <div className='col-lg-1 col-xl-1'></div>
           </div>
          </div>
      </section>
      )
    }
 
    </>
  
  );
};

export default Banner;
