import gt from "./images/golden-temple.jpg";
import as from "./images/anandpur-sahib.jpg";
import hs from "./images/hemkund-sahib.jpg";

const data = [
  {
    title: "Golden Temple",
    location: "Punjab",
    googleMapsUrl:
      "https://www.google.com/maps/d/u/0/viewer?mid=1TpMVuVcHop9ARCssk9kC4ahF7Uk&hl=en&ll=31.62012300000002%2C74.87684700000001&z=17",
    startDate: "10 Jan, 2023",
    endDate: "20 Jan, 2023",
    description:
      "Sri Harmandir Sahib Ji, also known as Sri Darbar Sahib Ji, and informally referred to as the Golden Temple, is a Gurdwara located in the city of Amritsar, Punjab, India. It is one of the most revered spiritual sites of Sikhism.",
    imageURL: gt,
    key: 1,
  },
  {
    title: "Anandpur Sahib",
    location: "Punjab",
    googleMapsUrl:
      "https://www.google.com/maps/place/anandpur+sahib/data=!4m2!3m1!1s0x39054af92bfa319f:0xf357bfe53f3fcde?sa=X&hl=en&ved=2ahUKEwjfgdDa3Zz_AhUyNX0KHR6gCiQQ8gF6BAgOEAE",
    startDate: "21 Jan, 2023",
    endDate: "30 Jan, 2023",
    description:
      "Anandpur Sahib, sometimes referred to simply as Anandpur, is a city in Rupnagar district (Ropar), on the edge of Shivalik Hills, in the Indian state of Punjab.[1] Located near the Sutlej River, the city is one of the most sacred places in Sikhism, being the place where the last two Sikh Gurus, Guru Tegh Bahadur and Guru Gobind Singh, lived.",
    imageURL: as,
    key: 2,
  },

  {
    title: "Hemkund Sahib",
    location: "Utarrakhand",
    googleMapsUrl:
      "https://www.google.com/maps/place/Sri+Hemkund+Sahib/@30.6822114,79.2691041,11z/data=!4m10!1m2!2m1!1shemkund+sahib!3m6!1s0x39a7910ca401734d:0x8e85695a9a89d9fd!8m2!3d30.6993506!4d79.6152464!15sCg1oZW1rdW5kIHNhaGliWg8iDWhlbWt1bmQgc2FoaWKSAQtzaWtoX3RlbXBsZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSdE9XSjJWa1ZuRUFF4AEA!16s%2Fg%2F11yccjmv7?entry=ttu",
    startDate: "2 Feb, 2023",
    endDate: "12 Feb, 2023",
    description:
      "Hemkund Sahib (also spelled Hemkunt), formally known as Gurudwara Shri Hemkund Sahib Ji, is a Sikh place of worship and pilgrimage site in Chamoli district, Uttarakhand, India. It is devoted to Guru Gobind Singh (1666–1708), the tenth Sikh Guru, and finds mention in Dasam Granth.",
    imageURL: hs,
    key: 3,
  },
];

export default data;
