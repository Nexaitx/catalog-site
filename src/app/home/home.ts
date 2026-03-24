
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  allProducts = [
    { id: 1, name: 'Threaded Rod', price: 18.00, image: 'assets/products/thread.png', onSale: true },
    { id: 2, name: 'Anchor Bolt', price: 15.00, image: 'assets/products/anchor.png', onSale: false },
    { id: 3, name: 'Hex Nuts', price: 5.00, image: 'assets/products/hex.png', onSale: true },
    { id: 4, name: 'Washer', price: 12.00, image: 'assets/products/washer.png', onSale: false },
    { id: 4, name: 'Stud', price: 12.00, image: 'assets/products/stud.png', onSale: false },
  ];

  thrededRods = [
    { id: 1, name: 'Threaded Rod', price: 18.00, image: 'assets/products/thread.png', onSale: true },
    { id: 2, name: 'Threaded Rod', price: 15.00, image: 'assets/products/thread.png', onSale: false },
    { id: 3, name: 'Threaded Rod', price: 5.00, image: 'assets/products/thread.png', onSale: true },
    { id: 4, name: 'Threaded Rod', price: 12.00, image: 'assets/products/thread.png', onSale: false },
    { id: 5, name: 'Threaded Rod', price: 8.00, image: 'assets/products/thread.png', onSale: true },
    { id: 6, name: 'Threaded Rod', price: 20.00, image: 'assets/products/thread.png', onSale: false },
    { id: 7, name: 'Threaded Rod', price: 7.00, image: 'assets/products/thread.png', onSale: true }
  ];

  studBolt = [
    { id: 1, name: 'Stud', price: 5.00, image: 'assets/products/stud.png', onSale: true },
    { id: 2, name: 'Stud', price: 12.00, image: 'assets/products/stud.png', onSale: false },
    { id: 3, name: 'Stud', price: 15.00, image: 'assets/products/stud.png', onSale: true },
    { id: 4, name: 'Stud', price: 20.00, image: 'assets/products/stud.png', onSale: false },
    { id: 5, name: 'Stud', price: 10.00, image: 'assets/products/stud.png', onSale: true },
    { id: 6, name: 'Stud', price: 22.00, image: 'assets/products/stud.png', onSale: false }
  ];

  hexNuts = [
    { id: 1, name: 'Hex Nutes', price: 18.00, image: 'assets/products/hex.png', onSale: false },
    { id: 2, name: 'Hex Nutes', price: 15.00, image: 'assets/products/hex.png', onSale: false },
    { id: 3, name: 'Hex Nutes', price: 8.00, image: 'assets/products/hex.png', onSale: false },
    { id: 4, name: 'Hex Nutes', price: 25.00, image: 'assets/products/hex.png', onSale: false },
    { id: 5, name: 'Hex Nutes', price: 20.00, image: 'assets/products/hex.png', onSale: false },
    { id: 6, name: 'Hex Nutes', price: 22.00, image: 'assets/products/hex.png', onSale: false }
  ];
  washer = [
    { id: 1, name: 'Washer', price: 18.00, image: 'assets/products/washer.png', onSale: false },
    { id: 2, name: 'Washer', price: 15.00, image: 'assets/products/washer.png', onSale: false },
    { id: 3, name: 'Washer', price: 8.00, image: 'assets/products/washer.png', onSale: false },
    { id: 4, name: 'Washer', price: 25.00, image: 'assets/products/washer.png', onSale: false },
    { id: 5, name: 'Washer', price: 20.00, image: 'assets/products/washer.png', onSale: false },
    { id: 6, name: 'Washer', price: 22.00, image: 'assets/products/washer.png', onSale: false }
  ];
  anchor = [
    { id: 1, name: 'Anchor Bolt', price: 18.00, image: 'assets/products/anchor.png', onSale: false },
    { id: 2, name: 'Anchor Bolt', price: 15.00, image: 'assets/products/anchor.png', onSale: false },
    { id: 3, name: 'Anchor Bolt', price: 8.00, image: 'assets/products/anchor.png', onSale: false },
    { id: 4, name: 'Anchor Bolt', price: 25.00, image: 'assets/products/anchor.png', onSale: false },
    { id: 5, name: 'Anchor Bolt', price: 20.00, image: 'assets/products/anchor.png', onSale: false },
    { id: 6, name: 'Anchor Bolt', price: 22.00, image: 'assets/products/anchor.png', onSale: false }
  ];

  bestSelling = [
    { id: 1, name: 'Anchor Bolt', price: 6.00, image: 'assets/products/anchor.png', onSale: true },
    { id: 2, name: 'Washer', price: 7.00, image: 'assets/products/washer.png', onSale: true },
    { id: 3, name: 'Hex Nuts', price: 10.00, image: 'assets/products/hex.png', onSale: true },
    { id: 4, name: 'Stud', price: 22.00, image: 'assets/products/stud.png', onSale: false },
    { id: 5, name: 'Threaded Rod', price: 6.00, image: 'assets/products/thread.png', onSale: false },
  ];

  popular = [
    { id: 1, name: 'Anchor Bolt', price: 6.00, image: 'assets/products/anchor.png', onSale: true },
    { id: 2, name: 'Washer', price: 7.00, image: 'assets/products/washer.png', onSale: true },
    { id: 3, name: 'Hex Nuts', price: 10.00, image: 'assets/products/hex.png', onSale: true },
    { id: 4, name: 'Stud', price: 22.00, image: 'assets/products/stud.png', onSale: false },
    { id: 5, name: 'Threaded Rod', price: 6.00, image: 'assets/products/thread.png', onSale: false },
  ];

  justArrived = [
    { id: 3, name: 'Hex Nuts', price: 10.00, image: 'assets/products/hex.png', onSale: true },
    { id: 4, name: 'Stud', price: 22.00, image: 'assets/products/stud.png', onSale: false },
    { id: 5, name: 'Threaded Rod', price: 6.00, image: 'assets/products/thread.png', onSale: false },
    { id: 1, name: 'Fresh Tomatoes', price: 6.00, image: 'assets/products/anchor.png', onSale: true },
    { id: 2, name: 'Washer', price: 7.00, image: 'assets/products/washer.png', onSale: true },

  ];

  // Blog posts
  blogPosts = [
    {
      image: 'assets/blog1.png',
      date: '22 Aug 2021',
      category: 'Industry',
      title: 'Applications and Benefits of Fasteners in Industry',
      excerpt: 'Fasteners are used in almost every industry, from construction and automotive to aerospace and electronics.'
    },
    {
      image: 'assets/blog2.png',
      date: '25 Aug 2021',
      category: 'Choice',
      title: 'Choosing the Right Fastener for Your Project',
      excerpt: 'Selecting the right fastener is critical for ensuring safety and long-term performance.'
    },
    {
      image: 'assets/blog3.png',
      date: '28 Aug 2021',
      category: 'Importance',
      title: 'What Are Fasteners? Types & Importance',
      excerpt: 'Fasteners are essential mechanical components used to join two or more objects together securely.'
    }
  ];

  // Tags
  tags = [
    "Fasteners",
    "Industrial Fasteners",
    "Construction Fasteners",
    "Heavy Duty Fasteners",
    "High Strength Fasteners",
    "Precision Fasteners",

    "Hex Bolts",
    "Stud Bolts",
    "Threaded Rods",
    "Anchor Bolts",
    "Nuts and Bolts",
    "Washers",
    "U-Bolts",
    "Fastening Systems",

    "Construction Hardware",
    "Structural Fasteners",
    "Industrial Use",
    "Machinery Fasteners",
    "Infrastructure Fasteners",

    "Stainless Steel Fasteners",
    "Carbon Steel Fasteners",
    "Galvanized Fasteners",
    "Zinc Plated Fasteners",
    "Corrosion Resistant Fasteners",

    "Fastener Manufacturer",
    "Fastener Supplier",
    "Fastener Exporter",
    "Bulk Fasteners",
    "Custom Fasteners"
  ];

  // Features
  features = [
    {
      title: 'Free delivery',
      description: 'We offer free delivery on selected orders, ensuring a smooth and cost-effective shopping experience.',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      path: 'M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z'
    },
    {
      title: '100% secure payment',
      description: 'We ensure safe and secure transactions with advanced encryption and trusted payment systems.',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      path: 'M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z'
    },
    {
      title: 'Quality guarantee',
      description: 'Our products undergo rigorous quality checks at every stage',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      path: 'M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z'
    },
    {
      title: 'Guaranteed savings',
      description: 'We ensure cost-effective solutions that help you maximize value without compromising on quality.',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      path: 'M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z'
    },
    {
      title: 'Daily offers',
      description: 'Enjoy exclusive daily deals with special pricing on selected fasteners.',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      path: 'M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z'
    }
  ];

  // Social links
  

}