var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');
var actions = require('../actions/actions.js');
var userStore = require('./user.js')

var carouselStore = Reflux.createStore({
  
  data: {count: 0, items: []},

  listenables: [actions],

  onNextCarousel: function(){
    this.shiftItems(true);
  },
  onPrevCarousel: function(){
    this.shiftItems(false);
  },

  shiftItems: function(change){
    var display = {items: []};
    if(change){
      if(this.data.count+3<this.data.items.length){
        this.data.count = this.data.count + 3;
      }
    } else {
      if (this.data.count>2){
        this.data.count = this.data.count - 3;
      } else {
        this.data.count = 0;
      }
    }
    for (var i=this.data.count; i<this.data.count+3; i++){
      display.items.push(this.data.items[i]);
    }
    this.trigger(display);
  },

  init: function(){
    var userId = userStore.getProp('id'); 
    request.get('/api/items/allcity/'+userId, function(res){
      console.log(res.body);
      this.data.items = res.body;
      this.trigger(this.data);
   })
  },

  getInitialState: function() {
    // var stuff = []
    // for(var i=0; i<60; i++){
    //   stuff.push({img: "img"+i, itemid: "itemid"+i, cost: i, disc: "name"+i});
    // }
    // console.log("BIG STUFF: ", stuff);
    // this.data.items = stuff;    
    // var display = {items: []};
    // for (var i=0; i<3; i++){
    //   display.items.push(this.data.items[i]);
    // }
    return this.data;
  }
})

module.exports = carouselStore;
