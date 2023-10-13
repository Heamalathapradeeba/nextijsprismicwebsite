import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import styles from '../../app/page.module.css';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `SecondSection`.
 */
export type SecondSectionProps =
  SliceComponentProps<Content.SecondSectionSlice>;

/**
 * Component for "SecondSection" Slices.
 */
const SecondSection = ({ slice }: SecondSectionProps): JSX.Element => {
  return (
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
  );
};

export default SecondSection;
