import { FeedIt } from './../js/tamagotchi.js';

describe('FeedIt', function() {
  let mithu;

  beforeEach(function() {
    mithu = new FeedIt('Mithu');
    jasmine.clock().install();
    mithu.setHunger();
    mithu.setThirst();
    mithu.setPlay();
    mithu.areYouSad();
    mithu.water();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name, a water level of 15, food level of 10 and play level of 20 when it is created', function() {
    expect(mithu.name).toEqual('Mithu');
    expect(mithu.foodLevel).toEqual(10);
    expect(mithu.waterLevel).toEqual(15);
    expect(mithu.playLevel).toEqual(20);
  });

  it('should have a food level of 6 after 4001 milliseconds', function() {
    jasmine.clock().tick(4001);
    expect(mithu.foodLevel).toEqual(6);
  });

  it('should have a water level of 12 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(mithu.waterLevel).toEqual(12);
  });

  it('should have a play level of 10 after 10001 milliseconds', function() {
    jasmine.clock().tick(10001);
    expect(mithu.playLevel).toEqual(10);
  });

  it('should start to feel unhappy if play levels drop below 12', function() {
    mithu.playLevel = 11;
    expect(mithu.areYouSad()).toEqual(true);
  });

  it('should have a water level of 15 if it is given water', function() {
    jasmine.clock().tick(8001)
    mithu.water();
    expect(mithu.waterLevel).toEqual(15);
  });

  it('should have a water level of 15 if it is given water', function() {
    jasmine.clock().tick(8001)
    mithu.water();
    expect(mithu.waterLevel).toEqual(15);
  });

  


});
