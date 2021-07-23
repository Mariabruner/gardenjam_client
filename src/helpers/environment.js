let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3000';
    break;

    case 'nationalparkopediaclient.herokuapp.com':
    APIURL = 'https://nationparkopediaclient.herokuapp.com'
}

export default APIURL;