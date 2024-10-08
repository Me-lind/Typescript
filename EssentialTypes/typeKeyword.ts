type RectangleDim = {
    width:number;
    height:number;
}
const getRectangleArea = (rectangle: RectangleDim) => {
    return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: RectangleDim) => {
    return 2 * (rectangle.width + rectangle.height);
};