const init = () => {
    const memberNameList = localStorage.getItem('strage_ito').split('\n');

    const thema = getThema();

    const numberList = shuffle([...Array(100)].map((_, index) => index + 1));

    const memberList = shuffle([...Array(memberNameList.length)].map((_, index) => ({ name : memberNameList[index], number : numberList[index], thema })));

    const message = memberList.map(v => `${v.name}\n${location.origin}/role.html?value=${encryptMessage(JSON.stringify(v))}\n\n`).join('');

    document.getElementById('links').innerHTML = message.replace(/\n/g, '<br>');

    document.getElementById('copy').onclick = () => navigator.clipboard.writeText(message);

    console.log(memberList);
}

const encryptMessage = (messageToencrypt) => CryptoJS.AES.encrypt(messageToencrypt, 'secretkey').toString();

const themaList = ['']

const getThema = () => themaList[Math.floor(Math.random() * themaList.length)];

const shuffle = (list) => {
    for (i = list.length; 1 < i; i--) {
        k = Math.floor(Math.random() * i);
        [list[k], list[i - 1]] = [list[i - 1], list[k]];
    }
    return list;
}

window.onload = init;