import { ast } from '../../interfaces'
import { AstNode } from './node'


class Resource extends AstNode implements ast.IResource {
	public type = 'Resource';
	public name: string = '';
	public fields: ast.IField[] = [];
	public predicates: ast.IPredicate[] = [];
	public inclusions: ast.InclusionsList = {};

	setName(name: string){
		this.name = name;

		return this
	}

	setFields(fields: ast.IField[]){
		this.fields = fields;

		this.fields.forEach(field => field.setParent(this))

		return this
	}

	setPredicates(predicates: ast.IPredicate[]){
		this.predicates = predicates;

		this.predicates.forEach(predicate => predicate.setParent(this))

		return this
	}

	setInclusions(inclusionsList: ast.InclusionsList){
		this.inclusions = inclusionsList;

		for(let inclusionName in this.inclusions){
			this.inclusions[inclusionName].setParent(this)
		}

		return this
	}

	addField(field: ast.IField){
		this.fields.push(field)
		field.setParent(this)

		return this
	}

	addPredicate(predicate: ast.IPredicate){
		this.predicates.push(predicate);
		predicate.setParent(this)

		return this
	}

	addInclusion(inclusionName: string, inclusion: ast.IResource){
		this.inclusions[inclusionName] = inclusion;
		inclusion.setParent(this)

		return this
	}

	getName(){
		return this.name
	}

	getInclusion(inclusionName: string){
		return this.inclusions[inclusionName]
	}

	getPredicates(){
		return this.predicates
	}

	hasInclusion(inclusionName: string){
		return !!this.inclusions[inclusionName]
	}

	hasField(fieldName: string){
		return this.fields.some(field => field.name === fieldName)
	}

	forEachInclusion(callBack: ((inclusionName: string, resource: ast.IResource) => void)){
		for(let inclusionName in this.inclusions){
			callBack(inclusionName, this.inclusions[inclusionName])
		}
	}

}


export { Resource }