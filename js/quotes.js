const quotes = [
    {
        quote:"Life isn't about finding yourself. Life is about creating yourself.",
        author:"George Bernard Shaw"
    },
    {
        quote:"I never dreamed about success, I worked for it.",
        author:"Estee Lauder"
    },
    {
        quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author:"Albert Einstein"
    },
    {
        quote:"Do not try be original, just try to be good.",
        author:"Paul Rand"
    },
    {
        quote:"Life is either a great adventure or nothing.",
        author:"Helen Keller"
    },
    {
        quote:"Do not be afraid go give up the good to go gor the great.",
        author:"John D. Rockefeller"
    },
    {
        quote:"Some people dream of success, while other people get up every morning and make it happen.",
        author:"Wayne Huizenga"
    },
    {
        quote:"The only thing worse than starting something and failing... is not starting something.",
        author:"Seth Godin"
    },
    {
        quote:"You still have enough time to make your dream come true.",
        author:"Peter Pan"
    },
    {
        quote:"There is no one who can't fall. However, only those who get up again, will learn how to move forward.",
        author:"Bambi"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;