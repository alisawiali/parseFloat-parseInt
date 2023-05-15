console.clear();

type A = {
  one: string;
  tow: number;
  three: boolean;
};
type B = A & {
  four: string;
};

type C = {
  five: string;
};

type mix = A & C;
function result(sum: mix) {
  console.log(`${sum.one} ${sum.tow} ${sum?.three} ${sum.five}`);
}
result({ one: "imad", tow: 2, three: true, five: "Ali" });
