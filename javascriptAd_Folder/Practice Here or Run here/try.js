import { playlistArr  } from "../playlist.js"

const playListCont = [];

// For in
for (const playL of playlistArr){
    // console.log(playL) // using for in it print each index of our Objects (0, 1, 2, 3)
    // console.log(playlistArr[playL]); 
    console.log('\n');
    for (const keyInd in playL){
        playListCont.push(
            `${keyInd}`
        );
        console.log(keyInd);
    }
}

// For of
console.log('\n');for (const plArr of playlistArr){ 
    // console.log(plArr.artist);
}

// basic for loop
for (let i=0; i<playlistArr.length; i++){

    // console.log(playlistArr[i]);
    // playListCont.push(
    //     `${playlistArr[i].artist}`
    // );
}

// playListCont.join(',');
console.log(playListCont);

for (const iter of playListCont) {
  if (iter === "title") {
    console.log(",\n");
  }
  console.log(iter);
}

const newPlayListArr = [];
const myplayL = playlistArr.map(function (mapPlaylist){
    // console.log(mapPlaylist);
    return `${mapPlaylist.artist}`;
}).join(",");

newPlayListArr.push(myplayL);



