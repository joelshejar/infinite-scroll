
//Unsplash API
const count = 10;
const apiKey = 'mUPqZ_dLwH7L3nlRz7WbmHmqSk_NLmWSE-oxJpdDBKI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}=${count}`;

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}


// On Load
getPhotos();












