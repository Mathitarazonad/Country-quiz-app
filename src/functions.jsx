import {AiOutlineCheckCircle, AiOutlineCloseCircle} from 'react-icons/ai';

export function getQuizSetup (allCountries) {
  allCountries = allCountries.filter(country => country.capital !== undefined)

  //0-Flag question, 1-Capital of Country Question, 2-Country Capital Question
  const questionOption = Math.round(Math.random() * 2);

  //Get answer and reference
  const randomCountry = allCountries[Math.round(Math.random()* allCountries.length-1)];
  const {answer, reference} = getAnswerAndReference(questionOption, randomCountry)

  //Get other 3 random options to form the quiz and shuffle the options
  const options = shuffleArray(getOtherOptions(questionOption, allCountries, answer));

  return ({questionOption, reference, answer, options});
}

function getAnswerAndReference (questionType, country) {
  if (questionType === 0) {
    return {reference: country.flags.png, answer: country.name.common};
  } else if (questionType === 1) {
    return {reference: country.capital[0], answer: country.name.common};
  } else if (questionType === 2) {
    return {reference: country.name.common, answer: country.capital[0]};
  }
}

function getOtherOptions (questionType, countries, correctOption) {
  const finalOptions = [correctOption];

  const filteredOptions = questionType === 0 || questionType === 1 ? countries.map(country => country.name.common) : countries.map(country => country.capital);

  while(finalOptions.length !== 4) {
    const randomOption = filteredOptions[Math.round(Math.random() * filteredOptions.length-1)];

    if (!finalOptions.includes(randomOption)) {
      finalOptions.push(randomOption);
    }
  }

  return finalOptions;
}

//Fisher-Yates Algorith to shuffle an Array
function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.flat()
}

export function getQuestion (questionType, reference) {
  //0-Flag question, 1-Capital of Country Question, 2-Country Capital Question
  if (questionType === 0) {
    return (
      <>
        <img src={`${reference}`} alt='countryFlag' />
        <p className='question'>Which country does this flag belong to?</p>
      </>
    )
  } else if (questionType === 1) {
    return (
      <>
        <p className='question'>{`${reference} is the capital of`}</p>
      </>
    )
  } else if (questionType === 2) {
    return (
      <>
        <p className='question'>{`The capital of ${reference} is`}</p>
      </>
    )
  }

}

export function getClassName(correct, incorrect, index) {
  if (correct === index) {
    return 'option correct';
  } else if (incorrect === index) {
    return 'option incorrect';
  } else {
    return 'option'
  }
}

export function getAnswerIcon(correct, incorrect, index) {
  if (correct === index) {
    return <AiOutlineCheckCircle className='answer-icon correct'/>
  } else if (incorrect === index) {
    return <AiOutlineCloseCircle className='answer-icon incorrect'/>
  }
}