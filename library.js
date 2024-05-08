const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
              printPlaylists : function() {
              for (const playlistId in this.playlists) {
              const playlist = this.playlists[playlistId];
               console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              }
               },
              printTracks : function() {
              for (const trackId in this.tracks) {
              const tarcklist = this.tracks[trackId];
              console.log(`${trackId}: ${tarcklist.name} by ${tarcklist.artist} (${tarcklist.album})`);
              }
              },
             printPlaylist :function(playlistId) {
              const playlist = this.playlists[playlistId];
              console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              },
              printTrack : function(trackId) {
              const tracklist = this.tracks[trackId];
              console.log(`${trackId}: ${tracklist.name} by ${tracklist.artist} (${tracklist.album})`);
              },
              addTrackToPlaylist : function(trackId, playlistId) {
              const playlist = library.playlists[playlistId];
              if (playlist) {
                     playlist.tracks.push(trackId);
                     console.log(`Track ${trackId} added to playlist ${playlistId}`);
              } else {
                     console.log(`Playlist ${playlistId} not found`);
                     }
              },
              addTrack : function(name, artist, album) {
              const trackId = generateUid();
              const newTrack = {
                     id: trackId,
                     name: name,
                     artist: artist,
                     album: album
              };
              library.tracks[trackId] = newTrack;
              console.log(`Track ${trackId} added: ${name} by ${artist} (${album})`);
              },
              addPlaylist : function(name) {
                     const playListId = generateUid();
                     const newPlayList = {
                            id: playListId,
                            name: name,
                            tracks: []
                     }
                     library.playlists[playListId] = newPlayList;
                     console.log(`playlist ${playListId} added: ${name}`);
              }

};

library.printPlaylists();
library.printPlaylists();
library.printPlaylist("p01");        
library.printTrack("t01");
library.printTrack("t02");
library.addTrackToPlaylist("t03", "p01");

 const generateUid  = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

library.addTrack("New Song", "New Artist", "New Album");
library.addPlaylist("My Playlist");

