const roomsData = [
  {
    id: 1,
    room_type: "2-osobowy",
    slug: "luksusowy-pokoj-dwuosobowy",
    title: "Luksusowy pokój 2-osobowy",
    subtitle:
      "Luksusowe wnętrze, wygodne łóżko i wszystkie udogodnienia, których potrzebujesz",
    description:
      "Luksusowy pokój 2-osobowy to propozycja dla najbardziej wymagających gości, którzy cenią sobie komfort i elegancję. Ten przestronny pokój został urządzony z najwyższą dbałością o detale, tworząc niepowtarzalną atmosferę relaksu i luksusu. W pokoju znajduje się wygodne łóżko małżeńskie z baldachimem, a także stylowe meble i wysokiej jakości tkaniny. Goście mogą podziwiać panoramiczne widoki na okoliczne lasy i jeziora, a jednocześnie w kilka minut dojechać do miast z bogatą historią i zabytkową architekturą. W pokoju znajduje się również telewizor z płaskim ekranem, bezprzewodowy dostęp do internetu, klimatyzacja oraz luksusowa łazienka z wanną i prysznicem. Dodatkowo, goście mogą skorzystać z room service'u oraz innych udogodnień oferowanych przez hotel.",
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
      "Nowoczesny pokój 3-osobowy to idealne rozwiązanie dla rodzin lub grupy przyjaciół, którzy pragną cieszyć się bliskością natury, nie rezygnując z komfortu i nowoczesnego designu. Pokój ten charakteryzuje się przestronnością i funkcjonalnością, oferując trzy wygodne łóżka oraz stylowe meble. Goście mogą podziwiać piękne widoki na okoliczne lasy i jeziora, a jednocześnie w kilka minut dojechać do miast z bogatą historią i zabytkową architekturą. W pokoju znajduje się również telewizor z płaskim ekranem, bezprzewodowy dostęp do internetu, klimatyzacja oraz nowoczesna łazienka z prysznicem. Dodatkowo, goście mogą skorzystać z balkonu lub tarasu, aby jeszcze lepiej cieszyć się otaczającą przyrodą.",
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
      "Słoneczny pokój 4-osobowy to doskonały wybór dla rodzin lub grup przyjaciół, którzy planują wypoczynek w otoczeniu przyrody, a jednocześnie chcą mieć łatwy dostęp do atrakcji pobliskich miast. Ten przestronny pokój został zaprojektowany z myślą o komforcie i funkcjonalności, oferując cztery wygodne łóżka oraz stylowe meble. Goście mogą podziwiać malownicze widoki na okoliczne lasy i jeziora, a jednocześnie w kilka minut dojechać do miast z bogatą historią i zabytkową architekturą. W pokoju znajduje się również telewizor z płaskim ekranem, bezprzewodowy dostęp do internetu, klimatyzacja oraz nowoczesna łazienka z prysznicem. Dodatkowo, goście mogą skorzystać z balkonu lub tarasu, aby jeszcze lepiej cieszyć się otaczającą przyrodą.",
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
      "Stylowy pokój 2-osobowy to idealne miejsce dla par pragnących wypocząć w otoczeniu natury, nie rezygnując jednocześnie z atrakcji pobliskich miast. Pokój został urządzony ze szczególną dbałością o detale, tworząc przytulną i romantyczną atmosferę. Znajduje się w nim wygodne łóżko małżeńskie, a także stylowe meble i dekoracje. Goście mogą podziwiać piękne widoki na okoliczne lasy i jeziora, a jednocześnie w kilka minut dojechać do miast z bogatą historią i zabytkową architekturą. W pokoju znajduje się również telewizor, bezprzewodowy dostęp do internetu oraz łazienka z prysznicem.",
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
      "Profesjonalny pokój 1-osobowy to idealne miejsce dla osób podróżujących służbowo lub poszukujących komfortowego miejsca do wypoczynku w pojedynkę. Pokój ten został zaprojektowany z myślą o funkcjonalności i wygodzie, oferując wszystko, co niezbędne do udanego pobytu. W pokoju znajduje się wygodne łóżko jednoosobowe, biurko do pracy, a także stylowe meble i telewizor z płaskim ekranem. Goście mogą korzystać z bezprzewodowego dostępu do internetu oraz nowoczesnej łazienki z prysznicem. Dodatkowym atutem jest lokalizacja hotelu, która umożliwia zarówno relaks w otoczeniu przyrody, jak i szybki dojazd do centrów miast z bogatą ofertą kulturalną i historyczną.",
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
      "Klasyczny pokój 2-osobowy to propozycja dla gości ceniących tradycyjny wystrój i komfortowy wypoczynek. Ten przytulny pokój został urządzony w klasycznym stylu, z dbałością o detale i wygodę gości. W pokoju znajduje się wygodne łóżko małżeńskie, idealne dla par, a także stylowe meble, które tworzą ciepłą i relaksującą atmosferę. Goście mogą podziwiać widoki na okoliczną przyrodę, a jednocześnie w kilka minut dojechać do miast z bogatą historią i zabytkową architekturą. W pokoju znajduje się również telewizor, bezprzewodowy dostęp do internetu oraz łazienka z prysznicem. Klasyczny pokój 2-osobowy to doskonały wybór dla tych, którzy szukają spokoju i relaksu w otoczeniu natury.",
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
