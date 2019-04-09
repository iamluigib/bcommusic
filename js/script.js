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

  // card front for flip

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

  // create more button
  let moreBtn = document.createElement('a')
  moreBtn.className = 'btn-floating btn-large white z-depth-0 waves-effect flipBtn'
  cardBtns.appendChild(moreBtn)
  let moreBtnIcon = document.createElement('i')
  moreBtnIcon.className = 'fa fa-ellipsis-h black-text'
  moreBtn.appendChild(moreBtnIcon)

  // create play button
  let playBtn = document.createElement('a')
  playBtn.id = song.title + '-toggle'
  playBtn.className = 'btn-floating btn-large red waves-effect waves-light'
  cardBtns.appendChild(playBtn)
  let playBtnIcon = document.createElement('i')
  playBtnIcon.className = 'fa fa-play'
  playBtn.appendChild(playBtnIcon)

  // create apple music link button
  let appleMusicBtn = document.createElement('a')
  appleMusicBtn.href = song.apple_music_url
  appleMusicBtn.target = '_blank'
  appleMusicBtn.className = 'btn-floating btn-large white z-depth-0 waves-effect'
  cardBtns.appendChild(appleMusicBtn)
  let appleMusicBtnIcon = document.createElement('i')
  appleMusicBtnIcon.className = 'fab fa-apple black-text'
  appleMusicBtn.appendChild(appleMusicBtnIcon)

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

// card flip
let card = document.querySelector('.card');
let ellipsisBtn = document.querySelector('.flipBtn')

card.addEventListener('click', function () {
  console.log(this.parentNode.parentNode.parentNode)
  this.parentNode.parentNode.parentNode.classList.toggle('is-flipped');
});
