let sn = document.querySelector('#SN');
let mac = document.querySelector('#MAC');
let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

btn.addEventListener('click', getValue);

async function changePortal(value, sn, mac) {
    if (value === 'vivat.tv' || value === 'vivat.live') {
        fetch(
            `http://portal2.vivat-tv.com/portal/ajax/switch_portals.php?portal=${value}&mac=${mac}&sn=${sn}`,
            { mode: 'no-cors' }
        )
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    }

    if (value === 'new' || value === 'old') {
        fetch(
            `http://beer.vivat-tv.com/portal/adm/vlad/switch2portal.php?mac=${mac}&sn=${sn}&portal=${value}`,
            { mode: 'no-cors' }
        )
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    }
}

function getValue() {
    if (sn.value !== '' && mac.value !== '') {
        console.log('ok');
        changePortal(select.value, sn.value, mac.value);
    } else {
        console.log('не ok');
    }
}
