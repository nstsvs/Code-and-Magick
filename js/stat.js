'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 30;
var CLOUD_GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var PADDING = 10;
var FONT_STYLE = '16px PT Mono';
var TEXT_WIN = 'Ура вы победили!';
var TEXT_RESULT = 'Список результатов:';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderResultMessage = function (ctx) {
  ctx.font = FONT_STYLE;
  ctx.fillStyle = '#000';
  ctx.fillText(TEXT_WIN, CLOUD_X + PADDING * 2.5, CLOUD_Y + PADDING * 3);
  ctx.fillText(TEXT_RESULT, CLOUD_X + PADDING * 2.5, CLOUD_Y + PADDING * 5);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderResultMessage(ctx);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    var gapY = CLOUD_X + GAP + (GAP * 2 + BAR_WIDTH) * i;
    var randomNumber = Math.floor(Math.random() * 100);

    ctx.fillText(players[i], gapY, CLOUD_HEIGHT - PADDING);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + randomNumber + '%, 50%)';
    }

    var playerBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillRect(gapY, GAP * 3 + BAR_HEIGHT - playerBarHeight, BAR_WIDTH, playerBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), gapY, GAP * 2.8 + BAR_HEIGHT - playerBarHeight);
  }
};
