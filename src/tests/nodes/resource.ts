import { expect } from 'chai'
import Factory from '../../'
import { Resource } from '../../implementations/nodes/resource'


describe('Resource', () => {
	const factory = Factory();

	describe('init', () => {
		const resource = new Resource();

		it('type', () => {
			expect(resource.type).to.be.equal('Resource')
		});

		it('name', () => {
			expect(resource.name).to.be.equal('');
		});

		it('fields', () => {
			expect(resource.fields).to.be.deep.equal([]);
		});

		it('predicates', () => {
			expect(resource.predicates).to.be.deep.equal([]);
		});

		it('inclusions', () => {
			expect(resource.inclusions).to.be.deep.equal({});
		});

	})


	describe('methods', () => {

		// Setters

		it('setName', () => {
			const resource = new Resource();
			const name = 'res';

			resource.setName(name);

			expect(resource.name).to.be.equal(name);
		})

		it('setFields', () => {
			const resource = new Resource();
			const field = factory.createField('fieldName');
			const fields = [field];

			resource.setFields(fields)

			expect(resource.fields).to.be.equal(fields);
		})

		it('setPredicates', () => {
			const resource = new Resource();
			const predicate = factory.createPredicate();
			const predicates = [predicate];

			resource.setPredicates(predicates)

			expect(resource.predicates).to.be.equal(predicates);
		})

		it('setInclusions', () => {
			const resource = new Resource();
			const inclusion = factory.createResource();
			const inclusions = { inclusionName: inclusion };

			resource.setInclusions(inclusions)

			expect(resource.inclusions).to.be.equal(inclusions);
		})


		// Adders

		it('addField', () => {
			const resource = new Resource();
			const field = factory.createField('fieldName');
	
			resource.addField(field)

			expect(resource.fields).to.be.deep.equal([field]);
		})

		it('addPredicate', () => {
			const resource = new Resource();
			const predicate = factory.createPredicate();
	
			resource.addPredicate(predicate)

			expect(resource.predicates).to.be.deep.equal([predicate]);
		})

		it('addInclusion', () => {
			const resource = new Resource();
			const inclusion = factory.createResource();
	
			resource.addInclusion('inclusionName', inclusion)

			expect(resource.inclusions).to.be.deep.equal({ inclusionName: inclusion });
		})


		// Getters

		it('getName', () => {
			const resource = new Resource();
			const name = 'res';

			resource.setName(name);

			expect(resource.getName()).to.be.equal(name);
		})

		it('getInclusion', () => {
			const resource = new Resource();
			const inclusionName = 'posts';
			const inclusion = new Resource();
			
			resource.addInclusion(inclusionName, inclusion);

			expect(resource.getInclusion(inclusionName)).to.be.equal(inclusion);
		})

		it('getPredicates', () => {
			const resource = new Resource();
			const predicate = factory.createPredicate();
	
			resource.addPredicate(predicate)

			expect(resource.getPredicates()).to.be.deep.equal([predicate]);
		})


		// Hasers

		it('hasField', () => {
			const resource = new Resource();
			const fieldName = 'fieldName';
			const field = factory.createField(fieldName);
	
			resource.addField(field)

			expect(resource.hasField(fieldName)).to.be.true;
		})

		it('hasInclusion', () => {
			const resource = new Resource();
			const inclusionName = 'inclusionName';
			const inclusion = factory.createResource();
	
			resource.addInclusion(inclusionName, inclusion)

			expect(resource.hasInclusion(inclusionName)).to.be.true;
		})


		// Other

		it('forEachInclusion', () => {
			const resource = new Resource();
			const inclusion1 = factory.createResource();
			const inclusion2 = factory.createResource();
			const accumulator = {};

			resource.addInclusion('inclusion1', inclusion1)
			resource.addInclusion('inclusion2', inclusion2)

			resource.forEachInclusion((inclusionName, resource) => {
				accumulator[inclusionName] = resource
			})

			expect(accumulator).to.be.deep.equal({
				inclusion1: inclusion1,
				inclusion2: inclusion2 
			});
		})

	})

})