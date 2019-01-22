const movieData = [
  {
    id: 1,
    genre: "Crime|Drama",
    title: "Godfather: Part II, The",
    time: "7:47 PM",
    theaterAddress: "228 Manley Drive"
  },
  {
    id: 2,
    genre: "Drama|Mystery|Romance",
    title: "Good Time Girls, The (Bonnes femmes, Les)",
    time: "2:47 PM",
    theaterAddress: "0933 Schiller Trail"
  },
  {
    id: 3,
    genre: "Action|Drama|Thriller",
    title: "Bullies",
    time: "10:44 PM",
    theaterAddress: "092 4th Drive"
  },
  {
    id: 4,
    genre: "Drama|Mystery|Thriller",
    title: "Penthouse North",
    time: "5:26 PM",
    theaterAddress: "4 Artisan Plaza"
  },
  {
    id: 5,
    genre: "Horror",
    title: "Maniac",
    time: "4:16 PM",
    theaterAddress: "070 Moose Way"
  },
  {
    id: 6,
    genre: "Comedy|Horror",
    title: "Dr. Jekyll and Ms. Hyde",
    time: "6:06 PM",
    theaterAddress: "033 Brentwood Alley"
  },
  {
    id: 7,
    genre: "Action|Crime|Thriller",
    title: "Jack Strong",
    time: "6:31 PM",
    theaterAddress: "1 Sutherland Center"
  },
  {
    id: 8,
    genre: "Adventure|Comedy",
    title: "Pirates of the Great Salt Lake",
    time: "11:22 PM",
    theaterAddress: "57967 Springs Parkway"
  },
  {
    id: 9,
    genre: "Action|Drama",
    title: "Over the Top",
    time: "3:49 PM",
    theaterAddress: "928 Valley Edge Lane"
  },
  {
    id: 10,
    genre: "Comedy|Drama",
    title: "Room for Romeo Brass, A",
    time: "11:53 PM",
    theaterAddress: "8270 Bayside Crossing"
  },
  {
    id: 11,
    genre: "Documentary",
    title: "Jonathan Rosenbaum, Present",
    time: "6:08 PM",
    theaterAddress: "33 Pond Court"
  },
  {
    id: 12,
    genre: "Comedy|Drama",
    title: "Butcher Boy, The",
    time: "11:39 PM",
    theaterAddress: "304 Aberg Crossing"
  },
  {
    id: 13,
    genre: "Comedy",
    title: "How to Seduce Difficult Women",
    time: "10:17 PM",
    theaterAddress: "2461 Del Sol Terrace"
  },
  {
    id: 14,
    genre: "Drama",
    title:
      "No One Writes to the Colonel (El coronel no tiene quien le escriba)",
    time: "7:02 PM",
    theaterAddress: "697 Butternut Lane"
  },
  {
    id: 15,
    genre: "Crime|Drama",
    title: "Child I Never Was, The (Leben lang kurze Hosen Tragen, Ein)",
    time: "5:37 PM",
    theaterAddress: "290 Golf View Road"
  },
  {
    id: 16,
    genre: "Documentary",
    title: "Nature of Existence, The",
    time: "10:57 PM",
    theaterAddress: "0731 Graceland Place"
  },
  {
    id: 17,
    genre: "Drama|Thriller",
    title: "Onibi: The Fire Within",
    time: "4:11 PM",
    theaterAddress: "7994 Walton Plaza"
  },
  {
    id: 18,
    genre: "Drama|Romance",
    title: "Anna Karenina",
    time: "6:25 PM",
    theaterAddress: "72 Corben Trail"
  },
  {
    id: 19,
    genre: "Comedy|Romance",
    title: "Her Alibi",
    time: "7:31 PM",
    theaterAddress: "40 Northfield Alley"
  },
  {
    id: 20,
    genre: "Drama|Horror|Thriller",
    title: "White Noise 2: The Light",
    time: "11:34 PM",
    theaterAddress: "42757 Kensington Point"
  },
  {
    id: 21,
    genre: "Documentary",
    title: "To the Limit (Am Limit)",
    time: "2:08 PM",
    theaterAddress: "95468 Mitchell Park"
  },
  {
    id: 22,
    genre: "Horror",
    title: "Come Back to Me",
    time: "7:19 PM",
    theaterAddress: "325 Oak Valley Place"
  },
  {
    id: 23,
    genre: "Drama|Sci-Fi|Thriller",
    title: "Millennium",
    time: "3:04 PM",
    theaterAddress: "33 Londonderry Center"
  },
  {
    id: 24,
    genre: "Drama|Mystery",
    title: "Pigsty (Porcile)",
    time: "9:59 PM",
    theaterAddress: "15445 Kim Terrace"
  },
  {
    id: 25,
    genre: "(no genres listed)",
    title: "A Fight For",
    time: "10:47 PM",
    theaterAddress: "5802 Cherokee Parkway"
  },
  {
    id: 26,
    genre: "Action|Comedy|Sci-Fi",
    title: "Star Wreck: In the Pirkinning",
    time: "4:59 PM",
    theaterAddress: "2 Longview Street"
  },
  {
    id: 27,
    genre: "Drama",
    title: "Clean and Sober",
    time: "8:09 PM",
    theaterAddress: "72000 Carpenter Plaza"
  },
  {
    id: 28,
    genre: "Western",
    title: "Arizona",
    time: "6:29 PM",
    theaterAddress: "964 Waywood Drive"
  },
  {
    id: 29,
    genre: "Crime|Horror",
    title: "Henry: Portrait of a Serial Killer, Part 2",
    time: "4:38 PM",
    theaterAddress: "4570 Sutteridge Junction"
  },
  {
    id: 30,
    genre: "Drama",
    title: "Viola",
    time: "6:29 PM",
    theaterAddress: "7 Warrior Terrace"
  },
  {
    id: 31,
    genre: "Horror",
    title: "Eyes Without a Face (Yeux sans visage, Les)",
    time: "8:16 PM",
    theaterAddress: "27 Muir Court"
  },
  {
    id: 32,
    genre: "Action|Comedy|Crime",
    title: "All About the Benjamins",
    time: "2:34 PM",
    theaterAddress: "7 Hollow Ridge Terrace"
  },
  {
    id: 33,
    genre: "Horror|Thriller",
    title: "Quicksilver Highway",
    time: "10:36 PM",
    theaterAddress: "77795 Mccormick Park"
  },
  {
    id: 34,
    genre: "Documentary",
    title: "Building the Inferno: Nobuo Nakagawa and the Making of 'Jigoku'",
    time: "4:48 PM",
    theaterAddress: "59 Rowland Way"
  },
  {
    id: 35,
    genre: "Drama",
    title: "Death of a Salesman",
    time: "10:14 PM",
    theaterAddress: "63370 Barby Center"
  },
  {
    id: 36,
    genre: "Adventure|Animation|Children|Musical",
    title: "Rock-A-Doodle",
    time: "2:15 PM",
    theaterAddress: "0 Sommers Drive"
  },
  {
    id: 37,
    genre: "Drama|Thriller",
    title: "Syriana",
    time: "11:44 PM",
    theaterAddress: "1 Fair Oaks Point"
  },
  {
    id: 38,
    genre: "Fantasy|Horror",
    title: "Illusion Of Blood",
    time: "3:35 PM",
    theaterAddress: "47 Graceland Street"
  },
  {
    id: 39,
    genre: "Comedy|Drama|Romance",
    title: "1981",
    time: "2:46 PM",
    theaterAddress: "45 Forest Plaza"
  },
  {
    id: 40,
    genre: "Drama",
    title: "Once Upon a Time in the Midlands",
    time: "4:41 PM",
    theaterAddress: "1269 Kennedy Road"
  },
  {
    id: 41,
    genre: "Drama|Romance|War",
    title: "Love Is a Many-Splendored Thing",
    time: "8:01 PM",
    theaterAddress: "177 Dwight Street"
  },
  {
    id: 42,
    genre: "Action|Adventure|Sci-Fi",
    title: "Planet of the Future, The",
    time: "2:40 PM",
    theaterAddress: "1204 John Wall Avenue"
  },
  {
    id: 43,
    genre: "Drama",
    title: "Flowers of Shanghai (Hai shang hua)",
    time: "11:08 PM",
    theaterAddress: "6 Algoma Street"
  },
  {
    id: 44,
    genre: "Action|Drama|War",
    title: "All Quiet on the Western Front",
    time: "3:49 PM",
    theaterAddress: "0 Namekagon Place"
  },
  {
    id: 45,
    genre: "Drama",
    title: "Chinese Roulette (Chinesisches Roulette)",
    time: "6:52 PM",
    theaterAddress: "19916 Graedel Trail"
  },
  {
    id: 46,
    genre: "Comedy",
    title: "Too Shy to Try (Je suis timide... mais je me soigne)",
    time: "2:06 PM",
    theaterAddress: "79 Stuart Trail"
  },
  {
    id: 47,
    genre: "Documentary",
    title: "Flaw, The",
    time: "6:43 PM",
    theaterAddress: "954 Westerfield Court"
  },
  {
    id: 48,
    genre: "Crime|Drama",
    title: "Funeral, The",
    time: "6:30 PM",
    theaterAddress: "8232 Chinook Terrace"
  },
  {
    id: 49,
    genre: "Horror",
    title: "House of Dracula",
    time: "4:31 PM",
    theaterAddress: "75 Golf Course Crossing"
  },
  {
    id: 50,
    genre: "Comedy|Drama|Romance",
    title: "When Ladies Meet",
    time: "4:58 PM",
    theaterAddress: "4 Maple Parkway"
  }
];
