/**
 * 等分一个圆
 * @param {number} radius
 * @param {number} n
 * @param {Object{}} point
 * @param {number} targetRadius
 * @return {number[]}
 */

const bisection = function (radius, n, point, targetRadius) {
    const oneRadius = Math.PI / 180;
    let radiusArr = [];
    const degree = 360 / n;

    for (let i = 1; i <= n; i++) {
        const cos = Math.cos(oneRadius * degree * i);
        const sin = Math.sin(oneRadius * degree * i);
        const x = cos * radius;
        const y = sin * radius;
        let xFlag = 0;
        let yFlag = 0;
        if (x > 0) {
            xFlag = -1;
        } else {
            xFlag = 1;
        }

        if (y > 0) {
            yFlag = -1;
        } else {
            yFlag = 1;
        }


        radiusArr.push({
            degree: degree * i,
            xCos: cos,
            ySin: sin,
            point: {x: x, y: y},
            cutPoint: {
                x: x + xFlag * targetRadius,
                y: y + yFlag * targetRadius,
            },
            newPoint: {
                x: cos * radius + point.x,
                y: sin * radius + point.y,
            },

        });
    }
    return radiusArr;
}


//  tips:
//  正则分组 $1, $2, $3 ....
//  关键点正则表达式里的 () 起到分组的功用
console.log(bisection(100, 12, {x: 200, y: 200}, 10));