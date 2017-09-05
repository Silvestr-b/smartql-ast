import { expect } from 'chai'
import Factory from '../..'
import { Disjunction } from '../../implementations/nodes/disjunction'


describe('Subquery', () => {
	const factory = Factory();

	describe('init', () => {

		it('type', () => {
			const disjunction = new Disjunction();

			expect(disjunction.getType()).to.be.equal('Disjunction')
		});

		it('operands', () => {
			const disjunction = new Disjunction();

			expect(disjunction.getOperands()).to.be.deep.equal([])
		});

	})

	describe('methods', () => {

		it('addOperand', () => {
			const disjunction = new Disjunction();
			const value = factory.createValue('val');
			const conjunction = factory.createConjunction();

			disjunction.addOperand(value);
			disjunction.addOperand(conjunction);

			expect(disjunction.getOperands()).to.be.deep.equal([value, conjunction])
		});

		it('getOperands', () => {
			const disjunction = new Disjunction();
			const value = factory.createValue('val');
			const conjunction = factory.createConjunction();

			disjunction.addOperand(value);
			disjunction.addOperand(conjunction);

			expect(disjunction.getOperands()).to.be.deep.equal([value, conjunction])
		});

	})

})