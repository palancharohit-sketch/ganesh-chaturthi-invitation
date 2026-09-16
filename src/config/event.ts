export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location?: string;
  mapsUrl?: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface EventConfig {
  associationName: string;
  subTitle: string;
  mantra: string;
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
  events: EventItem[];
  dailyPujaTime: string;
  luckyDrawToken: string;
  annaPrasadamInfo: string;
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
  associationName: "NAVA YUVA SENA",
  subTitle: "GANESH CHATURTHI CELEBRATION",
  mantra: "GANPATI BAPPA MORYA",
  year: 2026,
  ganeshaImage: "/assets/ganesha/bappa-main.png",
  hostMessage:
    "With the divine blessings of Lord Ganesha, we warmly invite you and your family to join us in celebrating Ganesh Chaturthi with devotion, joy and togetherness.",
  eventDate: "14 September 2026",
  eventTime: "7:00 PM",
  eventLocation: "LB Nagar, Hyderabad",
  eventAddress: "LB Nagar, Hyderabad - 500074",
  eventMapsUrl: "https://maps.google.com/?q=LB+Nagar+Hyderabad",
  sthapanaDate: "14 September 2026",
  sthapanaTime: "7:00 PM",
  sthapanaLocation: "LB Nagar, Hyderabad",
  sthapanaAddress: "LB Nagar, Hyderabad - 500074",
  dailyPujaTime: "7:30 PM",
  luckyDrawToken: "₹99/-",
  annaPrasadamInfo: "20 September 2026 (Sunday) from 1:00 PM onwards",
  events: [
    {
      id: "anna-prasadam",
      title: "Anna Prasadam",
      date: "20 September 2026 (Sunday)",
      time: "From 1:00 PM onwards",
      location: "LB Nagar, Hyderabad",
      mapsUrl: "https://maps.app.goo.gl/wVrAzuHnUw5QHBmm7?g_st=aw",
      description: "Divine Maha Prasadam will be served to all visiting devotees with Lord Ganesha's blessings.",
      badge: "Maha Prasadam",
      highlight: true,
    },
    {
      id: "lucky-draw",
      title: "Laddu Lucky Draw",
      date: "Festive Draw",
      time: "Draw on Nimarjan Day",
      description: "Participate in the auspicious Laddu Lucky Draw contest! Entry token is ₹99/- only.",
      badge: "Token ₹99/- Only",
      highlight: true,
    },
    {
      id: "laddu-auction",
      title: "Laddu Auction",
      date: "23 September 2026",
      time: "7:00 PM",
      description: "Auspicious bidding ceremony for the sacred Maha Laddu prasadam before the immersion procession.",
      badge: "Sacred Auction",
      highlight: false,
    },
    {
      id: "ganesh-visarjan",
      title: "Ganesh Nimarjan",
      date: "23 September 2026",
      time: "7:30 PM",
      description: "Grand Shobha Yatra and Ganesh Nimarjan procession starting from LB Nagar, Hyderabad.",
      badge: "Grand Finale",
      highlight: true,
    },
  ],
  visarjanDate: "23 September 2026",
  visarjanTime: "7:30 PM",
  visarjanStartingLocation: "LB Nagar, Hyderabad",
  visarjanLocation: "Hyderabad",
  visarjanAddress: "LB Nagar, Hyderabad",
  visarjanMapsUrl: "https://maps.google.com/?q=LB+Nagar+Hyderabad",
  visarjanRoute: "Grand Shobha Yatra starting from LB Nagar, Hyderabad",
  contactNumbers: ["9133007992"],
  whatsappNumber: "9133007992",
  countdownDate: "2026-09-14T19:00:00",
  galleryImages: [
    { id: "1", title: "Bappa Darshan", image: "/images/gallery/ganesh (1).jpeg" },
    { id: "2", title: "Bappa Darshan", image: "/images/gallery/ganesh (2).jpeg" },
    { id: "3", title: "Bappa Darshan", image: "/images/gallery/ganesh (3).jpeg" },
    { id: "4", title: "Bappa Darshan", image: "/images/gallery/ganesh (4).jpeg" },
    { id: "5", title: "Bappa Darshan", image: "/images/gallery/ganesh (5).jpeg" },
    { id: "6", title: "Bappa Darshan", image: "/images/gallery/ganesh (6).jpeg" },
    { id: "7", title: "Bappa Darshan", image: "/images/gallery/ganesh (7).jpeg" },
    { id: "8", title: "Bappa Darshan", image: "/images/gallery/ganesh (8).jpeg" },
  ],
  audioFile: "/audio/jai-ganesha.mp3",
};

export default eventConfig;
