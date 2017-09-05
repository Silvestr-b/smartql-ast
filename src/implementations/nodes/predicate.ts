import { ast } from '../../interfaces'
import { AstNode } from './node'


class Predicate extends AstNode implements ast.IPredicate {
	public type = 'Predicate';
	public fieldPredicates: ast.FieldPredicatesList = {};

	addFieldPredicate(fieldName: string, subPredicate: ast.SubPredicate){
		this.fieldPredicates[fieldName] = subPredicate;

		subPredicate.setParent(this)

		return this
	}

	getFieldPredicate(fieldName: string){
		return this.fieldPredicates[fieldName]
	}

}


export { Predicate }