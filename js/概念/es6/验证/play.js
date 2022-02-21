const aa = {
  asd: 4,
  valueOf() {
    return this.asd;
  }
}

console.log(aa == 4, aa);
