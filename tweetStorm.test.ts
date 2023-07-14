import { tweetStorm } from './tweetStorm';

//TESTE 1
test('Teste da função tweetStorm', () => {
  const testText =
    "Pagination is a feature in Twitter API v2 endpoints that return more results than can be returned in a single response. When that happens, the data is returned in a series of 'pages'. Pagination refers to methods for programatically requesting all of the pages, in order to retrieve the entire result data set. Not all API endpoints support or require pagination, but it is often used when result sets are large.";
  const result = tweetStorm(testText);
  expect(result).toEqual([
       "1/4 Pagination is a feature in Twitter API v2 endpoints that return more results than can be returned in a single response. When that",
       "2/4 happens, the data is returned in a series of 'pages'. Pagination refers to methods for programatically requesting all of the pages,",
       "3/4 in order to retrieve the entire result data set. Not all API endpoints support or require pagination, but it is often used when",
       "4/4 result sets are large.",
  ]);
});

//TESTE 2
test('Teste da função tweetStorm', () => {
  const testText = "Z";
  const result = tweetStorm(testText);
  expect(result).toEqual(["1/1 Z"]);
});

//TESTE 3
test('Teste da função tweeStomr', () =>{
  const testText = "Lorem ipsum dolor sit amet. Et voluptatum magnam est fugiat tenetur et voluptas provident qui fuga tempore id possimus laborum et saepe sequi ut consequatur officia. Eum modi consequatur ex dolorum beatae sit quia molestiae eum impedit dolorum et eaque mollitia sed voluptate quam vel fugit velit. Vel accusamus molestiae vel magni consectetur et error amet eum velit Quis. Ea accusamus deleniti sit veniam voluptas sed commodi voluptatibus et quia deleniti qui temporibus omnis. Et repellendus architecto ex amet autem et distinctio quia hic autem rerum ea ipsam porro qui corrupti eius. Est delectus iure est distinctio dolore ut omnis maxime. Qui reprehenderit sint non expedita rerum et quia tenetur est perferendis quidem eum adipisci dolores. Qui inventore sapiente non facilis ipsum ut velit iste est maxime aliquam. Ad rerum magni sit nisi incidunt et fugit odio aut eligendi molestiae sit voluptas molestias sit voluptatibus omnis. Ab galisum consequuntur ut molestias cupiditate qui harum illo 33 obcaecati enim quo optio quidem?.Lorem ipsum dolor sit amet. Et voluptatum magnam est fugiat tenetur et voluptas provident qui fuga tempore id possimus laborum et saepe sequi ut consequatur officia. Eum modi consequatur ex dolorum beatae sit quia molestiae eum impedit dolorum et eaque mollitia sed voluptate quam vel fugit velit. Vel accusamus molestiae vel magni consectetur et error amet eum velit Quis. Ea accusamus deleniti sit veniam voluptas sed commodi voluptatibus et quia deleniti qui temporibus omnis. Et repellendus architecto ex amet autem et distinctio quia hic autem rerum ea ipsam porro qui corrupti eius. Est delectus iure est distinctio dolore ut omnis maxime. Qui reprehenderit sint non expedita rerum et quia tenetur est perferendis quidem eum adipisci dolores. Qui inventore sapiente non facilis ipsum ut velit iste est maxime aliquam. Ad rerum magni sit nisi incidunt et fugit odio aut eligendi molestiae sit voluptas molestias sit voluptatibus omnis. Ab galisum consequuntur ut molestias cupiditate qui harum illo 33 obcaecati enim quo optio quidem?."
  const result = tweetStorm(testText);
  expect(result).toEqual([
       "1/16 Lorem ipsum dolor sit amet. Et voluptatum magnam est fugiat tenetur et voluptas provident qui fuga tempore id possimus laborum et",
       "2/16 saepe sequi ut consequatur officia. Eum modi consequatur ex dolorum beatae sit quia molestiae eum impedit dolorum et eaque mollitia",
       "3/16 sed voluptate quam vel fugit velit. Vel accusamus molestiae vel magni consectetur et error amet eum velit Quis. Ea accusamus deleniti",
       "4/16  sit veniam voluptas sed commodi voluptatibus et quia deleniti qui temporibus omnis. Et repellendus architecto ex amet autem et",
       "5/16 distinctio quia hic autem rerum ea ipsam porro qui corrupti eius. Est delectus iure est distinctio dolore ut omnis maxime. Qui",
       "6/16 reprehenderit sint non expedita rerum et quia tenetur est perferendis quidem eum adipisci dolores. Qui inventore sapiente non facilis",
       "7/16  ipsum ut velit iste est maxime aliquam. Ad rerum magni sit nisi incidunt et fugit odio aut eligendi molestiae sit voluptas molestias",
       "8/16  sit voluptatibus omnis. Ab galisum consequuntur ut molestias cupiditate qui harum illo 33 obcaecati enim quo optio quidem?.Lorem",
       "9/16 ipsum dolor sit amet. Et voluptatum magnam est fugiat tenetur et voluptas provident qui fuga tempore id possimus laborum et saepe",
       "10/16 sequi ut consequatur officia. Eum modi consequatur ex dolorum beatae sit quia molestiae eum impedit dolorum et eaque mollitia sed",
       "11/16 voluptate quam vel fugit velit. Vel accusamus molestiae vel magni consectetur et error amet eum velit Quis. Ea accusamus deleniti sit",
       "12/16  veniam voluptas sed commodi voluptatibus et quia deleniti qui temporibus omnis. Et repellendus architecto ex amet autem et",
       "13/16 distinctio quia hic autem rerum ea ipsam porro qui corrupti eius. Est delectus iure est distinctio dolore ut omnis maxime. Qui",
       "14/16 reprehenderit sint non expedita rerum et quia tenetur est perferendis quidem eum adipisci dolores. Qui inventore sapiente non facilis",
       "15/16  ipsum ut velit iste est maxime aliquam. Ad rerum magni sit nisi incidunt et fugit odio aut eligendi molestiae sit voluptas molestias",
       "16/16  sit voluptatibus omnis. Ab galisum consequuntur ut molestias cupiditate qui harum illo 33 obcaecati enim quo optio quidem?.",]);
     })

        //TESTE 4
        test('Teste da função tweetStorm', () => {
          const testText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
          const result = tweetStorm(testText);
          expect(result).toEqual(["1/2 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, ",
          "2/2 making it over 2000 years old.",]);
        });

        //TESTE 5

        test('Teste da função tweetStorm', () => {
          const testText = "Twitter é uma rede social bem conhecida e usada, ficou famosa por limitar o tamanho dos posts dos usuários.Hoje é possível escrever posts maiores, mas inicialmente todos os usuários possuíam a limitação de 140 caracteres."
          const result = tweetStorm(testText);
          expect(result).toEqual([
            '1/2 Twitter é uma rede social bem conhecida e usada, ficou famosa por limitar o tamanho dos posts dos usuários.Hoje é possível escrever',
            '2/2 posts maiores, mas inicialmente todos os usuários possuíam a limitação de 140 caracteres.',]);
          

          });