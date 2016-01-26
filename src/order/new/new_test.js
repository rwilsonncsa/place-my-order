import QUnit from 'steal-qunit';
import restaurantStore from 'place-my-order/models/fixtures/restaurant';
import { ViewModel } from './new';

// ViewModel unit tests
QUnit.module('place-my-order/order/new');

QUnit.test('Has slug', function(){
  var vm = new ViewModel();
  vm.attr('slug', 'fred');
  QUnit.equal(vm.attr('slug'), 'fred');
});
