export interface ProgramItem {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

export interface OrganizerItem {
  name: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface EventConfig {
  associationName: string;
  year: number;
  ganeshaImage: string;
  hostMessage: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventAddress: string;
  eventMapsUrl: string;
  sthapanaDate: string;
  sthapanaTime: string;
  sthapanaLocation: string;
  sthapanaAddress: string;
  programs: ProgramItem[];
  organizers: OrganizerItem[];
  visarjanDate: string;
  visarjanTime: string;
  visarjanStartingLocation: string;
  visarjanLocation: string;
  visarjanAddress: string;
  visarjanMapsUrl: string;
  visarjanRoute: string;
  contactNumbers: string[];
  whatsappNumber: string;
  countdownDate: string;
  galleryImages: GalleryItem[];
  audioFile: string;
}

export const eventConfig: EventConfig = {
  associationName: "Sri Sai Youth Association",
  year: 2026,
  ganeshaImage: "/images/ganesha/ganesha.png",
  hostMessage:
    "With the blessings of Lord Ganesha, we warmly invite you and your family to join us in the celebration of Ganesh Chaturthi.",
  eventDate: "14 September 2026",
  eventTime: "7:30 PM",
  eventLocation: "Nehru Nagar, Kachiguda",
  eventAddress: "Nehru Nagar, Kachiguda, near St. Mark School",
  eventMapsUrl: "https://maps.app.goo.gl/DLbWVgEL8Z2FBcVQ7",
  sthapanaDate: "14 September 2026",
  sthapanaTime: "6:30 PM",
  sthapanaLocation: "Nehru Nagar, Kachiguda",
  sthapanaAddress: "Nehru Nagar, Kachiguda, near St. Mark School",
  programs: [
    {
      title: "Ganesh Sthapana",
      date: "14 September 2026",
      time: "6:30 PM",
      location: "Nehru Nagar, Kachiguda, near St. Mark School",
      description: "Sacred Prana Pratishtha and Sthapana of Lord Ganesha.",
    },
    // You can easily add more programs here later!
  ],
  organizers: [
    { name: "Chinna (Vittalesh)", image: "/images/organizers/chinna(vittalesh).png" },
    { name: "Lucky", image: "/images/organizers/lucky.png" },
    { name: "Vicky", image: "/images/organizers/vicky.png" },
    { name: "Abhi", image: "/images/organizers/abhi.png" },
    { name: "Vinay", image: "/images/organizers/vinay.png" },
    { name: "Santosh", image: "/images/organizers/santosh.png" },
    { name: "Akshay", image: "/images/organizers/akshay.png" },
    { name: "Tillu", image: "/images/organizers/tillu.png" },
    { name: "Nani", image: "/images/organizers/nani.png" },
    { name: "Bablu", image: "/images/organizers/bablu.png" },
    { name: "Tinku", image: "/images/organizers/tinku.png" },
    { name: "Sonu", image: "/images/organizers/sonu.png" },
  ],
  visarjanDate: "23 September 2026",
  visarjanTime: "7:00 PM",
  visarjanStartingLocation: "Nehru Nagar, Kachiguda",
  visarjanLocation: "Tank Bund",
  visarjanAddress: "Tank Bund, Hyderabad",
  visarjanMapsUrl: "https://maps.google.com/?q=Tank+Bund+Hyderabad",
  visarjanRoute: "",
  contactNumbers: ["8309963802"],
  whatsappNumber: "8309963802",
  countdownDate: "2026-09-14T19:30:00",
  galleryImages: [
    { id: "1", title: "Bappa Darshan", image: "/images/gallery/ganesh-1.jpg" },
    { id: "2", title: "Bappa Darshan", image: "/images/gallery/ganesh-2.jpg" },
    { id: "3", title: "Bappa Darshan", image: "/images/gallery/ganesh-3.jpg" },
    { id: "4", title: "Bappa Darshan", image: "/images/gallery/ganesh-4.jpg" },
    { id: "5", title: "Bappa Darshan", image: "/images/gallery/ganesh-5.jpg" },
    { id: "6", title: "Bappa Darshan", image: "/images/gallery/ganesh-6.jpg" },
  ],
  audioFile: "/audio/jai-ganesha.mp3",
};

export default eventConfig;
