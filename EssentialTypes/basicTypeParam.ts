function add(a: number, b: number) {
    return a + b;
}
//add("something", 2);//Argument of type 'string' is not assignable to parameter of type 'number'.

const result = add(1, 2);// const result: number