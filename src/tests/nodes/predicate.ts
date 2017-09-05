import { expect } from 'chai'
import Factory from '../../'
import { Predicate } from '../../implementations/nodes/predicate'


describe('Predicate', () => {
	const factory = Factory();
	const value = factory.createValue('val');
	const conjunction = factory.createConjunction();
	const disjunction = factory.createDisjunction();


	describe('init', () => {

		it('type', () => {
			const predicate = new Predicate();

			expect(predicate.type).to.be.equal('Predicate')
		});

	})

	describe('methods', () => {
		
		it('fieldPredicates', () => {
			const predicate = new Predicate();

			expect(predicate.fieldPredicates).to.be.deep.equal({})
		});

		it('addFieldPredicate', () => {
			const predicate = new Predicate();

			predicate.addFieldPredicate('value', value);
			predicate.addFieldPredicate('conjunction', conjunction);
			predicate.addFieldPredicate('disjunction', disjunction);

			expect(predicate.getFieldPredicate('value')).to.be.deep.equal(value);
			expect(predicate.getFieldPredicate('conjunction')).to.be.deep.equal(conjunction);
			expect(predicate.getFieldPredicate('disjunction')).to.be.deep.equal(disjunction);
		});
		
	})

})