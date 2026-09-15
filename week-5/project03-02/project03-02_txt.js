/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Winston Jo
      Date:   9/11/2026

      Filename: project03-02.js
*/

// Create an array to hold the file names for each image
let imageFiles = new Array(14)
imageFiles[0] = 'slide0.jpg'
imageFiles[1] = 'slide1.jpg'
imageFiles[2] = 'slide2.jpg'
imageFiles[3] = 'slide3.jpg'
imageFiles[4] = 'slide4.jpg'
imageFiles[5] = 'slide5.jpg'
imageFiles[6] = 'slide6.jpg'
imageFiles[7] = 'slide7.jpg'
imageFiles[8] = 'slide8.jpg'
imageFiles[9] = 'slide9.jpg'
imageFiles[10] = 'slide10.jpg'
imageFiles[11] = 'slide11.jpg'
imageFiles[12] = 'slide12.jpg'
imageFiles[13] = 'slide13.jpg'

// Create an array to hold the captions for each image
let captions = new Array(14)
captions[0] = 'International Space Station fourth expansion [2009]'
captions[1] = 'Assembling the International Space Station [1998]'
captions[2] = 'The Atlantis docks with the ISS [2001]'
captions[3] = 'The Atlantis approaches the ISS [2000]'
captions[4] = 'The Atlantis approaches the ISS [2000]'
captions[5] = 'International Space Station over Earth [2002]'
captions[6] = 'The International Space Station first expansion [2002]'
captions[7] = 'Hurricane Ivan from the ISS [2008]'
captions[8] = 'The Soyuz spacecraft approaches the ISS [2005]'
captions[9] = 'The International Space Station from above [2006]'
captions[10] = 'Maneuvering in space with the Canadarm2 [2006]'
captions[11] = 'The International Space Station second expansion [2006]'
captions[12] = 'The International Space Station third expansion [2007]'
captions[13] = 'The ISS over the Ionian Sea [2007]'

// Reference to the gallery section
let gallery = document.getElementById('gallery')

// Create a loop to generate the HTML for each image in the gallery
for (let i = 0; i < imageFiles.length; i++) {
  // Create a figure element for the current image
  let figure = document.createElement('figure')

  // Create an image element for the current image
  let img = document.createElement('img')
  img.src = 'images/' + imageFiles[i]
  img.alt = captions[i]

  // Create a caption element for the current image
  let caption = document.createElement('figcaption')
  caption.textContent = captions[i]

  // Append the image and caption to the figure
  figure.appendChild(img)
  figure.appendChild(caption)

  // Append the figure to the gallery
  gallery.appendChild(figure)
}
