import { alert } from '@pnotify/core';
export default fetchCountries;

function fetchCountries(name) {
  
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(
        response => {
            if(response.status === 404) {
                alert({
                    type: 'error',
                    text: 'Error 404!',
                    styling: 'brighttheme',
                    mode: 'light',
                  });
                }
                return response.json();
              },
            );
          
        }
