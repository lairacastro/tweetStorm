export function tweetStorm(text: string): string[] { 
  const maxTweetLength = 140;
  const pageIndicatorLength = 7;
  const tweetLength = maxTweetLength - pageIndicatorLength
 
  let pages: string[] = [];
  let atualPage = 1;

  while (text.length > 0) {
    let tweet = text.slice(0, tweetLength);
    text = text.slice(tweet.length); 
    
    // Verifica se a última palavra está sendo cortada
    if (text.length > 0 && text[0] !== ' ' && tweet[tweet.length - 1] !== ' ') {
      const lastSpaceIndex = tweet.lastIndexOf(' ');
      if (lastSpaceIndex !== -1) {
        text = tweet.slice(lastSpaceIndex + 1) + text;
        tweet = tweet.slice(0, lastSpaceIndex);
      }
    }

    pages.push(tweet);
    atualPage++; 
  }
  
  const totalPages = pages.length;
  return pages.map((page, index) => `${index + 1}/${totalPages} ${page}`);
}

// Testes
const testText =
"Twitter é uma rede social bem conhecida e usada, ficou famosa por limitar o tamanho dos posts dos usuários.Hoje é possível escrever posts maiores, mas inicialmente todos os usuários possuíam a limitação de 140 caracteres.";

const result = tweetStorm(testText);
console.log(result);
