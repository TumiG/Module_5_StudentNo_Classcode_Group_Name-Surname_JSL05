// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Time Moving Slow", artist: "Kanye West", genre: "Hip Hop" },
    { title: "StarGazing", artist: "Travis Scott", genre: "Hip Hop" },
    { title: "Sideways", artist: "Gordo", genre: "Hip Hop"}

    
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Hip Hop",
    "Gamora": "Pop",
    "Drax": "R&B", 
    "Rocket": "Pop",
    "Groot": "Rap "
    
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
   const guardianNames = Object.keys(guardians);
   
   const playlists = guardianName.map(guardian => {
    const genre = guardians[guardian];

    const playlist = songs.filter(song => song.genre === genre); 

    return {
        guarduan: guardian,
        playlist: playlist
    }
   });
}

const playlistsObject = playlists.reduce((acc, {guardian, playlist}) => {
    acc[guardian] = playlist; 
    return acc; 
})

return playlistsObjects; 


// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

console.log("Playlists for each Guardian"); 
for (const [guardian, playlist] of Object.entries(playlists)) {
    console.log(`${guardian}'s Playlist`); 
    if (playlist.length > 0) {
        playlist.forEach(song => console.log(`- ${song.title}`)); 
    } else {
        console.log(" No songs available for this genre");
    }
}


