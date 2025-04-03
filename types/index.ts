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

export interface LocationsType{
    image: string;
    city: string;
    address: string;
    alt: string;
    mapLink: string;
  };

  export interface Testimonial {
    id: number;
    quote: string;
    name: string;
    designation: string;
    stars: string; // Allow both string and StaticImageData
    image: string; // Allow both string and StaticImageData
  }
