import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from '../../app/page.module.css';
import FifthSection from "../FifthSection";

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
  
  
    </>
  
  );
};

export default Banner;
