let sn = document.querySelector('#SN');
let mac = document.querySelector('#MAC');
let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

btn.addEventListener('click', getValue);

async function changePortal(value, sn, mac) {
    if (
        value === 'vivat.tv' ||
        value === 'vivat.live.old' ||
        value === 'vivat.live.new' ||
        value === 'hmara.tv'
    ) {
        try {
            let response = await fetch(
                `http://portal2.vivat-tv.com/portal/adm/vlad/switch_portals.php?portal=${value}&mac=${mac}&sn=${sn}`,
                { mode: 'cors' }
            );

            if (response.ok) {
                let text = await response.text();
                result.innerHTML = text;
            }
        } catch (err) {
            alert(err);
        }
    }
}

function getValue() {
    if (sn.value !== '' && mac.value !== '') {
        changePortal(select.value, sn.value, mac.value);
    } else {
        alert('Нужно указать SN и MAC');
    }
}
