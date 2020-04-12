'use strict';

var expect = require('chai').expect;
var game = require('../index');

describe('#TicTacToe', function () {
    it('should initialize the game', () => {
        expect(game.init()).to.equal(true);
    });
});