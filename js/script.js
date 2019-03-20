// import songs
import {
  songs
} from '../data/songs.js'

// reference point in document
const musicWrapper = document.querySelector('#music-wrapper')

// song card creation loop
songs.forEach((song) => {

  // create column element for grid system
  let column = document.createElement('div')
  column.className = 'col s12 m6 l4'
  musicWrapper.appendChild(column)

  // create card element
  let card = document.createElement('div')
  card.title = song.name
  card.className = 'card hoverable'
  column.appendChild(card)

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
  titleElement.textContent = song.title

  // create artist paragraph
  let cardParagraph = document.createElement('p')
  cardContent.appendChild(cardParagraph)
  cardParagraph.textContent = song.artist

})
