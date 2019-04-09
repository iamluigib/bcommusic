// import songs
import {
  songs
} from '../data/songs.js'

// reference point in document
const musicWrapper = document.querySelector('#music-wrapper')

// sort songs by date added
songs.sort(function (a, b) {
  a = new Date(a.date_added);
  b = new Date(b.date_added);
  return a > b ? -1 : a < b ? 1 : 0;
});

// filter for calm songs
let calmSongs = songs.filter(song => {
  return song.mood === 'Calm'
})


// filter for chill songs
let chillSongs = songs.filter(song => {
  return song.mood === 'Chill'
})


// filter for Energetic songs
let energeticSongs = songs.filter(song => {
  return song.mood === 'Energetic'
})


// song card creation loop
songs.forEach((song) => {

  // create column element for grid system
  let column = document.createElement('div')
  column.className = 'col s12 m6 l4'
  musicWrapper.appendChild(column)

  // create card container
  let cardContainer = document.createElement('div')
  cardContainer.className = 'card-container'
  column.appendChild(cardContainer)

  // create card front
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face card__face--front'
  cardContainer.appendChild(cardFront)

  // create card element
  let card = document.createElement('div')
  card.className = 'card large hoverable'
  cardFront.appendChild(card)

  // create card image container
  let cardImage = document.createElement('div')
  cardImage.className = 'card-image'
  card.appendChild(cardImage)

  // create image for card
  let imgElement = document.createElement('img')
  imgElement.src = song.album_art
  imgElement.alt = song.album
  cardImage.appendChild(imgElement)

  // create card content container
  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  card.appendChild(cardContent)

  // create card title
  let titleElement = document.createElement('span')
  titleElement.className = 'card-title truncate'
  cardContent.appendChild(titleElement)
  if (song.feat_artist === "none") {
    titleElement.textContent = song.title
  } else {
    titleElement.textContent = song.title + ' (feat. ' + song.feat_artist + ')'
  }

  // create artist paragraph
  let cardParagraph = document.createElement('p')
  cardParagraph.style = "margin-bottom:10px;"
  cardContent.appendChild(cardParagraph)
  cardParagraph.textContent = song.artist

  // create soundcloud embed
  let iframe = document.createElement('iframe')
  iframe.style = 'display:none;'
  iframe.frameborder = 'no'
  iframe.id = 'sc-' + song.title
  iframe.src = song.sc_embed_url
  cardParagraph.appendChild(iframe)

  // create card buttons
  let cardBtns = document.createElement('p')
  cardBtns.className = "song-btns"
  cardContent.appendChild(cardBtns)

  // add genre icons to cardBtns
  let genre = document.createElement('a')
  genre.className = 'btn white black-text'
  cardBtns.appendChild(genre)
  genre.textContent = song.genre

  // add mood icons to cardBtns
  let mood = document.createElement('a')
  mood.className = 'btn white black-text'
  cardBtns.appendChild(mood)
  mood.textContent = song.mood

  // create card action container
  let cardAction = document.createElement('div')
  cardAction.className = 'card-action center-align'
  card.appendChild(cardAction)

  // create play button
  let playBtn = document.createElement('a')
  playBtn.id = song.title + '-toggle'
  playBtn.className = 'btn red waves-effect waves-light'
  cardAction.appendChild(playBtn)
  let playBtnIcon = document.createElement('i')
  playBtnIcon.className = 'fa fa-play'
  playBtn.appendChild(playBtnIcon)

  // create more button
  let moreBtn = document.createElement('a')
  moreBtn.className = 'btn white z-depth-0 waves-effect'
  moreBtn.addEventListener('click', function () {
    console.log(this.parentNode.parentNode.parentNode.parentNode)
    this.parentNode.parentNode.parentNode.parentNode.classList.toggle('is-flipped');
  });
  cardAction.appendChild(moreBtn)
  let moreBtnIcon = document.createElement('i')
  moreBtnIcon.className = 'fa fa-ellipsis-h black-text'
  moreBtn.appendChild(moreBtnIcon)

  // create card back
  let cardBack = document.createElement('div')
  cardBack.className = 'card__face card__face--back'
  cardContainer.appendChild(cardBack)

  // create card back element
  let cardBackElement = document.createElement('div')
  cardBackElement.className = 'card large hoverable clickable'
  cardBack.appendChild(cardBackElement)

  // return to front of card
  cardBackElement.addEventListener('click', function () {
    console.log(this.parentNode.parentNode)
    this.parentNode.parentNode.classList.toggle('is-flipped');
  });

  // create card back content container
  let cardContentBack = document.createElement('div')
  cardContentBack.className = 'card-content'
  cardBackElement.appendChild(cardContentBack)

  // create card back title
  let titleElementBack = document.createElement('span')
  titleElementBack.className = 'card-title'
  cardContentBack.appendChild(titleElementBack)
  if (song.feat_artist === "none") {
    titleElementBack.textContent = song.title
  } else {
    titleElementBack.textContent = song.title + ' (feat. ' + song.feat_artist + ')'
  }

  // create artist paragraph back
  let cardArtistBack = document.createElement('p')
  cardArtistBack.style = "margin-bottom:10px;"
  cardContentBack.appendChild(cardArtistBack)
  cardArtistBack.textContent = 'Artist: ' + song.artist


  // create album paragraph
  let cardAlbumBack = document.createElement('p')
  cardAlbumBack.style = "margin-bottom:10px;"
  cardContentBack.appendChild(cardAlbumBack)
  cardAlbumBack.textContent = 'Album: ' + song.album


  // create genre paragraph
  let cardGenreBack = document.createElement('p')
  cardGenreBack.style = "margin-bottom:10px;"
  cardContentBack.appendChild(cardGenreBack)
  cardGenreBack.textContent = 'Genre: ' + song.genre


  // create mood paragraph
  let cardMoodBack = document.createElement('p')
  cardMoodBack.style = "margin-bottom:10px;"
  cardContentBack.appendChild(cardMoodBack)
  cardMoodBack.textContent = 'Mood: ' + song.mood

  // create card back action
  let cardActionBack = document.createElement('div')
  cardActionBack.className = 'card-action'
  cardBackElement.appendChild(cardActionBack)

  // create apple music link button
  let appleMusicBtn = document.createElement('a')
  appleMusicBtn.href = song.apple_music_url
  appleMusicBtn.target = '_blank'
  appleMusicBtn.className = 'btn red z-depth-0 waves-effect apple-music-btn'
  appleMusicBtn.textContent = 'Listen on Apple Music'
  cardActionBack.appendChild(appleMusicBtn)

})
