export interface AboutUsType {
  digit: string;
  title: string;
  content: string;
}

export interface ServicesType {
  image: string;
  title: string;
}

export interface ContactsType {
  image: string;
  title: string;
  redirect: string;
  alt: string;
}

export interface LocationsType {
  image: string;
  city: string;
  address: string;
  alt: string;
  mapLink: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
  stars: string;
  image: string;
}

export interface IndustryCardOneData {
  number: string;
  image: string;
  title: string;
  description: string;
  icon: string;
}

export interface YearData {
  year: number;
  image: string;
  content: string;
}

// .................................Domian Specific Model Training -- Services...........................................

export interface CardProps {
  header: string;
  para: string;
}

export interface CircleProps {
  imgSrc: string;
  className?: string;
}

export interface InterfaceFPC {
  title: string;
  data: {
    header: string;
    para: string;
    position: string;
    imgSrc: string;
  }[];
}

type DropdownItem = { name: string; link: string };
export type ItemsMapType = Record<string, Record<string, DropdownItem[]>>;

export interface BannerData {
  bannerData: {
    mainHeading: string;
    subHeading: string;
    mainDescription: string;
    imagePath: string;
    subDescription: string;
    scrollTitle: string;
  };
}
