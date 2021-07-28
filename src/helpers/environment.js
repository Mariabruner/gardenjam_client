let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
    APIURL = ' https://nationalparkopedia.herokuapp.com';
    break;

    case 'nationalparkopediaclient.herokuapp.com':
    APIURL = 'https://nationparkopedia.herokuapp.com'
}

export default APIURL;