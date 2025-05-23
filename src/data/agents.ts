export interface Agent {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  specialties: string[];
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  listings: number;
  experience: number;
  featured: boolean;
}

const agents: Agent[] = [
  {
    id: "a1",
    name: "Sarah Johnson",
    title: "Luxury Property Specialist",
    email: "sarah.johnson@luxeestate.com",
    phone: "(123) 456-7891",
    bio: "Sarah specializes in luxury waterfront properties and has over 15 years of experience in the high-end real estate market. With her extensive network and negotiation skills, she consistently achieves record-breaking sales for her clients.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    specialties: ["Waterfront Properties", "Luxury Homes", "Investment Properties"],
    socialMedia: {
      facebook: "https://facebook.com/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnson_luxe",
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    listings: 24,
    experience: 15,
    featured: true
  },
  {
    id: "a2",
    name: "Michael Chen",
    title: "Urban Property Expert",
    email: "michael.chen@luxeestate.com",
    phone: "(123) 456-7892",
    bio: "Michael has unparalleled knowledge of the urban real estate market. His expertise in modern architecture and design trends makes him the go-to agent for clients seeking contemporary city properties.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    specialties: ["Penthouses", "Lofts", "Urban Developments"],
    socialMedia: {
      instagram: "https://instagram.com/michaelchen_realty",
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    listings: 18,
    experience: 10,
    featured: true
  },
  {
    id: "a3",
    name: "Jessica Martinez",
    title: "Estate Property Specialist",
    email: "jessica.martinez@luxeestate.com",
    phone: "(123) 456-7893",
    bio: "With a background in interior design, Jessica brings a unique perspective to the luxury real estate market. She helps clients envision the potential of each property and has a talent for matching buyers with their dream homes.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    specialties: ["Estates", "Historic Properties", "Luxury Renovations"],
    socialMedia: {
      facebook: "https://facebook.com/jessicamartinez",
      instagram: "https://instagram.com/jessica_m_luxury",
      twitter: "https://twitter.com/jessicam",
      linkedin: "https://linkedin.com/in/jessicamartinez"
    },
    listings: 21,
    experience: 12,
    featured: true
  },
  {
    id: "a4",
    name: "David Wilson",
    title: "Beachfront Property Specialist",
    email: "david.wilson@luxeestate.com",
    phone: "(123) 456-7894",
    bio: "David specializes in beachfront and coastal properties across Miami and surrounding areas. His deep understanding of waterfront regulations and market trends has made him one of the top-producing agents in Florida.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    specialties: ["Beachfront Properties", "Vacation Homes", "Condos"],
    socialMedia: {
      instagram: "https://instagram.com/davidwilson_miami",
      linkedin: "https://linkedin.com/in/davidwilson"
    },
    listings: 16,
    experience: 8,
    featured: false
  },
  {
    id: "a5",
    name: "Emily Thompson",
    title: "Historic Property Expert",
    email: "emily.thompson@luxeestate.com",
    phone: "(123) 456-7895",
    bio: "Emily has a passion for historic properties and architectural preservation. She works closely with clients to find unique character homes while navigating the complexities of purchasing and renovating historic properties.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    specialties: ["Historic Homes", "Brownstones", "Character Properties"],
    socialMedia: {
      facebook: "https://facebook.com/emilythompson",
      instagram: "https://instagram.com/emily_historic_homes",
      linkedin: "https://linkedin.com/in/emilythompson"
    },
    listings: 14,
    experience: 9,
    featured: false
  },
  {
    id: "a6",
    name: "Robert Miller",
    title: "Mountain Property Specialist",
    email: "robert.miller@luxeestate.com",
    phone: "(123) 456-7896",
    bio: "Robert specializes in luxury mountain properties and vacation homes. His knowledge of resort communities and recreational opportunities helps clients find the perfect retreat for their lifestyle.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    specialties: ["Mountain Retreats", "Ski Properties", "Luxury Cabins"],
    socialMedia: {
      facebook: "https://facebook.com/robertmiller",
      instagram: "https://instagram.com/robert_mountain_luxury",
      twitter: "https://twitter.com/robertmiller",
      linkedin: "https://linkedin.com/in/robertmiller"
    },
    listings: 19,
    experience: 11,
    featured: true
  }
];

export default agents;