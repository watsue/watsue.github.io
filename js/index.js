const initFullPage = () => {
  $("#fullPage").fullpage({
    navigator: true,
    autoScrolling: true,
    navigation: true,
    horizontalBar: true,
    navigationPosition: "left",
  });
};

$(document).ready(() => {
  initFullPage();
});
