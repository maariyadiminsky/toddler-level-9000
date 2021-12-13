import isEmpty from 'lodash/isEmpty';

export const isArrayExistAndNotEmpty = (arr) => arr && arr.length !== 0;

export const isObjectExistAndNotEmpty = (obj) => obj !== undefined && !isEmpty(obj);

/* 
    - use case example: 
        const waitTwoSeconds = async() => {
            // this will be called first
            await wait(2000);
            // this will be called after two seconds
        }
    
    - another use case example: 
        wait(2000)
        .then(() => // do something after 2 seconds)
*/
export const wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const generateRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

export const generateRandomItemInArray = (arr) => (
    arr[generateRandomNumber(arr.length)]
);
