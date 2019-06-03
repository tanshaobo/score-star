let score = parseFloat($(".score-star .score").text());
let intNum = parseInt(score);
let floatNum = score - intNum;
let starLength = $(".star").length;
let starWidth = $(".star").width();
for (i = 0; i < starLength; i++) {
  if (i < intNum) {
    $(".star").eq(i).find("i").css("width", $(".star").width());
  } else if (i === intNum && floatNum > 0) {
    $(".star").eq(i).find("i").css("width", floatNum * $(".star").width());
  } else {
    $(".star").eq(i).find("i").css("width", 0);
  }
}


