import { expect } from 'chai'
import Factory from '../../'
import { Conjunction } from '../../implementations/nodes/conjunction'



describe('Conjunction', () => {
	const factory = Factory();
	
	describe('init', () => {

		it('type', () => {
			const conjunction = new Conjunction();

			expect(conjunction.getType()).to.be.equal('Conjunction')
		});

		it('operands', () => {
			const conjunction = new Conjunction();

			expect(conjunction.getOperands()).to.be.deep.equal([])
		});

	})
	
	describe('methods', () => {

		it('addOperand', () => {
			const conjunction = new Conjunction();
			const operator = factory.createOperator('>');
			const value = factory.createValue('val');
			const expression = factory.createExpression(operator, value);

			conjunction.addOperand(expression);
			conjunction.addOperand(expression);

			expect(conjunction.getOperands()).to.be.deep.equal([expression, expression])
		});

		it('getOperands', () => {
			const conjunction = new Conjunction();
			const operator = factory.createOperator('>');
			const value = factory.createValue('val');
			const expression = factory.createExpression(operator, value);

			conjunction.addOperand(expression);
			conjunction.addOperand(expression);

			expect(conjunction.getOperands()).to.be.deep.equal([expression, expression])
		})
		
	})
	

})