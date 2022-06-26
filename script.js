'use strict';
// Get buttons and inputs fields
const previewBtn = document.querySelector('.btn-preview');
const copyBtn = document.querySelector('.btn-copy');
const resetBtn = document.querySelector('.btn-reset');
let inputTL = document.querySelector('.input-top-left');
let inputTR = document.querySelector('.input-top-right');
let inputBL = document.querySelector('.input-bottom-left');
let inputBR = document.querySelector('.input-bottom-right');

// Check that the user gives valid values and until 100
const checkInputUser = (bottomLeft, bottomRight, topLeft, topRight) => {
    bottomLeft = inputBL.value;
    bottomRight = inputBR.value;
    topLeft = inputTL.value;
    topRight = inputTR.value;

    //add error message
    Number(topLeft) > 100 ||
    Number(topRight) > 100 ||
    Number(bottomLeft) > 100 ||
    Number(bottomRight) > 100
        ? alert('Is a lot to take, try less than 100')
        : previewBorders(bottomLeft, bottomRight, topLeft, topRight);

    Number(topLeft) < 0 ||
    Number(topRight) < 0 ||
    Number(bottomLeft) < 0 ||
    Number(bottomRight) < 0
        ? alert('less than 0 is not possible, try again')
        : previewBorders(bottomLeft, bottomRight, topLeft, topRight);
};

// Edit borders by submitting values
const previewBorders = (bottomLeft, bottomRight, topLeft, topRight) => {
    let containerBox = document.querySelector('.container');
    let copyText = document.getElementById('infoPreviewer');

    if (topLeft && !topRight && !bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        copyText.value = `border-left-top-radius: ${topLeft}px`;
    } else if (!topLeft && topRight && !bottomRight && !bottomLeft) {
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        copyText.value = `border-top-right-radius: ${topRight}px`;
    } else if (!topLeft && !topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        copyText.value = `border-bottom-right-radius: ${bottomRight}px`;
    } else if (!topLeft && !topRight && !bottomRight && bottomLeft) {
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        copyText.value = `border-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && topRight && bottomRight && bottomLeft) {
        if (
            topLeft === topRight &&
            topLeft === bottomLeft &&
            topLeft === bottomRight
        ) {
            containerBox.style.borderRadius = `${topLeft}px`;
            copyText.value = `border-radius: ${topLeft}px`;
        } else if (topLeft === bottomRight && topRight === bottomLeft) {
            containerBox.style.borderRadius = `${topLeft}px ${topRight}px`;
            copyText.value = `border-radius: ${topLeft}px ${topRight}px`;
        } else if (topRight === bottomLeft) {
            containerBox.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px`;
            copyText.value = `border-radius: ${topLeft}px ${topRight}px`;
        } else {
            containerBox.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
            copyText.value = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
        }
    } else if (!topLeft && topRight && bottomRight && bottomLeft) {
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        copyText.value = `border-top-right-radius: ${topRight} \nborder-bottom-right-radius: ${bottomRight}px \nborder-bottom-left-radius: ${bottomLeft}px `;
    } else if (topLeft && !topRight && bottomRight && bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        copyText.value = `border-top-left-radius: ${topLeft}px \nborder-bottom-right-radius: ${bottomRight}px \nborder-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && topRight && !bottomRight && topLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomLeftRadius = `${bottomLeft}px`;
        copyText.value = `border-top-left-radius: ${topLeft}px \nborder-top-right-radius: ${topRight}px \nborder-bottom-left-radius: ${bottomLeft}px`;
    } else if (topLeft && topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        copyText.value = `border-top-left-radius: ${topLeft} \nborder-top-right-radius: ${topRight}px \nborder-bottom-right-radius: ${bottomRight}px`;
    } else if (!topLeft && topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        copyText.value = `border-top-right-radius: ${topRight}px \nborder-bottom-right-radius: ${bottomRight}px`;
    } else if (topLeft && !topRight && bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderBottomRightRadius = `${bottomRight}px`;
        copyText.value = `border-top-left-radius:${topLeft}px \nborder-radius-bottom-right:${bottomRight}`;
    } else if (topLeft && topRight && !bottomRight && !bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderTopRightRadius = `${topRight}px`;
        copyText.value = `border-top-left-radius: ${topLeft}px \nborder-radius-top-radius: ${topRight}`;
    } else if (topLeft && !topRight && !bottomRight && bottomLeft) {
        containerBox.style.borderTopLeftRadius = `${topLeft}px`;
        containerBox.style.borderBottomLeftRadius`${bottomLeft}px`;
        copyText.value = `border-top-left-radius: ${topLeft}px \nborder-radius-bottom-left: ${bottomLeft}`;
    } else {
        copyText.value = 'Something went wrong! ';
    }
};

// Copy text to clipboard
const copyToClipboard = () => {};
// Resetear el rectangulo
// const resetValues = () => {};
//Buttons Functinality
previewBtn.addEventListener('click', () => {
    checkInputUser(inputTL, inputTR, inputBL, inputBR);
});

resetBtn.addEventListener('click', () => {
    let containerBox = document.querySelector('.container');
    let copyText = document.getElementById('infoPreviewer');
    inputBL.value = '';
    inputBR.value = '';
    inputTL.value = '';
    inputTR.value = '';
    containerBox.style.borderRadius = '0px';
    copyText.value = '';
});