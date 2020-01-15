import _ from 'lodash';
import numRef from './ref.json';
import {numToWord as numToWordNew, wordToNum as wordToNumNew} from "./webpack-numbers";

console.log(numToWordNew);
console.log(wordToNumNew);

export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
}

export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
}

export default "++++";
