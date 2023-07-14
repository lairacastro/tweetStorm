"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetStorm = void 0;
function tweetStorm(text) {
    var maxTweetLength = 140;
    var pageIndicatorLength = 7;
    var tweetLength = maxTweetLength - pageIndicatorLength;
    var pages = [];
    var atualPage = 1;
    while (text.length > 0) {
        var tweet = text.slice(0, tweetLength);
        text = text.slice(tweet.length);
        pages.push(tweet);
        atualPage++;
    }
    var totalPages = pages.length;
    return pages.map(function (page, index) { return "".concat(index + 1, "/").concat(totalPages, " ").concat(page); });
}
exports.tweetStorm = tweetStorm;
// Testes
var testText = "Lorem ipsum dolor sit amet. Et voluptatum magnam est fugiat tenetur et voluptas provident qui fuga tempore id possimus laborum et saepe sequi ut consequatur officia. Eum modi consequatur ex dolorum beatae sit quia molestiae eum impedit dolorum et eaque mollitia sed voluptate quam vel fugit velit. Vel accusamus molestiae vel magni consectetur et error amet eum velit Quis. Ea accusamus deleniti sit veniam voluptas sed commodi voluptatibus et quia deleniti qui temporibus omnis. Et repellendus architecto ex amet autem et distinctio quia hic autem rerum ea ipsam porro qui corrupti eius. Est delectus iure est distinctio dolore ut omnis maxime. Qui reprehenderit sint non expedita rerum et quia tenetur est perferendis quidem eum adipisci dolores. Qui inventore sapiente non facilis ipsum ut velit iste est maxime aliquam. Ad rerum magni sit nisi incidunt et fugit odio aut eligendi molestiae sit voluptas molestias sit voluptatibus omnis. Ab galisum consequuntur ut molestias cupiditate qui harum illo 33 obcaecati enim quo optio quidem?.";
var result = tweetStorm(testText);
console.log(result);
