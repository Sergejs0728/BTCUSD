import { observable, action } from 'mobx';
class Contacts {
	@observable all = [
		{ id: 1, name: 'test1', email: 'test1.techdoodles@gmail.com' },
		{ id: 2, name: 'test2', email: 'test2.techdoodles@gmail.com' },
	];

	@action add(data) {
		const existing = this.all;
		this.all = existing.concat(data);
	}
}

export default new Contacts();
