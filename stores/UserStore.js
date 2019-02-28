/* @flow */
import { observable, action, computed } from "mobx";
import { ListView, Text } from 'react-native';
export default class UserStore {
  // @observable firstName = "Prakash";
  // @observable lastName = "Appleseed";
  // @observable email = "send@appleseed.com";
  // @observable phone = "1155667788";

  // @action data(data: Object) {
  //   if (data.firstName) {
  //     this.firstName = data.firstName;
  //   }
  //   if (data.lastName) {
  //     this.lastName = data.lastName;
  //   }
  //   if (data.email) {
  //     this.email = data.email;
  //   }
  //   if (data.phone) {
  //     this.phone = data.phone;
  //   }
  // }

  // @computed get fullName(): string {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  //  @observable list = [
  //   { text: 'Hello World!' },
  //   { text: 'Hello React Native!' },
  //   { text: 'Hello MobX!' }
  // ];

  // ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  // @computed get dataSource() { return this.ds.cloneWithRows(this.list); }

  @observable all = [
    { id: 1, name: 'Prakash', email: 'prakash.techdoodles@gmail.com'},
    { id: 2, name: 'Kruti', email: 'kruti.techdoodles@gmail.com'},
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @computed get all_contact(): string {
    return `${this.all}`;
  }
}