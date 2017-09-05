import { ast } from '../../interfaces'
import { AstNode } from './node'


class Field extends AstNode implements ast.IField {
	public type = 'Field';
	
	constructor(
		public name: string
	){ super() }

	getName(){
		return this.name
	}
}


export { Field }