const quotes = [
  {
    quote: "Nothing in life is to be feared. It is only to be understood",
    author: "Marie Quire",
  },
  {
    quote: "Life is either a daring adventure or nothing",
    author: "Helen Keller",
  },
  {
    quote: "Only in the darkness can you see the stars",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "You define your own life. Don't let other people write your script",
    author: "Oprah Winfrey",
  },
  {
    quote: "Believe you can and you're halfway there",
    author: "Theodore Roosevelt",
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    author: "Mae West",
  },
  {
    quote: "Art washes away from the soul the dust of everyday life",
    author: "Pablo Picasso",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not",
    author: "Andre Gide, Autumn Leaves",
  },
  {
    quote: "One must have chaos in oneself to give birth to a dancing star",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "When you have a dream, you've got to grab it and never let go",
    author: "Carol Burnett",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function paintQuote() {
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

window.addEventListener("load", paintQuote);
