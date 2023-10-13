import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import styles from '../../app/page.module.css';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `FifthSection`.
 */
export type FifthSectionProps = SliceComponentProps<Content.FifthSectionSlice>;

/**
 * Component for "FifthSection" Slices.
 */
const FifthSection = ({ slice }: FifthSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
       <div className='container-fluid p-0'>
     
     <div className={`${styles.sdndescription} ${"row w-100 m-0 "}`}>
     <h5 className={`${styles.heading1} ${'align-middle font-weight-bold'}`}>
       <PrismicRichText field={slice.primary.heading} />
         </h5>    
       <div className='col-lg-1 col-xl-1'></div>
       <div className={`${"col-sm-12 col-xs-12 col-md-6 col-lg-5 col-xl-5 align-middle"}`}>
     
         <article>
           <span className={styles.sdndescription1}>
           <PrismicRichText field={slice.primary.subheading1} />
           <PrismicRichText field={slice.primary.paragraph1} />
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
  );
};

export default FifthSection;
