let text = "JS";

text.split("").forEach((_, i) => {
  console.log(text.slice(0, i + 1));
});
