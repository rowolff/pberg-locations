type image = {
  url: string,
  attribution: string,
  attributionUrl: option(string),
};

type coordinates = {
  lat: float,
  lng: float,
};

type place = {
  id: string,
  name: string,
  description: string,
  image,
  address: string,
  phone: option(string),
  email: option(string),
  coordinates,
};

let places = [
  {
    id: "ff831a0f-d545-4439-a82b-f2fba7009601",
    name: {j|HERMAN Belgian Bar|j},
    description: {j|Best Belgian Beer|j},
    image: {
      url: "https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-1/p480x480/37274232_1878588205517912_6063607735839096832_n.jpg?_nc_cat=108&_nc_ht=scontent-frt3-2.xx&oh=c80c71f32cf65a8426832b735372cfb5&oe=5CA5FF21",
      attribution: {j|HERMAN|j},
      attributionUrl: Some("https://www.facebook.com/bravebelgians"),
    },
    address: {j|Schönhauser Allee 173, 10119 Berlin|j},
    phone: None,
    email: None,
    coordinates: {
      lat: 52.5323539,
      lng: 13.4123515,
    },
  },
  {
    id: "323e5faf-c52b-4651-8329-94157958102e",
    name: {j|Café Liebling|j},
    description: {j|Best bar to hang out after work|j},
    image: {
      url: "https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/557199_350331171685098_278284137_n.jpg?_nc_cat=108&_nc_ht=scontent-frt3-2.xx&oh=8d5c3c5894f59ecdaae69fec94377e24&oe=5CAB6460",
      attribution: {j|Café Liebling|j},
      attributionUrl: None,
    },
    address: {j|Raumerstraße 36A, 10437 Berlin|j},
    phone: Some("030 41198209"),
    email: None,
    coordinates: {
      lat: 52.5323526,
      lng: 13.3970306,
    },
  },
  {
    id: "be9a55d1-722c-4f88-82e2-980d96ccf06c",
    name: {j|The Bird|j},
    description: "Greasiest burger you will ever eat",
    image: {
      url: "https://static1.squarespace.com/static/59d28bcf29f187ae0fac58ce/t/59e8b035dc2b4a633cf5abfc/1540722980450/?format=1500w",
      attribution: {j|Slawomir Urban|j},
      attributionUrl: Some("www.slawourban.com"),
    },
    address: {j|Am Falkpl. 5, 10437 Berlin|j},
    phone: Some("030 51053283"),
    email: Some("thebirdreservations@gmail.com"),
    coordinates: {
      lat: 52.53235,
      lng: 13.3970306,
    },
  },
];

let names = places |> List.map(place => place.name) |> Array.of_list;

let search = term =>
  switch (term) {
  | "" => places |> Array.of_list
  | _ => [List.find(place => place.name == term, places)] |> Array.of_list
  };

Js.log(search(""));
Js.log(search("The Bird"));
/* unhandled: Js.log(search("invalid")); */