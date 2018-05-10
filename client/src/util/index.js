export const generateBingoCardNumbers = matrixNum => {
  const numberOfRandomNumbers = matrixNum * matrixNum;
  const bingoCardNumbers = {};
  let counter = 0;

  while (counter < numberOfRandomNumbers) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!bingoCardNumbers[randomNumber]) {
      bingoCardNumbers[randomNumber] = true;
      counter += 1;
    }
  }

  return bingoCardNumbers;
};

export const generateUniqueRandomNumber = pastRandomNumbers => {
  if (Object.keys(pastRandomNumbers).length >= 100) return -1;
  while (true) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!pastRandomNumbers[randomNumber]) return randomNumber;
  }
};

export const isBingo = (pastRandomNumbers, bingoCardNumbers) =>
  Object.keys(bingoCardNumbers).every(
    cardNumber => pastRandomNumbers[parseInt(cardNumber, 10)]
  );
