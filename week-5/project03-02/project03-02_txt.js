/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Winston Jo
      Date:   9/11/2026

      Filename: project03-02.js
*/

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

// create empty string that will store the HTML for the gallery
let galleryHTML = ''

// Loop through the captions array to create the HTML for each image in the gallery
for (let i = 0; i < captions.length; i++) {
  //add the opening figure tag
  galleryHTML += '<figure>'
  //add the image for the current caption
  galleryHTML +=
    '<img src="images/slide' + i + '.jpg" alt="' + captions[i] + '">'
  //add the caption for the current image
  galleryHTML += '<figcaption>' + captions[i] + '</figcaption>'
  //add the closing figure tag
  galleryHTML += '</figure>'
}

// Display the completed gallery
document.getElementById('gallery').innerHTML = galleryHTML
