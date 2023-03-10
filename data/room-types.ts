export type RoomType = {
  _id: string;
  type: string;
  size: number;
  hasBalcony: boolean;
  view: "sea" | "partial_sea" | "pool";
  maxGuests: number;
  facilities: string[];
  images: string[];
  price: {
    original: number;
    discount?: number;
  };
  units: number[];
};

const roomTypes: RoomType[] = [
  {
    _id: "superior",
    type: "superior",
    size: 35,
    hasBalcony: false,
    view: "pool",
    maxGuests: 2,
    facilities: [
      "King sized Bed or Twin Beds",
      "Hair Dryer",
      "Executive Working Desk equipped with Stationary",
      "Two Seater Sofa",
      "Quality Bathroom Amenities",
      "Bathroom slippers and Bathrobe",
      "Spacious Wardrobe",
      "50” LED SMART Television with International and Local Channels",
      "Tea and Coffee making facilities",
      "Complimentary high speed Internet",
      "IDD Telephone and Voicemail",
      "In-room safe- if required safety deposit box at front office desk",
      "Iron & Ironing Board",
    ],
    images: [
      "images/rooms/superior-1.jpg",
      "images/rooms/superior-2.jpg",
      "images/rooms/superior-3.jpg",
      "images/rooms/superior-4.jpg",
      "images/rooms/superior-5.jpg",
    ],
    price: {
      original: 60,
    },
    units: [1003, 1004, 2003, 2004, 3003, 3004, 4003, 4004],
  },
  {
    _id: "deluxe",
    type: "deluxe",
    size: 35,
    hasBalcony: true,
    view: "pool",
    maxGuests: 2,
    facilities: [
      "King sized Bed or Twin Beds",
      "hasBalcony Chairs",
      "Hair Dryer",
      "Executive Working Desk equipped with Stationary",
      "Two Seater Sofa",
      "Quality Bathroom Amenities",
      "Bathroom slippers and Bathrobe",
      "Spacious Wardrobe",
      "50” LED SMART Television with International and Local Channels",
      "Tea and Coffee making facilities",
      "Complimentary high speed Internet",
      "IDD Telephone and Voicemail",
      "In-room safe- if required safety deposit box at front office desk",
      "Iron & Ironing Board",
    ],
    images: [
      "images/rooms/deluxe-1.jpg",
      "images/rooms/deluxe-2.jpg",
      "images/rooms/deluxe-3.jpg",
      "images/rooms/deluxe-4.jpg",
      "images/rooms/deluxe-5.jpg",
    ],
    price: {
      original: 80,
    },
    units: [1002, 1005, 2002, 2005, 3002, 3005, 4002, 4005],
  },
  {
    _id: "premier",
    type: "premier",
    size: 35,
    hasBalcony: true,
    view: "partial_sea",
    maxGuests: 2,
    facilities: [
      "King sized Bed or Twin Beds",
      "hasBalcony Chairs",
      "Hair Dryer",
      "Executive Working Desk equipped with Stationary",
      "Two Seater Sofa",
      "Quality Bathroom Amenities",
      "Bathroom slippers and Bathrobe",
      "Spacious Wardrobe",
      "50” LED SMART Television with International and Local Channels",
      "Tea and Coffee making facilities",
      "Complimentary high speed Internet",
      "IDD Telephone and Voicemail",
      "In-room safe- if required safety deposit box at front office desk",
      "Iron & Ironing Board",
    ],
    images: [
      "images/rooms/premier-1.jpg",
      "images/rooms/premier-2.jpg",
      "images/rooms/premier-3.jpg",
      "images/rooms/premier-4.jpg",
      "images/rooms/premier-5.jpg",
    ],
    price: {
      original: 90,
    },
    units: [1001, 1006, 2001, 2006, 3001, 3006, 4001, 4006],
  },
  {
    _id: "signature",
    type: "signature",
    size: 35,
    hasBalcony: true,
    view: "sea",
    maxGuests: 2,
    facilities: [
      "King sized Bed or Twin Beds",
      "hasBalcony Chairs",
      "Hair Dryer",
      "Executive Working Desk equipped with Stationary",
      "Two Seater Sofa",
      "Quality Bathroom Amenities",
      "Bathroom slippers and Bathrobe",
      "Spacious Wardrobe",
      "50” LED SMART Television with International and Local Channels",
      "Tea and Coffee making facilities",
      "Complimentary high speed Internet",
      "IDD Telephone and Voicemail",
      "In-room safe- if required safety deposit box at front office desk",
      "Iron & Ironing Board",
    ],
    images: [
      "images/rooms/signature-1.jpg",
      "images/rooms/signature-2.jpg",
      "images/rooms/signature-3.jpg",
      "images/rooms/signature-4.jpg",
      "images/rooms/signature-5.jpg",
    ],
    price: {
      original: 110,
    },
    units: [1008, 1009, 2008, 2009, 3009, 3010, 4009, 4010],
  },
  {
    _id: "signatureplus",
    type: "signature_plus",
    size: 35,
    hasBalcony: true,
    view: "sea",
    maxGuests: 2,
    facilities: [
      "King sized Bed or Twin Beds",
      "hasBalcony Chairs",
      "Hair Dryer",
      "Executive Working Desk equipped with Stationary",
      "Two Seater Sofa",
      "Quality Bathroom Amenities",
      "Bathroom slippers and Bathrobe",
      "Spacious Wardrobe",
      "50” LED SMART Television with International and Local Channels",
      "Tea and Coffee making facilities",
      "Complimentary high speed Internet",
      "IDD Telephone and Voicemail",
      "In-room safe- if required safety deposit box at front office desk",
      "Iron & Ironing Board",
    ],
    images: [
      "images/rooms/signatureplus-1.jpg",
      "images/rooms/signatureplus-2.jpg",
      "images/rooms/signatureplus-3.jpg",
      "images/rooms/signatureplus-4.jpg",
      "images/rooms/signatureplus-5.jpg",
    ],
    price: {
      original: 125,
    },
    units: [1007, 1010, 2007, 2010, 3008, 3011, 4008, 4011],
  },
  {
    _id: "signaturepanorama",
    type: "signature_panorama",
    size: 35,
    hasBalcony: true,
    view: "sea",
    maxGuests: 2,
    facilities: [
      "King sized Bed",
      "hasBalcony Chairs with a Stool",
      "Hair Dryer",
      "Executive Working Desk equipped with Stationary",
      "Recliner Sofa",
      "Dining Table",
      "Quality Bathroom Amenities",
      "Bathroom slippers and Bathrobe",
      "Spacious Wardrobe",
      "50” LED SMART Television with International and Local Channels",
      "Tea and Coffee making facilities",
      "Complimentary high speed Internet",
      "IDD Telephone and Voicemail",
      "In-room safe- if required safety deposit box at front office desk",
      "Iron & Ironing Board",
    ],
    images: [
      "images/rooms/signaturepanorama-1.jpg",
      "images/rooms/signaturepanorama-2.jpg",
      "images/rooms/signaturepanorama-3.jpg",
      "images/rooms/signaturepanorama-4.jpg",
      "images/rooms/signaturepanorama-5.jpg",
    ],
    price: {
      original: 135,
    },
    units: [3007, 3012, 4007, 4012],
  },
];

export default roomTypes;
