import { expect } from 'chai'
import { ast } from '../interfaces'
import Factory from '../'


describe('AstFactory', () => {
	const factory = Factory();

	it('createOperator', () => {
		const operator = factory.createOperator('=');

		expect(operator.type).to.be.equal('Operator');
		expect(operator.value).to.be.equal('=')
	})

	it('createExpression', () => {
		const operator = factory.createOperator('=');
		const value = factory.createValue('val');
		const expression = factory.createExpression(operator, value);

		expect(expression.type).to.be.equal('Expression');
		expect(expression.operator).to.be.equal(operator);
		expect(expression.value).to.be.equal(value);
	})

	it('createField', () => {
		const field = factory.createField('fieldName');

		expect(field.type).to.be.equal('Field');
		expect(field.name).to.be.equal('fieldName');
	})

	describe('createValue', () => {

		it('from String', () => {
			const string = 'val';
			const value = factory.createValue(string);

			expect(value.type).to.be.equal('Value');
			expect(value.value).to.be.equal(string);
		})

		it('from Number', () => {
			const number = 5;
			const value = factory.createValue(number);

			expect(value.type).to.be.equal('Value');
			expect(value.value).to.be.equal(number);				
		})

		it('from Date', () => {
			const date = new Date();
			const value = factory.createValue(date);

			expect(value.type).to.be.equal('Value');
			expect(value.value).to.be.equal(date);				
		})

		it('from Subquery', () => {
			const resource = factory.createResource();
			const subquery = factory.createSubquery('inclusionName', resource);
			const value = factory.createValue(subquery);

			expect(value.type).to.be.equal('Value');
			expect(value.value).to.be.equal(subquery);
			expect((<ast.ISubquery>value.value).resource).to.be.equal(resource);				
		})

	})
	

	it('createSubquery', () => {
		const resource = factory.createResource();
		const subquery = factory.createSubquery('inclusionName', resource);

		expect(subquery.type).to.be.equal('Subquery');
		expect(subquery.field).to.be.equal('inclusionName');
		expect(subquery.resource).to.be.equal(resource);
	})

	it('createConjunction', () => {
		const conjunction = factory.createConjunction();

		expect(conjunction.type).to.be.equal('Conjunction');
	})

	it('createDisjunction', () => {
		const disjunction = factory.createDisjunction();

		expect(disjunction.type).to.be.equal('Disjunction');
	})

	it('createPredicate', () => {
		const predicate = factory.createPredicate();

		expect(predicate.type).to.be.equal('Predicate');
	})

	it('createResource', () => {
		const resource = factory.createResource();

		expect(resource.type).to.be.equal('Resource');
	})

	it('createQuery', () => {
		const query = factory.createQuery();

		expect(query.type).to.be.equal('Query');
	})

})
