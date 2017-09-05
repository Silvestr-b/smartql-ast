import { ast } from '../../interfaces'
import { AstNode } from './node'


class Operator extends AstNode implements ast.IOperator {
	public type = 'Operator';

	constructor(
		public value: ast.OperatorType
	){ super() }

	getValue(){
		return this.value
	}
}


export { Operator }