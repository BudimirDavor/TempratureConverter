
const placeholder = [
    'celcius',
    'Kelvin',
    'Faraheint'
]

function celcius_(z, x, y)
{
    x.value = (parseInt(z.value)+ 273.15);
    y.value = (z.value * 9/5)+32
}

function kelvin_(z,x,y)
{
    z.value = x.value - 273.15;
    y.value = (z.value - 273.15)*9/5 + 32;
}

function faraheint_(z,x,y)
{
   z.value =(y.value - 32)*5/9;
   x.value = (y.value - 32)*5/9 + 273.15;
}

function load(){
    var input = document.getElementsByTagName('input');
    var btn = document.getElementsByTagName('button')[0];
    btn.innerHTML = 'Reset';
	
    for(let i=0; i<input.length; i++)
    {
        input[i].placeholder = placeholder [i];
        input[i].type = 'number';
        btn.onclick = () => 
        {
            input[1].value = '';
            input[2].value ='';
            input[0].value='';
        }
    }
    input[0].oninput = () => 
    {
        celcius_(input[0], input[1], input[2])
    }; 
    input[1].oninput = () => 
    {
        kelvin_(input[0], input[1], input[2])
    };
    input[2].oninput = () => 
    {
        faraheint_(input[0], input[1], input[2])
    };
}

onload = load;