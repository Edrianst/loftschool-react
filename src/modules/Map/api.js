export const addressRequest = () =>
        fetch('https://loft-taxi.glitch.me/addressList').then(response => response.json());

export const routesRequest = (data) =>
        fetch(`https://loft-taxi.glitch.me/route?address1=${data.address1}&address2=${data.address2}`).then(response => response.json());