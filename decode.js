const fs = require('fs');
const path = require('path');

// Replace 'output.png' with the desired output file name and extension
const outputFilePath = path.join(__dirname, 'output.png');

// Replace the 'base64Image' variable with the output you received
const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAORSURBVO3BQY4cSQIDQWeg\\v9lXx32wFMAhcxuaASaxT+Y+b\\DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNM+fBQEn6TyhNJ+IbKTRKaSkvCb1J54jBTDjPlMFM+vEzlTUl4IglN5SYJLQlvUnlTEt50mCmHmXKYKR9+WBK+ofKNJNyotCQ0labSktBU3pSEb6j8pMNMOcyUw0z58I9RuVG5ScJNEprKv+QwUw4z5TBTPvxjknCj8g2VmyQ0lf+yw0w5zJTDTPnww1R+k8pNEppKU2lJuFF5QuVvcpgph5lymCkfXpaEv0kSmkpLQlO5UWlJaCo3SfibHWbKYaYcZsqHh1T+Zio3Kj9J5b\\kMFMOM+UwU+IfPJCEptKS8CaVNyWhqbwpCW9S+UmHmXKYKYeZ8uEhlZaEpnKThBuVmyQ0lZaEG5WWhKbyjSQ0lZaEpvKNJDSVNx1mymGmHGbKh4eScJOEb6i0JDSVmyQ0lSeS8A2VJ5LQVG6S0FSeOMyUw0w5zJQPP0ylJeEmCU3lGyotCTcqNyotCd9IwjdUblRaEt50mCmHmXKYKfEPXpSEb6jcJKGpPJGEG5WWhBuVloQblZaEptKS8A2VJw4z5TBTDjMl\\sEDSXiTyjeS0FRaEprKm5LQVG6S0FRaEppKS0JTedNhphxmymGmfHiZypuScKPyjSTcqNwkoancJOEmCU8koak8cZgph5lymCkfflkSmsqNSkvCN1RaEprKTRJukvAmlRuVloQ3HWbKYaYcZsqHH5aEpnKThBuVloSfpHKThJ+UhKbSVN50mCmHmXKYKfEP\\sOScKNyk4Q3qXwjCTcqv+kwUw4z5TBTPjyUhN+k0lSeUGlJuFFpSbhJQlO5UWlJ+IbKE4eZcpgph5ny4WUqb0rCTRJuVG6ScKPyhMo3ktBUWhKaypsOM+UwUw4z5cMPS8I3VN6UhKZyo9KS8I0kPKHSktBUWhKayhOHmXKYKYeZ8uEfo\\INlRuVloSm0pJwo9KS0JJwk4SfdJgph5lymCkf\\jFJeELlCZVvqLQk3Ki0JLzpMFMOM+UwUz78MJWfpPKNJDSVmyQ0lZaEG5WWhG+o\\KbDTDnMlMNM+fCyJPymJNyoPKFyo9KS0JLwRBJ+02GmHGbKYabEP5j5v8NMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0z5HyNBnAAsKI6EAAAAAElFTkSuQmCC';

// Remove the 'data:image/png;base64,' prefix from the base64 data
const imageData = base64Image.replace(/^data:image\/png;base64,/, '');

// Convert the base64 data to a Buffer
const buffer = Buffer.from(imageData, 'base64');

// Save the Buffer to the output file
fs.writeFileSync(outputFilePath, buffer);

console.log(`Image saved to: ${outputFilePath}`);
