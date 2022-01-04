const x = "hello" as unknown as number;

function liveDanger(x?: number | null) {
  console.log(x!.toFixed(2));
}

