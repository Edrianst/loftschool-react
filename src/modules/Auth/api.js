export const authRequest = (data) =>
        fetch(`https://loft-taxi.glitch.me/${data.path}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)})
                .then(response => response.json());