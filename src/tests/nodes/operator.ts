import { expect } from 'chai'
import { Operator } from '../../implementations/nodes/operator'


describe('Operator', () => {
	const value = '>';
	const operator = new Operator(value);

	describe('init', () => {

		it('type', () => {
			expect(operator.type).to.be.equal('Operator')
		});

		it('value', () => {
			expect(operator.value).to.be.equal(value)
		});

	})

	describe('methods', () => {

		it('getValue', () => {
			expect(operator.getValue()).to.be.equal(value)
		});

	})

})