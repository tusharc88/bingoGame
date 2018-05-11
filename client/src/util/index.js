export const generateBingoCardNumbers = matrixNum => {
  const numberOfRandomNumbers = matrixNum * matrixNum;
  const bingoCardNumbers = [];
  let counter = 0;

  while (counter < numberOfRandomNumbers) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (bingoCardNumbers.indexOf(randomNumber) === -1) {
      bingoCardNumbers[counter] = randomNumber;
      counter += 1;
    }
  }

  return bingoCardNumbers;
};

export const generateUniqueRandomNumber = pastRandomNumbers => {
  if (pastRandomNumbers.length >= 100) return -1;
  while (true) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (pastRandomNumbers.indexOf(randomNumber) === -1) return randomNumber;
  }
};

export const isBingo = (pastRandomNumbers, bingoCardNumbers) =>
  bingoCardNumbers.every(
    cardNumber => pastRandomNumbers.indexOf(cardNumber) > -1
  );
