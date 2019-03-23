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

// song card creation loop
songs.forEach((song) => {

  // create column element for grid system
  let column = document.createElement('div')
  column.className = 'col s12 m6 l4'
  musicWrapper.appendChild(column)

  // create card element
  let card = document.createElement('div')
  card.className = 'card hoverable'
  column.appendChild(card)

  // create text on hover for card
  if (song.feat_artist === "none") {
    card.title = song.title + ' by ' + song.artist
  } else {
    card.title = song.title + ' (feat. ' + song.feat_artist + ')' + ' by ' + song.artist
  }

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
  cardContent.appendChild(cardParagraph)
  cardParagraph.textContent = song.artist

  // create apple music embed
  let iframe = document.createElement('iframe')
  iframe.allow = 'autoplay *; encrypted-media *;'
  iframe.frameborder = '0'
  iframe.height = '150'
  iframe.style = 'width:100%;max-width:660px;overflow:hidden;background:transparent;border:none;border-radius:10px;'
  iframe['sandbox'] = "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  iframe.src = song.itunes_embed_url
  cardParagraph.appendChild(iframe)

  // create genre and mood icon container
  let cardAction = document.createElement('div')
  cardAction.className = 'card-action center-align'
  card.appendChild(cardAction)

  // add genre icons to cardAction
  let genre = document.createElement('a')
  genre.className = 'btn red'
  cardAction.appendChild(genre)
  genre.textContent = song.genre

  // add mood icons to cardAction
  let mood = document.createElement('a')
  mood.className = 'btn red'
  cardAction.appendChild(mood)
  mood.textContent = song.mood

})
