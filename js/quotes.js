const quotes = [
    {
        quote: "당신은 죽음이 두렵지 않음을 아는 순간에, 삶의 방법을 알게 된다.", 
        author: "화이트"
    },
    {
        quote: "신은 용기있는 자를 결코 버리지 아니한다.", 
        author: "켄러"
    },
    {
        quote: "단순하게 살아라.", 
        author: "이드리스 샤흐"
    },
    {
        quote: "행복한 삶을 살기 위해 필요한 것은 거의 없다.", 
        author: "마르쿠스 아우렐리우스 안토니우스"
    },
    {
        quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더 많은 것을 잃은 것이며, 용기를 잃은 사람은 모든 것을 잃은 사람이다.", 
        author: "세르반테스"
    },
    {
        quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.", 
        author: "헬렌 켈러"
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.", 
        author: "발타사르 그라시안"
    },
    {
        quote: "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.", 
        author: "나폴레옹"
    },
    {
        quote: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는 방식이다.", 
        author: "알베르트 아인슈타인"
    },
    {
        quote: "사람을 의심하거든 쓰지 말고, 사람을 썼거든 의심하지 말라.", 
        author: "명심보감"
    },
]

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;