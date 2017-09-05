import { expect } from 'chai'
import Factory from '../../'
import { ast } from '../../interfaces'
import { Query } from '../../implementations/nodes/query'


describe('Query', () => {
	const factory = Factory();

	describe('init', () => {
		const query = new Query();

		it('type', () => {
			expect(query.type).to.be.equal('Query')
		});

		it('resources', () => {
			expect(query.resources).to.be.deep.equal([]);
		});

		it('method', () => {
			expect(query.method).to.be.equal('');
		});

	})

	describe('methods', () => {

		it('setMethod', () => {
			const query = new Query();
			const method = 'GET';

			query.setMethod(method);

			expect(query.getMethod()).to.be.equal(method);
		})

		it('setResources', () => {
			const query = new Query();
			const resource = factory.createResource();
			const resources = [resource];

			query.setResources(resources)

			expect(query.resources).to.be.equal(resources);
		})

		it('addResource', () => {
			const query = new Query();
			const resource = factory.createResource();

			query.addResource(resource)

			expect(query.resources).to.be.deep.equal([resource]);
		})

		it('getAllResources', () => {
			const query = new Query();
			const resource = factory.createResource();
			const resources = [resource];

			query.setResources(resources)

			expect(query.getAllResources()).to.be.equal(resources);
		})

		it('getMethod', () => {
			const query = new Query();
			const method = 'GET';

			query.setMethod(method);

			expect(query.getMethod()).to.be.equal(method);
		})

		it('hasResource', () => {
			const query = new Query();
			const resourceName = 'User';
			const resource = factory.createResource().setName(resourceName);

			query.addResource(resource)

			expect(query.hasResource(resourceName)).to.be.true;
		})
		
		it('forEachResource', () => {
			const query = new Query();
			const resource1 = factory.createResource();
			const resource2 = factory.createResource();
			const resources = [resource1, resource2];
			const accumulator: ast.IResource[] = [];

			query.setResources(resources)

			query.forEachResource(resource => {
				accumulator.push(resource)
			})

			expect(accumulator).to.be.deep.equal(resources);
		})

	})

})