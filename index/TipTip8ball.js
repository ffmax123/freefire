// setWindowDrag(0, 0, 500, 500);
// height / width table = 0.55
// scale table = 1.05625
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d", {
alpha: false,
desynchronized: false,
});
var tableOnScreen = {
width: 1560 ,
height: 836 
};
// canvas.style.position = 'absolute';
// var scale = 127/53;
var scale = 1.14;
var scaleTableWidth = 1.05625;
var scaleTableHeight = 0.9575;
var scaleTable = 1;
var devicePixelRatio = window.devicePixelRatio;
if (Math.abs(window.orientation) == 90) {
setWindowRect(0, 0, window.screen.height, window.screen.width);
} else {
setWindowRect(0, 0, window.screen.width, window.screen.height);
}
setButtonImage(src = "https://tiptipios.github.io/ios/IMG_6318.png")

var drawScreen, lockerBall;

window.onload = function() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var sizeInput = document.getElementById('size');
var sizeValue = document.getElementById('sizeValue');
var startButton = document.getElementById('startButton');

// Hàm để cập nhật kích thước canvas
function updateCanvasSize(scaleFactor) {
var tableOnScreen = {
width: 1560 * 1.05625 * scaleFactor,
height: 836 *  0.9575  * scaleFactor
};

canvas.width = tableOnScreen.width;
canvas.height = tableOnScreen.height;
ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas sau khi thay đổi kích thước
}

// Cập nhật kích thước theo giá trị slider
sizeInput.addEventListener('input', function() {
var scaleFactor = parseFloat(sizeInput.value);
sizeValue.textContent = scaleFactor;
updateCanvasSize(scaleFactor);
});

// Xử lý nút Bắt đầu
startButton.addEventListener('click', function() {
var scaleFactor = parseFloat(sizeInput.value);
updateCanvasSize(scaleFactor);

// Thực hiện vẽ trên canvas
startDraw(); // Gọi hàm để vẽ đường trên canvas
});

// Hàm vẽ đường (cập nhật với các đường vẽ của bạn)
function startDraw() {
    var addr = findAddr();
    if (addr) {
        var whiteLine = findWhite(addr);
        var whiteLineVal = {
            x_start_val: 0,
            y_start_val: 0,
            x_end_val: 0,
            y_end_val: 0
        };

        var ballLine = findBall(addr);
        var ballLineVal = {
            x_start_val: 0,
            y_start_val: 0,
            x_end_val: 0,
            y_end_val: 0
        };

        var table = findTable(addr);

        var scaleFactor = parseFloat(sizeInput.value); // Sử dụng giá trị từ slider
        var tableOnScreen = {
            width: 1560 * 1.05625 * scaleFactor * (1 + parseFloat(document.getElementById("scale").value) / 100),
            height: 836 * 0.9575 * scaleFactor * (1 + parseFloat(document.getElementById("scale").value) / 100) 
        };

        if (Math.abs(window.orientation) == 90) {
            setWindowRect((window.screen.height - tableOnScreen.width / devicePixelRatio) / 2, (table.y_max - 6) / 3 * (1 + parseFloat(document.getElementById("scaletop").value) / 100), tableOnScreen.width / devicePixelRatio, tableOnScreen.height / devicePixelRatio);
            canvas.width = tableOnScreen.width / devicePixelRatio;
            canvas.height = tableOnScreen.height / devicePixelRatio;
        } else {
            setWindowRect((window.screen.width - tableOnScreen.width / devicePixelRatio) / 2, (table.y_max - 6) / 3 * (1 + parseFloat(document.getElementById("scaletop").value) / 100), tableOnScreen.width / devicePixelRatio, tableOnScreen.height / devicePixelRatio);
        }

        drawScreen = setInterval(function () {
            var check = readF64(addr);
            if (check > 1) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // -----------------------line 1----------------------- //
                whiteLineVal.x_start_val = readF64(whiteLine.x_start);
                whiteLineVal.y_start_val = readF64(whiteLine.y_start);
                whiteLineVal.x_end_val = readF64(whiteLine.x_end);
                whiteLineVal.y_end_val = readF64(whiteLine.y_end);

                var whiteLineValEnd = calculateValEnd(whiteLineVal, table);

                // real line
                h5gg.setValue(whiteLine.x_end, whiteLineValEnd.x, "F64");
                h5gg.setValue(whiteLine.y_end, whiteLineValEnd.y, "F64");

                var whiteLineValScreen = pointToScreen2D(whiteLineVal, table);
                drawLine(ctx, whiteLineValScreen.x_start, whiteLineValScreen.y_start, whiteLineValScreen.x_end, whiteLineValScreen.y_end, "white", 2);

                // Draw circle at the end of the white line
                drawCircle(ctx, whiteLineValScreen.x_end, whiteLineValScreen.y_end, 4, "white");

                var lineTable = getLineTable(whiteLineVal, table);
                var angle = 0;
                if (lineTable.y_end == table.y_max && lineTable.x_end == table.x_max) {
                    angle = (Math.PI / 2 + calculateAngleBetween2Lines(whiteLineValScreen, lineTable)) * 2;
                } else {
                    angle = (Math.PI / 2 - calculateAngleBetween2Lines(whiteLineValScreen, lineTable)) * 2;
                }

                whiteLineValScreen = rotatePoint(whiteLineValScreen, angle);
                drawLine(ctx, whiteLineValScreen.x_start, whiteLineValScreen.y_start, whiteLineValScreen.x_end, whiteLineValScreen.y_end, "white", 2);

                // Draw circle at the end of the rotated white line
                drawCircle(ctx, whiteLineValScreen.x_end, whiteLineValScreen.y_end, 4, "white");

                // -----------------------line 2----------------------- //
                ballLineVal.x_start_val = readF64(ballLine.x_start);
                ballLineVal.y_start_val = readF64(ballLine.y_start);
                ballLineVal.x_end_val = readF64(ballLine.x_end);
                ballLineVal.y_end_val = readF64(ballLine.y_end);

                var ballValEnd = calculateValEnd(ballLineVal, table);

                // real line
                h5gg.setValue(ballLine.x_end, ballValEnd.x, "F64");
                h5gg.setValue(ballLine.y_end, ballValEnd.y, "F64");

                var ballValScreen = pointToScreen2D(ballLineVal, table);
                drawLine(ctx, ballValScreen.x_start, ballValScreen.y_start, ballValScreen.x_end, ballValScreen.y_end, "white", 2);

                // Draw circle at the end of the ball line
                drawCircle(ctx, ballValScreen.x_end, ballValScreen.y_end, 4, "white");

                var ballLineTable = getLineTable(ballLineVal, table);
                var angle = 0;
                if (ballLineTable.y_end == table.y_max && ballLineTable.x_end == table.x_max) {
                    angle = (Math.PI / 2 + calculateAngleBetween2Lines(ballValScreen, ballLineTable)) * 2;
                } else {
                    angle = (Math.PI / 2 - calculateAngleBetween2Lines(ballValScreen, ballLineTable)) * 2;
                }

                ballValScreen = rotatePoint(ballValScreen, angle);
                drawLine(ctx, ballValScreen.x_start, ballValScreen.y_start, ballValScreen.x_end, ballValScreen.y_end, "white", 2);

                // Draw circle at the end of the rotated ball line
                drawCircle(ctx, ballValScreen.x_end, ballValScreen.y_end, 4, "white");
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                addr = findAddr();
                whiteLine = findWhite(addr);
                ballLine = findBall(addr);
            }
        }, 10);
    }
}

function drawCircle(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}
// Cập nhật kích thước canvas ban đầu
updateCanvasSize(parseFloat(sizeInput.value));
};

function endDraw() {
clearInterval(drawScreen);
ctx.clearRect(0,
0,
canvas.width,
canvas.height);
};

function hide() {
document.getElementById("H5AlertView").style.display = "none";
};

function readF64(addr) {
return Number(h5gg.getValue(Number(addr), "F64"));
}

function getLineTable(line, table) {
var lineTable = {
x_start: 0,
y_start: 0,
x_end: 0,
y_end: 0
};
var intersection = calculateValEnd(line,
table);
if (intersection.x == table.x_min) {
// left
lineTable.x_start = table.x_min;
lineTable.y_start = table.y_min;
lineTable.x_end = table.x_min;
lineTable.y_end = table.y_max;
} else if (intersection.x == table.x_max) {
// right
lineTable.x_start = table.x_max;
lineTable.y_start = table.y_min;
lineTable.x_end = table.x_max;
lineTable.y_end = table.y_max;
} else if (intersection.y == table.y_min) {
// bottom
lineTable.x_start = table.x_min;
lineTable.y_start = table.y_min;
lineTable.x_end = table.x_max;
lineTable.y_end = table.y_min;
} else if (intersection.y == table.y_max) {
// top
lineTable.x_start = table.x_min;
lineTable.y_start = table.y_max;
lineTable.x_end = table.x_max;
lineTable.y_end = table.y_max;
}
return lineTable;
}

function calculateValEnd(lineVal, table) {
var whiteValEnd;

if (lineVal.x_start_val < lineVal.x_end_val && lineVal.y_start_val < lineVal.y_end_val) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_min, table.y_max, table.x_max, table.y_max); //top
if (whiteValEnd.x > table.x_max) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_max, table.y_min, table.x_max, table.y_max); //right
}
} else if (lineVal.x_start_val < lineVal.x_end_val && lineVal.y_start_val > lineVal.y_end_val) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_min, table.y_min, table.x_max, table.y_min); //bottom
if (whiteValEnd.x > table.x_max) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_max, table.y_max, table.x_max, table.y_min); //right
}
} else if (lineVal.x_start_val > lineVal.x_end_val && lineVal.y_start_val > lineVal.y_end_val) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_max, table.y_min, table.x_min, table.y_min); //bottom
if (whiteValEnd.x < table.x_min) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_min, table.y_max, table.x_min, table.y_min); //left
}
} else if (lineVal.x_start_val > lineVal.x_end_val && lineVal.y_start_val < lineVal.y_end_val) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_max, table.y_max, table.x_min, table.y_max); //top
if (whiteValEnd.x < table.x_min) {
whiteValEnd = lineIntersection(lineVal.x_start_val, lineVal.y_start_val, lineVal.x_end_val, lineVal.y_end_val, table.x_min, table.y_min, table.x_min, table.y_max); //left
}
} else if (lineVal.x_start_val == lineVal.x_end_val) {
whiteValEnd = {
x: lineVal.x_start_val,
y: table.y_max
};
if (lineVal.y_start_val > lineVal.y_end_val) {
whiteValEnd.y = table.y_min;
}
} else if (lineVal.y_start_val == lineVal.y_end_val) {
whiteValEnd = {
x: table.x_max,
y: lineVal.y_start_val
};
if (lineVal.x_start_val > lineVal.x_end_val) {
whiteValEnd.y = table.y_min;
}
}

return whiteValEnd;
};

function lineIntersection(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
var denominator,
a,
b,
numerator1,
numerator2,
result = {
x: null,
y: null
};
denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
if (denominator == 0) {
return result;
}
a = line1StartY - line2StartY;
b = line1StartX - line2StartX;
numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
a = numerator1 / denominator;
b = numerator2 / denominator;

result.x = line1StartX + (a * (line1EndX - line1StartX));
result.y = line1StartY + (a * (line1EndY - line1StartY));

return result;
};

function calculateAngleBetween2Lines(line, lineTable) {
var dAx = line.x_end - line.x_start;
var dAy = line.y_end - line.y_start;
var dBx = lineTable.x_end - lineTable.x_start;
var dBy = lineTable.y_end - lineTable.y_start;
var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
if (angle < 0) {
angle = angle * -1;
}
return angle;
}


function rotatePoint(point, angle) {
var rotatedX = point.x_end + (point.x_start - point.x_end) * Math.cos(angle) - (point.y_start - point.y_end) * Math.sin(angle);
var rotatedY = point.y_end + (point.x_start - point.x_end) * Math.sin(angle) + (point.y_start - point.y_end) * Math.cos(angle);

var end = calculateValEnd({
x_start_val: point.x_end, y_start_val: point.y_end, x_end_val: rotatedX, y_end_val: rotatedY
}, {
x_min: 0, y_min: 0, x_max: canvas.width, y_max: canvas.height
});

return {
x_start: point.x_end,
y_start: point.y_end,
x_end: end.x,
y_end: end.y
};
}


function drawLine(ctx, startX, startY, endX, endY, color, lineWidth) {
var prevStrokeStyle = ctx.strokeStyle;
var prevLineWidth = ctx.lineWidth;

ctx.strokeStyle = color || 'black';
ctx.lineWidth = lineWidth || 1;

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(endX, endY);
ctx.stroke();

ctx.strokeStyle = prevStrokeStyle;
ctx.lineWidth = prevLineWidth;
};

function pointToScreen2D(point, table) {
var widthTable = table.x_max - table.x_min;
var heightTable = table.y_max - table.y_min;
return {
x_start: (point.x_start_val - table.x_min) * canvas.width / widthTable,
y_start: (point.y_start_val - table.y_min) * canvas.height / heightTable * -1 + canvas.height,
x_end: (point.x_end_val - table.x_min) * canvas.width / widthTable,
y_end: (point.y_end_val - table.y_min) * canvas.height / heightTable * -1 + canvas.height
};
};

function findAddr() {
h5gg.clearResults();
h5gg.searchNumber('4615740327696932851', 'I64', '0x000000000', '0x160000000');
h5gg.searchNearby('4618963610245237243', 'I64', '0x8');
results = h5gg.getResults(2);
if (results[0].value == 4615740327696932851) {
return results[0].address;
} else if (results[1].value == 4615740327696932851) {
return results[1].address;
} else {
return 0;
}
};

function findWhite(addr) {
return {
x_start: Number(addr) + 8 * 14,
y_start: Number(addr) + 8 * 14 + 8,
x_end: Number(addr) + 8 * 14 + 8 + 8,
y_end: Number(addr) + 8 * 14 + 8 + 8 + 8
};
};

function findBall(addr) {
return {
x_start: Number(addr) + 8 * 14 + 8 + 8 + 8 + 8,
y_start: Number(addr) + 8 * 14 + 8 + 8 + 8 + 8 + 8,
x_end: Number(addr) + 8 * 14 + 8 + 8 + 8 + 8 + 8 + 8,
y_end: Number(addr) + 8 * 14 + 8 + 8 + 8 + 8 + 8 + 8 + 8
};
}

function findTable(addr) {
return {
x_min: readF64(Number(addr) + 8) - 106,
y_min: 30,
x_max: readF64(Number(addr) + 8) - 106 + 430,
y_max: 242
}
}