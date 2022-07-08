function tax(tax)
{
    if(tax<250000)
    {
        return 'no tax'
    }
    else if(tax>=250000&&tax<=500000)
    {
         return tax*10/(100)
    }
    else if (tax>500000&&tax<1000000) 
    {
        return (tax*20)/100;
       
    } 
    else if (tax>1000000) 
    {
        return (tax*30)/100
    }
}

module.exports=tax;