const { expect } = require('chai');
const { productosBaratos } = require('../src/');

describe('Exercise 1: productosBaratos testing', () => {

    it('evaluate cheaper prices of a list - first case', () => {
        const prods = [
            { nombre: 'Arroz', precio: 5 },
            { nombre: 'Pan', precio: 3 },
            { nombre: 'Tomate', precio: 8 },
            { nombre: 'Leche', precio: 15 },
        ];

        expect(['Arroz', 'Tomate']).to.deep.equal(productosBaratos(prods));
    });

    it('evaluate cheaper prices of a list - second case', () => {
        const prods = [
            { nombre: 'Carne', precio: 6 },
            { nombre: 'Kola Román', precio: 5 },
            { nombre: 'Carne', precio: 8 },
            { nombre: 'Azúcar', precio: 3 },
        ];

        expect(['Carne', 'Kola Román', 'Carne']).to.deep.equal(
            productosBaratos(prods)
        );
    });

    it('evaluate cheaper prices of a list - third case', () => {
        const prods = [
            { nombre: 'Hot Dogs', precio: 8 },
            { nombre: 'Coca-Cola', precio: 4 },
            { nombre: 'Pizza', precio: 4 },
            { nombre: 'Sugar', precio: 3 },
            { nombre: 'Honey', precio: 2 },
        ];

        expect(['Hot Dogs']).to.deep.equal(productosBaratos(prods));
    });

    it('evaluate cheaper prices of a list - fourth case', () => {
        const prods = [
            { nombre: 'Muffin', precio: 1 },
            { nombre: 'Cake', precio: 4 },
            { nombre: 'Milkshake', precio: 4 },
            { nombre: 'Bun', precio: 3 },
            { nombre: 'Milk', precio: 2 },
            { nombre: 'Croissant', precio: 1 },
        ];

        expect([]).to.deep.equal(productosBaratos(prods));
    });


});
