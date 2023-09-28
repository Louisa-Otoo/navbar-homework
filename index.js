
// for the menu icon and logo image
const logoArea = document.createElement('div');
logoArea.setAttribute('id','start');
logoArea.classList.add('logo')

const menuIcon = document.createElement('span');
menuIcon.classList.add('material-symbols-outlined')
menuIcon.textContent = 'menu';

logoArea.appendChild(menuIcon) 


logoArea.classList.add('logo')
const image = document.createElement('img');
image.classList.add('logo');
image.src = './images/logo.png'
logoArea.appendChild(image)




// //for the search box
const searchBar = document.createElement('div');
searchBar.setAttribute('id','center')
searchBar.classList.add('searchBox')

const searchInput = document.createElement('input');
searchInput.placeholder = 'Search';
searchBar.appendChild(searchInput)

const btn = document.createElement('button');
btn.classList.add('search-btn')
searchBar.appendChild(btn)

const searchIcon = document.createElement('span')
searchIcon.classList.add('material-symbols-outlined')
searchIcon.textContent = 'Search'
btn.appendChild(searchIcon)

//const microphone = document.createElement('img');
//microphone.classList.add('microphone')
//microphone.src = './icons/microphone.svg'
//btn.insertAdjacentElement('afterend', microphone);
 //btn.appendChild(microphone)
//searchBar.appendChild(microphone)




// for the icons
const iconsArea = document.createElement('div');
iconsArea.setAttribute('id','end')
iconsArea.classList.add('icons')


const videoImage = document.createElement('img');
image.classList.add('video-plus')
videoImage.src = './icons/video-plus-outline.svg'
iconsArea.appendChild(videoImage)


const bellImage = document.createElement('img');
bellImage.classList.add('notification')
bellImage.src = './icons/notifications-active.svg'
iconsArea.appendChild(bellImage)


const userImage = document.createElement('img');
userImage.classList.add('user')
userImage.src = './images/dp.jpeg'
iconsArea.appendChild(userImage)
 


const header = document.querySelector('.header')
header.appendChild(logoArea);
header.appendChild(searchBar);
header.appendChild(iconsArea);





// For the sidebar images

window.addEventListener('load', async () => {
  try {
    const imageUrls = [
      'https://placebear.com/201/309',
    ];

    const imageContainer = document.getElementById('image-container');

    for (const imageUrl of imageUrls) {
      // Create a container for each image and text
      const container = document.createElement('div');
      container.classList.add('image-text-container');

      // Create the image element
      const imgElement = document.createElement('img');
      imgElement.classList.add('nail-img');
      imgElement.src = imageUrl;

      // create a text container
      const textBox = document.createElement('div');
      textBox.classList.add('textBox');

      // create a heading
      const textHeading = document.createElement('h4')
      textHeading.textContent = 'Brown Bear In The Wild'

      // Create the text element
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Ty Animals'; // Replace with your desired text

      const metaData = document.createElement('p')
      metaData.textContent = '400 views . 1 year ago'; 

      // add the texts to the textBox
      textBox.appendChild(textHeading);
      textBox.appendChild(paragraph);
      textBox.appendChild(metaData);

      // Add the image and text to the container
      container.appendChild(imgElement);
      container.appendChild(textBox);

      // Add the container to the imageContainer
      imageContainer.appendChild(container);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }


  try {
    const imageUrls = [
      'https://placebear.com/203/311',
    ];

    const imageContainer = document.getElementById('image-container');

    for (const imageUrl of imageUrls) {
      // Create a container for each image and text
      const container = document.createElement('div');
      container.classList.add('image-text-container');

      // Create the image element
      const imgElement = document.createElement('img');
      imgElement.classList.add('nail-img');
      imgElement.src = imageUrl;

      // create a text container
      const textBox = document.createElement('div');
      textBox.classList.add('textBox');

      // create a heading
      const textHeading = document.createElement('h4')
      textHeading.textContent = 'Little Bear Goes Fishing'

      // Create the text element
      const paragraph = document.createElement('p');
      paragraph.textContent = 'My Earth'; 

      const metaData = document.createElement('p')
      metaData.textContent = '1 views . 1 year ago'; 

      // add the texts to the textBox
      textBox.appendChild(textHeading);
      textBox.appendChild(paragraph);
      textBox.appendChild(metaData);

      // Add the image and text to the container
      container.appendChild(imgElement);
      container.appendChild(textBox);

      // Add the container to the imageContainer
      imageContainer.appendChild(container);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }


  try {
    const imageUrls = [
      'https://placebear.com/204/312',
    ];

    const imageContainer = document.getElementById('image-container');

    for (const imageUrl of imageUrls) {
      // Create a container for each image and text
      const container = document.createElement('div');
      container.classList.add('image-text-container');

      // Create the image element
      const imgElement = document.createElement('img');
      imgElement.classList.add('nail-img');
      imgElement.src = imageUrl;

      // create a text container
      const textBox = document.createElement('div');
      textBox.classList.add('textBox');

      // create a heading
      const textHeading = document.createElement('h4')
      textHeading.textContent = 'White Bear On The Ocean'

      // Create the text element
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Rodrigo'; 

      const metaData = document.createElement('p')
      metaData.textContent = '800 views . 5 years ago'; 

      // add the texts to the textBox
      textBox.appendChild(textHeading);
      textBox.appendChild(paragraph);
      textBox.appendChild(metaData);

      // Add the image and text to the container
      container.appendChild(imgElement);
      container.appendChild(textBox);

      // Add the container to the imageContainer
      imageContainer.appendChild(container);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }


  try {
    const imageUrls = [
      'https://placebear.com/205/313',
    ];

    const imageContainer = document.getElementById('image-container');

    for (const imageUrl of imageUrls) {
      // Create a container for each image and text
      const container = document.createElement('div');
      container.classList.add('image-text-container');

      // Create the image element
      const imgElement = document.createElement('img');
      imgElement.classList.add('nail-img');
      imgElement.src = imageUrl;

      // create a text container
      const textBox = document.createElement('div');
      textBox.classList.add('textBox');

      // create a heading
      const textHeading = document.createElement('h4')
      textHeading.textContent = 'Mother Bear Hunts'

      // Create the text element
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Discovering Earth';

      const metaData = document.createElement('p')
      metaData.textContent = '1M views . 4 years ago'; 

      // add the texts to the textBox
      textBox.appendChild(textHeading);
      textBox.appendChild(paragraph);
      textBox.appendChild(metaData);

      // Add the image and text to the container
      container.appendChild(imgElement);
      container.appendChild(textBox);

      // Add the container to the imageContainer
      imageContainer.appendChild(container);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }


  try {
    const imageUrls = [
      'https://placebear.com/207/317',
    ];

    const imageContainer = document.getElementById('image-container');

    for (const imageUrl of imageUrls) {
      // Create a container for each image and text
      const container = document.createElement('div');
      container.classList.add('image-text-container');

      // Create the image element
      const imgElement = document.createElement('img');
      imgElement.classList.add('nail-img');
      imgElement.src = imageUrl;

      // create a text container
      const textBox = document.createElement('div');
      textBox.classList.add('textBox');

      // create a heading
      const textHeading = document.createElement('h4')
      textHeading.textContent = 'The Bear Family'

      // Create the text element
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Bear World'; 

      const metaData = document.createElement('p')
      metaData.textContent = '400 views . 1 year ago'; 

      // add the texts to the textBox
      textBox.appendChild(textHeading);
      textBox.appendChild(paragraph);
      textBox.appendChild(metaData);

      // Add the image and text to the container
      container.appendChild(imgElement);
      container.appendChild(textBox);

      // Add the container to the imageContainer
      imageContainer.appendChild(container);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }

  
});




