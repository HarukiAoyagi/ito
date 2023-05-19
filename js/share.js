const init = () => {
    const memberNameList = localStorage.getItem('strage_ito').split('\n');

    const thema = shuffle(themaList);

    const numberList = shuffle([...Array(100)].map((_, index) => index + 1));

    const memberList = [...Array(memberNameList.length)].map((_, index) => ({ name : memberNameList[index], number : numberList[index] }));

    const title = `■お題候補\n1.${thema[0]}\n2.${thema[1]}\n3.${thema[2]}\n4.${thema[3]}\n\n`

    const body = memberList.map(v => `${v.name}\n${location.origin}/role.html?value=${encryptMessage(JSON.stringify(v))}\n\n`).join('');

    const message = title + body;

    document.getElementById('links').innerHTML = message.replace(/\n/g, '<br>');

    document.getElementById('copy').onclick = () => navigator.clipboard.writeText(message);

    document.getElementById('line').href = `http://line.me/R/msg/text/?${encodeURIComponent(message)}`;

    console.log(memberList);
}

const encryptMessage = (messageToencrypt) => CryptoJS.AES.encrypt(messageToencrypt, 'secretkey').toString();

const getThema = () => themaList[Math.floor(Math.random() * themaList.length)];

const shuffle = (list) => {
    for (i = list.length; 1 < i; i--) {
        k = Math.floor(Math.random() * i);
        [list[k], list[i - 1]] = [list[i - 1], list[k]];
    }
    return list;
}

window.onload = init;

const themaList = [
    'コンビニの商品の人気',
    '100円ショップの商品の人気',
    '小学生が好きな言葉',
    '中高生が好きな言葉',
    '強そうな言葉（漢字、熟語など）',
    '強そうな効果音（創作OK）',
    'アプリ・ウェブサービスの人気',
    '乗り物の人気',
    '便利なもの',
    '子供に人気なもの',
    'テンションが上がるもの・こと',
    'かばんに入っていたら嬉しいもの',
    '人生で体制なもの・こと',
    '言われて嬉しい言葉',
    'カッコいい名字・名前（ありそうならOK）',
    'カッコいいセリフ',
    '学校にあるものの大きさ',
    '一人暮らしに必要なもの',
    '雪山で遭難したときに持っていたいもの',
    '地球観光に来た宇宙人にあげたいお土産',
    'ボードゲームの人気',
    'ボードゲームの（物理的な）重さ',
    '親になってほしいキャラ（アニメ・漫画・ゲーム）',
    'ほしい（手に入れたい）特使能力・武器（必殺技・道具）',
    '映画の登場人物の人気',
    'アスリートの人気',
    '映画の人気',
    'ミュージシャンの人気',
    '映画の登場人物の強さ',
    'キャラクターの人気（ゆるキャラ含む）',
    '歴史上の人物の強さ',
    'なりたい歴史上の人物',
    '童話の人気',
    '歌・曲の人気',
    '食べ物の人気',
    '飲み物の人気',
    'アニメ・漫画の人気',
    'ゲームの人気',
    'アニメ・漫画のキャラの人気',
    'ゲームキャラの人気',
    '有名人の人気（芸能人・芸人・選手など）',
    '有名人の年収・資産（芸能人・芸人・選手など）',
    '俳優の人気（男女問わず）',
    '悪役の人気（実在・非実在を問わず）',
    '歴史上の人物の人気',
    '声優の人気',
    'なりたい有名人（芸能人・芸人・選手など）',
    '結婚したい有名人（芸能人・芸人・選手など）',
    '美しいもの',
    '怖いもの',
    'カッコいいもの',
    'かわいいもの',
    'やわらかそうなもの',
    '重そうなもの',
    '楽しいこと',
    '嬉しいこと',
    'おもちゃの人気',
    '電化製品の人気',
    '建物の人気（店・施設・建造物）',
    '住みたい国や場所の人気',
    'アニメ。漫画のキャラの強さ',
    'ゲームキャラの強さ（モンスター含む）',
    '中華料理の人気',
    '学校給食の人気',
    '和食料理の人気',
    '洋食料理の人気',
    'おにぎりの具の人気',
    'パンの種類の人気',
    'なりたい生き物',
    '生き物の大きさ',
    'プレゼント・お土産の人気',
    'ペットの人気',
    '飲食店の人気',
    '駅の人気',
    '生き物の人気',
    '生き物の強さ',
    'お菓子・スイーツ・アイスの人気',
    '食べ物のカロリー','職業の人気',
    '資格・免許の人気',
    '趣味の人気',
    'メーカー（ブランド）の人気',
    '旅行したい国や場所の人気',
    '旅行先に持っていきたいもの',
    'ゾンビと戦うときに持っていきたいもの',
    '無人島にもっていきたいもの',
    'なりたいキャラ',
    '結婚したいキャラ（アニメ・漫画・ゲーム）',
    'スポーツの人気',
    'テレビ番組の人気（ドラマ含む）'
]