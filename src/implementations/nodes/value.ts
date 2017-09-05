import { ast } from '../../interfaces'
import { AstNode } from './node'


class Value extends AstNode implements ast.IValue {
	public type = 'Value';

	constructor(
		public value: ast.ValuesType
	){ super() }

	getValue(){
		return this.value
	}
}


export { Value }