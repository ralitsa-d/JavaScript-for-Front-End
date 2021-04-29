function setValues(values)
{
    let result = [];
    console.dir(result);
    let n = values[0];
    console.dir(n);
    for(let i=1; i<n+1; n++)
    {
        let newarr = values[i].split('-');
        console.dir(newarr);
        let index = newarr[0];
        result[index] = newarr[1];
    }
    for(let i=0; i<n; i++)
    {
        console.log(result[i]);
    }
}
//setValues([3, 0-1, 1-4, 2-12]);