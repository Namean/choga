import { describe, expect, test } from "@jest/globals";
import { sum } from '../src/sum';

const numbersCollection = new NumbersCollection([50, 10, 3, -5, 0]);

describe('sum module', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
});

describe('NumbersCollection', () => { 
	test('NumbersCollection exists', () => {
		expect(NumbersCollection);
	});
});
