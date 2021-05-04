$(document).ready(function() {
    for(let i=1; i<=151; i++)
    {
        $('div').http('<img src=raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/', i, '.png>')
    }
});