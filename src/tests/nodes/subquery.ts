import { expect } from 'chai'
import Factory from '../../'
import { Subquery } from '../../implementations/nodes/subquery'



describe('Subquery', () => {
	const factory = Factory();
	const fieldName = 'inclusionName';
	const resource = factory.createResource();
	const subquery = new Subquery(fieldName, resource);

	describe('init', () => {

		it('type', () => {
			expect(subquery.getType()).to.be.equal('Subquery')
		});

		it('field', () => {
			expect(subquery.getField()).to.be.equal(fieldName);
		});

		it('resource', () => {
			expect(subquery.getResource()).to.be.equal(resource);
		});
		
	})

	describe('methods', () => {

		it('getField', () => {
			expect(subquery.getField()).to.be.equal(fieldName);
		});

		it('getRresource', () => {
			expect(subquery.getResource()).to.be.equal(resource);
		});

	})

})

