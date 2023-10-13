// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *header → MenuBar*
 */
export interface HeaderDocumentDataMenubarItem {
  /**
   * link field in *header → MenuBar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menubar[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *header → MenuBar*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menubar[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;
}

type HeaderDocumentDataSlicesSlice = never;

/**
 * Content for header documents
 */
interface HeaderDocumentData {
  /**
   * MenuBar field in *header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menubar[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menubar: prismic.GroupField<Simplify<HeaderDocumentDataMenubarItem>>;

  /**
   * Slice Zone field in *header*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeaderDocumentDataSlicesSlice>
  /**
   * Meta Description field in *header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: header.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: header.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | SecondSectionSlice
  | FifthSectionSlice
  | BannerSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * BannerImage field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bannerimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bannerimage: prismic.ImageField<never>;

  /**
   * Text field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *WebsiteFooter → FooterLogoGroup*
 */
export interface WebsitefooterDocumentDataFooterlogogroupItem {
  /**
   * Logo field in *WebsiteFooter → FooterLogoGroup*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlogogroup[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Text field in *WebsiteFooter → FooterLogoGroup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlogogroup[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Item in *WebsiteFooter → FooterList_1*
 */
export interface WebsitefooterDocumentDataFooterlinksItem {
  /**
   * Link field in *WebsiteFooter → FooterList_1*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlinks[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *WebsiteFooter → FooterList_1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlinks[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Heading field in *WebsiteFooter → FooterList_1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlinks[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Item in *WebsiteFooter → FooterList_2*
 */
export interface WebsitefooterDocumentDataFooterlist2Item {
  /**
   * Link field in *WebsiteFooter → FooterList_2*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlist_2[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *WebsiteFooter → FooterList_2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlist_2[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Heading field in *WebsiteFooter → FooterList_2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlist_2[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Item in *WebsiteFooter → Address*
 */
export interface WebsitefooterDocumentDataAddressItem {
  /**
   * Heading field in *WebsiteFooter → Address*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.address[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * address field in *WebsiteFooter → Address*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.address[].address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;
}

/**
 * Item in *WebsiteFooter → ContactGroup*
 */
export interface WebsitefooterDocumentDataContactgroupItem {
  /**
   * Icon field in *WebsiteFooter → ContactGroup*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.contactgroup[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Text field in *WebsiteFooter → ContactGroup*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.contactgroup[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Item in *WebsiteFooter → SocialMedia*
 */
export interface WebsitefooterDocumentDataSocialmediaItem {
  /**
   * Link field in *WebsiteFooter → SocialMedia*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.socialmedia[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Image field in *WebsiteFooter → SocialMedia*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.socialmedia[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *WebsiteFooter → Copyright*
 */
export interface WebsitefooterDocumentDataCopyrightItem {
  /**
   * Label field in *WebsiteFooter → Copyright*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.copyright[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for WebsiteFooter documents
 */
interface WebsitefooterDocumentData {
  /**
   * FooterLogoGroup field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlogogroup[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footerlogogroup: prismic.GroupField<
    Simplify<WebsitefooterDocumentDataFooterlogogroupItem>
  >;

  /**
   * FooterList_1 field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlinks[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footerlinks: prismic.GroupField<
    Simplify<WebsitefooterDocumentDataFooterlinksItem>
  >;

  /**
   * FooterList_2 field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.footerlist_2[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footerlist_2: prismic.GroupField<
    Simplify<WebsitefooterDocumentDataFooterlist2Item>
  >;

  /**
   * Address field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.address[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  address: prismic.GroupField<Simplify<WebsitefooterDocumentDataAddressItem>>;

  /**
   * ContactGroup field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.contactgroup[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contactgroup: prismic.GroupField<
    Simplify<WebsitefooterDocumentDataContactgroupItem>
  >;

  /**
   * SocialMedia field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.socialmedia[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socialmedia: prismic.GroupField<
    Simplify<WebsitefooterDocumentDataSocialmediaItem>
  >;

  /**
   * Copyright field in *WebsiteFooter*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websitefooter.copyright[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  copyright: prismic.GroupField<
    Simplify<WebsitefooterDocumentDataCopyrightItem>
  >;
}

/**
 * WebsiteFooter document from Prismic
 *
 * - **API ID**: `websitefooter`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WebsitefooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<WebsitefooterDocumentData>,
    "websitefooter",
    Lang
  >;

/**
 * Item in *WebsiteHeader → MenuBar*
 */
export interface WebsiteheaderDocumentDataMenubarItem {
  /**
   * Link field in *WebsiteHeader → MenuBar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: websiteheader.menubar[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *WebsiteHeader → MenuBar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websiteheader.menubar[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for WebsiteHeader documents
 */
interface WebsiteheaderDocumentData {
  /**
   * Logo field in *WebsiteHeader*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: websiteheader.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * MenuBar field in *WebsiteHeader*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: websiteheader.menubar[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menubar: prismic.GroupField<Simplify<WebsiteheaderDocumentDataMenubarItem>>;

  /**
   * Link field in *WebsiteHeader*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: websiteheader.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * ButtonText field in *WebsiteHeader*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: websiteheader.buttontext
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;
}

/**
 * WebsiteHeader document from Prismic
 *
 * - **API ID**: `websiteheader`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WebsiteheaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<WebsiteheaderDocumentData>,
    "websiteheader",
    Lang
  >;

export type AllDocumentTypes =
  | HeaderDocument
  | HomeDocument
  | WebsitefooterDocument
  | WebsiteheaderDocument;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceDefaultPrimary {
  /**
   * BannerImage field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.bannerimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bannerimage: prismic.ImageField<never>;

  /**
   * Text field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Link field in *Banner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * ButtonText field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * InstitutionText field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.institutiontext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  institutiontext: prismic.RichTextField;
}

/**
 * Default variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BannerSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceSecondSectionPrimary {
  /**
   * Heading field in *Banner → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * AuthorName field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.authorname
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  authorname: prismic.RichTextField;

  /**
   * Link field in *Banner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Buttontext field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * Image field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Second Section variation for Banner Slice
 *
 * - **API ID**: `secondSection`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceSecondSection = prismic.SharedSliceVariation<
  "secondSection",
  Simplify<BannerSliceSecondSectionPrimary>,
  never
>;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceFifthSectionPrimary {
  /**
   * Heading field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * SubHeading1 field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.subheading1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading1: prismic.RichTextField;

  /**
   * Paragraph1 field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * SubHeading2 field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.subheading2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading2: prismic.RichTextField;

  /**
   * Paragraph2 field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.paragraph2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph2: prismic.RichTextField;

  /**
   * Link field in *Banner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Buttontext field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * Image field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * FifthSection variation for Banner Slice
 *
 * - **API ID**: `fifthSection`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceFifthSection = prismic.SharedSliceVariation<
  "fifthSection",
  Simplify<BannerSliceFifthSectionPrimary>,
  never
>;

/**
 * Slice variation for *Banner*
 */
type BannerSliceVariation =
  | BannerSliceDefault
  | BannerSliceSecondSection
  | BannerSliceFifthSection;

/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Banner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSlice = prismic.SharedSlice<"banner", BannerSliceVariation>;

/**
 * Primary content in *FifthSection → Primary*
 */
export interface FifthSectionSliceDefaultPrimary {
  /**
   * Heading field in *FifthSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * SubHeading1 field in *FifthSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.subheading1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading1: prismic.RichTextField;

  /**
   * Paragraph1 field in *FifthSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.paragraph1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph1: prismic.RichTextField;

  /**
   * SubHeading2 field in *FifthSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.subheading2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading2: prismic.RichTextField;

  /**
   * Paragraph2 field in *FifthSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.paragraph2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph2: prismic.RichTextField;

  /**
   * Link field in *FifthSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * ButtonText field in *FifthSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * Image field in *FifthSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fifth_section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for FifthSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FifthSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FifthSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FifthSection*
 */
type FifthSectionSliceVariation = FifthSectionSliceDefault;

/**
 * FifthSection Shared Slice
 *
 * - **API ID**: `fifth_section`
 * - **Description**: FifthSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FifthSectionSlice = prismic.SharedSlice<
  "fifth_section",
  FifthSectionSliceVariation
>;

/**
 * Primary content in *SecondSection → Primary*
 */
export interface SecondSectionSliceDefaultPrimary {
  /**
   * Heading field in *SecondSection → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: second_section.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *SecondSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: second_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * AuthorName field in *SecondSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: second_section.primary.authorname
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  authorname: prismic.RichTextField;

  /**
   * Link field in *SecondSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: second_section.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * ButtonText field in *SecondSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: second_section.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * Image field in *SecondSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: second_section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for SecondSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SecondSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SecondSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SecondSection*
 */
type SecondSectionSliceVariation = SecondSectionSliceDefault;

/**
 * SecondSection Shared Slice
 *
 * - **API ID**: `second_section`
 * - **Description**: SecondSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SecondSectionSlice = prismic.SharedSlice<
  "second_section",
  SecondSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataMenubarItem,
      HeaderDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      WebsitefooterDocument,
      WebsitefooterDocumentData,
      WebsitefooterDocumentDataFooterlogogroupItem,
      WebsitefooterDocumentDataFooterlinksItem,
      WebsitefooterDocumentDataFooterlist2Item,
      WebsitefooterDocumentDataAddressItem,
      WebsitefooterDocumentDataContactgroupItem,
      WebsitefooterDocumentDataSocialmediaItem,
      WebsitefooterDocumentDataCopyrightItem,
      WebsiteheaderDocument,
      WebsiteheaderDocumentData,
      WebsiteheaderDocumentDataMenubarItem,
      AllDocumentTypes,
      BannerSlice,
      BannerSliceDefaultPrimary,
      BannerSliceSecondSectionPrimary,
      BannerSliceFifthSectionPrimary,
      BannerSliceVariation,
      BannerSliceDefault,
      BannerSliceSecondSection,
      BannerSliceFifthSection,
      FifthSectionSlice,
      FifthSectionSliceDefaultPrimary,
      FifthSectionSliceVariation,
      FifthSectionSliceDefault,
      SecondSectionSlice,
      SecondSectionSliceDefaultPrimary,
      SecondSectionSliceVariation,
      SecondSectionSliceDefault,
    };
  }
}
