export const setProfile = (data) =>
        fetch('https://loft-taxi.glitch.me/card', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)})
                .then(response => response.json());