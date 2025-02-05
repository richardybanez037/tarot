import { NUMBER_OF_CARDS } from "../constants"
import { zeroStartRandom } from "../utils"

export const all = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL
  if(!url) throw new Error('API_URL undefined')
  try{
    const response = await fetch(url)
    if(!response.ok){
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }
    return await response.json()
  }
  catch(error){
    console.error('Error fetching data: ', error)
    return []
  }
}

export const cardOrientationNumber = (): number => zeroStartRandom(2) //0 to 1
export const randomTarotCardNumber = (): number => zeroStartRandom(NUMBER_OF_CARDS) //0 to 78

export const setCardsToDraw = (prevState: unknown, formData: FormData) => {
  const numberOfCards = formData.get('numberOfCards')
  if(!numberOfCards) return 0
  if(numberOfCards === 'NaN') return 0
  return numberOfCards
}

export const getCardImage = (nameShort: string): string | null => {
  switch(nameShort){
      case 'ar01': return "/cards/the-magician-tarot-card.jpg"
      case 'ar02': return "/cards/the-high-priestess-tarot-card-1.jpg"
      case 'ar03': return "/cards/the-empress-tarot-card.png"
      case 'ar04': return "/cards/the-emperor-tarot-card-1.jpg"
      case 'ar05': return "/cards/the-hierophant-tarot-card.jpg"
      case 'ar06': return "/cards/the-lovers-upright-position.jpg"
      case 'ar07': return "/cards/the-chariot-tarot-card.jpg"
      case 'ar08': return "/cards/the-strength-tarot-card.jpg"
      case 'ar09': return "/cards/the-hermit-tarot-card.jpg"
      case 'ar10': return "/cards/the-wheel-of-fortune-tarot-card.jpg"
      case 'ar11': return "/cards/the-justice-tarot-card-1.jpg"
      case 'ar12': return "/cards/the-hanged-man-tarot-card.jpg"
      case 'ar13': return "/cards/the-death-tarot-card.jpg"
      case 'ar14': return "/cards/the-temperance-tarot-card.jpg"
      case 'ar15': return "/cards/the-devil-tarot-card.jpg"
      case 'ar16': return "/cards/the-tower-tarot-card.jpg"
      case 'ar17': return "/cards/the-star-tarot-card.jpg"
      case 'ar18': return "/cards/the-moon-tarot-card.jpg"
      case 'ar19': return "/cards/the-sun-tarot-card.jpg"
      case 'ar20': return "/cards/the-judgement-tarot-card.jpg"
      case 'ar00': return "/cards/the-fool-tarot-card.jpg"
      case 'ar21': return "/cards/the-world-tarot-card.jpg"
      case 'wapa': return "/cards/Wands11.jpg"
      case 'wakn': return "/cards/Wands12.jpg"
      case 'waqu': return "/cards/Wands13.jpg"
      case 'waki': return "/cards/Wands14.jpg"
      case 'waac': return "/cards/Wands01.jpg"
      case 'wa02': return "/cards/Wands02.jpg"
      case 'wa03': return "/cards/Wands03.jpg"
      case 'wa04': return "/cards/Wands04.jpg"
      case 'wa05': return "/cards/Wands05.jpg"
      case 'wa06': return "/cards/Wands06.jpg"
      case 'wa07': return "/cards/Wands07.jpg"
      case 'wa08': return "/cards/Wands08.jpg"
      case 'wa09': return "/cards/Wands09.jpg"
      case 'wa10': return "/cards/Wands10.jpg"
      case 'cupa': return "/cards/Cups11.jpg"
      case 'cukn': return "/cards/Cups12.jpg"
      case 'cuqu': return "/cards/Cups13.jpg"
      case 'cuki': return "/cards/Cups14.jpg"
      case 'cuac': return "/cards/Cups01.jpg"
      case 'cu02': return "/cards/Cups02.jpg"
      case 'cu03': return "/cards/Cups03.jpg"
      case 'cu04': return "/cards/Cups04.jpg"
      case 'cu05': return "/cards/Cups05.jpg"
      case 'cu06': return "/cards/Cups06.jpg"
      case 'cu07': return "/cards/Cups07.jpg"
      case 'cu08': return "/cards/Cups08.jpg"
      case 'cu09': return "/cards/Cups09.jpg"
      case 'cu10': return "/cards/Cups10.jpg"
      case 'pepa': return "/cards/Pents11.jpg"
      case 'pekn': return "/cards/Pents12.jpg"
      case 'pequ': return "/cards/Pents13.jpg"
      case 'peki': return "/cards/Pents14.jpg"
      case 'peac': return "/cards/Pents01.jpg"
      case 'pe02': return "/cards/Pents02.jpg"
      case 'pe03': return "/cards/Pents03.jpg"
      case 'pe04': return "/cards/Pents04.jpg"
      case 'pe05': return "/cards/Pents05.jpg"
      case 'pe06': return "/cards/Pents06.jpg"
      case 'pe07': return "/cards/Pents07.jpg"
      case 'pe08': return "/cards/Pents08.jpg"
      case 'pe09': return "/cards/Pents09.jpg"
      case 'pe10': return "/cards/Pents10.jpg"
      case 'swpa': return "/cards/Swords11.jpg"
      case 'swkn': return "/cards/Swords12.jpg"
      case 'swqu': return "/cards/Swords13.jpg"
      case 'swki': return "/cards/Swords14.jpg"
      case 'swac': return "/cards/Swords01.jpg"
      case 'sw02': return "/cards/Swords02.jpg"
      case 'sw03': return "/cards/Swords03.jpg"
      case 'sw04': return "/cards/Swords04.jpg"
      case 'sw05': return "/cards/Swords05.jpg"
      case 'sw06': return "/cards/Swords06.jpg"
      case 'sw07': return "/cards/Swords07.jpg"
      case 'sw08': return "/cards/Swords08.jpg"
      case 'sw09': return "/cards/Swords09.jpg"
      case 'sw10': return "/cards/Swords10.jpg"
  }

  return null
}

export const getCardDetail = (nameShort: string): string | null => {
  switch(nameShort){
    case 'ar01': return "innocence, new beginnings, free spirit"
      case 'ar02': return "intuitive, unconscious, inner voice"
      case 'ar03': return "motherhood, fertility, nature"
      case 'ar04': return "authority, structure, control, fatherhood"
      case 'ar05': return "tradition, conformity, morality, ethics"
      case 'ar06': return "partnerships, duality, union"
      case 'ar07': return "direction, control, willpower"
      case 'ar08': return "inner strength, bravery, compassion, focus"
      case 'ar09': return "contemplation, search for truth, inner guidance"
      case 'ar10': return "change, cycles, inevitable fate"
      case 'ar11': return "cause and effect, clarity, truth"
      case 'ar12': return "sacrifice, release, martyrdom"
      case 'ar13': return "end of cycle, beginnings, change, metamorphosis"
      case 'ar14': return "middle path, patience, finding meaning"
      case 'ar15': return "addiction, materialism, playfulness"
      case 'ar16': return "sudden upheaval, broken pride, disaster"
      case 'ar17': return "hope, faith, rejuvenation"
      case 'ar18': return "unconscious, illusions, intuition"
      case 'ar19': return "joy, success, celebration, positivity"
      case 'ar20': return "reflection, reckoning, awakening"
      case 'ar00': return "innocence, new beginnings, free spirit"
      case 'ar21': return "fulfillment, harmony, completion Reversed: incompletion, no closure"
      case 'wapa': return "exploration, excitement, freedom"
      case 'wakn': return "action, adventure, fearlessness"
      case 'waqu': return "courage, determination, joy"
      case 'waki': return "big picture, leader, overcoming challenges"
      case 'waac': return "creation, willpower, inspiration, desire"
      case 'wa02': return "planning, making decisions, leaving home"
      case 'wa03': return "looking ahead, expansion, rapid growth"
      case 'wa04': return "community, home, celebration"
      case 'wa05': return "competition, rivalry, conflict"
      case 'wa06': return "victory, success, public reward"
      case 'wa07': return "perseverance, defensive, maintaining control"
      case 'wa08': return "rapid action, movement, quick decisions"
      case 'wa09': return "resilience, grit, last stand"
      case 'wa10': return "accomplishment, responsibility, burden"
      case 'cupa': return "happy surprise, dreamer, sensitivity"
      case 'cukn': return "following the heart, idealist, romantic"
      case 'cuqu': return "compassion, calm, comfort"
      case 'cuki': return "following the heart, idealist, romantic"
      case 'cuac': return "new feelings, spirituality, intuition"
      case 'cu02': return "unity, partnership, connection"
      case 'cu03': return "friendship, community, happiness"
      case 'cu04': return "apathy, contemplation, disconnectedness"
      case 'cu05': return "loss, grief, self-pity"
      case 'cu06': return "familiarity, happy memories, healing"
      case 'cu07': return "searching for purpose, choices, daydreaming"
      case 'cu08': return "walking away, disillusionment, leaving behind"
      case 'cu09': return "satisfaction, emotional stability, luxury"
      case 'cu10': return "inner happiness, fulfillment, dreams coming true"
      case 'pepa': return "ambition, desire, diligence"
      case 'pekn': return "efficiency, hard work, responsibility"
      case 'pequ': return "practicality, creature comforts, financial security"
      case 'peki': return "efficiency, hard work, responsibility"
      case 'peac': return "opportunity, prosperity, new venture"
      case 'pe02': return "balancing decisions, priorities, adapting to change"
      case 'pe03': return "teamwork, collaboration, building"
      case 'pe04': return "conservation, frugality, security"
      case 'pe05': return "need, poverty, insecurity"
      case 'pe06': return "charity, generosity, sharing"
      case 'pe07': return "hard work, perseverance, diligence"
      case 'pe08': return "apprenticeship, passion, high standards"
      case 'pe09': return "fruits of labor, rewards, luxury"
      case 'pe10': return " legacy, culmination, inheritance"
      case 'swpa': return "curiosity, restlessness, mental energy"
      case 'swkn': return "action, impulsiveness, defending beliefs"
      case 'swqu': return "complexity, perceptiveness, clear mindedness"
      case 'swki': return "head over heart, discipline, truth"
      case 'swac': return "breakthrough, clarity, sharp mind"
      case 'sw02': return "difficult choices, indecision, stalemate"
      case 'sw03': return "heartbreak, suffering, grief"
      case 'sw04': return "rest, restoration, contemplation"
      case 'sw05': return "unbridled ambition, win at all costs, sneakiness"
      case 'sw06': return "transition, leaving behind, moving on"
      case 'sw07': return "deception, trickery, tactics and strategy"
      case 'sw08': return "imprisonment, entrapment, self-victimization"
      case 'sw09': return "anxiety, hopelessness, trauma"
      case 'sw10': return "failure, collapse, defeat"
  }
  return null
}




















