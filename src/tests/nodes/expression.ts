import { expect } from 'chai'
import Factory from '../../'
import { Expression } from '../../implementations/nodes/expression'


describe('Expression', () => {
	const factory = Factory();
	const operator = factory.createOperator('>');
	const value = factory.createValue('val');
	const expression = new Expression(operator, value);

	describe('init', () => {

		it('type', () => {
			expect(expression.getType()).to.be.equal('Expression')
		});

		it('value', () => {
			expect(expression.getValue()).to.be.equal(value)
		});

		it('operator', () => {
			expect(expression.getOperator()).to.be.equal(operator)
		});

	})

	describe('methods', () => {

		it('getOperator', () => {
			expect(expression.getOperator()).to.be.equal(operator)
		})

		it('getValue', () => {
			expect(expression.getValue()).to.be.equal(value)
		})

	})

})