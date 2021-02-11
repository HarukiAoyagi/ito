const init = () => {
    const value = window.location.search.slice(7);

    let object;
    try {
        object = JSON.parse(decryptMessage(value));
    } catch {
        location.href = location.origin;
    }

    document.getElementById('thema').innerHTML = object.number;
}

const decryptMessage = (encryptedMessage) => CryptoJS.AES.decrypt(encryptedMessage, 'secretkey').toString(CryptoJS.enc.Utf8);

window.onload = init;