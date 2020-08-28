import {requester} from '../helpers/requester'

const getDndData = async () => {
    console.log('start dnd data')
    const baseUrl = 'https://www.dnd5eapi.co/api/'
    const url = `${baseUrl}classes/ranger`
    const result = await requester('get',url,{},{})
}

const datas = [
    'ability-scores',
    'skills',
    'proficiencies',
    'languages',
    'classes',
    'races',
    'spells',
    'equipment',
    'equipment-categories',
    'monsters',
    'conditions',
    'damage-types',
    'magic-schools'
]

const subData = {
    classes: ['subclasses','features','spellcasting','starting-equipment'],
    races: ['subraces','trais'],
}

export {getDndData}