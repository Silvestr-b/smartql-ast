import { expect } from 'chai'
import { ast } from '../../interfaces'
import Factory from '../../'
import { Value } from '../../implementations/nodes/value'


describe('Value', () => {
	const factory = Factory();

	describe('init', () => {

		it('type', () => {
			const value = new Value('val');

			expect(value.getType()).to.be.equal('Value');
		})

		it('init with String value', () => {
			const string = 'val';
			const value = new Value(string);

			expect(value.getValue()).to.be.equal(string);
		})

		it('init with Number value', () => {
			const number = 5;
			const value = new Value(number);

			expect(value.getValue()).to.be.equal(number);				
		})

		it('init with Date value', () => {
			const date = new Date();
			const value = new Value(date);

			expect(value.getValue()).to.be.equal(date);				
		})

		it('init with Subquery value', () => {
			const resource = factory.createResource();
			const subquery = factory.createSubquery('inclusionName', resource);
			const value = new Value(subquery);

			expect(value.getValue()).to.be.equal(subquery);
			expect((<ast.ISubquery>value.getValue()).getResource()).to.be.equal(resource);				
		})
		
	})

	describe('methods', () => {

		it('getValue', () => {
			const number = 5;
			const value = new Value(number);

			expect(value.getValue()).to.be.equal(number);
		});

	})

})