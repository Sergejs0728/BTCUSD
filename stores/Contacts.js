import { observable, action } from 'mobx';
class Contacts {
	@observable all = [
		{ id: 1, name: 'Prakash', email: 'prakash.techdoodles@gmail.com' },
		{ id: 2, name: 'Kruti', email: 'kruti.techdoodles@gmail.com' },
	];

	@action add(data) {
		const existing = this.all;
		this.all = existing.concat(data);
	}
}

export default new Contacts();
