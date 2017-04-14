import Component, { tracked } from "@glimmer/component";

export default class MyApp extends Component {
  @tracked fruits = ['oranges', 'apples', 'grapes', 'peaches'];
  @tracked newFruit;

  alertThePress() {
    alert('alert alert alert!');
  }

  @tracked('fruits')
  get currentFruits() {
    return this.fruits;
  }

  addSomeFruit() {
    this.fruits = this.fruits.concat([this.newFruit]);
  }

  updateFruit(e) {
    this.newFruit = e.target.value;
  }
}
