import { ast } from '../../interfaces'
import { AstNode } from './node'


class Subquery extends AstNode implements ast.ISubquery {
	public type = 'Subquery';
	
	constructor(
		public field: string,
		public resource: ast.IResource
	){ 
		super()
		resource.setParent(this)
	}

	getField(){
		return this.field
	}

	getResource(){
		return this.resource
	}

}


export { Subquery }