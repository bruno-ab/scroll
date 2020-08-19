import {rollDice, getDice} from '../routes/roll'

describe('Roll Dice Tests',  ()=> {
    it('should to roll one d20 dice', () => {
        //expect(rollDice()).toBe(20)
    })

    // it('should not be able to roll odd dices', () => {

    // })

    it('should get all dices from N faces', async () => {
        const dices = ['d4','d6','d8','d10','d12','d20']
        const correctDices = [4,6,8,10,12,20]
        const allDices = []
        for (const dice of dices) {
            allDices.push(await getDice(dice))
        }
        expect(allDices).toStrictEqual(correctDices)
    })
})