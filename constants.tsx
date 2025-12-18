
import React from 'react';
import { MenuCategory, GalleryImage, Testimonial } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Hot Beverages",
    items: [
      { 
        name: "Espresso", 
        nameDevanagari: "एस्प्रेसो", 
        description: "Single shot of rich, bold coffee.", 
        price: 150,
        imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Americano", 
        nameDevanagari: "अमेरिकानो", 
        description: "Hot water over espresso for a smooth brew.", 
        price: 200,
        imageUrl: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Cappuccino", 
        nameDevanagari: "क्यापुचिनो", 
        description: "Espresso with steamed milk and foam.", 
        price: 250,
        imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Himalayan Chai Latte", 
        nameDevanagari: "हिमालयन चिया लाटे", 
        description: "Spiced Nepali tea with milk and a caffeine kick.", 
        price: 180,
        imageUrl: "https://images.unsplash.com/photo-1544782348-43666e85579d?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Mocha", 
        nameDevanagari: "मोका", 
        description: "Chocolate-infused espresso with whipped cream.", 
        price: 280,
        imageUrl: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600"
      },
    ]
  },
  {
    title: "Cold Beverages",
    items: [
      { name: "Iced Coffee", description: "Chilled brew over ice.", price: 220, imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600" },
      { name: "Cold Brew", description: "Slow-steeped for 24 hours, served black or with milk.", price: 250, imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600" },
      { name: "Frappé", description: "Blended ice coffee with flavors (vanilla, caramel).", price: 300, imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600" },
      { name: "Nepali Lemon Iced Tea", description: "Fresh lemon with black tea and mint.", price: 150, imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600" },
    ]
  },
  {
    title: "Pastries & Snacks",
    items: [
      { name: "Croissant", description: "Buttery and flaky, perfect for dunking.", price: 120, imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600" },
      { name: "Muffin", description: "Blueberry or chocolate chip, baked fresh daily.", price: 150, imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" },
      { name: "Sel Roti", nameDevanagari: "सेल रोटी", description: "Traditional rice doughnut with a modern twist.", price: 100, imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" },
      { name: "Sandwich", description: "Veggie or chicken on whole grain bread.", price: 250, imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600" },
    ]
  },
  {
    title: "Specialties",
    items: [
      { name: "Dunk Special", description: "Espresso with a side of biscuits for dunking.", price: 220, imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" },
      { name: "Caffeine Boost Smoothie", description: "Banana, yogurt, and espresso blend.", price: 280, imageUrl: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80&w=600" },
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", caption: "Our cozy wooden interior" },
  { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", caption: "Freshly roasted local beans" },
  { url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800", caption: "Morning views from the cafe" },
  { url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800", caption: "Precision brewing" },
  { url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800", caption: "Artisan latte art" },
  { url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800", caption: "Evening live music nights" },
  { url: "https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=800", caption: "Our warm staff welcoming you" },
  { url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=800", caption: "Community workspace" },
  { url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800", caption: "Sel Roti and Espresso pairing" },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "The best latte in Kathmandu! Truly a fusion of cultures.", author: "Traveler from USA" },
  { quote: "A peaceful sanctuary in the middle of Thamel's bustle.", author: "Local Artist" },
  { quote: "The Sel Roti paired with specialty espresso is a game changer.", author: "Food Blogger" }
];
