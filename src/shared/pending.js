export const drawText = (strings) => {
    const text = document.querySelector('.pending');
    let i = 0;
    function recurse(index) {

        const interval = setInterval(function () {
            text.innerHTML += strings[index][i];
            i++;

            if (i >= strings[index].length) {
                window.clearInterval(interval);
                i = 0;

                index = index === 1 ? 0 : 1;

                setTimeout(function () {
                    text.innerHTML = '';
                    recurse(index);
                }, 2000)
            }
        }, 50);
    }

    recurse(0);
};