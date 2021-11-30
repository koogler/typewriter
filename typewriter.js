const sentence = "hello there from lighthouse labs\n";

let delay = 0;
let msAdd = 50;
for (let i of sentence) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay)
  delay += msAdd
}
