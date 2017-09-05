import { expect } from 'chai'
import { AstNode } from '../../implementations/nodes/node'


describe('AstNode', () => {
	class Implementation extends AstNode {}

	describe('init', () => {

		it('parent', () => {
			const node = new Implementation()

			expect(node.getParent()).to.be.undefined
		})

		it('type', () => {
			const node = new Implementation()

			expect(node.getType()).to.be.equal('AstNode')
		})

	})

	describe('methods', () => {

		it('setParent', () => {
			const node = new Implementation();
			const parent = new Implementation();

			node.setParent(parent)

			expect(node.getParent()).to.be.equal(parent)
		})

		describe('findParent', () => {

			it('if exist', () => {
				const searchedType = 'searched';
				class searchedParent extends AstNode {
					type = searchedType
				}
				const root = new Implementation();
				const child1 = new searchedParent().setParent(root);
				const child2 = new Implementation().setParent(child1);
				const child3 = new Implementation().setParent(child2);

				expect(child3.findParent(searchedType)).to.be.equal(child1)
			})

			it('if not exist', () => {
				const root = new Implementation();
				const child = new Implementation().setParent(root);

				expect(child.findParent('searched')).to.be.null
			})
		})

		it('getParent', () => {
			const node = new Implementation();
			const parent = new Implementation();

			node.setParent(parent)

			expect(node.getParent()).to.be.equal(parent)
		})

		it('getType', () => {
			const node = new Implementation();

			expect(node.getType()).to.be.equal('AstNode')
		})

	})

})


