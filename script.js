'use strict';
// Get buttons and inputs fields
const previewBtn = document.querySelector('.btn-preview');
const copyBtn = document.querySelector('.btn-copy');
const resetBtn = document.querySelector('.btn-reset');
const makeCircle = document.querySelector('.btn-circle');
let inputTL = document.querySelector('.input-top-left');
let inputTR = document.querySelector('.input-top-right');
let inputBL = document.querySelector('.input-bottom-left');
let inputBR = document.querySelector('.input-bottom-right');
let previewText = document.getElementById('infoPreviewer');
let containerBox = document.querySelector('.container');
let copyText = document.getElementById('infoPreviewer');

// Check that the user gives valid values and until 100
const checkInputUser = (bottomLeft, bottomRight, topLeft, topRight) => {
    bottomLeft = inputBL.value;
    bottomRight = inputBR.value;
    topLeft = inputTL.value;
    topRight = inputTR.value;

    Number(topLeft) > 120 ||
    Number(topLeft) < 0 ||
    Number(topRight) > 120 ||
    Number(topRight) < 0 ||
    Number(bottomLeft) > 120 ||
    Number(bottomLeft) < 0 ||
    Number(bottomRight) > 120 ||
    Number(bottomRight) < 0
        ? (previewText.value = 'Please try again, invalid input!')
        : previewBorders(bottomLeft, bottomRight, topLeft, topRight);
};

// Edit borders by submitting values
const previewBorders = (bottomLeft, bottomRight, topLeft, topRight) => {
    if (topLeft && !topRight && !bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        previewText.value = `border-left-top-radius: ${topLeft}px`;
    } else if (!topLeft && topRight && !bottomRight && !bottomLeft) {
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        previewText.value = `border-top-right-radius: ${topRight}px`;
    } else if (!topLeft && !topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        previewText.value = `border-bottom-right-radius: ${bottomRight}px`;
    } else if (!topLeft && !topRight && !bottomRight && bottomLeft) {
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        previewText.value = `border-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && topRight && bottomRight && bottomLeft) {
        if (
            topLeft === topRight &&
            topLeft === bottomLeft &&
            topLeft === bottomRight
        ) {
            containerBox.style.borderRadius = `${topLeft}px`;
            previewText.value = `border-radius: ${topLeft}px`;
        } else if (topLeft === bottomRight && topRight === bottomLeft) {
            containerBox.style.borderRadius = `${topLeft}px ${topRight}px`;
            previewText.value = `border-radius: ${topLeft}px ${topRight}px`;
        } else if (topRight === bottomLeft) {
            containerBox.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px`;
            previewText.value = `border-radius: ${topLeft}px ${topRight}px`;
        } else {
            containerBox.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
            previewText.value = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
        }
    } else if (!topLeft && topRight && bottomRight && bottomLeft) {
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        previewText.value = `border-top-right-radius: ${topRight}px \nborder-bottom-right-radius: ${bottomRight}px \nborder-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && !topRight && bottomRight && bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        previewText.value = `border-top-left-radius: ${topLeft}px \nborder-bottom-right-radius: ${bottomRight}px \nborder-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && topRight && !bottomRight && topLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        previewText.value = `border-top-left-radius: ${topLeft}px \nborder-top-right-radius: ${topRight}px \nborder-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        previewText.value = `border-top-left-radius: ${topLeft}px \nborder-top-right-radius: ${topRight}px \nborder-bottom-right-radius: ${bottomRight}px`;
    } else if (!topLeft && topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        previewText.value = `border-top-right-radius: ${topRight}px \nborder-bottom-right-radius: ${bottomRight}px`;
    } else if (topLeft && !topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        previewText.value = `border-top-left-radius:${topLeft}px \nborder-radius-bottom-right:${bottomRight}px`;
    } else if (topLeft && topRight && !bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        previewText.value = `border-top-left-radius: ${topLeft}px \nborder-radius-top-radius: ${topRight}px`;
    } else if (topLeft && !topRight && !bottomRight && bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        previewText.value = `border-top-left-radius: ${topLeft}px \nborder-radius-bottom-left: ${bottomLeft}px`;
    } else {
        previewText.value = 'Please enter values to preview!';
    }
};

// Copy text to clipboard
const copyToClipboard = () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    previewText.value = 'Copied!';
};

//Buttons Functinality
previewBtn.addEventListener('click', () => {
    checkInputUser(inputTL, inputTR, inputBL, inputBR);
});

//Reset button
resetBtn.addEventListener('click', () => {
    inputBL.value = '';
    inputBR.value = '';
    inputTL.value = '';
    inputTR.value = '';
    containerBox.style.borderRadius = '0px';
    previewText.value = '';
});

//CopyButton
copyBtn.addEventListener('click', copyToClipboard);

//Make a circle
makeCircle.addEventListener('click', () => {
    containerBox.style.borderRadius = `100%`;
    previewText.value = `border-radius: 100%`;
});
