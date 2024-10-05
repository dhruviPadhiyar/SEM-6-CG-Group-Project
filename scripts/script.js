$(document).ready(function() {
    $('#grid-size').on('input', function() {
        $('#grid-size-span').text($(this).val());
        drawGrid(10);
    });

    
});

function drawGrid(rows) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const cellHeight = canvas.height / rows;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i <= rows; i++) {
        ctx.moveTo(0, i * cellHeight);
        ctx.lineTo(canvas.width, i * cellHeight);
    }

    const columns = Math.floor(canvas.width / cellHeight);
    for (let j = 0; j <= columns; j++) {
        ctx.moveTo(j * cellHeight, 0);
        ctx.lineTo(j * cellHeight, canvas.height);
    }

    ctx.strokeStyle = '#000';
    ctx.stroke();
}