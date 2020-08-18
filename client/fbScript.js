// >>> this script attaches the facebook SDK to the head of the html page <<<<
// allowing us to access the methods from facebook to make calls.


const addScript = (id,src) => new Promise ((resolve,reject) => {
  const element = document. getElementById(id); 
  if(element) {
    return resolve(true);
  }
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('id', id);
  script.setAttribute('src', src);
  script.addEventListener('load', resolve);
  script.addEventListener('error', () => reject(new Error( `Error loading ${id}.`)));
  script.addEventListener('abort', () => reject(new Error(`${id}  loading aborted.`)));
  document.getElementsByTagName('head')[0].appendChild(script);
});

export const addFacebookScript = () => {
  const id= 'facebookAuth';
  const src = 'https://connect.facebook.net/en_US/sdk.js';

  return addScript(id,src);
};