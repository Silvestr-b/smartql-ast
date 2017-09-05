import { expect } from 'chai'
import { Field } from '../../implementations/nodes/field'


describe('Field', () => {
	const fieldName = 'name';
	const field = new Field(fieldName);

	describe('init', () => {

		it('type', () => {
			expect(field.getType()).to.be.equal('Field')
		});

		it('name', () => {
			expect(field.getName()).to.be.equal(fieldName)
		});

	})

	describe('methods', () => {
		
		it('getName', () => {
			expect(field.getName()).to.be.equal(fieldName)
		});
		
	})

})