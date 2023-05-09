export const getBgTypesColor = (type: string) => {
    return (
        type === 'normal' ? '#E7E5E5' :
        type === 'fighting' ? '#E5B6B6' :
        type === 'flying' ? '#B6DCE5' :
        type === 'poison' ? '#CEB6E5' :
        type === 'ground' ? '#E5D2B6' :
        type === 'rock' ? '#A29A8E' :
        type === 'bug' ? '#E7EFC9' :
        type === 'ghost' ? ' #C5BECA' :
        type === 'steel' ? '#CCD1D1' :
        type === 'fire' ? '#FADACD' :
        type === 'water' ? '#C9EEEF' :
        type === 'grass' ? '#D2EFC9' :
        type === 'electric' ? '#FDFAB1' :
        type === 'psychic' ? '#B4B0C8' :
        type === 'ice' ? '#C4E6FC' :
        type === 'dragon' ? '#C1BCBA' :
        type === 'dark' ? '#B4B4B4' :
        type === 'fairy' ? '#E8C1DC' :
        type === 'shadow' ? '#C7C7C7' : '#919191'
    );
}