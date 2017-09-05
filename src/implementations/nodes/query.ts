import { ast } from '../../interfaces'
import { AstNode } from './node'


class Query extends AstNode implements ast.IQuery {
	public type = 'Query';
	public method: string = '';
	public resources: ast.IResource[] = [];
	
	setMethod(method: string){
		this.method = method;

		return this
	}

	setResources(resources: ast.IResource[]){
		this.resources = resources
		
		resources.forEach(resource => resource.setParent(this))

		return this
	}

	addResource(resource: ast.IResource){
		this.resources.push(resource)

		resource.setParent(this)

		return this
	}

	getAllResources(){
		return this.resources
	}

	getMethod(){
		return this.method
	}

	hasResource(resourceName: string){
		return this.resources.some(resource => resource.name === resourceName)
	}

	forEachResource(callBack: ((resource: ast.IResource) => void)){
		this.resources.forEach(callBack)
	}
}


export { Query }