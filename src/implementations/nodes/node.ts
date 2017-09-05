import { ast } from '../../interfaces'


abstract class AstNode implements ast.IAstNode {
	parent: AstNode;
	type: string = 'AstNode';

	setParent(parent: AstNode){
		this.parent = parent

		return this
	}

	findParent(type: string){
		if(!this.parent) return null
		if(this.parent.type === type) return this.parent
			
		return this.parent.findParent(type)
	}

	getParent(){
		return this.parent
	}

	getType(){
		return this.type
	}
}


export { AstNode }