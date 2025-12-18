
export interface MenuItem {
  name: string;
  nameDevanagari?: string;
  description: string;
  price: number;
  icon?: string;
  imageUrl?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}
