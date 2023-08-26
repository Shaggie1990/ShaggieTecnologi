export const GOOGLE_API_KEY = 'AIzaSyAmFxma_6wc8fIIwU-3enHUgj125TGP8BE';
export const URL_MAPS = ({ lat, lng, zoom }) =>
    `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;