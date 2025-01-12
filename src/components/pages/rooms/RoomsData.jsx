const roomsData = [
  {
    id: 1,
    room_type: "2-osobowy",
    slug: "luksusowy-pokoj-dwuosobowy",
    title: "Luksusowy pokój 2-osobowy",
    subtitle:
      "Luksusowe wnętrze, wygodne łóżko i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider-images/luksusowy-pokoj-dwuosobowy-cover.jpg",
    price: 299,
    beds_size: "1 podwójne",
    wifi_access: true,
    tv_access: true,
    pets_allowed: false,
    free_parking: true,
    room_gallery: [
      "/single-room-gallery/room-1.jpg",
      "/single-room-gallery/room-2.jpg",
      "/single-room-gallery/room-3.jpg",
    ],
  },
  {
    id: 2,
    room_type: "3-osobowy",
    slug: "nowoczesny-pokoj-trzyosobowy",
    title: "Nowoczesny pokój 3-osobowy",
    subtitle:
      "Nowoczesne wnętrze, wygodne łóżka i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider-images/nowoczesny-pokoj-dwuosobowy-cover.jpg",
    price: 399,
    beds_size: "1 podwójne + 1 pojedyncze",
    wifi_access: true,
    tv_access: true,
    pets_allowed: true,
    free_parking: true,
    room_gallery: [
      "/single-room-gallery/room-4.jpg",
      "/single-room-gallery/room-5.jpg",
      "/single-room-gallery/room-6.jpg",
    ],
  },
  {
    id: 3,
    room_type: "4-osobowy",
    slug: "sloneczny-pokoj-czteroosobowy",
    title: "Słoneczny pokój 4-osobowy",
    subtitle:
      "Słoneczne wnętrze, wygodne łóżko i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider-images/sloneczny-pokoj-jednoosobowy-cover.jpg",
    price: 259,
    beds_size: "1 podwójne + 2 pojedyncze",
    wifi_access: true,
    tv_access: true,
    pets_allowed: true,
    free_parking: false,
    room_gallery: [
      "/single-room-gallery/room-1.jpg",
      "/single-room-gallery/room-2.jpg",
      "/single-room-gallery/room-3.jpg",
    ],
  },
  {
    id: 4,
    room_type: "2-osobowy",
    slug: "stylowy-pokoj-dwuosobowy",
    title: "Stylowy pokój 2-osobowy",
    subtitle:
      "Stylowe wnętrze, wygodne łóżko i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider-images/stylowy-pokoj-dwuosobowy-cover.jpg",
    price: 349,
    beds_size: "2 pojedyncze",
    wifi_access: true,
    tv_access: true,
    pets_allowed: false,
    free_parking: true,
    room_gallery: [
      "/single-room-gallery/room-4.jpg",
      "/single-room-gallery/room-5.jpg",
      "/single-room-gallery/room-6.jpg",
    ],
  },
  {
    id: 5,
    room_type: "1-osobowy",
    slug: "profesjonalny-pokoj-jednoosobowy",
    title: "Profesjonalny pokój 1-osobowy",
    subtitle:
      "Profesjonalne wnętrze, wygodne łóżko i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider-images/profesjonalny-pokoj-jednoosobowy-cover.jpg",
    price: 299,
    beds_size: "1 podwójne",
    wifi_access: true,
    tv_access: true,
    pets_allowed: false,
    free_parking: true,
    room_gallery: [
      "/single-room-gallery/room-1.jpg",
      "/single-room-gallery/room-2.jpg",
      "/single-room-gallery/room-3.jpg",
    ],
  },
  {
    id: 6,
    room_type: "2-osobowy",
    slug: "klasyczny-pokoj-dwuosobowy",
    title: "Klasyczny pokój 2-osobowy",
    subtitle:
      "Klasyczne wnętrze, wygodne łóżko i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider-images/klasyczny-pokoj-dwuosobowy-cover.jpg",
    price: 399,
    beds_size: "1 podwójne",
    wifi_access: true,
    tv_access: true,
    pets_allowed: true,
    free_parking: true,
    room_gallery: [
      "/single-room-gallery/room-4.jpg",
      "/single-room-gallery/room-5.jpg",
      "/single-room-gallery/room-6.jpg",
    ],
  },
];

export default roomsData;
